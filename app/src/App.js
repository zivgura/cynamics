import { useEffect, useState } from'react';
import { BookPreview } from './BookPreview/BookPreview';
import { getBooks, sortByTitle } from './utils';
import { AppHeader, AppContainer, EmptyCatalogTitle, BooksContainer, BookscContainerHeader } from './App.style';
import Star from './assets/star.svg';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [booksToShow, setBooksToShow] = useState([]);
  const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getBooks()
            .then(data => {
                setBooks(data);
                setBooksToShow(data);
            })
    }, []);

    function onFavoriteClick(id, isSelected) {
      if (isSelected) {
        setCatalog(catalog.filter(b => b.id!== id));
        const sorted = [...booksToShow, books.find(b => b.id === id)].sort((a, b) => sortByTitle(a,b));
        setBooksToShow(sorted)
      } else {
        const sorted = [...catalog, books.find(b => b.id === id)].sort((a, b) => sortByTitle(a,b));
        setCatalog(sorted);
        setBooksToShow(booksToShow.filter(b => b.id!== id));
      }
    }

  return (
    <div className="App">
      <AppHeader>
        Book Store
      </AppHeader>
      <AppContainer>
        <BooksContainer>
          <BookscContainerHeader>
            All Books:
          </BookscContainerHeader>
          {booksToShow?.map((book) => (<BookPreview key={book.id} book={book} onFavoriteClick={onFavoriteClick}/>))}
        </BooksContainer>
        <BooksContainer>
          <BookscContainerHeader>
            My Catalog:
          </BookscContainerHeader>
          {
            catalog?.length === 0 ?
              <BookPreview>
                <EmptyCatalogTitle>
                  <p>Your catalog is empty.</p>
                  <p>Click on a book's <img src={Star} alt='star' width={'24px'}/> to get it to your catalog</p>
                </EmptyCatalogTitle>
              </BookPreview> 
              : catalog?.map((book) => (<BookPreview key={book.id} book={book} isSelected={true} onFavoriteClick={onFavoriteClick}/>))
          }
        </BooksContainer>
      </AppContainer>
    </div>
  );
}

export default App;
