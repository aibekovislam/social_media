import React from "react";
import MainInfo from "../components/info/MainInfo";
import LeftInfo from "../components/info/LeftInfo";
import RightInfo from "../components/info/RightInfo";
import { Container } from "@mui/material";

function MainPage() {
  return (
    <div style={{ background: "#f3f2ef",padding:'20px' }}>
      <Container>
        <div style={{ background: "#f3f2ef", display: "flex", gap: "30px" }}>
          <LeftInfo />
          <MainInfo />
          <RightInfo />
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
