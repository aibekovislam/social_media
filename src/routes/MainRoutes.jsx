import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Registration from "../pages/Registration";

function MainRoutes() {
  return <Routes>
    <Route>
        <Route path="/home" element={<HomePage/>}/>
        <Route path='/registration' element={<Registration/>}></Route>
    </Route>
  </Routes>
}

export default MainRoutes;
