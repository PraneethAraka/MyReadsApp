import React, { Component } from 'react';
import PropTypes from 'prop-types'		

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }	
  render() {
    return (
    <div className="list-books">
     <div className="list-books-title">
       <h1>My Reads</h1>
     </div>
     <div className='bookshelf'>
     	<h2 className="bookshelf-title">Currently Reading</h2>
     	<div className="bookshelf-books">
            <ol className="books-grid">
              
     		</ol>
     	</div>
     </div>
     <div className='bookshelf'>
     	<h2 className="bookshelf-title">Want to Read</h2>
     </div>
     <div className='bookshelf'>
     	<h2 className="bookshelf-title">Read</h2>
     </div>
    </div>
    )}
  }

export default BookList
