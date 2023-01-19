import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from '../components/Header'
import BookList from '../components/BookList'
import UseLocalStorage from "../Hooks/UseLocalStorage";
import BooksContext from "../context/BooksContext";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";

const AppRouter = () => {
    const [ books,setBooks ] = UseLocalStorage('books',[])
     return (
        <BrowserRouter>
        <div>
            <Header />
            <div className='main-content'>
                <BooksContext.Provider value={{ books,setBooks }}>
                    <Switch>
                        <Route path='/' component={BookList} exact={true} />
                        <Route path='/add' component={AddBook} />
                        <Route path='/edit/:id' component={EditBook} />
                        <Route component={() => <Redirect to='/' /> } />
                    </Switch>
                </BooksContext.Provider>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default AppRouter