// class AppError extends Error {
//     public readonly statusCode: number;
//     public readonly isOperational: boolean;

//     constructor(message: string, statusCode: number) {
//         super(message);
//         this.statusCode = statusCode;
//         this.isOperational = true;

//         Error.captureStackTrace(this, this.constructor);
//     }
// }

// export const handleError = (res: any, error: AppError) => {
//     res.status(error.statusCode).json({
//         status: 'error',
//         message: error.message,
//     });
// };

// export default AppError;


/*
In app.ts:

// Importing middleware
import { errorHandler } from './middleware/errorMiddleware';

// Error Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(`Error: ${err.message}`);
    errorHandler(err, req, res, next);
});

// Handling undefined routes
app.use((req: Request, res: Response) => {
    logger.warn(`404 - Not Found - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(404).send('Route not found');
});
*/
