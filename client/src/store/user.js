const initialState = {
  currentUser: {
    bio: '',
    email: '',
    firstName: '',
    lastName: '',
    _id: '',
  },
  users: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const users = state.users.slice();
      users.push(action.user);
      return Object.assign({}, state, { users });
    case 'SET_ALL_USERS':
      return Object.assign({}, state, { users: action.users })
    case 'SET_CURRENT_USER':
      return Object.assign({}, state, { currentUser: action.currentUser })
    default:
      return state;
  }
}

export default reducer;