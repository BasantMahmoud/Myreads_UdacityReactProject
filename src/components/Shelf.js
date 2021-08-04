import React from "react";
import Book from "./Book";

const Shelves = {
  currentlyReading: "Curreantly Reading",
  wantToRead: "Want to Read",
  read: "Read",
};
const Shelf = (prop) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{Shelves[prop.shelf]}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {prop.books.map((book) => (
            <Book key={book.id} book={book} move={prop.move} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
