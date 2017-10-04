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
    
     updateShelf = (book, shelf) => {
       BooksAPI.update(book, shelf).then((res) => {
      })
       this.getBooks()
    }
    
     handleChange = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(previousState => ({
          books: previousState.books.filter(b=> b.id !== book.id).concat([book])
        }))
      })
    }
     
     
 render() {
    return (
      <div className="app">
       <Switch>
        <Route exact path="/" render={() => (
              <BookList
                books={this.state.books}
                 onUpdateShelf={ this.updateShelf }
              />
		)}/>
		<Route path="/search" render={() => (
      		<SearchPage
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
