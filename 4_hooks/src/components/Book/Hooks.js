import React, { useMemo } from 'react';

function useBookFilter(books, searchTerm) {
    const filteredBooks = useMemo(() => {
        return books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [books, searchTerm]);

    return filteredBooks;
}

export default useBookFilter;

export function useBookSorter(books, sortCriteria) {
    const sortedBooks = useMemo(() => {
      return [...books].sort((a, b) => {
        if (sortCriteria === 'title') {
          return a.title.localeCompare(b.title);
        } else if (sortCriteria === 'author') {
          return a.author.localeCompare(b.author);
        } else {
          return 0;
        }
      });
    }, [books, sortCriteria]);
  
    return sortedBooks;
}