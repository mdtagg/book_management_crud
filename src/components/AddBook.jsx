import React from "react";
import BookForm from "./BookForm";

const AddBook = ({books,setBooks}) => {
    function handleOnSubmit(book) {

    }
    return (
        <React.Fragment>
            <BookForm onSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBook