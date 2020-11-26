// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC0OkvbFQoH4dLSzjAf6djTCXji4V79tdE",
    authDomain: "onlinebook-app.firebaseapp.com",
    databaseURL: "https://onlinebook-app.firebaseio.com",
    projectId: "onlinebook-app",
    storageBucket: "onlinebook-app.appspot.com",
    messagingSenderId: "417762130279",
    appId: "1:417762130279:web:71c5f1160800f07dcf97c2",
    measurementId: "G-57N4K1FLEF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;