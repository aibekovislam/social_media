import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticleList from "../pages/ArticleList";
import MainLayote from "../layouts/MainLayote";
import Registration from "../pages/Registration";
import SignPage from "../pages/SignPage";
import MainPage from "../pages/MainPage";
import AuthPage from "../pages/AuthPage";
import ActivatePage from "../pages/ActivatePage";
import ArticleAdd from "../pages/ArticleAdd";

function MainRoutes() {
  return <Routes>
    <Route element={<MainLayote/>}>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/article" element={<ArticleList />} />
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/sign" element={<SignPage />} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/activate' element={<ActivatePage/>}></Route>
        <Route path='/add' element={<ArticleAdd/>}></Route>
    </Route>
  </Routes>
}

export default MainRoutes;
