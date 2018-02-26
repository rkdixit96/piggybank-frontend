

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShadowCard.css';


class ShadowCard extends Component {
  constructor(props) {
    super(props);
    ShadowCard.propTypes = {
      text: PropTypes.string,
      orientation: PropTypes.string,
    };
    ShadowCard.defaultProps = {
      text: 'default',
      orientation: 'vertical',
    };
    this.state = {
      orientation: props.orientation,
    };
  }


  render() {
    return (
      <div className="shadow-card">
        <div className="heading">
          <h3>{this.props.text}</h3>
        </div>
        <div className={this.state.orientation} >

          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ShadowCard;
