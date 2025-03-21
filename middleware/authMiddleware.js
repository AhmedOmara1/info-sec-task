const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  try {
    // Extract and validate Authorization header
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({ message: 'Token is missing or improperly formatted' });
    }

    const token = authHeader.split(' ')[1]; // Extract the actual token

    // Verify the token using JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        const errorMessage = err.name === 'TokenExpiredError' 
          ? 'Token has expired' 
          : 'Invalid token';
        return res.status(401).json({ message: errorMessage });
      }
      
      req.user = decoded; // Store decoded data in the request object
      next();
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = authMiddleware;
