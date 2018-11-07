import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  book, onChangeShelf,
}) => (
  <li key={book.id}>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail : ''})` }} />
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={(event) => { onChangeShelf(book, event.target.value); }}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">
              Want to Read
            </option>
            <option value="read">
              Read
            </option>
            <option value="none">
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">
        { book.title }
      </div>
      <div className="book-authors">
        { book.authors }
      </div>
    </div>
  </li>
);

// Add PropTypes validation
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
