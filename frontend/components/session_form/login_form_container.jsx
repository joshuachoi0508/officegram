import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
    history: ownProps.history
  };
};

const mapDispatchToProps = dispatch => {
  return{
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
