// Your web app's Firebase configuration
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
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
var database = firebase.database();


database.ref('users/').set({'':''});