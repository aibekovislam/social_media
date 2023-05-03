import { Container } from "@mui/material";
import React from "react";
import "../message/message.css";
import TextMessage from "../panel/TextMessage";
import AnswerMessage from "../panel/AnswerMessage";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";

// import { Search } from "@mui/icons-material";

function Message() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="navbar-message">
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              margin: "10px",
              alignItems: "center",
            }}
          >
            <img
              style={{ borderRadius: "50px", height: "50px" }}
              src="https://sun2-21.userapi.com/s/v1/ig2/H-dYmnfn0GzrN1-OjJgR3aVjZfVl2aock8-tScL44yBHTIS2oBWK6lVte_8RU_fheHdedRvYubzDM0l-qQ8C8nlG.jpg?size=50x50&quality=96&crop=0,268,1620,1620&ava=1"
              alt=""
            />
            <h5 style={{ fontSize: "20px", margin: "0" }}>bayaman</h5>
          </div>
          <div
            class="search"
            style={{ margin: "10px", display: "flex", alignItems: "center" }}
          >
            <div
              className="phone-icon"
              style={{ marginRight: "10px", padding: "3px" }}
            >
              <PhoneEnabledRoundedIcon />
            </div>
            <div
              className="phone-icon"
              style={{ padding: "3px" }}
            >
              <PhoneIphoneRoundedIcon />
            </div>
            <input
              type="text"
              class="search__input"
              placeholder="Type your text"
            ></input>
            <div className="dots" style={{ padding: "3px", marginLeft: "3px" }}>
              <MoreVertRoundedIcon />
            </div>
          </div>
        </nav>
      </div>
      <Container>
        <div className="main-message">
          {/* <div className="navbar-message">
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
                <img
                  style={{ borderRadius: "50px", height: "50px" }}
                  src="https://sun2-21.userapi.com/s/v1/ig2/H-dYmnfn0GzrN1-OjJgR3aVjZfVl2aock8-tScL44yBHTIS2oBWK6lVte_8RU_fheHdedRvYubzDM0l-qQ8C8nlG.jpg?size=50x50&quality=96&crop=0,268,1620,1620&ava=1"
                  alt=""
                />
                <h5>bayaman</h5>
              </div>
              <div class="search" style={{ margin: "10px" }}>
                <input
                  type="text"
                  class="search__input"
                  placeholder="Type your text"
                ></input>
              </div>
            </nav>
          </div> */}
          <div className="dialog">
            <div>
              <TextMessage />
            </div>
            <div>
              <AnswerMessage />
            </div>
          </div>
          <div className="bottom-group">
            <input
              class="input-massage"
              name="text"
              placeholder="Message"
              type="search"
            ></input>
            <button className="button-message">&#127908;</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Message;
