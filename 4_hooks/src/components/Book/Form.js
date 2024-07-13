import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import './styles.css';

function BookForm(props) {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        year: 0,
        additionalDetails: {
            'description': '',
            'genre': '',
            'abc': ''
        }
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setBookDetails({
            ...bookDetails,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(bookDetails);
    }

    function handleAdditionalInputChange(event) {
        const { name, value } = event.target;
        setBookDetails({
            ...bookDetails,
            additionalDetails: {
                ...bookDetails.additionalDetails,
                [name]: value
            }
        });
    }

    return (
        <>
            <form className="form-book">
                <TextField id="filled-basic" label="Title" variant="standard" onChange={handleInputChange} name="title" />
                <TextField id="filled-basic" label="Author" variant="standard" onChange={handleInputChange} name="author" />
                <TextField id="filled-basic" label="Year" variant="standard" type="number" onChange={handleInputChange} name="year" />
                Additional Details:
                {Object.entries(bookDetails.additionalDetails).map(([key, value], index) => (
                    <TextField id="filled-basic" label={key.charAt(0).toUpperCase() + key.slice(1)} variant="standard" onChange={handleAdditionalInputChange} key={index} name={key} />
                ))}
                <br/>
                <Button variant="contained" endIcon={<SaveIcon />} onClick={handleSubmit} ></Button>
            </form>
        </>
    );
}

export default BookForm;