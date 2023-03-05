// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr9P-RoQ2_hkFdlRrD_s91iqDoNt5eSbE",
  authDomain: "clone-85b58.firebaseapp.com",
  projectId: "clone-85b58",
  storageBucket: "clone-85b58.appspot.com",
  messagingSenderId: "665153698604",
  appId: "1:665153698604:web:dd1f99310a1fe87e0c8a89",
  measurementId: "G-YYKZWNN6F6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
