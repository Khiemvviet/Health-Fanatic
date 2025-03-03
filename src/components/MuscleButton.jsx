import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { buttonData } from "../constants"

const MuscleButton = () => {
  const [hoveredButtons, setHoveredButtons] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredButtons((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setHoveredButtons((prevState) => ({ ...prevState, [index]: false }));
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  

  return (
    <div className="w-full min-h-[screen] py-10 ">
      <div className="text-n-4 text-center mt-10 ">
        <h1 className=" text-6xl font-bold ">Get Started!</h1>
        <p className="pt-10 text-xl">Learn how muscle is a key factor for your performance.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-3 pt-10 justify-center items-center">
        {buttonData.map((button, index) => (
          <div key={index} className="relative flex justify-center flex-wrap mb-10">
            <div className="w-[320px] h-[450px] bg-n-1 border-n-4 border-2 rounded-lg overflow-visible m-5 lg:w-[280px]">
              <img src={button.image} alt={button.text} className="w-full h-[75%] object-cover" />
              <div className="p-1 text-center mt-2 pb-9 justify-center items-center">
                <p className="text-xl pt-2">{button.description}</p>
                <Link to={button.link}>
                  <button
                  onClick={handleClick}
                    className={`text-n-1 text-xl font-bold justify-center items-center rounded-lg w-[175px] px-5 mt-2 mb-2 py-5 
                    ${hoveredButtons[index] ? "bg-n-2 text-n-4" : "bg-n-4"} hover:text-n-4`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {hoveredButtons[index] ? "Learn more" : button.text}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuscleButton;
