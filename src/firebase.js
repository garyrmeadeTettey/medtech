import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "medtech-af597.firebaseapp.com",
  projectId: "medtech-af597",
  storageBucket: "medtech-af597.appspot.com",
  messagingSenderId: "250794386047",
  appId: "1:250794386047:web:9b4f3631429b41288f554a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth() 