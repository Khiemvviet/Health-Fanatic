import React from 'react';
import f2 from "../assets/f1.jpg";

const Intro = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={f2}
        alt="Soccer Stadium"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <div className="absolute flex px-10 flex-col bg-black/80 text-n-1 justify-center top-0 w-full h-full">
        <div id="Intro" className="font-bold text-5xl  text-center mt-20 mb-20 pt-10">
          <h1>What is Athlete Workout?</h1>
        </div>

        <div id="Description" className=" lg:text-xl mt-5 mb-10 text-center px-20 py-10 space-y-5 lg:px-40">
        <p>Athlete workouts are training programs focused on building endurance, speed, strength, and agility to help players stay at peak performance on the field.</p>

          <div className="pt-5 pb-3 text-left">
            <ul className="space-y-4">
              <li>
                <strong>Match Stamina:</strong> Boost endurance to maintain energy throughout games.
              </li>
              <li>
                <strong>Explosive Power:</strong> Build strength for sprints, jumps, and fast turns.
              </li>
              <li>
                <strong>Agility & Footwork:</strong> Enhance reflexes and control for dribbling and defense.
              </li>
              <li>
                <strong>Core Stability:</strong> Improve balance for tackling and ball shielding.
              </li>
              <li>
                <strong>Injury Prevention:</strong> Focus on flexibility, stability, and recovery.
              </li>
              <li>
                <strong>Peak Performance:</strong> Use varied intensity to be game-ready.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
