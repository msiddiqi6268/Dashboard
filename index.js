const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT environment variable or default to 3000.

// Serve the static React build files
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'dist')));
// Handle any requests that don't match the static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
