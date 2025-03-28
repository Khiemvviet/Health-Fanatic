import React, { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import  Contact from "./components/Contact";
import Footer from "./components/Footer";
import MuscleButton from "./components/MuscleButton";
import Nutrition from "./components/Nutrition";
import Plan from "./components/Plan"
import Back from "./components/Back";
import Chest from "./components/Chest";
import Core from "./components/Core";
import Drill from "./components/Drill";
import LowerBody from "./components/LowerBody";
import Meal from "./components/Meal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="home" className="pt-[3rem] font-t bg-n-1 overflow-hidden">
          <Header />

          <Routes>
            <Route path= "/" element = {<Home/>} />
            <Route path= "/Back" element = {<Back/>} />
            <Route path= "/Chest" element = {<Chest/>} />
            <Route path= "/Core" element = {<Core/>} />
            <Route path= "/Drill" element = {<Drill/>} />
            <Route path= "/LowerBody" element = {<LowerBody/>} />
            <Route path= "/Nutrition" element = {<Nutrition/>} />
            <Route path= "/Meal" element = {<Meal/>} />
            <Route path= "/Plan" element = {<Plan/>} />
            <Route path= "/Contact" element = {<Contact/>} />
          </Routes>

          <Footer/>

      </div>

    </>
  );
};

export default App
