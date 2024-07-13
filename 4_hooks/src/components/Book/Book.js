import React, { PureComponent } from "react";
import BookDetail from "./Details";

class Book extends PureComponent {
    render() {
        return <BookDetail {...this.props} />;
    }
}

export default Book;