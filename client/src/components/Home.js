import React from 'react';

import SignUp from './SignUp';
import UserList from './UserList';

function Home(props) {
  return (
    <div className="Home">
      <SignUp />
      <UserList />
    </div>
  )
}

export default Home;