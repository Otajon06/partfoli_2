import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, collection, getDocs, addDoc, signOut} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBzqcQHVcHHZ5iRhPqu5H_Ml03Yc0EjNo",
  authDomain: "project2-b2cd4.firebaseapp.com",
  projectId: "project2-b2cd4",
  storageBucket: "project2-b2cd4.appspot.com",
  messagingSenderId: "625517901039",
  appId: "1:625517901039:web:ad284274954fa58ae9571a",
  measurementId: "G-1BR05DJ4TN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth }
export { collection, getDocs, addDoc, signOut};