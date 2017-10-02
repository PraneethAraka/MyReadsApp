import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import BookList from './BookList'
import SearchPage from './SearchPage'
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
              <BookList
                books={this.state.books}
                onHandleChange={ this.handleChange }
              />
      <SearchPage
        		books={this.state.books}
        		onHandleChange={ this.handleChange }
        	/>
      </div>
    )
  }
}

export default BooksApp
