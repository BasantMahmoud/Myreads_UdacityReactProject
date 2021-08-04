import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./components/Home";
import SearchBar from "./components/Search";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    books: [],
  };

  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({
  //       books,
  //     });
  //   });
  // }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  move = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    if (this.state.books.some((test) => test.id === book.id)) {
      this.setState({
        books: this.state.books.map((bo) => {
          if (bo.id === book.id) {
            bo.shelf = shelf;
          }
          return bo;
        }),
      });
    } else {
      book.shelf = shelf;
      this.setState({
        books: [...this.state.books, book],
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <Home books={this.state.books} move={this.move} />
        </Route>

        <Route exact path="/search">
          <SearchBar books={this.state.books} move={this.move} />
        </Route>
      </div>
    );
  }
}

export default App;
