import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuid4 } from 'uuid'
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
    const { title,author,quantity,price } = book
    
    function handleInput(e) {
        const { name, value } = e.target
        switch(name) {
            case 'quantity':
                if(value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]:value
                    }))
                }
            case 'price':
                if(value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]:value
                    }))
                }
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name]:value
                }))
        }
    }
    function handleOnSubmit(e) {
        e.preventDefault()
        const values = [title,author,quantity,price].map(value => value.trim())
        let errorMessage = ''
        if(values.every(value => value !== '' || value !== 0)) {
            const book = {
                id:uuid4(),
                title:title,
                author:author,
                quantity:quantity,
                price:price,
                date: new Date()
            }
            props.handleOnSubmit(book)
        } else {
            errorMessage = 'Field empty or incomplete'
        }
        setError(errorMessage)
    }
    return (
        <div className='main-form'>
            {error && <p className='errorMsg'>{error}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId='title'>
                    <Form.Label>Book Title: </Form.Label>
                    <Form.Control 
                    type='text' 
                    className='input-control'
                    placeholder='Enter Book Title'
                    name='title'
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
                <Button variant="primary" type="submit" className="submit-btn" >
                    Add Book
                </Button>
            </Form>
        </div>
    )
}

export default BookForm