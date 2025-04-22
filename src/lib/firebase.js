// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDa_afduuoY-V2lRym4C7Z1a6PwWiNp91k",
  authDomain: "ytrendup-bc9ed.firebaseapp.com   ",
  projectId: "trendup-bc9ed",
  storageBucket: "trendup-bc9ed.firebasestorage.app",
  messagingSenderId: "209451448866",
  appId: "1:209451448866:web:c93ace2953ac40c411687b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
