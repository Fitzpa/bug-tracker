import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAZY-jN853SgJgHBAnSemsCjuqy3RNgQ0w',
  authDomain: 'louies-bug-tracker.firebaseapp.com',
  databaseURL: 'https://louies-bug-tracker.firebaseio.com',
  projectId: 'louies-bug-tracker',
  storageBucket: 'louies-bug-tracker.appspot.com',
  messagingSenderId: '157659007859',
  appId: '1:157659007859:web:4aa8c3c127cb7c81951306',
  measurementId: 'G-WKMYDF21D4',
});

export { firebaseConfig as firebase };

// TODO Set up users authentication in firebase
