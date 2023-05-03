import React from "react";
import "../info/maininfo.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function MainInfo() {
  return (
    <div>
      <div className="main-block-main">
        <div style={{ padding: "20px" }}>
          <h3 style={{ padding: "0 0  20px 0", color: "#4b4b4b" }}>
            Создайте свой профиль в LinkedIn
          </h3>
          <div className="main-block-second">
            <img
              style={{
                width: "100%",
                borderRadius: "10px 10px 0 0",
                padding: "0 0 10px 0",
              }}
              src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACwog6StkzhzSlK17m4iY5d_Xg.png"
              alt="photo"
            />
            <p
              style={{ padding: "15px 15px", color: "#252525", width: "310px" }}
            >
              Добавьте другие сведения о своем опыте работы и образовании.
            </p>
            <button className="button-main">Обновить профиль</button>
          </div>
        </div>
      </div>
      <div className="block-second">
        <div style={{ display: "flex" }}>
          <AccountCircleIcon
            style={{
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              margin: "5px",
              background: "white",
            }}
          />
          <input
            type="text"
            autocomplete="off"
            name="text"
            class="input-main"
            placeholder="Создать публикацию"
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            className="icon"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 5px",
            }}
          >
            <InsertPhotoRoundedIcon />
            <span>Photo</span>
          </div>
          <div
            className="icon"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 5px",
            }}
          >
            <VideoLibraryRoundedIcon />
            <span>Video</span>
          </div>
          <div
            className="icon"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 5px",
            }}
          >
            <CalendarTodayRoundedIcon />
            <span>Мероприятие</span>
          </div>
          <div
            className="icon"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 5px",
            }}
          >
            <AddBoxRoundedIcon />
            <span>Написать статью</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
