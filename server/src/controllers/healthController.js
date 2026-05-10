export function getHealth(req, res) {
  res.json({
    ok: true,
    service: 'neon-sign-api',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
