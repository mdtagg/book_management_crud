import React, { useContext } from "react";
import BookForm from "./BookForm";
import BooksContext from "../context/BooksContext";

const AddBook = () => {
    // const { books,setBooks } = useContext(BooksContext)
    function handleOnSubmit(book) {

    }
    return (
        <React.Fragment>
            <BookForm onSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBook