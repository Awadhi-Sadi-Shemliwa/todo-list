import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Add .js extension

// Sign up new user
export const signupUser = async (req, res) => {
    const { name, email, password } = req.body; // Destructure data from the request body
  
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists!' });
    }
  
    try {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance
      const newUser = new User({ name, email, password: hashedPassword });
  
      // Save the new user to the database
      await newUser.save();
      res.status(201).json({ message: 'Sign up successful, please login!' });
    } catch (error) {
      console.error('Error during user signup:', error); // Improved error logging
      res.status(500).json({ message: 'Error signing up user, please try again!' });
    }
};

// Log in user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1h' });
      
      // Send success response with token
      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
