
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const helloRoutes = require('./routes/hello');

// Use routes
app.use('/api', helloRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Express API!');
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
