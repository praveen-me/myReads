import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

/**
 * React component for search page
 *
 * @class SearchBooks
 * @constructor
 */
class SearchBooks extends React.Component {
  // Add PropTypes validation
  static propTypes = {
    mainPageBooks: PropTypes.instanceOf(Array).isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };

  // Add state as class property outside contructor
  state = {
    showBooks: [],
    query: '',
    resultsNotAvailable: false,
  };

  /**
   * This method updates the query property of the component's state
   * and it also makes an API request to get the searched
   * books data and update the showBooks property of the state
   *
   * @method updateQuery
   * @param {string} query- search query string
   * @return : none
   */
  updateQuery = (query) => {
    // get the book lists from main page
    const { mainPageBooks } = this.props;

    // Update the query state
    this.setState({ query: query.trim() });

    /**
     * this checks if we pass empty qurey string, if so
     * it reset the search book state
     */
    if (query.trim()) {
      BooksAPI.search(query)
        .then((searchedBooks) => {
          let matchedBooks = searchedBooks;
          let resultsFound = false;
          // reset the search book state is we didn't get any data from the API
          if (!searchedBooks || !searchedBooks.length) {
            matchedBooks = [];
            resultsFound = true;
          }

          /**
           * loop through searched results and override the book which are
           * allredy present in main page state before updating the book state
           * of search page
           */
          matchedBooks = matchedBooks.map((book) => {
            for (const mainPageBook of mainPageBooks) {
              if (mainPageBook.id === book.id) {
                book = mainPageBook;
              }
            }
            return book;
          });

          // Update the state in real time on searh page
          this.setState({ showBooks: matchedBooks, resultsNotAvailable: resultsFound });
        })
        .catch((e) => { console.log(e); });
    } else {
      this.setState({ showBooks: [] });
    }
  };

  /* The render method will be called each time an update happens.
   * This is a lifecycle hook which runs after a component is added
   * or re-rendered to the DOM.
   */
  render() {
    const { query, showBooks, resultsNotAvailable } = this.state;
    const { onChangeShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author.
              So, don't worry if you don't find a specific author or title.
              Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => { this.updateQuery(event.target.value); }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { showBooks.map(book => (
              <Book key={book.id} onChangeShelf={onChangeShelf} book={book} />
            ))}
          </ol>
          { resultsNotAvailable && query && (
            <p className="books-grid">
              Books not found.
            </p>)
          }
        </div>
      </div>
    );
  }
}

export default SearchBooks;
