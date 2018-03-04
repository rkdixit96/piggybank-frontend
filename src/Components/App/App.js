import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import HomeBody from '../HomeBody/HomeBody';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Piggy Bank" />
        <NavBar />
        <div className="app-body">
          <Route exact path="/" component={HomeBody} />
        </div>
      </div>
    );
  }
}

export default App;
