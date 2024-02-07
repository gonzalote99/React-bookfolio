import React from 'react';
import ThemeContextProvider from './context/ThemeContext';
import BookContextProvider from './context/BookContext';
import BookList from './BookList';

export default class App extends React.Component {
  state = {
    books: [],
  };

  render() {
    return(
      <ThemeContextProvider>
      <BookContextProvider>
      <BookList />
      </BookContextProvider>
      </ThemeContextProvider>
    )
  }
}