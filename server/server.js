const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '/app/build')));
app.use(bodyParser.json());

const books = [
  {
    id: 1,
    title: '1984',
    description: 'A dystopian novel set in a totalitarian society.',
    author: 'George Orwell',
    publicationDate: '1949-06-08',
    genre: 'Science fiction',
    price: 15.99
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    description: 'A novel about the serious issues of rape and racial inequality.',
    author: 'Harper Lee',
    publicationDate: '1960-07-11',
    genre: 'Drama',
    price: 10.99
  }
];

let catalog = [];

// Get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Get a single book by ID
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Add a book to catalog
app.post('/api/catalog/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  catalog.push(book);
  res.status(201).json(book);
});

// Delete a book from catalog
app.delete('/api/catalog/:id', (req, res) => {
  const bookIndex = catalog.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex !== -1) {
    catalog.splice(bookIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
