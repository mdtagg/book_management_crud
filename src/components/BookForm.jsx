import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
// import BooksContext from '../context/BooksContext'

const BookForm = (props) => {
    // const { books,setBooks } = useContext(BooksContext)

    const [book,setBook] = useState(() => {
        return {
            title: props.book ? props.book.title : '',
            author: props.book ? props.book.author : '',
            quantity: props.book ? props.book.quantity : '',
            price: props.book ? props.book.price : '',
            date: props.book ? props.book.date : ''
        }
    })
    // console.log(props.book)
    const { title,author,quantity,price,date } = book
    console.log(title)
    function handleInput() {

    }
    function handleOnSubmit() {

    }
    return (
        <div className='main-form'>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId='title'>
                    <Form.Label>Book Title: </Form.Label>
                    <Form.Control 
                    type='text' 
                    className='input-control'
                    placeholder='Enter Book Title'
                    name='booktitle'
                    onChange={handleInput}
                    />
                </Form.Group>
                <Form.Group controlId='author'>
                    <Form.Label>Author: </Form.Label>
                    <Form.Control 
                    type='text' 
                    className='input-control'
                    placeholder='Enter Book Author'
                    name='author'
                    onChange={handleInput}
                    />
                </Form.Group>
                <Form.Group controlId='quantity'>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control 
                    type='number' 
                    className='input-control'
                    placeholder='Enter Quantity'
                    name='quantity'
                    onChange={handleInput}
                    />
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>Price: </Form.Label>
                    <Form.Control 
                    type='text' 
                    className='input-control'
                    placeholder='Enter Price'
                    name='price'
                    onChange={handleInput}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default BookForm