import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BaseLayout from './BaseLayout';
import Home from './Home';
import MyProfile from './MyProfile';

import store from '../store/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <BaseLayout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/my_profile" component={MyProfile} />
              </Switch>
            </BaseLayout>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
