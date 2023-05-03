import React from "react";
import "./Chat.css";
import search from "./search.png";
function ChatPage() {
  return (
    <div>
      <input type="text" name="text" class="input"></input>
      <img src={search} className="search"></img>
    </div>
  );
}

export default ChatPage;
