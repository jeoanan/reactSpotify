import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Components/Home/Home.js';
import Canciones from '../Components/Canciones/Canciones.js'
import Menu from '../Components/Menu/Menu.js'

export default function Rutas(){
  return(
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="canciones" element={<Canciones />} />
      </Routes>
    </div>
  );
}