const express = require('express');
const { signupUser, loginUser } = require('../controllers/authController');
const { uploadAvatar } = require('../config/cloudinary');

const router = express.Router();

// Route with file upload middleware
router.post('/signup', uploadAvatar.single('avatar'), signupUser);
router.post('/login', loginUser);

module.exports = router;