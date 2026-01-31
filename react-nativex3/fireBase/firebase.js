
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNCRJib7MuDx4_GqMqeN3dHLlp9PhvIyM",
  authDomain: "react-nativex3.firebaseapp.com",
  projectId: "react-nativex3",
  storageBucket: "react-nativex3.firebasestorage.app",
  messagingSenderId: "503376504648",
  appId: "1:503376504648:web:193984f47941b4777cb57d",
  measurementId: "G-Q7DH5M5WRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)