import express from 'express';
import { signupUser, loginUser } from '../controllers/userController.js'; // Add .js extension

const router = express.Router();

router.post('/signup', signupUser); // Route for signup
router.post('/login', loginUser);   // Route for login

export default router;
