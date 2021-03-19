import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { Link } from "react-router-dom";

const createChat = () => {
  const roomName = prompt("please enter name for chat");
  if (roomName) {
    db.collection("rooms").add({ name: roomName });
    db.collection("rooms").doc();
  }
};

function SidebarChat({ addNewChat, data, id }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setSeed(Math.random() * 5000);
  }, []);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="userChatData">
          <div className="chat__top">
            <h4 className="user__name">{data.name}</h4>
            {/* <p className="message__time">{messages[0].timestamp}</p> */}
          </div>
          <p>{messages[0].message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2 className="addnewchat">Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
