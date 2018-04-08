import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions/';
import UserAPI from '../data/api/user';

import Form from './Form';

const userAPI = new UserAPI();

const { createUser } = userAPI;

class SignUp extends Component {

  setUser = (user) => {
    this.props.addUser(user);
  }

  submit = (user) => {
    createUser(user, this.setUser);
  }

  render() {
    return (
      <div className="SignUp">
        <Form
          submit={this.submit}
          submitText="Sign Up"
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(actions.addUser(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUp);