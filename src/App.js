import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Books from './Books/Books'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Books />
      </div>
    );
  }
}

export default App;
