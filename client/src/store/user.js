const initialState = {
  currentUser: {
    bio: 'The bio',
    email: 'austin@test.com',
    firstName: 'Austin',
    lastName: 'Chappell',
  },
  users: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('INSIDE THE ADD USER CASE', action)
      const users = state.users.slice();
      users.push(action.user);
      return Object.assign({}, state, { users });
    case 'SET_ALL_USERS':
      return Object.assign({}, state, { users: action.users })
    default:
      return state;
  }
}

export default reducer;