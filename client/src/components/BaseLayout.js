import React, { Fragment } from 'react';

import NavBar from './NavBar';

function BaseLayout(props) {
  return (
    <Fragment>
      <NavBar />
      {props.children}
    </Fragment>
  )
}

export default BaseLayout;