import React from 'react';
import BookCard from './BookCard';

function Shelf(props) {
  const {books, shelfTitle, handleUpdate} = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map(book => <BookCard 
              book={book} 
              key={book.title}
              handleUpdate={handleUpdate}/>)
          }
        </ol>
      </div>
    </div>
  );
}

export default Shelf;