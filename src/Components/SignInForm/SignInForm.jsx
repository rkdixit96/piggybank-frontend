import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Keyboard from 'react-virtual-keyboard';

import ShadowCard from '../ShadowCard/ShadowCard';

import './SignInForm.css';


class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ userName: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.userName}`);
    event.preventDefault();
  }
  render() {
    return (
      <ShadowCard text="Sign In" >
        <form onSubmit={this.handleSubmit} className="form-container">

          <input className="form-element" type="text" placeholder="Username" value={this.state.userName} onChange={this.handleUsernameChange} />

          <input className="form-element" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />

          <input className="form-element" type="submit" value="Sign In" />

          <div>
            <Link to="/signUp"> Don't have an account? Sign Up</Link>
          </div>
        </form>
      </ShadowCard>


    );
  }
}

export default SignInForm;


// <div className="virtual-keyboard">
//           <Keyboard
//             name="keyboard"
//             options={{
//               type: 'input',
//               layout: 'qwerty',
//               alwaysOpen: true,
//               usePreview: false,
//               useWheel: false,
//               stickyShift: false,
//               appendLocally: true,
//               color: 'light',
//               updateOnChange: true,
//               initialFocus: true,
//               display: {
//               accept: 'Submit',
//               },
//           }}
//           />
//         </div>
