import React, { Component } from 'react';
import './NavBar.css';
import NavButton from '../NavButton/NavButton';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar" >
        <NavButton text="About" />
        <NavButton text="About" />
        <NavButton text="About" />
      </div>
    );
  }
}

export default NavBar;
