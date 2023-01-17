import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  //8. We set the state of book once to be an object with 5 properties. Each of the properties checks to see if a book object has been 
  // passed in as props. Right now we have not entered any books so the properties are set to empty. 

  //22. Now that we have pressed edit, the book state will be set to an object with the properties of the book we passed in. 
  //From here we edit the form fields and start the process over from 9. Once we submit the updated book, a third handleOnSubmit function 
  //called which is located back in EditBook => EditBook
  const [book, setBook] = useState(() => {
    //the state will not be empty only when we are editing a book 
    return {
      bookname: props.book ? props.book.bookname : '',
      author: props.book ? props.book.author : '',
      quantity: props.book ? props.book.quantity : '',
      price: props.book ? props.book.price : '',
      date: props.book ? props.book.date : ''
    };
  });     

  //9. an error message state is initialized to empty 
  const [errorMsg, setErrorMsg] = useState('');
  //10. our book state properties are destructured for later use and manipulation 
  const { bookname, author, price, quantity } = book;

  //11. a separate handleOnSubmit function is created to check if all fields in the form are filled. If they are a new variable is created
  //with a unique id and assigned the destructured values from book above. If all fields are not filled then the error message state is
  //updated will render an error message 
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };
  //12. handleInputChange checks to make sure the values input to the form are valid entries upon each change in any of the form inputs
  //quantity and price are the only inputs checked for validity, the others trigger the default conditions which returns all previous state
  //but changes the specified property to the current value, which on the input is the key that is pressed. 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        //checks to make sure that the input is not a decimal number
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        //checks to make sure the price input is a digit followed by a '.' and then 2 digits 
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };
  //13. our initial form is rendered, each input is passed in the handleInputChange function and the parent form element is passed the 
  //handleOnSubmit 
  //14. when all inputs are completed correctly and  we press the submit button, we run the handleOnSubmit function in AddBook => AddBook
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;