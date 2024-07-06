import React, { useState } from 'react';
import './styles.css';

function AdditionalDetails(props) {
  return (
    <ul>
      {Object.keys(props.additionalDetails).map((detail, i) =>
        <li key={i}>
          <h4>{detail} :</h4>
          <h5>{props.additionalDetails[detail]}</h5>
        </li>
      )}
    </ul>
  );
}

function BookDetail(props) {
  const [additionalDetailsVisibility, setAdditionalDetailsVisibility] = useState(false);

  return (
    <>
      <h3 className='Book-title'>Title: {props.title}</h3>
      <p className='Book-author'>Author: {props.author}</p>
      <p className='Book-year'>Year: {props.year}</p>
      {additionalDetailsVisibility && <AdditionalDetails additionalDetails={props.additionalDetails} />}
      <button onClick={() => setAdditionalDetailsVisibility(!additionalDetailsVisibility)}>{additionalDetailsVisibility ? "Hide Additional Details" : "Show Additional Details"}</button>
    </>
  );
}

export default BookDetail;