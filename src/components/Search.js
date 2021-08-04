import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

import Book from "./Book";

class Search extends React.Component {
  state = {
    allBooks: [],
  };
  search = async (query) => {
    if (query) {
      const bookFinder = await BooksAPI.search(query);
      if (!bookFinder.error) {
        /* Using some() method to test if the array's elements are responding to the function */
        let foundBooks = bookFinder.map((abook) => {
          if (this.props.books.some((test) => test.id === abook.id)) {
            abook.shelf = this.props.books.find(
              (Book) => Book.id === abook.id
            ).shelf;
          } else {
            abook.shelf = "none";
          }
          return abook;
        });
        this.setState({ allBooks: foundBooks });
      } else {
        this.setState({ allBooks: [] });
      }
    } else {
      this.setState({ allBooks: [] });
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}

          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}

            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.allBooks.map((book) => (
              <Book key={book.id} book={book} move={this.props.move} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
