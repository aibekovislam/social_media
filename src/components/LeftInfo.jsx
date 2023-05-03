import React from "react";
import "../static/leftinfo.css";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { useAuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/consts";

function LeftInfo() {
  const { user } = useAuthContext();
  return (
    <div>
      <div className="left-block-main">
        <div style={{ background: "#a0b4b7", borderRadius: "10px 10px 0 0" }}>
          <div style={{ margin: "0 auto" }}>
            { !user?.profile?.avatar ? (
              <PhotoCameraRoundedIcon
              style={{
                alignItems: "center",
                margin: "10px auto",
                display: "flex",
                background: "white",
                borderRadius: "50px",
                padding: "15px",
                fontSize: "46px",
                position: "relative",
                top: "50px",
              }}
            />
            ) : (
              <img src={`${BASE_URL}/${user?.profile?.avatar}`} style={{ width: '72px', height: '72px', objectFit: 'cover', alignItems: "center",
                margin: "10px auto",
                display: "flex",
                fontSize: "46px",
                position: "relative",
                top: "50px", }} />
            ) }
          </div>
        </div>
        <div style={{ padding: "40px 0px 10px 0px", borderBottom: "1px solid #bebebc" }}>
          <h4
            style={{
              width: "180px",
              margin: "10px auto 10px",
              textAlign: "center",
              color: "#3c3c3c",
            }}
          >
            { user?.username }
          </h4>
        </div>
        <div
          className="set"
          style={{ padding: "10px", borderBottom: "1px solid #bebebc" }}
        >
          <p style={{ color: "#818181" }}>Сеть контактов</p>
          <p>Расширьте свою сеть контактов</p>
        </div>
        <div
          className="set"
          style={{ padding: "10px", borderBottom: "1px solid #bebebc" }}
        >
          <p style={{ color: "#818181" }}>
            Доступ к эксклюзивным инструментам и статистике
          </p>
          <p>Попробовать Premium бесплатно</p>
        </div>
        <div
          className="set"
          style={{ display: "flex", alignItems: "center", padding: "10px 7px" }}
        >
          <DescriptionRoundedIcon />
          <p>Мои заметки </p>
        </div>
      </div>
      <div className="left-block-second">
        <div className="links">
          <a className="link" href="https://www.linkedin.com/groups/">
            Группы
          </a>
          <a className="link" href="https://www.linkedin.com/events/">
            Мероприятия
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/feed/following/?filterType=channel&focused=true"
          >
            Отслеживание хэштеги
          </a>
        </div>
        <button className="button-left">Поиск новых</button>
      </div>
    </div>
  );
}

export default LeftInfo;