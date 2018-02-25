import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavButton.css';


class NavButton extends Component {
  constructor(props) {
    super(props);
    NavButton.propTypes = {
      text: PropTypes.string,
    };
    NavButton.defaultProps = {
      text: 'default',
    };
  }
  render() {
    return (
      <div className="NavButton" >
        <button className="button">{this.props.text}</button>
      </div>
    );
  }
}

export default NavButton;
