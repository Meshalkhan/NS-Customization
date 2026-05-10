import { env } from '../config/env.js';

export class AppError extends Error {
  constructor(statusCode, code, message, details) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    next(err);
    return;
  }

  const statusCode = err.statusCode && Number.isInteger(err.statusCode) ? err.statusCode : 500;
  const code = err.code || 'INTERNAL_ERROR';
  const message =
    statusCode === 500 && !env.isProd ? err.message || 'Internal server error' : mapPublicMessage(statusCode, err);

  const body = {
    error: {
      code,
      message,
      ...(env.isProd ? {} : { stack: err.stack }),
      ...(err.details ? { details: err.details } : {}),
    },
  };

  res.status(statusCode).json(body);
}

function mapPublicMessage(statusCode, err) {
  if (statusCode >= 400 && statusCode < 500 && err.message) {
    return err.message;
  }
  if (statusCode === 500) {
    return 'Internal server error';
  }
  return err.message || 'Request failed';
}
