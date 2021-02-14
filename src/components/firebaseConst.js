import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyD6f-cAc-wWj-ZGi2nnWq15IaKgDfDrr-E",
  authDomain: "chat-room---react.firebaseapp.com",
  projectId: "chat-room---react",
  storageBucket: "chat-room---react.appspot.com",
  messagingSenderId: "1021266637022",
  appId: "1:1021266637022:web:64db3e265172a52da5524f",
  measurementId: "G-3C62XF95EC",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { auth, firestore, analytics };
