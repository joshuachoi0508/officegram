import React from 'react';
import { Route } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container'

const App = () => (
  <div>
    <h1>OfficeGram COMING SOON</h1>

    <Route path='/login' component={LoginFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
  </div>
)

export default App;
