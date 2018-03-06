import React, { Component } from 'react';

export class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''}
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.email} />
      </div>
    )
  }
}
