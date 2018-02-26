import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import HomeBody from '../HomeBody/HomeBody';
import SignInBody from '../SignInBody/SignInBody';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Piggy Bank" />
        <NavBar />
        <div>
          <Route exact path="/" component={HomeBody} />
          <Route path="/signIn" component={SignInBody} />
        </div>
      </div>
    );
  }
}

export default App;
