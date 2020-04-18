import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import validateInput from './loginValidator';

import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {}
    };
  }

  handleOnChange = e => {
    if (Object.keys(this.state.errors).length) {
      this.setState({
        errors: {}
      });
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    const { errors } = validateInput(userData);
    if (errors) {
      this.setState({
        errors
      });
    }
    console.log('ALL Data: ', userData);
  };

  render() {
    const { errors, firstName, lastName, email, password } = this.state;
    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Get Started Today!</h1>
            <Form onSubmit={this.handleSubmit} autoComplete="off" lg={12}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" name="firstName" onChange={this.handleOnChange} value={firstName} placeholder="Enter First name!" />
                {errors && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" name="lastName" onChange={this.handleOnChange} value={lastName} placeholder="Enter Last name!" />
                {errors && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" name="email" onChange={this.handleOnChange} value={email} placeholder="Enter Email ID" />
                {errors && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" onChange={this.handleOnChange} value={password} placeholder="Enter Password!" />
                {errors && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <br />
              <Button type="submit" style={{ backgroundColor: 'cadetblue', color: '#ffffff', border: 'none' }}>
                Claim your free trial!
              </Button>
            </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
