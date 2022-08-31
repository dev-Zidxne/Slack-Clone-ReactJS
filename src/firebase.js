import firebase from "firebase/compat/app"; //v9
import "firebase/compat/auth"; //v9
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore"; //v9
const firebaseConfig = {
  apiKey: "AIzaSyDwkDpzol1cAg3Z7JZ0Qiy06ZkSXfuTMqQ",
  authDomain: "slack-clone-reactjs-4de85.firebaseapp.com",
  projectId: "slack-clone-reactjs-4de85",
  storageBucket: "slack-clone-reactjs-4de85.appspot.com",
  messagingSenderId: "945647303105",
  appId: "1:945647303105:web:0440900a68194b6be7d740",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firebaseApp };
