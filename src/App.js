import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
      books: []
  }
   getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    componentDidMount = () => {
      this.getAllBooks()
      }
 render() {
    return (
      <div className="app">
        <Switch>
            <Route exact path='my-reads/' render={() => (
              <BookList
                books={this.state.books}
                onHandleChange={ this.handleChange }
              />
            )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
