import React, { Component } from 'react';
import PropTypes from 'prop-types'		

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }	
  render() {
    return (
	<div className="list-books-title">
	   <h1 className="list-books-title">MyReads</h1>
	<div className="list-books-content">
      	 <div className="bookshelf">
	  <ol>
            <h2 className="bookshelf-title">Currently Reading</h2>
      	    <h2 className="bookshelf-title">Want to Read</h2>
     	    <h2 className="bookshelf-title">Read</h2>
     	    <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <div className="book">
		    {this.prop.books.map((book, id)=>( <div key={ book.id } className="bookshelf-books">
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url($book.url)' }}></div>
		     <div className="book-title">{book.title}</div>
                     <div className="book-authors">{book.author}</div>
		     </div>
		     ))}
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
	      </li>
	   </ol>
	</ol>
     </div>
   </div>
</div>
)
}

export default BookList
