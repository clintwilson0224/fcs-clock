// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYWetpl0hmeoiihYcp75drgmBXNLRcvh4",
  authDomain: "mobile-app-g---tracker.firebaseapp.com",
  projectId: "mobile-app-g---tracker",
  storageBucket: "mobile-app-g---tracker.firebasestorage.app",
  messagingSenderId: "74055334087",
  appId: "1:74055334087:web:667642adfff368c4d2a6e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);