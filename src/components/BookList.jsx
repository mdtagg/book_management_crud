import React, { useContext } from "react";
import BooksContext from "../context/BooksContext";

const BookList = () => {
    const { books,setBooks } = useContext(BooksContext)
    return (
        <React.Fragment>
            <div className='book-list'>
                {books.length !== 0 ? (
                    books.map(book => {
                        <Book key={book.id} />
                    })) : (
                    <p className='message'>'No books so far, please add more!'</p>
                )}
            </div>
        </React.Fragment>
    )
}

export default BookList