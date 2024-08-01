import React, { useState } from 'react'
import Book from './Book'
import SearchFilter from './SearchFilter'

const getRandomDate = () => {
  const today = new Date()
  const futureDate = new Date(today)
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 30))
  return futureDate.toISOString().split('T')[0]
}

const initialBooks = [
  {
    title: 'Echoes',
    author: 'John',
    dueDate: getRandomDate(),
    status: 'Checked Out',
  },
  {
    title: 'Whispers',
    author: 'Jane',
    dueDate: getRandomDate(),
    status: 'Checked Out',
  },
  {
    title: 'Shadows',
    author: 'Mike',
    dueDate: getRandomDate(),
    status: 'Checked Out',
  },
  {
    title: 'Breeze',
    author: 'Lisa',
    dueDate: getRandomDate(),
    status: 'Checked Out',
  },
  {
    title: 'Glimmer',
    author: 'John',
    dueDate: getRandomDate(),
    status: 'Checked Out',
  },
  {
    title: 'Frost',
    author: 'Jane',
    dueDate: getRandomDate(),
    status: 'Checked Out',
  },
  { title: 'Embers', author: 'Mike', dueDate: null, status: 'Available' },
  { title: 'Glimpse', author: 'Lisa', dueDate: null, status: 'Available' },
  { title: 'Ripple', author: 'John', dueDate: null, status: 'Available' },
  { title: 'Fragments', author: 'Jane', dueDate: null, status: 'Available' },
]

const Books = () => {
  const [books, setBooks] = useState(initialBooks)
  const [filteredBooks, setFilteredBooks] = useState(initialBooks)

  const toggleStatus = index => {
    const updatedBooks = books.map((book, i) =>
      i === index
        ? {
            ...book,
            status: book.status === 'Checked Out' ? 'Available' : 'Checked Out',
            dueDate: book.status === 'Checked Out' ? null : getRandomDate(),
          }
        : book
    )
    setBooks(updatedBooks)
    setFilteredBooks(
      updatedBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }

  return (
    <div className="container">
      <h1>Books</h1>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <ul>
        <li className="headers">
          <span>No.</span>
          <span>Title</span>
          <span>Author</span>
          <span>Due Date</span>
          <span>Status</span>
        </li>
        {filteredBooks.map((book, index) => (
          <Book
            key={index}
            book={book}
            index={index}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Books
