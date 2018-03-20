import constants from './constants';

const actions = {
  addUser: (user) => {
    return { type: constants.ADD_USER, user };
  },

  setAllUsers: (users) => {
    return { type: constants.SET_ALL_USERS, users };
  }
}

export default actions;