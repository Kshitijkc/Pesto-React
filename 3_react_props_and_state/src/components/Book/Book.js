import { PureComponent } from "react";
import BookDetail from "./Details";

class Book extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Book'>
                <BookDetail {...this.props} />
            </div>
        );
    }
}

export default Book;