// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ZC_xEv-Zxd9LQPOiv720_oxi9j9qLzU",
  authDomain: "seekum-1ce54.firebaseapp.com",
  databaseURL: "https://seekum-1ce54-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "seekum-1ce54",
  storageBucket: "seekum-1ce54.appspot.com",
  messagingSenderId: "990280632064",
  appId: "1:990280632064:web:ba7929efd9354226bcd5e5",
  measurementId: "G-51TWQVEK1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

db.database().ref('users/').set({a: 100});