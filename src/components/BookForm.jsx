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
    const [ error, setError ] = useState('')
    // console.log(props.book)
    const { title,author,quantity,price } = book
    
    function handleInput(e) {
        const name = e.target.name
        const value = e.target.value
        console.log(value)
        switch(name) {
            case 'quantity':
                if(value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        name:value
                    }))
                }
            case 'price':
                if(value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        name:value
                    }))
                }
            default:
                setBook((prevState) => ({
                    ...prevState,
                    name:value
                }))
        }
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
                    value={title}
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
                    value={author}
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
                    value={quantity}
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
                    value={price}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default BookForm