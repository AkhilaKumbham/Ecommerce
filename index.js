const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String // for now (or validate before saving)
  });
  

// Model
const User = mongoose.model('register', userSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the MongoDB-Express App!');
});

// POST with password and confirm password check
app.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).send({ error: 'Passwords do not match' });
  }

  try {
    const user = new User({ name, email, password }); // Only save necessary fields
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET registered users
app.get('/register', async (req, res) => {
  try {
    const register = await User.find();
    res.send(register);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
