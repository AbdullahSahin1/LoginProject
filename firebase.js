// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzHpFhpfzXJ-h0fSGKefotJzE_RL-Z6So",
  authDomain: "login-61bbb.firebaseapp.com",
  projectId: "login-61bbb",
  storageBucket: "login-61bbb.firebasestorage.app",
  messagingSenderId: "574471043253",
  appId: "1:574471043253:web:15747d26b89ecdb24626fc"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export {auth}
