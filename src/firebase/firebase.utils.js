// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwHZEfkpng7a1xfFJAWVbanCVbU3eNe18",
  authDomain: "crwn-db-3fea9.firebaseapp.com",
  projectId: "crwn-db-3fea9",
  storageBucket: "crwn-db-3fea9.appspot.com",
  messagingSenderId: "125759039610",
  appId: "1:125759039610:web:dbe0fae4007b7a371ab3c3",
  measurementId: "G-CEV7KYVHDY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
