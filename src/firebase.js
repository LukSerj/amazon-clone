import firebase from "firebase/compat";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYG27sVzHoEoOe5PbDzX_pQ_tHdJrEOlM",
  authDomain: "clone-77a14.firebaseapp.com",
  projectId: "clone-77a14",
  storageBucket: "clone-77a14.appspot.com",
  messagingSenderId: "213595752660",
  appId: "1:213595752660:web:08b429c02807642c281341",
  measurementId: "G-2JT189KVBL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };