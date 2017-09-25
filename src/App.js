import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
  		this.setState({ books })
  })
}
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: true })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>   
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
</div>
 ): <div> No books </div>}
		<div className="list-books-title">
		  <h1 className="list-books-title">MyReads</h1>
        </div>
		<div className="list-books-content">
              <div>
                <div className="bookshelf">
				  <ol>
                  <h2 className="bookshelf-title">Currently Reading</h2>
					 <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
						{this.state.books.map((book, id)=>( <div key={ book.id } className="book-details">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url($book.url)' }}></div>
							<div className="book-title">{book.title}</div>
                          	<div className="book-authors">{book.author}</div>
						</div>	
						</div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
					</div>
          </div>
		</li>
		</ol>
	</div>
				  <h2 className="bookshelf-title">Want to Read</h2>
					 <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
						{this.state.books.map((book, id)=>( <div key={ book.id } className="book-details">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url($book.url)' }}></div>
							<div className="book-title">{book.title}</div>
                          	<div className="book-authors">{book.author}</div>
						</div>	
						</div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
					</div>
          </div>
		</li>
		</ol>
	</div>
				  <h2 className="bookshelf-title">Read</h2>
 <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                       <div className="book">
						{this.state.books.map((book, id)=>( <div key={ book.id } className="book-details">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url($book.url)' }}></div>
							<div className="book-title">{book.title}</div>
                          	<div className="book-authors">{book.author}</div>
						</div>	
						</div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
					</div>
          </div>
		</li>
		</ol>
	</div>
	</ol>
	</div>
	</div>
	</div>
</div>
    )
  }
}

export default BooksApp
