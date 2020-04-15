import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAhmO59ZWHYd9Du8OvmcSRbgoam4rDBj9g",
  authDomain: "shopping-cart-b046b.firebaseapp.com",
  databaseURL: "https://shopping-cart-b046b.firebaseio.com",
  projectId: "shopping-cart-b046b",
  storageBucket: "shopping-cart-b046b.appspot.com",
  messagingSenderId: "352224833111",
  appId: "1:352224833111:web:b89c19fb7de465cc41bd12",
  measurementId: "G-8QMNBVB5JC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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

export default App;
