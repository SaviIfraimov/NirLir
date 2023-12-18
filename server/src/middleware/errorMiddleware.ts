// import { Request, Response, NextFunction } from 'express';
// import winston from 'winston';

// export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
//     const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
//     res.status(statusCode);

//     winston.error(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

//     res.json({
//         message: err.message,
//         // Stack trace should not be returned in production for security reasons
//         stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//     });
// };
