import React from 'react'

const Book = ({ book, index, toggleStatus }) => {
  return (
    <li>
      <span>{index + 1}</span>
      <span>{book.title}</span>
      <span>{book.author}</span>
      {book.status === 'Checked Out' && <span>{book.dueDate}</span>}
      <span>{book.status}</span>
      <button onClick={toggleStatus}>Toggle Status</button>
    </li>
  )
}

export default Book
