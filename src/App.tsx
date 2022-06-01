import './App.css';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import { useAuthState } from 'react-firebase-hooks/auth';

import { getFirebaseConfig } from './firebase-config.js';
import { SignIn } from './components/SignIn';
import { Chat } from './components/Chat';

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

function App() {
  const [user] = useAuthState(getAuth());

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  const signOutofGoogle = () => {
    signOut(getAuth());
  };

  return (
    <div className="app">
      {user ? (
        <Chat signOutofGoogle={signOutofGoogle} user={user} />
      ) : (
        <SignIn signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
}

export default App;
