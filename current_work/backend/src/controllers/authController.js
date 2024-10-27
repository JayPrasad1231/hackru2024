// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js'; // Ensure you use the .js extension
// import { JWT_SECRET } from '../config.js'; // Ensure you use the .js extension

// // Register a new user
// export const register = async (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const user = await User.create({ email, password: hashedPassword });
//     res.status(201).json({ message: 'User created', user });
//   } catch (error) {
//     res.status(400).json({ error: 'Email already in use' });
//   }
// };

// // Login user
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// };
