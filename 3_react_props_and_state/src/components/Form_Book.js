import { useState } from "react";

function BookForm(props) {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        year: 0
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
        props.addBookHandler(bookDetails);
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
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookForm;