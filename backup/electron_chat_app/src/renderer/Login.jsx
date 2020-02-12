import React from 'react';
import { Link, hashHistory } from 'react-router';

import firebase from "firebase";

const FORM_STYLE = {
  margin: "0 auto",
  padding: 30,
};

const SIGNUP_LINK_STYLE = {
  display: "inline-block",
  marginLeft: 10
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.userEmail || "",
      password: localStorage.userPassword || "",
      errors: [],
    };
  }

  // login処理のさせかた
  handleOnSubmit(e) {
    const { email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      localStorage.userEmail = email;
      localStorage.userPassword = password;
      hashHistory.push('/rooms');
    }).catch(() => {
      this.setState({errors: ["Incorrect email or password"]});
    })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Link to="/rooms">Login</Link><br/>
        <Link to="/signup">Crate new account</Link><br/>
      </div>
    );
  }
}