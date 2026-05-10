import { Router } from 'express';
import * as designController from '../../controllers/designController.js';

const r = Router();

r.post('/design/quote', designController.postQuote);

export default r;
