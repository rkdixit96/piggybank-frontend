import React, { Component } from 'react';

import Keyboard from 'react-virtual-keyboard';

import ShadowCard from '../ShadowCard/ShadowCard';

import './SignInBody.css';


class SignInBody extends Component {
  render() {
    return (
      <div className="sign-in-body" >
        <ShadowCard text="Sign In" orientation="vertical">

          <div className="form-container">
            <div className="form-element">
              <input type="text" placeholder="username" />
            </div>
            <div className="form-element">
              <input type="password" placeholder="password" />
            </div>
            <div className="form-element">
              <input type="button" value="Sign In" />
            </div>
          </div>

          <div className="virtual-keyboard">
            <Keyboard
              name="keyboard"
              options={{
                type: 'input',
                layout: 'qwerty',
                alwaysOpen: true,
                usePreview: false,
                useWheel: false,
                stickyShift: false,
                appendLocally: true,
                color: 'light',
                updateOnChange: true,
                initialFocus: true,
                display: {
                accept: 'Submit',
                },
            }}
            />
          </div>
        </ShadowCard>

      </div>

    );
  }
}

export default SignInBody;
