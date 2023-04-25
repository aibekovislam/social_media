import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticleList from "../pages/ArticleList";

function MainRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/article" element={<ArticleList />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
