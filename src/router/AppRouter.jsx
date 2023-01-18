import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from '../components/Header'

const AppRouter = () => {
    // const [ book,setBook ] = UseLocalStorage('book',[])
     return (
        <BrowserRouter>
            <div>
                <Header />
                
            </div>
        </BrowserRouter>
    )
}

export default AppRouter