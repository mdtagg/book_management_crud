
import {Form, Button} from 'react-bootstrap'

const BookForm = (props) => {
    
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