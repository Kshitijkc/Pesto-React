import logo from './logo.svg';
import './App.css';

function BookList() {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ];

  return books.map(book => <li key={book.title}>Title {book.title}</li>);
}

function App() {
  return (
    <BookList />
  );
}

export default App;
