import { useState, useContext } from "react";
import Book from "./Book";
import BookForm from "./Form";
import BookDataLoader from './Loader'
import useBookFilter, { useBookSorter } from "./Hooks";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from './ThemeSwitcher';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';

function BookDetailsTable({ books, deleteBookHandler, style }) {
  return books.length>0 ? 
      <TableContainer component={Paper} style={{ width: "700px", marginTop: "40px", ...style}} >
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

function BookList() {
  const [books, updateBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria] = useState('title');
  const filteredBooks = useBookFilter(books, searchTerm);
  const sortedBooks = useBookSorter(filteredBooks, sortCriteria);
  const { theme } = useContext(ThemeContext);
  
  const bookListStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#8e8e8e',
    color: theme === 'light' ? '#000' : '#fff',
  };

  function addBookHandler(bookDetails) {
    updateBooks((books) => ([...books, bookDetails]));
  }

  function deleteBookHandler(index) {
    updateBooks((books) => books.filter((bookDetails, i) => i !== index));
  }

  return (
    <>
      <ThemeSwitcher />
      <BookDataLoader updateBooks={updateBooks} />
      <BookForm handleSubmit={addBookHandler} />
      <TextField 
        label="Search" 
        id="outlined-size-small" 
        placeholder="Search by title or author" 
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
        size="small" 
        style={{marginTop: 40, width: 300}}
      />
      <BookDetailsTable books={sortedBooks} deleteBookHandler={deleteBookHandler} style={bookListStyle} />
    </>
  );
}

export default BookList;