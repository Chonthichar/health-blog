// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3DuAKrGk5KAYyCxFoa8rmbXqXaVsBDqs",
  authDomain: "company-marketplace.firebaseapp.com",
  projectId: "company-marketplace",
  storageBucket: "company-marketplace.appspot.com",
  messagingSenderId: "3588687614",
  appId: "1:3588687614:web:21b473b3a69992b058c7af",
  measurementId: "G-EYTP6KSF9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()