import dotenv from 'dotenv';

dotenv.config();

const nodeEnv = process.env.NODE_ENV || 'development';
const vercelOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;

export const env = {
  nodeEnv,
  isProd: nodeEnv === 'production' || Boolean(process.env.VERCEL),
  port: Number(process.env.PORT) || 4000,
  corsOrigin: process.env.CORS_ORIGIN || vercelOrigin || 'http://localhost:3000',
  trustProxy: process.env.TRUST_PROXY === 'true' || Boolean(process.env.VERCEL),
};
