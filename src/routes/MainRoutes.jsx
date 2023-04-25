import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticleList from "../pages/ArticleList";
import MainLayote from "../layots/MainLayote";

function MainRoutes() {
  return <Routes>
    <Route element={<MainLayote/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/article" element={<ArticleList />} />
    </Route>
  </Routes>
}

export default MainRoutes;
