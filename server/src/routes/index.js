import { Router } from 'express';
import healthRoutes from './v1/health.routes.js';
import designRoutes from './v1/design.routes.js';

const api = Router();

api.use('/v1', healthRoutes);
api.use('/v1', designRoutes);

export default api;
