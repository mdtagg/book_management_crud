import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';

//21. Once the edit button is pressed on the card, the App Router history is changed to the edit path with a dynamic parameter at the end
//that is the id of the book that was pressed. 

//22. The books state is filtered to the book that matches the id passed in which is passed in as a prop for BookForm => BookForm
const EditBook = ({ history }) => {
  //useParams() returns an object of key value pairs of the dynamic parameters of a url (in this case id), so id is going to be 
  //the id of the book card we clicked on 
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  //23. Here, since we changed the book prop to our updated book in book form with a new id, filtered bookes wil be an array of all 
  //the books that are not the one we updated. From there we update the books state with the new book in front and the rest of the 
  //books behind it. We then push the / path to the router history and return to the BookList, completing the edit cycle. 
  //next we move to deleting a book => BookList
  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;