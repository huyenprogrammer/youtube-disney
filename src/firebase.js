import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd4kQAXyv7J5EPuURkU0O4SxfQt5ZEtZg",
  authDomain: "disney-2023.firebaseapp.com",
  projectId: "disney-2023",
  storageBucket: "disney-2023.appspot.com",
  messagingSenderId: "934045729529",
  appId: "1:934045729529:web:edf7942b7797d213d65828",
  measurementId: "G-967JSNZ6Y2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
