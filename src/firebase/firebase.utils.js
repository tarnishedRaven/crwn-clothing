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

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalDate) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdOn = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdOn,
        ...additionalDate,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
