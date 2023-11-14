import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP6mOII8CYS_l52nGhqiFzdRjaiI4awsE",
  authDomain: "clone-d5b65.firebaseapp.com",
  projectId: "clone-d5b65",
  storageBucket: "clone-d5b65.appspot.com",
  messagingSenderId: "545668881804",
  appId: "1:545668881804:web:5b7fba1a0033ee87c58aa9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider}
