import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from '../components/Header'
import BookList from '../components/BookList'

const AppRouter = () => {
    // const [ book,setBook ] = UseLocalStorage('book',[])
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