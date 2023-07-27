import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhDxdB-ACVY24PTf4qoL0Nv5Sljvi9B9Q",
  authDomain: "slack-clone-f314f.firebaseapp.com",
  projectId: "slack-clone-f314f",
  storageBucket: "slack-clone-f314f.appspot.com",
  messagingSenderId: "169544271948",
  appId: "1:169544271948:web:73a7355b97d33583848ce9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
