import React, { useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';

function AdditionalDetails(props) {
  return (
    <Box sx={{ margin: 1 }}>
      <Typography variant="h6" gutterBottom component="div">
        Additional Details
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            {Object.keys(props.additionalDetails).map((key) => <TableCell key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {Object.keys(props.additionalDetails).map((key) => <TableCell key={key}>{props.additionalDetails[key]}</TableCell>)}
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

function BookDetail(props) {
  const [additionalDetailsVisibility, setAdditionalDetailsVisibility] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setAdditionalDetailsVisibility(!additionalDetailsVisibility)}
          >
            {additionalDetailsVisibility ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{props.title}</TableCell>
        <TableCell>{props.author}</TableCell>
        <TableCell align="right">{props.year}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => props.deleteHandler(props.index)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={additionalDetailsVisibility} timeout="auto" unmountOnExit>
            <AdditionalDetails {...props}/>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default BookDetail;