import React, { Component } from "react";
import Book from "./Book";
import BookForm from "./Form";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.addBookHandler = this.addBookHandler.bind(this);
    this.deleteBookHandler = this.deleteBookHandler.bind(this);
  }

  addBookHandler(bookDetails) {
    this.setState((prevState) => ({
      books: [...prevState.books, bookDetails]
    }));
  }

  deleteBookHandler(index) {
    this.setState((prevState) => ({
      books: prevState.books.filter((bookDetails, i) => i != index)
    }));
  }

  render() {
    return (
      <div>
        <BookForm handleSubmit={this.addBookHandler} />
        {this.state.books.length>0 ? 
          this.state.books.map((bookDetails, index) => 
            <li className='Booklist' key={index}>
              <Book {...bookDetails} index={index} deleteHandler={this.deleteBookHandler} />
            </li>
          ) 
          : "Book list is currently empty!!!"}
      </div>
    );
  }
}

export default BookList;