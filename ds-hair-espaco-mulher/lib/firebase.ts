// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClZVKTZhCvFo0bVrwSQPxHHd879t1M_es",
  authDomain: "dshairedits.firebaseapp.com",
  projectId: "dshairedits",
  storageBucket: "dshairedits.firebasestorage.app",
  messagingSenderId: "192801567343",
  appId: "1:192801567343:web:fbb51c10e2dda48823d39a",
  measurementId: "G-0VK3W0SSB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);