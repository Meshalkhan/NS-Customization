import { AppError } from '../middleware/errorHandler.js';
import * as designQuoteService from '../services/designQuoteService.js';

export function postQuote(req, res, next) {
  try {
    const { textLength, sizeKey } = req.body || {};
    if (textLength !== undefined && (typeof textLength !== 'number' || textLength < 0)) {
      throw new AppError(400, 'VALIDATION_ERROR', 'textLength must be a non-negative number');
    }
    if (sizeKey !== undefined && typeof sizeKey !== 'string') {
      throw new AppError(400, 'VALIDATION_ERROR', 'sizeKey must be a string');
    }
    const quote = designQuoteService.estimateQuote({ textLength, sizeKey });
    res.status(200).json({ data: quote });
  } catch (e) {
    next(e);
  }
}
