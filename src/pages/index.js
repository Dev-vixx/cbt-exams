import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { _AuthenticationX } from "../context/authenticationX";
import Home from "./home";
import LoginPage from "./login";
import RegisterPage from "./register";


export default function Index() {
const [auth,setAuth] = useState(true)
    
  
  return (
      <BrowserRouter>
      {!auth &&
    <>
       <Routes>
        <Route path="/login" exact element={<LoginPage/>}/>
        <Route path="/register" exact element={<RegisterPage/>}/>
        <Route path="*" element={<Navigate to={'/login'}/>}/>
      </Routes>
    </>}
    {/* auth route  */}
      {auth && <Routes>
      <Route path="/login"  element={<Navigate to={'/'}/>}/>
      <Route path="/register"  element={<Navigate to={'/'}/>}/>
      {/* main element display  */}
      <Route path="/" exact element={<Home/>} />
      <Route path="/completed" exact element={<h3>Completed wow!!!</h3>} />
      </Routes>}
      {/* if not logged in */}
      
      </BrowserRouter>
  );
}
