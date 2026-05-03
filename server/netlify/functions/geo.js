/**
 * Netlify Function: /api/geo
 * Deployed automatically by Netlify from this file path.
 * Set in netlify.toml: functions directory = "server/netlify/functions"
 */

exports.handler = async function (event, context) {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  };

  try {
    // Netlify passes client IP in this header
    const clientIP =
      event.headers['x-forwarded-for']?.split(',')[0].trim() ||
      event.headers['client-ip'];

    if (!clientIP) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ countryCode: 'DEFAULT', error: 'no_ip' }),
      };
    }

    const geoRes = await fetch(
      `http://ip-api.com/json/${clientIP}?fields=status,country,countryCode`
    );

    const data = await geoRes.json();

    if (data.status !== 'success') throw new Error('ip-api failed');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        countryCode: data.countryCode,
        country: data.country,
      }),
    };
  } catch (err) {
    console.error('[GEO Function]', err.message);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ countryCode: 'DEFAULT' }),
    };
  }
};