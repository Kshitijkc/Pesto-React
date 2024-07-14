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