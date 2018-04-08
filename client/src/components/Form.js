import React, { Component } from 'react';

class Form extends Component {
  state = {
    bio: '',
    email: '',
    firstName: '',
    lastName: '',
  }

  componentDidMount() {
    if (this.props.user) {
      this.loadUser();
    }
  }

  handleChange = (evt, key) => {
    const { value } = evt.target;
    const o = {};
    o[key] = value;
    this.setState(o);
  }

  loadUser = () => {
    const {
      bio,
      email,
      firstName,
      lastName,
    } = this.props.user;

    this.setState({
      bio: bio ? bio : '',
      email: email ? email : '',
      firstName: firstName ? firstName : '',
      lastName: lastName ? lastName : '',
    })
  }

  submit = () => {
    const {
      bio,
      email,
      firstName,
      lastName,
    } = this.state;

    const user = {
      bio,
      email,
      firstName,
      lastName,      
    }

    this.props.submit(user);

    this.setState({
      bio: '',
      email: '',
      firstName: '',
      lastName: '',
    })
  }

  render() {
    return (
      <div className="form">
        <input
          onChange={(evt) => this.handleChange(evt, 'firstName')}
          placeholder="First"
          value={this.state.firstName}
        />
        <input
          onChange={(evt) => this.handleChange(evt, 'lastName')}
          placeholder="Last"
          value={this.state.lastName}
        />
        <input
          onChange={(evt) => this.handleChange(evt, 'email')}
          placeholder="Email"
          value={this.state.email}
        />
        <input
          onChange={(evt) => this.handleChange(evt, 'bio')}
          placeholder="Bio"
          value={this.state.bio}
        />
        <div>
          <button
            onClick={this.submit}
          >
            {this.props.submitText}
          </button>
        </div>
      </div>
    )
  }
}

export default Form;