import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Piggy Bank" />
        <NavBar />
      </div>
    );
  }
}

export default App;
