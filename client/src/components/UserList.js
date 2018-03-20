import React from 'react';
import { connect } from 'react-redux';

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
              style={{ backgroundColor: 'blue', color: 'white' }}
            >
              Become User
            </button>
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

export default connect(mapStateToProps)(UserList);