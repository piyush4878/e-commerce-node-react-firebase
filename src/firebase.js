// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSW0msau6O7jKY8jX-HcoT_AO9wuDAgbU",
  authDomain: "clone-90907.firebaseapp.com",
  projectId: "clone-90907",
  storageBucket: "clone-90907.appspot.com",
  messagingSenderId: "323820587043",
  appId: "1:323820587043:web:caa65f62959d0ed1390996",
  measurementId: "G-YGHG8QREVZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
