import { NextFunction, Request, Response } from 'express';

const errorhandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'TypeError') {
    res.status(400).json({ error: error.message });
    return;
  }
  next();
};

export default errorhandler;