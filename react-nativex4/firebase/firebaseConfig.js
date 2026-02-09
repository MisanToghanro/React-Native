// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXxhqRbbE55mV2Psbfj-7LHB-DbDUsRrs",
  authDomain: "react-nativex4-c23b7.firebaseapp.com",
  projectId: "react-nativex4-c23b7",
  storageBucket: "react-nativex4-c23b7.firebasestorage.app",
  messagingSenderId: "1074755907549",
  appId: "1:1074755907549:web:bfd4f65266ceee32c61034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
