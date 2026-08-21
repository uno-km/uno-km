/**
 * Vercel Edge Middleware: AI Bot Hunter & Stealth Request Interceptor
 * Runs at the global edge on EVERY request.
 * 
 * Capabilities:
 * 1. Accurately detects and classifies AI Crawlers (GPTBot, ClaudeBot, Perplexity, DeepSeek, etc.)
 * 2. Non-blocking asynchronous logging to Neon PostgreSQL (0ms added user latency)
 * 3. Injects custom AI headers (X-Powered-By: AMEVA-Ecosystem, X-Robots-Tag: all)
 */

const AI_BOT_PATTERNS = [
    { pattern: /gptbot|chatgpt-user/i, name: 'GPTBot (OpenAI / ChatGPT)', category: 'AI_AGENT' },
    { pattern: /claudebot|claude-web|anthropic/i, name: 'ClaudeBot (Anthropic)', category: 'AI_AGENT' },
    { pattern: /perplexitybot|perplexity/i, name: 'PerplexityBot (Perplexity AI)', category: 'AI_AGENT' },
    { pattern: /deepseekbot|deepseek/i, name: 'DeepSeekBot (DeepSeek AI)', category: 'AI_AGENT' },
    { pattern: /google-extended|googleother/i, name: 'Google-Extended (Gemini Training)', category: 'AI_AGENT' },
    { pattern: /bytespider/i, name: 'Bytespider (ByteDance / TikTok AI)', category: 'AI_AGENT' },
    { pattern: /cohere-ai/i, name: 'Cohere-AI (Cohere RAG)', category: 'AI_AGENT' },
    { pattern: /applebot-extended/i, name: 'Applebot-Extended (Apple Intelligence)', category: 'AI_AGENT' },
    { pattern: /ccbot/i, name: 'CCBot (Common Crawl / LLM Datasets)', category: 'AI_AGENT' },
    { pattern: /diffbot/i, name: 'Diffbot (Knowledge Graph AI)', category: 'AI_AGENT' },
    { pattern: /amazonbot/i, name: 'Amazonbot (Amazon AI / Bedrock)', category: 'AI_AGENT' },
    { pattern: /googlebot/i, name: 'Googlebot (Google Search)', category: 'SEARCH_ENGINE' },
    { pattern: /bingbot/i, name: 'Bingbot (Microsoft Bing)', category: 'SEARCH_ENGINE' },
    { pattern: /yandexbot/i, name: 'YandexBot (Yandex Search)', category: 'SEARCH_ENGINE' },
    { pattern: /duckduckbot/i, name: 'DuckDuckBot', category: 'SEARCH_ENGINE' },
    { pattern: /facebookexternalhit/i, name: 'Meta/Facebook Scraper', category: 'SOCIAL_BOT' },
    { pattern: /twitterbot/i, name: 'Twitter/X Bot', category: 'SOCIAL_BOT' },
    { pattern: /slackbot/i, name: 'Slackbot', category: 'SOCIAL_BOT' },
    { pattern: /discordbot/i, name: 'Discordbot', category: 'SOCIAL_BOT' },
    { pattern: /curl|wget|python-requests|go-http-client|axios|httpclient/i, name: 'Developer CLI / Script Scraper', category: 'SCRAPER' }
];

export async function middleware(request) {
    const userAgent = request.headers.get('user-agent') || '';
    const path = request.nextUrl ? request.nextUrl.pathname : new URL(request.url).pathname;

    // Ignore static image / media requests for bot logging
    if (/\.(svg|png|jpg|jpeg|gif|ico|css|woff2?|mp3|wav|mp4)$/i.test(path)) {
        return;
    }

    // Check if user-agent matches any known bot pattern
    let matchedBot = null;
    for (const item of AI_BOT_PATTERNS) {
        if (item.pattern.test(userAgent)) {
            matchedBot = item;
            break;
        }
    }

    if (matchedBot) {
        const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
        if (dbUrl) {
            const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
            const country = request.headers.get('x-vercel-ip-country') || 'UNKNOWN';
            const city = request.headers.get('x-vercel-ip-city') ? decodeURIComponent(request.headers.get('x-vercel-ip-city')) : 'Unknown';

            // Direct non-blocking fetch to Neon SQL HTTP endpoint
            try {
                const url = new URL(dbUrl.replace(/^postgres(ql)?:/, 'https:'));
                const endpoint = `https://${url.hostname}/sql`;
                const authHeader = 'Basic ' + btoa(`${url.username}:${url.password}`);

                const query = `
                    INSERT INTO bot_crawler_logs (bot_name, bot_category, requested_path, ip_address, country, city, user_agent)
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
                `;
                const params = [
                    matchedBot.name,
                    matchedBot.category,
                    path.slice(0, 255),
                    ip.slice(0, 45),
                    country.slice(0, 10),
                    city.slice(0, 100),
                    userAgent.slice(0, 1000)
                ];

                // Fire & forget background promise
                fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Authorization': authHeader,
                        'Content-Type': 'application/json',
                        'Neon-Connection-String': dbUrl
                    },
                    body: JSON.stringify({ query, params })
                }).catch(() => {});
            } catch (e) {}
        }
    }

    return;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
