// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnT4TxsLZ9sJnXILKifs6IYed3aUUN0w",
  authDomain: "dogs-1cdc6.firebaseapp.com",
  projectId: "dogs-1cdc6",
  storageBucket: "dogs-1cdc6.appspot.com",
  messagingSenderId: "190263073950",
  appId: "1:190263073950:web:583beb47b5a9f4c7c96f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider}