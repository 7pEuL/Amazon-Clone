// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
