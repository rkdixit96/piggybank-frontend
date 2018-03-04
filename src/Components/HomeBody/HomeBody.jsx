import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';


import './HomeBody.css';

import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

class HomeBody extends Component {
  render() {
    return (
      <Router>
        <div className="HomeBody" >
          <div className="sign-in-form">
            <div>

              <Route exact path="/" component={SignInForm} />
              <Route path="/signUp" component={SignUpForm} />

            </div>

          </div>
        </div>
      </Router>
    );
  }
}

export default HomeBody;
