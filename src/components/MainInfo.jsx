import React from "react";
import ArticleAdd from "../pages/ArticleAdd";
import ArticleList from "../pages/ArticleList";
import "../static/mainInfo.css";
import ArticleLister from "./ArticleLister";

function MainInfo() {
  return (
    <div>
      {/* <div className="addPost">
        <ArticleAdd/>
      </div> */}
      {/* <div className="main-block-main">
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
      </div> */}
      <div className="articleList">
        <ArticleLister />
      </div>
    </div>
  );
}

export default MainInfo;
