import React from "react";
import "../panel/chat.css";


function TextMessage() {
  return (
    <div style={{ display: "flex",marginTop:'5px' }}>
      <div class="img"></div>
      <div className="msg" style={{ marginLeft: "5px" }} class="card-text">
        <div class="text-message">
          <p className="user-name">Maria</p>
          <p class="message">я люблю тебя </p>
          <div>
            <span class="time">12:45</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextMessage;
