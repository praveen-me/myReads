import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BookAPI from './../BooksAPI';
import BookCard from './BookCard';
import Loader from './Loader';
import terms from './searchedTerms';
class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedBooks : [],
      query : ''
    }
  }

  handleChange = e => {
    const query = e.target.value;
    this.setState({
      isLoading : true
    });
    if(!query) { 
      this.setState({
        searchedBooks : []
      })
    } else {
      terms.forEach(term => {
        if(query === term.toLowerCase()) {
          BookAPI.search(query)
          .then(data => this.setState({
            searchedBooks : data,
            isLoading : false
          }))
        } else {
          this.setState({
            searchedBooks : []
          })
        }
      })
    }
  }

  render() {
    const {searchedBooks, isLoading} = this.state;
    console.log(searchedBooks);
    let display;
    if(searchedBooks.length === 0) {
      display = <li className="empty-info-msg">Please enter book name.</li>;
    } else {
      display = isLoading ? <Loader /> : 
        searchedBooks.map((book,i) => <BookCard 
        book={book} 
        key={i}
        handleUpdate={this.props.handleUpdate}/>)
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <form className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
          </form>
        </div>
        <div className="search-book   s-results">
          <ol className="books-grid">
            {
              display
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;