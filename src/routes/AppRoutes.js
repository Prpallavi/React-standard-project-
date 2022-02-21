import {Routes, Route } from "react-router-dom";
import React from 'react'
import { Updatepost } from "../components/pages";
import Home from "../components/pages/Registration/home/home";




function Approutes() {
  return (
    <div>
        
  
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/editpost' element={<Updatepost/>}/>
        
    </Routes>
     
    </div>
  )
}

export default Approutes