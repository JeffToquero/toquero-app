import React, { useState, useEffect } from 'react'

const SearchFilter = ({ books, setFilteredBooks }) => {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredBooks(filteredBooks)
  }, [searchQuery, books, setFilteredBooks])

  return (
    <input
      type="text"
      placeholder="Search books"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '5px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    />
  )
}

export default SearchFilter
