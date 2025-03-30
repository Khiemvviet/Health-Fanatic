import React from 'react';
import { Link } from 'react-router-dom';
import f2 from "../assets/f2.jpg";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const Intro = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={f2}
        alt="Soccer Stadium"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <div className="absolute flex px-10 flex-col bg-black/80 text-n-1 justify-center top-0 w-full h-full">
        <div id="Intro" className="font-bold text-5xl text-center mt-20 mb-20 pt-10">
          <h1>Nutrition</h1>
        </div>

        <div id="Description" className="lg:text-xl mt-2 mb-10 text-center px-10 py-10 space-y-5 lg:px-40">
          <p>
            Nutrition is key to achieving peak performance and maintaining overall well-being. 
            Combining effective training programs with balanced nutrition and health-focused practices 
            ensures you stay in top shape both on and off the field.
          </p>

          <div className="pt-5 pb-3 text-left">
            <ul className="space-y-4">
              <li>
                <strong>Match Stamina:</strong> Boost endurance to maintain energy throughout games.
              </li>
              <li>
                <strong>Injury Prevention:</strong> Focus on flexibility, stability, and recovery.
              </li>
              <li>
                <strong>Peak Performance:</strong> Use varied intensity to be game-ready.
              </li>
            </ul>
          </div>

          <Link to="/Nutrition" onClick={handleClick}>
            <button className="text-n-1 text-xl font-bold relative h-100vh px-10 py-5 border-solid border-r border-2 rounded-full hover:bg-n-1 hover:text-n-4 mt-9">
              Athlete Fuel 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
