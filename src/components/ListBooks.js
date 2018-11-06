import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

class ListBooks extends Component {
  render() {
    const {bookList, handleUpdate} = this.props;
    var currentlyReadingArray, wantToReadArray, readArray;
    if(typeof bookList !== null) {
      currentlyReadingArray = bookList.filter(book => book.shelf === 'currentlyReading');
      
      wantToReadArray = bookList.filter(book => book.shelf === 'wantToRead');

      readArray = bookList.filter(book => book.shelf === 'read');
    }
    console.log(this.props.bookList);

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
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    );
  }
}

export default ListBooks;