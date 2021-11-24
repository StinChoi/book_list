// To display this through website *yarn start*
import React, { useEffect, useState } from "react";
import axios from "axios"
import NewBook from "./NewBook";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("Mounted!");
    getBooks();
  }, []);

  // following James example
  //Syncing up to axios *yarn add axios*
  const getBooks = async () => {
    let response = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5")
    console.log(response.data.data)
    setBooks(response.data.data);
  };

  // Adding books
  const addBook = (book) => {
    let newBookArray = [book, ...books];
    setBooks(newBookArray);
  };

  //Deleting books - 
  const deleteBook = (isbn) => {
    console.log("Delete");
    console.log(isbn);

    let filterBooks = books.filter((x) => x.isbn !== isbn);
    setBooks(filterBooks);
  };

  const renderBooks = () => {
    if (books.length === 0) {
      return <p>No Books</p>;
    }
    return books.map((book) => {
      return (
        <div key={book.isbn} className="book-container">
          <h2>
            {book.title} {book.author}
          </h2>
          <button onClick={() => deleteBook(book.isbn)}>Delete Book</button>
        </div>
      );
    });
  };

  return (
    <div className="books">
      <h1>Books Listed Below</h1>
      <NewBook x={addBook} />
      <div className="books-list">{renderBooks()}</div>
    </div>
  );
};
export default Books;