import { useEffect, useState } from'react';
import { BookPreview } from './BookPreview/BookPreview';
import { getBooks } from './utils';
import { AppHeader, AppContainer, BooksContainer } from './App.style';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
            .then(data => {
                setBooks(data)
            })
    }, []);

  return (
    <div className="App">
      <AppHeader>
        Book Store
      </AppHeader>
      <AppContainer>
        <BooksContainer>
          All Books:
          {books?.map((book) => (<BookPreview book={book}/>))}
        </BooksContainer>
        <BooksContainer>
          My Catalog:

        </BooksContainer>
      </AppContainer>
    </div>
  );
}

export default App;
