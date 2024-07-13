import './App.css';
import WithLogging from './components/HOC/Logger';
import BookList from './components/Book/List';
import React from 'react';

function App() {
  const BookListWithLogging = WithLogging(BookList);
  
  return (
    <BookListWithLogging />
  );
}

export default App;
