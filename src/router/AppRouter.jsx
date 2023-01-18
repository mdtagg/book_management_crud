import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from '../components/Header'
import BookList from '../components/BookList'
import UseLocalStorage from "../Hooks/UseLocalStorage";
import BooksContext from "../context/BooksContext";
import AddBook from "../components/AddBook";

const AppRouter = () => {
    const [ books,setBooks ] = UseLocalStorage('books',[])
    console.log(books)
     return (
        <BrowserRouter>
        <div>
            <Header />
            <div className='main'>
                <BooksContext.Provider value={(books,setBooks)}>
                    <Switch>
                        <Route path='/' component={BookList} exact />
                        <Route path='add' component={AddBook} />
                    </Switch>
                </BooksContext.Provider>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default AppRouter