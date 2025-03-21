const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Token test route
app.get('/test-token', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Token is valid', user: req.user });
});

sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Database connection error:', err));

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
