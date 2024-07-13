import React, { Component, Fragment } from "react";
import Book from "./Book";
import BookForm from "./Form";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

function BookDetailsTable({ books, deleteBookHandler }) {
  return books.length>0 ? 
      <TableContainer component={Paper} style={{ width: "700px", marginTop: "40px"}} >
        <Table aria-label="collapsible table" style={{ width: "700px" }}  >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Year</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((bookDetails, index) => <Book key={index} {...bookDetails} index={index} deleteHandler={deleteBookHandler} />)}
          </TableBody>
        </Table>
      </TableContainer>
    : <div style={{marginTop: "40px"}}>Book list is currently empty!!!</div>;
}

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
      books: prevState.books.filter((bookDetails, i) => i !== index)
    }));
  }

  render() {
    return (
      <>
        <BookForm handleSubmit={this.addBookHandler} />
        <BookDetailsTable books={this.state.books} deleteBookHandler={this.deleteBookHandler} />
      </>
    );
  }
}

export default BookList;