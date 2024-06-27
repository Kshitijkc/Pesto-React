import './styles.css';

function BookDetail(props) {
  return (
    <>
      <h3 className='Book-title'>Title: {props.title}</h3>
      <p className='Book-author'>Author: {props.author}</p>
      <p className='Book-year'>Year: {props.year}</p>
    </>
  );
}

export default BookDetail;