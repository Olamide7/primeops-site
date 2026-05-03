/**
 * proxy.js — PrimeOps local dev server
 * Proxies geo requests to ip-api.com so API keys stay server-side
 * Run: node server/proxy.js
 */

require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const path     = require('path');

const app  = express();
const PORT = process.env.PORT || 3001;

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../public')));

// CORS — allow frontend origin only
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? 'https://yourdomain.com'
    : 'http://localhost:3001',
}));

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  next();
});

// Rate limiting (simple in-memory, use express-rate-limit for production)
const requestCounts = new Map();
app.use('/api', (req, res, next) => {
  const ip  = req.ip;
  const now = Date.now();
  const windowMs = 60_000; // 1 minute
  const maxReq   = 30;

  const record = requestCounts.get(ip) || { count: 0, start: now };
  if (now - record.start > windowMs) {
    record.count = 0;
    record.start = now;
  }
  record.count++;
  requestCounts.set(ip, record);

  if (record.count > maxReq) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  next();
});

// ===== GEO ENDPOINT =====
app.get('/api/geo', async (req, res) => {
  try {
    // Get the real client IP (behind proxy/load balancer)
    const clientIP =
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.headers['x-real-ip'] ||
      req.socket.remoteAddress;

    // Skip loopback IPs in local dev — return a test country
    const isLocalhost = ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(clientIP);
    if (isLocalhost) {
      // Change this to 'NG' to test Nigeria pricing locally
      return res.json({ countryCode: process.env.TEST_COUNTRY || 'mock', source: 'localhost-mock' });
    }

    // Fetch from ip-api.com (free, no key needed)
    const geoRes = await fetch(
      `http://ip-api.com/json/${clientIP}?fields=status,country,countryCode`,
      { signal: AbortSignal.timeout(5000) }
    );

    if (!geoRes.ok) throw new Error(`ip-api HTTP ${geoRes.status}`);

    const data = await geoRes.json();

    if (data.status !== 'success') {
      throw new Error('ip-api returned non-success: ' + JSON.stringify(data));
    }

    // Only send what the frontend needs — never expose extra data
    // return res.json({
    //   countryCode: data.countryCode,
    //   country: data.country,
    // });
    return res.json({ countryCode: 'NG', source: 'localhost-mock' });
  } catch (err) {
    console.error('[GEO] Error:', err.message);
    // Return a fallback — frontend will handle gracefully
    return res.status(200).json({ countryCode: 'DEFAULT', error: 'geo_failed' });
  }
});

// Catch-all: serve index.html for SPA routing
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`\n✅ PrimeOps dev server running at http://localhost:${PORT}`);
  console.log(`   Geo endpoint: http://localhost:${PORT}/api/geo\n`);
});