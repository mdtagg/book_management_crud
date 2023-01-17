import React from 'react';
import _ from 'lodash';
import Book from './Book';
import { useContext } from 'react';
import BooksContext from '../context/BooksContext';

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);
  //24. We delete a book here. Once delete has been pressed on a book card this function is called. We updated the books state to be all 
  //the books whose id does not match the id of the book we pressed. 
  const handleRemoveBook = (id) => {
    console.log(id)
    setBooks(books.filter((book) => book.id !== id));
  };
  //6. Here we either render all the books we have input, or if we havnt added any books we render a message to add a book. Once 
  //we press the Add Book tab the pathway specified for add book in our Header component is referenced by the AppRouter and renders 
  //the AddBook component => AddBook
  
  //19. BooksList now has a book entry so we map a new Book component from our list of books. We pass in all the properties
  //associated with each book object, set the key of each Book component to the id property and pass in the handleRemoveBook 
  //function to each Book => Book
  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;