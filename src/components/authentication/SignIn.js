import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebaseConst";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button
        className="sign-in login-with-google-btn"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </>
  );
}
