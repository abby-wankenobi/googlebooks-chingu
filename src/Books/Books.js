import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
  constructor(props){
    super(props);
    this.state={
      books: [],
      searchText: ''
    }
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value},
      () => {
        console.log(this.state.searchText);
      })
  }

  fetchData = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchText})
      .then((data) => {
        console.log(data)
        if(data.body.totalItems !== 0) {
          this.setState({
            books: [...data.body.items]
          })
        } else {
          console.log("hit")

          this.setState({
            books: []
          })
        }

      })
  }


  render() {
    const books = this.state.books;
    let bookList

    if(books.length !== 0) {
      bookList = <BookList books={this.state.books} />;
    } else {
      bookList = <p className="no-result">Sorry, your search did not match any results.</p>
    }

    return (
      <div>
        <SearchBar fetchData={this.fetchData} handleSearch={this.handleSearch} />
        <div className="container">
          {bookList}
        </div>
      </div>
    );
  }
}

export default Books;
