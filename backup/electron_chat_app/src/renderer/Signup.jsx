import React from "react";
import { Link } from "react-router";

import firebase from "firebase";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      photoURL: "",
      errors: [],
    }
  }

  handleOnSubmit(e) {
    const {email, password, name, photoURL} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(newUser => {
      return newUser.updateProfile({
        displayName: name,
        photoURL
      });
    }).then(() => {
      hashHistory.push('/rooms');
    }).catch(err => {
      this.setState({ errors: ["ERROR"]})
    })
  }

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <Link to="/rooms">Create new account</Link><br/>
        <Link to="/login">Cancel</Link>
      </div>
    );
  }
}