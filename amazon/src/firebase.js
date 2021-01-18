import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAJWQwp9dSa036a5xAjPjy1q-AGyUlaGIM",
  authDomain: "clone-b5b99.firebaseapp.com",
  projectId: "clone-b5b99",
  storageBucket: "clone-b5b99.appspot.com",
  messagingSenderId: "1012578823729",
  appId: "1:1012578823729:web:3753c6633b310be1b5af10",
  measurementId: "G-GGGHVMK0Y7",
});

const db = firebase.firestore();

export default db;
