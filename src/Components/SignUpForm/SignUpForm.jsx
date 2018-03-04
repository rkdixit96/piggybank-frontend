import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ShadowCard from '../ShadowCard/ShadowCard';

import './SignUpForm.css';


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadharNumber: '',
      OTP: '',
      userName: '',
      password: '',
      aadharSubmitted: false,
      OTPSubmitted: false,
      detailsVerified: false,
      userCreated: false,
      buttonValue: 'Submit',
    };

    this.handleaadharNumberChange = this.handleaadharNumberChange.bind(this);
    this.handleOTPChange = this.handleOTPChange.bind(this);
    this.handleuserNameChange = this.handleuserNameChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleaadharNumberChange(event) {
    this.setState({ aadharNumber: event.target.value });
  }
  handleOTPChange(event) {
    this.setState({ OTP: event.target.value });
  }
  handleuserNameChange(event) {
    this.setState({ userName: event.target.value });
  }
  handlepasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    if (!this.state.aadharSubmitted) {
      this.setState({
        aadharSubmitted: true,
        buttonValue: 'Submit OTP',
      });
    }
    if (this.state.aadharSubmitted && !this.state.OTPSubmitted) {
      this.setState({
        OTPSubmitted: true,
        buttonValue: 'Verify details',
      });
    }
    if (this.state.aadharSubmitted && this.state.OTPSubmitted && !this.state.detailsVerified) {
      this.setState({
        detailsVerified: true,
        userCreated: true,
        buttonValue: 'Create User',
      });
    }
  }
  render() {
    return (
      <ShadowCard text="Sign Up" >
        {!this.state.OTPSubmitted &&
          <form onSubmit={this.handleSubmit} className="form-container">
            <input className="form-element" type="text" placeholder="Enter aadhar number" value={this.state.aadharNumber} onChange={this.handleaadharNumberChange} />

            {this.state.aadharSubmitted &&
            <input className="form-element" type="text" placeholder="Enter OTP" value={this.state.OTP} onChange={this.handleOTPChange} />}

            <input className="form-element" type="button" value={this.state.buttonValue} onClick={this.handleSubmit} />

          </form>
        }
        {!this.state.detailsVerified && this.state.OTPSubmitted &&
        <form className="form-container" >
          <div> Verify details </div>
          <div>
            <input type="checkbox" />I agree that the above information is true
          </div>
          <input className="form-element" type="button" value={this.state.buttonValue} onClick={this.handleSubmit} />


        </form>
          }
        {this.state.detailsVerified &&
          <form className="form-container">
            <input className="form-element" type="text" placeholder="Enter username" value={this.state.userName} onChange={this.handleuserNameChange} />

            <input className="form-element" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />

            <input className="form-element" type="button" value={this.state.buttonValue} onClick={this.handleSubmit} />

          </form>
        }
      </ShadowCard>


    );
  }
}

export default SignUpForm;
