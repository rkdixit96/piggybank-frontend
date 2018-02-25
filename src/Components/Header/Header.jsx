

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import logo from '../../Images/logo.jpg';


class Header extends Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      text: PropTypes.string,
    };
    Header.defaultProps = {
      text: 'default',
    };
  }


  render() {
    return (
      <div className="Header">
        <img src={logo} alt="Bank-Logo" />
        <h1 className="header-text">{this.props.text}</h1>
      </div>
    );
  }
}

export default Header;
