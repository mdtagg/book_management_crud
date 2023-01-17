import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  //2. Here we create state with lazy initialization, the function in useState is only run once. 
  //it checks if there is a key in local storage that matches 'books' if there is value is set to the latest book object 
  const [value, setValue] = useState(() => { 
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  //3.Since we have nothing in local storage yet because we have not added a book, the key is set to 'book' and the value is [] next => Header

  //17. Since setBooks was called with the new book array, value is updated to the new book array and since value is in the dependency 
  //graph localStorage sets the new array of book objects to the 'books' key => AppRouter(BookList)
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;