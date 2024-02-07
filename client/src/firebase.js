// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log( import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-15ffa.firebaseapp.com",
  projectId: "mern-blog-15ffa",
  storageBucket: "mern-blog-15ffa.appspot.com",
  messagingSenderId: "756170112871",
  appId: "1:756170112871:web:b0ef6c91b9124015ca39c2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 