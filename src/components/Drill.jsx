import React from 'react';
import { drill } from "../constants";
import v2 from "../assets/v2.mp4"
import Contact from "./Contact";


const Drill = () => {
  return (
    <>
    <div className="relative w-full h-screen mt-10">
      <video
      className="absolute top-0 left-0 w-full h-full object-cover sm:overflow-hidden"
      autoPlay
      loop
      muted
      >
        <source src= {v2} type="video/mp4"/>
      </video>

      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center bg-black/50">
      <h1 className="text-n-1 text-center text-6xl font-bold pb-20">Perfect your skills, dominate the game.</h1>


      </div>
    </div>
    <div className="relative">
      {drill.map((item, index) => (
        <div key={index} className="bg-n-1 px-10 mt-20 justify-center">
          <div className="px-5 lg:text-left py-10">
            <div id="Intro" className="w-full px-5  flex flex-col lg:flex-row text-balance lg:text-left lg:pl-[5%] lg:mr-[20%] lg:mt-5">
              <div className="flex flex-col lg:mr-48 lg:w-1/2">
              <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">{item.text}</h1>
              <p className="text-n-3 text-xl mb-10 leading-relaxed">
                {item.description}
                <br />
                <span>
                  <strong>Focus: </strong>{item.focus}
                </span>
                <br />
                <span>
                  <strong>Sets/Reps: </strong>{item.duration}
                </span>
                <br />
                <span>
                  <strong>Benefits: </strong>{item.benefit}
                </span>
              </p>
              </div>

              <div className=" relative overflow-hidden md:pl-[2%] md:pr-[5%] lg:h-full lg:block lg:w-1/2 px-5 lg:px-5">
              <div className="absolute inset-0 -m-5 bg-n-2"> </div>
                <img src={item.image} alt="exercise" className="mt-10 mb-5 relative w-[full] border-n-4 border-2 z-10 lg:mr-10" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div>
      <Contact />
    </div>
    </>
  );
};

export default Drill;
