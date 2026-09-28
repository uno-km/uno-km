// api/sentinel_trap.js - AMEVA Sentinel Canary Honeypot Decoy Trap
export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || 'Unknown Crawler';
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || '127.0.0.1';
  const country = req.headers['x-vercel-ip-country'] || 'GLOBAL';
  const city = req.headers['x-vercel-ip-city'] ? decodeURIComponent(req.headers['x-vercel-ip-city']) : 'Edge';

  // 1. Log to DB telemetry if DB configured
  const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || process.env.POSTGRES_URL;
  if (dbUrl) {
    try {
      const { neon } = await import('@neondatabase/serverless');
      const sql = neon(dbUrl);
      await sql`
        INSERT INTO bot_crawler_logs (bot_name, bot_category, requested_path, ip_address, country, city, user_agent)
        VALUES (${'[HONEYPOT_TRAP] ' + userAgent.slice(0, 80)}, 'HONEYPOT_CANARY_TRIPPED', '/api/sentinel/trap', ${ip.slice(0, 45)}, ${country.slice(0, 10)}, ${city.slice(0, 100)}, ${userAgent.slice(0, 1000)})
      `.catch(() => {});
    } catch (e) {}
  }

  // 2. Set Sentinel active defense response headers
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('X-Sentinel-Trap', 'HONEYPOT_CANARY_TRIPPED');
  res.setHeader('X-Robots-Tag', 'noai, noimageai, noindex, nofollow, noarchive');
  res.setHeader('Cache-Control', 'no-store, private');

  // 3. Return HTTP 403 Forbidden with Sentinel Trap Alert
  return res.status(403).send(`[AMEVA-SENTINEL CANARY HONEYPOT TRAP ACTIVATED]
SECURITY ALERT: You have touched a hidden decoy honeypot trap intended exclusively for automated scrapers.
Client IP: ${ip} | User-Agent: ${userAgent} | Timestamp: ${new Date().toISOString()}
Status: Fingerprinted and logged to Sentinel Threat Intelligence Database.
Direct harvesting of AMEVA research is strictly prohibited under AOSF-RFC-001.`);
}
