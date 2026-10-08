import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();

    this.setState({
      isLoggedIn: true,
    });
  };

  handleChangeEmail = (event) => {
    const email = event.target.value;

    this.setState({
      email,
      enableSubmit: this.isValidEmail(email) && this.state.password.length >= 8,
    });
  };

  handleChangePassword = (event) => {
    const password = event.target.value;

    this.setState({
      password,
      enableSubmit:
        this.isValidEmail(this.state.email) && password.length >= 8,
    });
  };

  isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="login-container">
        <p>Login to access the full dashboard</p>

        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>

          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;
