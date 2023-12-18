import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Importing utilities
// logger
const logger = console; // require('./utils/logger');
// Validate environment variables
// const { validateEnv } = require('./utils/envValidation');
// validateEnv();

// Importing routes
// import authRoutes from './routes/authRoutes';
import customerRoutes from './routes/customerRoutes';
import orderRoutes from './routes/orderRoutes';

// Creating an Express application
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes); 
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

// Using logger for request logging
app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`Incoming request: ${req.method} ${req.url}`);
    next();
});

export default app;
