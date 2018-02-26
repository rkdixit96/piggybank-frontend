import React, { Component } from 'react';
import './NavBar.css';
import NavButton from '../NavButton/NavButton';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar" >
        <div className="button-left">
          <NavButton text="About" />
          <NavButton text="Contact Us" />
          <NavButton text="Customer Support" />
        </div>
        <div className="button-right">
          <NavButton text="Sign In" />
        </div>


      </div>
    );
  }
}

export default NavBar;
