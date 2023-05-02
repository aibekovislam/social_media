import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticleList from "../pages/ArticleList";
import MainLayote from "../layots/MainLayote";
import Registration from "../pages/Registration";
import SignPage from "../pages/SignPage";
import MainPage from "../pages/MainPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayote />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/article" element={<ArticleList />} />
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/sign" element={<SignPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
