import logo from './logo.svg';
import './App.css';
import { Component, PureComponent } from 'react';
import WithLogging from './components/HOC_Logger';
import BookForm from './components/Form_Book';

function BookDetail(props) {
  return (
    <>
      <h3 className='Book-title'>{props.title}</h3>
      <p className='Book-author'>Author: {props.author}</p>
      <p className='Book-year'>Year: {props.year}</p>
    </>
  );
}

class Book extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {...props}
  }

  render() {
    return (<div className='Book'>
      <BookDetail {...this.state} />
    </div>);
  }
}

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.addBookHandler = this.addBookHandler.bind(this);
  }

  addBookHandler(bookDetails) {
    const newBook = <Book {...bookDetails} />;
    this.setState((prevState) => ({
      books: [...prevState.books, newBook]
    }));
  }

  render() {
    return (
      <div>
        <BookForm handleSubmit={this.addBookHandler} />
        {this.state.books.length>0 ? this.state.books.map((book, index) => <li className='Booklist' key={index}>{book}</li>) : "Book list is currently empty!!!"}
      </div>
    );
  }
}

function App() {
  const BookListWithLogging = WithLogging(BookList)
  return (
    <BookListWithLogging />
  );
}

export default App;
