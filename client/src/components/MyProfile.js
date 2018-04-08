import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';

import UserAPI from '../data/api/user';

import Form from './Form';

const userAPI = new UserAPI();

const { updateUser } = userAPI;

class MyProfile extends Component {
  submit = (user) => {
    const { _id: id } = this.props.currentUser;
    updateUser(id, user, this.updateUser)
  }

  updateUser = (updatedUser) => {
    const users = this.props.users.slice();
    const { _id: id } = updatedUser;
    const selectedUser = users.find(user => user._id === id);
    Object.assign(selectedUser, updatedUser);
    this.props.setAllUsers(users);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="MyProfile">
        <Form
          user={currentUser}
          submit={this.submit}
          submitText="Update"       
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  users: state.userReducer.users,
});

const mapDispatchToProps = dispatch => ({
  setAllUsers: (users) => {
    dispatch(actions.setAllUsers(users));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);