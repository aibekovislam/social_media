import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArticleList from "../pages/ArticleList";
import MainLayote from "../layouts/MainLayote";
import Registration from "../pages/Registration";
import SignPage from "../pages/SignPage";
import MainPage from "../pages/MainPage";
import AuthPage from "../pages/AuthPage";
import ActivatePage from "../pages/ActivatePage";
import ArticleAdd from "../pages/ArticleAdd";
import EditArticlePage from "../pages/EditArticlePage";
import { useAuthContext } from "../context/AuthContext";
import Comments from "../pages/Comments";

function MainRoutes() {
  const { user } = useAuthContext();
  return <Routes>
    <Route element={<MainLayote/>}>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path="/home" element={<HomePage/>}/>
        { user ? (<Route path="/article" element={<ArticleList />} />) : (<Route path='/auth' element={<AuthPage/>}  />) }
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/sign" element={<SignPage />} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/activate' element={<ActivatePage/>}></Route>
        <Route path='/add' element={<ArticleAdd/>}></Route>
        <Route path="/edit/:slug" element={<EditArticlePage />} />
        <Route path='/detail/:slug' element={<Comments/>}></Route>
    </Route>
  </Routes>
}

export default MainRoutes;
