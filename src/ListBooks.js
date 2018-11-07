import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const ListBooks = ({
  shelf, books, title, onChangeShelf,
}) => (
  <div className="list-books-content">
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              book.shelf === shelf && (
              <Book key={book.id} onChangeShelf={onChangeShelf} book={book} />
              )))}
          </ol>
        </div>
      </div>
    </div>
  </div>
);

// Add PropTypes validation
ListBooks.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ListBooks;
