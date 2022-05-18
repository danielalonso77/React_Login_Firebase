// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuDSQRVNbBzY08l0ZA0gTNeHaPaSC9mlw",
  authDomain: "login-auth-go.firebaseapp.com",
  projectId: "login-auth-go",
  storageBucket: "login-auth-go.appspot.com",
  messagingSenderId: "329046795977",
  appId: "1:329046795977:web:7c7acd1bfc05713a8b0f18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);