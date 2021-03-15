import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";

const createChat = () => {
  const roomName = prompt("please enter name for chat");
  if (roomName) {
    db.collection("rooms").add({ name: roomName });
  }
};

function SidebarChat({ addNewChat, data }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.random() * 5000);
  }, []);
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="userChatData">
        <div className="chat__top">
          <h4 className="user__name">{data.name}</h4>
          <p className="message__time">6:16 pm</p>
        </div>
        <p>message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2 className="addnewchat">Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
