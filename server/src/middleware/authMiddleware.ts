// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// export const authenticate = (req: Request, res: Response, next: NextFunction) => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];
//         jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
//             if (err) {
//                 return res.status(403).json({ message: 'Invalid token' });
//             }
//             req.user = user; // Add the user to the request object
//             next();
//         });
//     } else {
//         res.status(401).json({ message: 'Authentication token required' });
//     }
// };