import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDd4kQAXyv7J5EPuURkU0O4SxfQt5ZEtZg",
  authDomain: "disney-2023.firebaseapp.com",
  projectId: "disney-2023",
  storageBucket: "disney-2023.appspot.com",
  messagingSenderId: "934045729529",
  appId: "1:934045729529:web:edf7942b7797d213d65828",
  measurementId: "G-967JSNZ6Y2",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { provider, storage };
export default db;
