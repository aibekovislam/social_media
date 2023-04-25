import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayote from "../layots/MainLayote";

function MainRoutes() {
  return <Routes>
    <Route element={<MainLayote/>}>
        <Route path="/home" element={<HomePage/>}/>
    </Route>
  </Routes>
}

export default MainRoutes;
