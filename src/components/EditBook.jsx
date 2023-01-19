import React, { useContext } from 'react'
import BooksContext from '../context/BooksContext'
import { useParams } from 'react-router-dom'
import BookForm from './BookForm'

const EditBook = ({history}) => {
    const {books,setBooks} = useContext(BooksContext)
    const { id } = useParams()
    const bookToEdit = books.find(book => book.id !== id)

    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter(book => book.id !== id)
        console.log({filteredBooks})
        setBooks([book,...filteredBooks])
        history.push('/')
    }
   
    return (
        <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    )
}

export default EditBook 