import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";
import Book from "./Book";

const BookList = () => {
    const { books,setBooks } = useContext(BooksContext)

    const handleOnDelete = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <React.Fragment>
            <div className='book-list'>
                {books.length !== 0 ? (
                    books.map(book => (
                        <Book key={book.id} {...book} handleOnDelete={handleOnDelete} />
                    ))
                    ) : (
                    <p className='message'>'No books so far, please add more!'</p>
                )}
            </div>
        </React.Fragment>
    )
}

export default BookList