import React from 'react'
import "../panel/chat.css";


function AnswerMessage() {
  return (
    <div style={{ display: "flex",alignItems:'center' }}>
      <div className="msg" style={{ marginLeft: "5px",margin: "10px 0 0 auto" }} class="card-text">
        <div class="text-message">
          <p className="user-name">Bayaman</p>
          <p class="message">а я тебя нет </p>
          <div>
            <span class="time">12:46</span>
          </div>
        </div>
      </div>
      <div class="img"></div>
    </div>
  );
}

export default AnswerMessage