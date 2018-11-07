import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    const {book, handleUpdate} = this.props;
    let thumbnail;
    if(book.imageLinks === undefined) {
      thumbnail = '';
    } else {
      thumbnail = <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
    }
    return (
      <li>
        <div className="book">  
          <div className="book-top">
            {
              thumbnail
            }
            <div className="book-shelf-changer">
              <select onClick={(e) => handleUpdate(e, book)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors[0] : ''}</div>
        </div>
      </li>
    );
  }
}

export default BookCard;