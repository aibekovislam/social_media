import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticleList from "../pages/ArticleList";
import MainLayote from "../layots/MainLayote";
import Registration from "../pages/Registration";
import SignPage from "../pages/SignPage";
import ChatPage from "../pages/ChatPage";
import Settings from "../pages/settings/Settings";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayote />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/article" element={<ArticleList />} />
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/sign" element={<SignPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
