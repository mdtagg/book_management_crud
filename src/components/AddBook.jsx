import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ history,books,setBooks }) => {
  // console.log(books)
  const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        history.push('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;