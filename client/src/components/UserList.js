import React from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions/';

function UserList(props) {
  const { users } = props;
  return (
    <div className="UserList">
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h2>Name: {user.firstName} {user.lastName}</h2>
            <h4>Email: {user.email}</h4>
            <p>Bio: {user.bio}</p>
            <button
              onClick={() => props.setCurrentUser(user)}
            >Become This User</button>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => {
    dispatch(actions.setCurrentUser(user));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);