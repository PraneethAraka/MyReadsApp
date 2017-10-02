import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regxp'
import sortBy from 'sort-by'

class SearchPage extends Component {
  static propTypes = {
        books: PropTypes.array.isRequired,
        onHandleChange: PropTypes.func.isRequired
    }
	state = {
        query: '',
    }
    updateQuery = (query) => {
        this.setState({
            query: query
        })

    render() {
        let showingBooks
        if (this.state.query) {
          const match = new RegExp(escapeRegExp(this.state.query), 'i')
          showingBooks = this.props.books.filter((book) => match.test(book.title))
        } else {
          showingBooks = this.props.books
        }
      
      showingBooks.sort(sortBy('title'))
      
        return (
        <div className="search-books">
            <div className="search-books-bar">
          {JSON.stringify(this.state)}
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
               </div>
              </div>
            <div className="search-books-results">
                  <ol className="books-grid">
                      {showingBooks.map((book)=>(
                            <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : 'https://www.google.com/search?q=placeholder+images+for+books&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjQsNDQ6cjWAhVirlQKHQJcCJIQ7AkIQA&biw=1920&bih=1014#imgrc=p8zCAFjQX_5j4M:'})` }}></div>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf}
                                        onChange={(e) => onHandleChange(book,e.target.value)}>
                                        <option value="" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors && book.authors.map((author)=>{
                                return(
                                <div key={author} className="author">{author}</div>
                                        )
                            })}</div>
                        </div>
                        </li>
                        ))}             
                      
                      </ol>
            </div>
            <div className="back-arrow">
                <Link to="/">Home</Link>
            </div>
        </div>
        )
}
}

export default SearchPage
