import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BookAPI from './../BooksAPI';
import BookCard from './BookCard'

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedBooks : [],
      query : ''
    }
  }

  handleChange = e => {
    this.setState({
      query : e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {query} = this.state;
    this.setState({
      isLoading : true
    });
    BookAPI.search(query).then(data => this.setState({
      searchedBooks : data,
      isLoading : false
    }));
  }

  render() {
    const {query, searchedBooks, isLoading} = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <form className="search-books-input-wrapper" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={query}/>
          </form>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              isLoading ? <p>Loading...</p> : searchedBooks.map(book => <BookCard 
                book={book} 
                key={book.title}/>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;