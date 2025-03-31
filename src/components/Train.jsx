import React from 'react'
import t1 from "../assets/t1.jpg"
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const Train = () => {
  return (
    <div className="relative">
      <div className=" bg-n-1 px-10 justify-center ">
        

        <div className="flex flex-col px-5 lg:text-right lg:flex-row py-5 ">
          <div className="w-full relative overflow-hidden md:pl-[2%] md:pr-[5%]" >
                  <img
                      src={t1}
                      alt="Train"
                      className="mt-10 mb-5 relative border-black border-2 z-10"
                  >
                  </img>
          </div>
        <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
          <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">Workout Routine</h1>
          <p className="text-n-4 text-xl mb-10 leading-relaxed">
            Discover expertly crafted workout routines to enhance your performance, build strength, and improve overall fitness. Whether you're a beginner or a seasoned athlete, our plans will help you stay on track and reach your goals.
          </p>

          <button 
            className="text-n-4 bg-n-1 text-xl font-bold relative h-100vh px-10 py-5 border-solid border-r border-n-4 border-2 rounded-full hover:bg-n-2 hover:text-n-4"
          >
          <Link 
            to="/Routine" 
            className="w-full h-full flex items-center justify-center"
            onClick={handleClick}

          >
            Personalized workout plan for you!
          </Link>
          </button>
        </div>
        </div>
      </div>

      </div>
      
  )
}

export default Train;