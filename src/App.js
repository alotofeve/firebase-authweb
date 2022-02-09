
import './App.css';
import React, { Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp (firebaseConfig);

class App extends Component {
  render(){
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className = "App">
        <header className = "App-header">
          {
            user
             ? <p>Hello, {user.displayName}</p>
             :<p> Please sign in. </p>
          }

          {
            user
              ? (<button onClick = {signOut}>Sign out </button>)
              :(<button onClick = {signInWithGoogle} >Sign in with Google </button>)
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
