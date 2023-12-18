// import User from '../models/User'; // Adjust the import as needed
// import jwt from 'jsonwebtoken';

// const generateToken = (userId: number) => {
//     return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
// };

// const login = async (username: string, password: string) => {
//     // In a real application, you'd hash the password and compare it with the hashed password in the database
//     const user = await User.findOne({ where: { username, password } });
//     if (!user) {
//         throw new Error('Invalid credentials');
//     }

//     const token = generateToken(user.id);
//     return { user, token };
// };

// export default {
//     login,
// };
