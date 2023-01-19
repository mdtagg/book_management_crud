
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Book = ({
    id,
    title,
    author,
    quantity,
    price,
    date
}) => {
    const history = useHistory()
    return (
        <Card style={{width: '18 rem'}} className='book'>
            <Card.Body>
                <Card.Title className='book-title'>{title}</Card.Title>
                <div className='book-details'>
                    <div>Author: {author}</div>
                    <div>Quantity: {quantity}</div>
                    <div>Price: {price}</div>
                    <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{'  '}
                <Button variant='danger'>Delete</Button>
            </Card.Body>
        </Card>
    )
}


export default Book