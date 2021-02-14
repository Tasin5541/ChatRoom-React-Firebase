import React from "react";
import "./App.css";

import { auth } from "./components/firebaseConst";

import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/authentication/SignIn";
import SignOut from "./components/authentication/SignOut";
import ChatRoom from "./components/chatController/ChatRoom";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>
          <span>💬</span>
        </h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
