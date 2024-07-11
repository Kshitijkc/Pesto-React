import React, { PureComponent } from "react";
import BookDetail from "./Details";

class Book extends PureComponent {
    render() {
        return (
            <div className='Book'>
                <BookDetail {...this.props} />
                <button onClick={() => this.props.deleteHandler(this.props.index)}>Delete</button>
            </div>
        );
    }
}

export default Book;