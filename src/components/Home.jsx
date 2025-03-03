import React from "react";
import Intro from "./Intro";
import MuscleButton from "./MuscleButton";
import Goat from "../assets/Goat1.mp4"
import AboutUs  from "./AboutUs";

const Home = () => {
  const ScrolltoSection =(id)=>{
    const section =document.getElementById(id)
    if(section){
      section.scrollIntoView({
        behavior:"smooth"
      });
    }
    
  };

  return (
    <>
    <div className="relative w-full h-screen mt-0">
      <video
      className="absolute top-0 left-0 w-full h-full object-cover sm: overflow-hidden"
      autoPlay
      loop
      muted
      >
        <source src= {Goat} type="video/mp4"/>
      </video>

      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center bg-black/50">
      <h1 className="text-n-1 text-6xl font-bold pb-20">Health Fanatic</h1>

      <button 
        className=" text-n-1 text-xl font-bold relative h-100vh px-10 py-5 border-solid border-r border-2 rounded-full hover:bg-n-1 hover:text-n-4"
        onClick={ () => ScrolltoSection("AboutUs")}
        >
        Learn more
      </button>

      </div>
    </div>

    <div>
      <div id= "AboutUs">
        <AboutUs />
      </div>
      <Intro />
      <MuscleButton />
    </div>
    </>
  );
};

export default Home;