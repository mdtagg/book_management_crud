import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ history,books,setBooks }) => {
  
  //15. we have added a book with 6 properties defined in the BookForm and update the state of books to be an array with the newest book 
  //first and the rest of the books after it. We also push the / path to the history prop in ReactRouter which brings us
  //back to the BookList page => AppRouter 
  const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        history.push('/');
  };

  return (
    //7. Here we are rendering the book form component and passing in the handleOnSubmit function to use when we submit a book => BookForm
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;