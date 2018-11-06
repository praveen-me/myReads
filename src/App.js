import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './components/SearchBooks';
import './App.css';
import ListBooks from './components/ListBooks';

class BooksApp extends React.Component {
  state = {
    booksData : [],
    showSearchPage: false, 
    isLoading : true,
    changeStateValue : ''
  }

  changeState = e => {
    this.setState({
      showSearchPage : !this.state.showSearchPage
    })
  }

  async componentWillMount() {
    let books = await BooksAPI.getAll();
    this.setState({
      booksData : books,
      isLoading : false
    })  
  }

  handleUpdate = (e,book) => {
    this.setState({
      isLoading : true
    });
    (async () => {
      await BooksAPI.update(book, e.target.value)
      await BooksAPI.getAll()
      .then(data => this.setState({
        booksData : data,
        isLoading : false
      }))
    })();
  }

  render() {
    const {booksData, isLoading} = this.state;
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={ (props) =>
              isLoading ?
              <p>Loading...</p> : 
              <ListBooks 
              onClick={this.changeState} 
              {...props} 
              bookList={booksData} 
              handleUpdate={this.handleUpdate}/>
            }/>
            <Route path="/search" component={SearchBooks}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp;
