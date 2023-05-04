import React from "react";
import "../static/homePage.css";
import MenuIcon from "@mui/icons-material/Menu";
import Chat from "../components/panel/Chat";
import message from "../components/message/Message";
import Message from "../components/message/Message";


function HomePage() {
  return (
    <div className="main-block">
      <div className="left-block">
        <div className="top">
          <div className="navbar">
            <MenuIcon className="burger-icon" />
            <input
              type="text"
              name="text"
              class="input-navbar"
              placeholder="Type..."
            ></input>
          </div>
          <div className="groups">
            <div className="groups__span">
              <span>All</span>
            </div>
            <div className="groups__span">
              <span>личные</span>
            </div>
            <div className="groups__span">
              <span>группы</span>
            </div>
          </div>
        </div>
        <div className="chats" style={{ marginTop: "10px" }}>
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </div>
      </div>
      <div className="right-block">
        <Message/>
      </div>
    </div>
  );
}

export default HomePage;
