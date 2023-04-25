import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

function MainRoutes() {
  return <Routes>
    <Route>
        <Route path="/home" element={<HomePage/>}/>
    </Route>
  </Routes>
}

export default MainRoutes;
