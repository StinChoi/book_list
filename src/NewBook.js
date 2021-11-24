import React, { useState } from "react"

const NewBook = (props) => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("title:", bookName);
    console.log("author:", authorName);
    props.x({
      book_name: bookName,
      author_name: authorName,
    });
  };
  return (
    <div className="book-form">
      <h2>New Book List</h2>
      <form onSubmit={handleSubmit}>
        <h3>Title of Book</h3>
        <input
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <h3>Author</h3>
        <input value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
        <br />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default NewBook;