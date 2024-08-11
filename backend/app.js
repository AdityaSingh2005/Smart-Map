const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Set up API routes for pathfinding
app.get('/api/find-path', (req, res) => {
  // Call your C++ A* algorithm implementation here
  // and return the result as JSON
});

app.listen(3001, () => {
  console.log('Backend server running on port 3001');
});