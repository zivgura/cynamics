const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');

app.use(express.static(path.join(__dirname, '../app/build')));

// Get all books
app.get('/api/books', (req, res) => {
  res.json(db);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/build', 'index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
