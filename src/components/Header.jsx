import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
    <header>
        <h1>Book Management App</h1>
        <hr/>
        <div className='main-content'>
            <NavLink to='/' className='link' activeClassName="active">
                Book List
            </NavLink>
            <NavLink to='add' className='link' activeClassName="active">
                Add Book 
            </NavLink>
        </div>
    </header>
}

export default Header