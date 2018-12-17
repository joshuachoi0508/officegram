import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//testing
import { logout } from '../actions/session_actions'

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ProfileContainer from './profile/profile_container';
import UploadContainer from './profile/upload_container';
import UserPageContainer from './profile/user_page_container';
import EditProfileContainer from './profile/edit_profile_container'

//before having container
import IndexComponent from './index/index_component'
import NavBar from './nav_bar/nav_bar'

const App = (props) => {
  return (
    <div className="boss-div">
      <ProtectedRoute component={NavBar} />
      <Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/profile/edit' component={EditProfileContainer} />
        <ProtectedRoute path='/profile' component={ProfileContainer} />
        <ProtectedRoute path='/upload' component={UploadContainer} />
        <ProtectedRoute path='/users/:id' component={UserPageContainer} />
        <ProtectedRoute path='/' component={IndexComponent} />
      </Switch>
    </div>
  )
}

export default App;
