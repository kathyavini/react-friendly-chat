/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: 'AIzaSyDGI-KH9benHsCtCUq_Z3tnbZthuzui7S8',
  authDomain: 'reactfriendlychat.firebaseapp.com',
  projectId: 'reactfriendlychat',
  storageBucket: 'reactfriendlychat.appspot.com',
  messagingSenderId: '667588774051',
  appId: '1:667588774051:web:5c7d5cb4ab7edc9d2d5716',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
