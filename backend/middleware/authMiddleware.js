const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized, Token Missing' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    next();

  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized, Invalid Token' });
  }
};

module.exports = { protect };
