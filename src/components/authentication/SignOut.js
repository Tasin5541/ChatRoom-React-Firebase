import React from "react";
import { auth } from "../firebaseConst";

export default function SignOut() {
  return (
    auth.currentUser && (
      // <button className="sign-out" onClick={() => auth.signOut()}>
      //   Sign Out
      // </button>
      <a className="signOutButton" href="" onClick={() => auth.signOut()}>
        <img className="signOutImage" src={auth.currentUser.photoURL} />

        <div className="logout">LOGOUT</div>
      </a>
    )
  );
}
