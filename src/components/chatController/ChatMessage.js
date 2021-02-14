import React from "react";
import { auth } from "../firebaseConst";

export default function ChatMessage(props) {
  const { text, createdAt, uid, photoURL, displayName } = props.message;

  //const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const messageClass = uid === auth.currentUser.uid ? "right-msg" : "left-msg";

  return (
    <>
      <div className={`msg ${messageClass}`}>
        <div
          className="msg-img"
          style={{
            backgroundImage:
              "url(" + photoURL ||
              +"https://api.adorable.io/avatars/23/abott@adorable.png)",
          }}
        ></div>
        <div className="msg-wrapper">
          <div className="msg-info">
            <div className="msg-info-name">
              {messageClass === "left-msg" ? displayName : ""}
            </div>
            <div className="msg-info-time">
              {createdAt
                ?.toDate()
                .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
          <div className="msg-bubble">
            <div className="msg-text">{text}</div>
          </div>
        </div>
      </div>
    </>
  );
}
