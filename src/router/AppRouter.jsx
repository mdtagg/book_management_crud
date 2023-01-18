import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from '../components/Header'
import BookList from '../components/BookList'
import UseLocalStorage from "../Hooks/UseLocalStorage";

const AppRouter = () => {
    const [ books,setBooks ] = UseLocalStorage('books',[])
    console.log(books)
     return (
        <BrowserRouter>
            <Header />
            <div className='main'>
                <Switch>
                    <Route path='/' component={BookList} exact>

                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter