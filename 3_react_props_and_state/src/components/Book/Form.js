import React, { useState } from "react";

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
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                type="text"
                name="title"
                value={bookDetails.title}
                onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Author:
                <input
                type="text"
                name="author"
                value={bookDetails.author}
                onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Year:
                <input
                type="number"
                name="year"
                value={bookDetails.year}
                onChange={handleInputChange}
                />
            </label>
            <br />
                Additional Details:
                <br />
                {Object.entries(bookDetails.additionalDetails).map(([key, value], index) => (
                    <div key={index}>
                        <label>{key}: </label>
                        <input 
                            type="text"
                            name={key} 
                            value={value}
                            onChange={handleAdditionalInputChange} 
                        />
                    </div>
                ))}
            <br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookForm;