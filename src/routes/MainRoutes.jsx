import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignPage from "../pages/SignPage";

function MainRoutes() {
  return <Routes>
    <Route>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/home" element={<SignPage/>}/>
    </Route>
  </Routes>
}

export default MainRoutes;
