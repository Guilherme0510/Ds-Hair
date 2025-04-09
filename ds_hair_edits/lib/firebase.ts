/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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