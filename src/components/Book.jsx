
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

//20. we set Book to be a function that has each property of the Book component we are rendering passed in as props. 
//we then render each element on the book card with the values of the properties in each book. Next we want to add another book 
//so we press the add book tab again which takes us back to AppRouter, which routes us to AddBook but now with the updated books state
//from AddBook we render a new blank BookForm component which completes the initial loop. 
//AppRouter(AddBook) => AddBook => BookForm => BookList => Book => AddBook
//Next we want go into the operations on each book card => EditBook
const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook
}) => {
  const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
        Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;