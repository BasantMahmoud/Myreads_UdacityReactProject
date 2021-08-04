import React from "react";
import Shelf from "./Shelf";
import SearchIcon from "./SearchIcon";

const Home = (prop) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <div>
          <h1>My Reads</h1>
        </div>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            shelf="currentlyReading"
            books={prop.books.filter(
              (prop) => prop.shelf === "currentlyReading"
            )}
            move={prop.move}
          />
          <Shelf
            shelf="wantToRead"
            books={prop.books.filter((prop) => prop.shelf === "wantToRead")}
            move={prop.move}
          />
          <Shelf
            shelf="read"
            books={prop.books.filter((prop) => prop.shelf === "read")}
            move={prop.move}
          />
        </div>
      </div>
      <SearchIcon />
    </div>
  );
};

export default Home;
