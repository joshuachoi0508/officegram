import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions.js';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
    history: ownProps.history,
    navLink: <Link to="/login">login instead</Link>
  }
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
