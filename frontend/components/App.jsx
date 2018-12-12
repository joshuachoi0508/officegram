import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//testing
import { logout } from '../actions/session_actions'

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container'
import IndexComponent from './index/index_component'

const App = (props) => {
  return (
    <div>
      <Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/' component={IndexComponent} />
      </Switch>
      <button onClick={() => props.dispatch(logout())}>log out</button>
    </div>
  )
}

export default App;
