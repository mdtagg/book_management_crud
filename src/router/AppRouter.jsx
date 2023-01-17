import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  //1. The first thing our app does upon rendering our main page is to check local storage for any values => localStorage
  //books and setBooks are value and setValue in the useLocalStorage component
  const [books, setBooks] = useLocalStorage('books', []);
  //16. setBooks is called which changes the state of books. useLocalStorage is also called => useLocalStorage

  //5.The BookList path matches our / path so our BookList is rendered => BooksList
  //render method takes default props (history,location,match) so we are passing those in as attributes in the AddBook component
  //18. BookList is rendered again with the new books state passed in. => BookList
  return (
    //keeps track of where the users are on each of the rendered pages
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
        <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;