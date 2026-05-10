import { Router } from 'express';
import * as healthController from '../../controllers/healthController.js';

const r = Router();

r.get('/health', healthController.getHealth);

export default r;
