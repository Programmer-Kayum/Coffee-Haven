// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAgouULhP2eohmEm3NSUioiXc5qm-aEV8",
  authDomain: "coffee-haven.firebaseapp.com",
  projectId: "coffee-haven",
  storageBucket: "coffee-haven.firebasestorage.app",
  messagingSenderId: "683881550200",
  appId: "1:683881550200:web:ded23fa876e13bb95d388d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
