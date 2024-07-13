import React, { useEffect } from 'react';

function BookDataLoader({ updateBooks }) {
  useEffect(() => {
    // Simulate fetching book data
    const initialBooks = [
        {
          title: 'A Story of Yesterday',
          author: 'Sergio Cobo',
          year: 2014,
          additionalDetails: {
              'description': 'Punch to the jaw of life.',
              'genre': 'Thriller',
              'abc': '😊'
          }
        },
        {
          title: 'I Am America',
          author: 'Stephen Colbert',
          year: 2007,
          additionalDetails: {
              'description': 'Opinions that Stephen doesn\'t have time to shoehorn',
              'genre': 'Humor',
              'abc': '😊'
          }
        }
    ];

    // Simulate a delay
    const fetchBooks = () => {
      setTimeout(() => {
        updateBooks((books) => ([...books, ...initialBooks]));
      }, 1000); // Simulate a 1 second delay
    };

    fetchBooks();
  }, []);

  return null; // This component doesn't render anything
}

export default BookDataLoader;