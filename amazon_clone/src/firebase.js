import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCuRA1M9O-x_QPtC8X1JEHVwPXOI9bZH04",
  authDomain: "ama-zon-clone-e6442.firebaseapp.com",
  projectId: "ama-zon-clone-e6442",
  storageBucket: "ama-zon-clone-e6442.appspot.com",
  messagingSenderId: "372412638047",
  appId: "1:372412638047:web:398ae3c0d27bf037b94cea",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();

export default db;
