import React, { useContext } from "react";
import BookForm from "./BookForm";
import BooksContext from "../context/BooksContext";

const AddBook = () => {
    const { books,setBooks } = useContext(BooksContext)
    function handleOnSubmit(book) {
        console.log(book)
    }
    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBook