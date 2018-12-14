import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//testing
import { logout } from '../actions/session_actions'

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ProfileContainer from './profile/profile_container';
import UploadContainer from './profile/upload_container';

//before having container
import IndexComponent from './index/index_component'
import NavBar from './nav_bar/nav_bar'

const App = (props) => {
  return (
    <div>
      <ProtectedRoute component={NavBar} />
      <Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/profile' component={ProfileContainer} />
        <ProtectedRoute path='/upload' component={UploadContainer} />
        <ProtectedRoute path='/' component={IndexComponent} />
      </Switch>
      <button onClick={() => props.dispatch(logout())}>log out</button>
    </div>
  )
}

export default App;
