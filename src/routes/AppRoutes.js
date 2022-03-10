import { Routes, Route } from "react-router-dom";
import React from "react";
import {  Countrydropdown, Home, Viewprofile } from "../components/pages";
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
      </Routes>
    </div>
  );
}

export default Approutes;
