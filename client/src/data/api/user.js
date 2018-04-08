import { apiURL } from '../data';

class UserAPI {

  createUser = (user, cb) => {
    return fetch(`${apiURL}/api/users`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(results => cb(results))
      .catch(err => {
        throw err;
      })
  }

  getAllUsers = (cb) => {
    return fetch(`${apiURL}/api/users`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(results => cb(results))
      .catch(err => {
        throw err;
      });
  }

  getUser = (id, cb) => {
    return fetch(`${apiURL}/api/users/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(results => cb(results))
      .catch(err => {
        throw err;
      });
  }

  updateUser = (id, body, cb) => {
    return fetch(`${apiURL}/api/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(body),
    }).then(res => res.json())
      .then(results => cb(results))
      .catch(err => {
        throw err;
      })
  }

}

export default UserAPI;