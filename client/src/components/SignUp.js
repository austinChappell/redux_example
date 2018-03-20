import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions/';
import UserAPI from '../data/api/user';

const userAPI = new UserAPI();

const { createUser } = userAPI;

class SignUp extends Component {

  state = {
    bio: '',
    email: '',
    firstName: '',
    lastName: '',
  }

  handleChange = (evt, key) => {
    const { value } = evt.target;
    const o = {};
    o[key] = value;
    this.setState(o);
  }

  setUser = (user) => {
    this.props.addUser(user);
  }

  submit = () => {
    const { bio, email, firstName, lastName } = this.state;
    const user = { bio, email, firstName, lastName };
    createUser(user, this.setUser);
    this.setState({
      bio: '',
      email: '',
      firstName: '',
      lastName: '',
    })
  }

  render() {
    return (
      <div className="SignUp">
        <div className="form">
          <input
            onChange={(evt) => this.handleChange(evt, 'firstName')}
            placeholder="First"
            value={this.state.firstName}
          />
          <input
            onChange={(evt) => this.handleChange(evt, 'lastName')}
            placeholder="Last"
            value={this.state.lastName}
          />
          <input
            onChange={(evt) => this.handleChange(evt, 'email')}
            placeholder="Email"
            value={this.state.email}
          />
          <input
            onChange={(evt) => this.handleChange(evt, 'bio')}
            placeholder="Bio"
            value={this.state.bio}
          />
          <div>
            <button
              onClick={this.submit}
            >Submit</button>
          </div>
        </div>

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