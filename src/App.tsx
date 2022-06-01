import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { AnyRecord } from 'dns';
import { SignIn } from './components/SignIn';
import { Chat } from './components/Chat';
import { Safe } from './components/Safe';

firebase.initializeApp({
  apiKey: 'AIzaSyDGI-KH9benHsCtCUq_Z3tnbZthuzui7S8',
  authDomain: 'reactfriendlychat.firebaseapp.com',
  projectId: 'reactfriendlychat',
  storageBucket: 'reactfriendlychat.appspot.com',
  messagingSenderId: '667588774051',
  appId: '1:667588774051:web:5c7d5cb4ab7edc9d2d5716',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // const [user] = useAuthState(auth as any);
  // https://stackoverflow.com/questions/70628540/argument-of-type-firebase-default-auth-auth-is-not-assignable-to-parameter-of

  const user = true;

  return <div className="app">{user ? <Chat /> : <SignIn />}</div>;
}

export default App;
