export const getSecurityHeaders = () => ({
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; object-src 'none';",
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
});
