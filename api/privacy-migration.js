/**
 * ONE-TIME Privacy Remediation Migration
 * Route: /api/privacy-migration
 * 
 * IMPORTANT: This endpoint must be REMOVED after successful execution.
 * Protected by a one-time migration key to prevent unauthorized access.
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch(e) { body = {}; }
  }
  body = body || {};

  if (body.migration_key !== 'sentinel-privacy-1-2026-08-24') {
    return res.status(403).json({ error: 'Invalid migration key' });
  }

  const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;
  if (!dbUrl) {
    return res.status(500).json({ error: 'No DATABASE_URL configured' });
  }

  try {
    const neonModule = await import('@neondatabase/serverless');
    const sql = neonModule.neon(dbUrl);

    const results = {};

    // Step 1: Schema check
    const schema = await sql`
      SELECT table_name, column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name IN ('visitor_sessions', 'click_events', 'sentinel_risk_events')
      ORDER BY table_name, ordinal_position;
    `;
    results.schema = schema.map(r => r.table_name + '.' + r.column_name + ' (' + r.data_type + ')');

    // Step 2: Pre-count
    const preCountVisitors = await sql`
      SELECT
        COUNT(*) AS total_rows,
        COUNT(*) FILTER (WHERE ip_address IS NOT NULL) AS rows_with_ip,
        COUNT(*) FILTER (WHERE latitude IS NOT NULL OR longitude IS NOT NULL) AS rows_with_coords
      FROM visitor_sessions;
    `;
    results.pre_count_visitors = preCountVisitors[0];

    const clickSchema = schema.filter(r => r.table_name === 'click_events');
    const hasTargetText = clickSchema.some(r => r.column_name === 'target_text');
    
    if (hasTargetText) {
      const preCountClicks = await sql`
        SELECT
          COUNT(*) AS total_rows,
          COUNT(*) FILTER (WHERE target_text IS NOT NULL) AS rows_with_target_text
        FROM click_events;
      `;
      results.pre_count_clicks = preCountClicks[0];
    }

    // Step 3: Create audit table
    await sql`
      CREATE TABLE IF NOT EXISTS privacy_remediation_audit (
        audit_id BIGSERIAL PRIMARY KEY,
        migration_id VARCHAR(100) NOT NULL UNIQUE,
        executed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        affected_rows BIGINT NOT NULL,
        operation VARCHAR(200) NOT NULL,
        policy_version VARCHAR(50) NOT NULL,
        executed_by VARCHAR(100)
      );
    `;
    results.audit_table = 'created_or_exists';

    // Step 4: Sanitize visitor_sessions
    const sanitizedSessions = await sql`
      WITH sanitized AS (
        UPDATE visitor_sessions
        SET ip_address = NULL, latitude = NULL, longitude = NULL
        WHERE ip_address IS NOT NULL OR latitude IS NOT NULL OR longitude IS NOT NULL
        RETURNING 1
      )
      SELECT COUNT(*) AS affected FROM sanitized;
    `;
    const sessionsAffected = parseInt(sanitizedSessions[0]?.affected || '0', 10);
    results.sessions_sanitized = sessionsAffected;

    await sql`
      INSERT INTO privacy_remediation_audit (
        migration_id, affected_rows, operation, policy_version, executed_by
      ) VALUES (
        'priv-2026-08-24-visitor-sessions-v1',
        ${sessionsAffected},
        'NULL raw IP and coordinates in visitor_sessions',
        'sentinel-privacy-1',
        'api-migration-agent'
      )
      ON CONFLICT (migration_id) DO NOTHING;
    `;

    // Step 5: Sanitize click_events
    if (hasTargetText) {
      const sanitizedClicks = await sql`
        WITH sanitized AS (
          UPDATE click_events SET target_text = NULL WHERE target_text IS NOT NULL RETURNING 1
        )
        SELECT COUNT(*) AS affected FROM sanitized;
      `;
      const clicksAffected = parseInt(sanitizedClicks[0]?.affected || '0', 10);
      results.clicks_sanitized = clicksAffected;

      await sql`
        INSERT INTO privacy_remediation_audit (
          migration_id, affected_rows, operation, policy_version, executed_by
        ) VALUES (
          'priv-2026-08-24-click-events-v1',
          ${clicksAffected},
          'NULL target_text in click_events',
          'sentinel-privacy-1',
          'api-migration-agent'
        )
        ON CONFLICT (migration_id) DO NOTHING;
      `;
    }

    // Step 6: target_type CHECK constraint
    try {
      await sql`ALTER TABLE click_events DROP CONSTRAINT IF EXISTS click_events_target_type_check;`;
      await sql`
        ALTER TABLE click_events ADD CONSTRAINT click_events_target_type_check
        CHECK (target_type IS NULL OR target_type IN ('BUTTON','LINK','CODE','INPUT','NAVIGATION','OTHER'));
      `;
      results.target_type_constraint = 'added';
    } catch(e) {
      results.target_type_constraint = 'failed: ' + e.message;
    }

    // Step 7: Post-verification
    const postV = await sql`
      SELECT
        COUNT(*) FILTER (WHERE ip_address IS NOT NULL) AS remaining_ip,
        COUNT(*) FILTER (WHERE latitude IS NOT NULL OR longitude IS NOT NULL) AS remaining_coords
      FROM visitor_sessions;
    `;
    results.post_visitors = postV[0];

    if (hasTargetText) {
      const postC = await sql`
        SELECT
          COUNT(*) FILTER (WHERE target_text IS NOT NULL) AS remaining_target_text,
          COUNT(*) FILTER (WHERE target_type IS NOT NULL) AS rows_with_target_type
        FROM click_events;
      `;
      results.post_clicks = postC[0];
    }

    // Step 8: JSONB verification
    try {
      const jb = await sql`
        SELECT
          COUNT(*) AS populated_rows,
          COUNT(*) FILTER (WHERE jsonb_typeof(evidence_codes) = 'array') AS array_rows,
          COUNT(*) FILTER (WHERE jsonb_typeof(evidence_codes) = 'string') AS string_rows
        FROM sentinel_risk_events WHERE evidence_codes IS NOT NULL;
      `;
      results.jsonb_verification = jb[0];
    } catch(e) {
      results.jsonb_verification = 'not populated yet: ' + e.message;
    }

    // Step 9: Audit log
    const al = await sql`
      SELECT migration_id, executed_at, affected_rows, operation, policy_version
      FROM privacy_remediation_audit ORDER BY executed_at DESC;
    `;
    results.audit_log = al;

    return res.status(200).json({ success: true, message: 'Privacy remediation complete. DELETE THIS FILE.', results });

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message, stack: err.stack?.split('\n').slice(0,5) });
  }
}
