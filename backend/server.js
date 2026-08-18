require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/athleteguard';

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AthleteGuard backend running' });
});

// TODO: mount routes here, e.g.
// app.use('/api/sessions', require('./routes/sessions'));

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    // Still start the server so frontend devs aren't blocked without Mongo running
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB connection)`));
  });
