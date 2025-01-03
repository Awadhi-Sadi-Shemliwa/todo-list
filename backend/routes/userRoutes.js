const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupUser); // Route for signup
router.post('/login', loginUser);   // Route for login

module.exports = router;
