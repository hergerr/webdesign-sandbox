import './App.css';
import {LoginRegisterBox} from './components/login-register-box/login-register-box.component';
import React from 'react';

function App() {
  return (
    <div className="App">
      <p className="App-logo">LG</p>
      <title className="App-title">Learn German!</title>
      <p className="App-description">
        Hi! This is an app which helps you to learn german language.
        Through modern memotechniques we are able to maximize your
        progress without taking more of your precious time or effort.
      </p>
      <LoginRegisterBox className="App-login-register"/>
    </div>
  );
}

export default App;
