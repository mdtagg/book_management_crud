import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";
import Book from "./Book";

const BookList = () => {
    const { books,setBooks } = useContext(BooksContext)
    console.log(books.length)
    return (
        <React.Fragment>
            <div className='book-list'>
                {books.length !== 0 ? (
                    books.map(book => (
                        <Book key={book.id} {...book} />
                    ))
                    ) : (
                    <p className='message'>'No books so far, please add more!'</p>
                )}
            </div>
        </React.Fragment>
    )
}

export default BookList