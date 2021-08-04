/* Creating the book component to implement it in our bookshelves. */
import React from "react";

const Book = (prop) => {
  // onChange function
  const onChange = (event) => {
    prop.move(prop.book, event.target.value);
  };

  // let url = "";
  // if (prop.book.imageLinks) {
  //   if (prop.book.imageLinks.thumbnail) {
  //     url = prop.book.imageLinks.thumbnail;
  //   } else if (prop.book.imageLinks.thumbnail) {
  //     url = prop.book.imageLinks.smallThumbnail;
  //   }
  // }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                prop.book.imageLinks ? prop.book.imageLinks.thumbnail : "none"
              }")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              defaultValue={prop.book.shelf ? prop.book.shelf : "none"}
              onChange={onChange}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{prop.book.title}</div>
        <div className="book-authors">
          {prop.book.authors && prop.book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
};

export default Book;
