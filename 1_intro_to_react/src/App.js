import logo from './logo.svg';
import './App.css';

function Book({title, author, year}) {
  return (<div className='Book'>
    <h3 className='Book-title'>{title}</h3>
    <p className='Book-author'>Author: {author}</p>
    <p className='Book-year'>Year: {year}</p>
  </div>);
}

function BookList() {
  const books = [
    <Book {...{ title: 'Book 1', author: 'Author 1', year: 2020 }}/>,
    <Book {...{ title: 'Book 2', author: 'Author 2', year: 2018 }}/>,
    <Book {...{ title: 'Book 3', author: 'Author 3', year: 2022 }}/>
    // Add more books if you'd like
  ];

  return books.map((book, index) => <li className='Booklist' key={index}>{book}</li>);
}

function App() {
  return (
    <BookList />
  );
}

export default App;
