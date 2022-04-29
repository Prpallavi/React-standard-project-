import { Routes, Route } from "react-router-dom";
import React from "react";
import {  Agcrud, Cards, Countrydropdown, Home, NewsPage, Scroll, Viewprofile } from "../components/pages";
import { Updatepost, Profile, Login } from "../components/pages";


function Approutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editpost" element={<Updatepost />} />
        <Route path="/form" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={< Viewprofile/>} />
        <Route path="/show" element={< Countrydropdown/>} />
        <Route path="/card" element={< Cards/>} />
        <Route path="/scroll" element={< Scroll/>} />
        <Route path="/paginate" element={< NewsPage/>} />
        <Route path="crud/" element={< Agcrud/>} />
      </Routes>
    </div>
  );
}

export default Approutes;
