import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HeadAndNav from "../pagetest/HeadAndNav";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";
import Layout from "../pages/Layout";
import Info from "./Info";
import Links from "./Links";
import Contents from "./Contents";
import Footer from "./Footer";
import Home from "./Home";
import Board from "./Board";
import About from "./About";

function AppTest() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HeadAndNav/>}>
          <Route index element={<Home/>}/>
          <Route path={"board"} element={<Board/>}/>
          <Route path={"about"} element={<About/>}/>
          <Route path={"*"} element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppTest;
