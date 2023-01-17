import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  //4. Here we render our Header component with two NavLinks that reference the routes in the AppRouter component when clicked => AppRouter(BookList)
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;