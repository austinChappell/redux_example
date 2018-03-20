import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../store/actions/';
import UserAPI from '../data/api/user';

const userAPI = new UserAPI();

const { getAllUsers } = userAPI;

class NavBar extends Component {
  componentDidMount() {
    getAllUsers(this.setAllUsers);
  }

  setAllUsers = (users) => {
    this.props.setAllUsers(users)
  }

  render() {
    return (
      <div className="NavBar" >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my_profile">My Profile</Link>
          </li>
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAllUsers: (users) => {
      dispatch(actions.setAllUsers(users));
    }
  }
}

export default connect(null, mapDispatchToProps)(NavBar);