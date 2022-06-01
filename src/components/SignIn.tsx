import { useState } from 'react';
import './SignIn.css';
import icon from '../noun-chat.svg';
import { Safe } from './Safe';

export const SignIn = () => {
  return (
    <div className="signInContainer">
      <div className="blob2"></div>
      <div className="titles">
        <h1>Friendly Chat</h1>
        <h2>With TypeScript</h2>
      </div>
      <img className="icon" src={icon} />
      <div className="signIn">
        <button className="signInButton">Sign in with Google</button>
        <p className="link">Is this safe?</p>
      </div>
    </div>
  );
};
