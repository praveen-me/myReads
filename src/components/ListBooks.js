import React, { Component } from 'react';
import Shelf from './Shelf';

class ListBooks extends Component {
  render() {
    const {bookList, handleUpdate} = this.props;

    const currentlyReadingArray = bookList.filter(book => book.shelf === 'currentlyReading');
    
    const wantToReadArray = bookList.filter(book => book.shelf === 'wantToRead');

    const readArray = bookList.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            <div>
              <Shelf 
              books={currentlyReadingArray} 
              shelfTitle="Currently Reading"
              handleUpdate={handleUpdate}/>
              <Shelf 
              books={wantToReadArray}
              shelfTitle="Want To Read"
              handleUpdate={handleUpdate}/> 
              <Shelf
              books={readArray}
              shelfTitle="Read"
              handleUpdate={handleUpdate}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={this.props.onClick}>Add a book</a>
          </div>
        </div>
    );
  }
}

export default ListBooks;