import React, { useState } from 'react'
import n1 from "../assets/N1.webp"
import { nutri } from "../constants";
import { health } from "../constants";
import { junk } from "../constants";
import { Link } from 'react-router-dom'; 



const Nutrition = () => {

  const ScrolltoSection =(id)=>{
    const section =document.getElementById(id)
    if(section){
      section.scrollIntoView({
        behavior:"smooth"
      });
    }
    
  };

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [bmr, setBmr] = useState("null");
  const [macros, setMacros] = useState({});
  const [result, setResult] = useState(false);

  const handleHC = (event) => setHeight(event.target.value);
  const handleWC = (event) => setWeight(event.target.value);
  const handleSC = (event) => setSex(event.target.value);
  const handleAC = (event) => setAge(event.target.value);
  const handleALC = (event) => setActivityLevel(event.target.value);

  const calculator = () => {
    const h= parseFloat(height);
    const w= parseFloat(weight);
    const a= parseFloat(age);
    


    if ((!isNaN(h) && h>0 ) && (!isNaN(w) && w>0 ) && (!isNaN(a) && a >0 ) && (sex === "male" || sex ==="female") && activityLevel )   {
      let calculBmr = 0;
      if (sex === "male"){
        calculBmr = 10 * w + 6.25 * h - 5 * a + 5;
      } else if (sex === "female"){
        calculBmr = 10 * w + 6.25 * h - 5 * a - 161;
      }

      let bmr =0;
      if (activityLevel === "sedentary") bmr= calculBmr*1.2
      if (activityLevel === "light") bmr= calculBmr*1.375
      if (activityLevel === "moderate") bmr= calculBmr*1.55
      if (activityLevel === "intense") bmr= calculBmr*1.725

      const protein = (bmr*0.25) /4;
      const carbs = (bmr*0.5) /4;
      const fats = (bmr*0.25) /9;

      const userData= {
        height: h,
        weight: w,
        age:a,
        sex,
        activityLevel,
        bmr: bmr.toFixed(0),
        macros:{
          protein: protein.toFixed(0),
          carbs: carbs.toFixed(0),
          fats: fats.toFixed(0),
        },

      };

      localStorage.setItem('userNutrition', JSON.stringify(userData));
      
      setBmr(bmr);
      setMacros({protein, carbs, fats}); 
      setResult(true)
    } else {
      setBmr("Please fill in all fields");
      setMacros(null);
      setResult(false)
    }

  };


  return (
    <div className="mt-20">
      <div className="flex flex-col bg-n-1 px-10 justify-center lg:flex-row">
        <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5 ">
          <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
            <h1 className="font-bold mt-20 mb-10 text-7xl text-n-4 leading-loose">Nutrition</h1>
            <p className="text-n-3 text-2xl mb-10 leading-relaxed">
              Nutrition is crucial for soccer players, as the sport requires stamina, agility, strength, and quick recovery. Here’s a guide to help you develop an optimal nutrition plan
            </p>
          </div>

          <div className="w-full relative overflow-hidden md:pl-[2%] md:pr-[5%]" >
            <div className="absolute inset-0 -m-5 bg-n-2"> </div>
              <img
                src={n1}
                alt="Nutri"
                className="mt-10 mb-5 relative border-black border-2 z-10"
              >
              </img>
          </div>

        </div>
      </div>


      <div className="grid grid-cols-1 py-10 px-5 gap-10 lg:grid-cols-3 bg-gray-200">
      {nutri.map((item, index) => (
        <div className="w-full text-center lg:text-left px-5 lg:pl-[10%] lg:mr-[10%] lg:mt-5">
            <div key={index}>
              <h1 className="font-bold mt-20 mb-10 text-2xl text-n-4 leading-loose">{item.title}</h1>
              <p className="text-n-3  mb-10 text-left  leading-relaxed">
                {item.text}
                {item.subtext && (
                  <ul className="text-n-3 list-disc text-left mb-10 leading-relaxed">
                    {item.subtext.map((point, idx) =>(
                      <li key={idx} className="pb-5">{point}</li>
                    ))}
                </ul>
                )}
              </p>

            </div>
          
            
        </div>
        ))}
      </div>

      <div className="bg-gray-200 flex pb-20 justify-center items-center">
        <a href= "https://www.betterhealth.vic.gov.au/health/healthyliving/sporting-performance-and-food" target="_blank" rel="noopener noreferrer">
          <button 
            className=" text-n-1 text-xl font-bold relative bg-n-4 h-100vh px-10 py-5 border-solid border-r border-2 rounded-lg hover:bg-n-2 hover:text-n-4"
          >
            Learn more
          </button>
        </a>
      </div>

      
      <div className="flex flex-col bg-n-1 px-10 justify-center lg:flex-row">
        <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5 ">
          <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
            <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 text-center">Macro Calculator</h1>
            <p className="text-n-3 text-xl mb-10 leading-relaxed">
              A macro calculator is a tool that helps individuals determine their daily intake of macronutrients—carbohydrates, proteins, and fats—based on their specific health and fitness goals. By inputting data such as age, gender, weight, activity level, and goals (e.g., weight loss, muscle gain, or maintenance), the calculator provides a personalized breakdown of how many grams of each macronutrient to consume daily. This helps users tailor their diet to support their desired outcomes, such as improving athletic performance, losing fat, or building muscle.
            </p>

            <div className="flex flex-col text-left lg:flex-row">
              <div className='flex flex-col'>
                <label className="flex flex-col text-2xl py-5 mb-5">
                  Height (cm):
                  <input
                  type="number"
                  value={height}
                  placeholder="Enter your height in cm"
                  onChange={handleHC}
                  className="border-n-4 border-2 px-2 text-xl py-2 mt-5 rounded-lg"
                  />
                </label>

                <label className="flex flex-col text-2xl py-5 mb-5">
                  Weight (kg):
                  <input
                  type="number"
                  value={weight}
                  placeholder="Enter your weight in kg"
                  onChange={handleWC}
                  className="border-n-4 border-2 px-2 text-xl py-2 mt-5 rounded-lg"
                  />
                </label>

                <label className="flex flex-col text-2xl py-5 mb-5">
                  Age:
                  <input
                  type="number"
                  value={age}
                  placeholder="Enter your age"
                  onChange={handleAC}
                  className="border-n-4 border-2 px-2 text-xl py-2 mt-5 rounded-lg"
                  />
                </label>
                

                <label className="flex flex-col text-2xl py-5 mb-5">
                  Sex:
                  <select 
                    value={sex} 
                    onChange={handleSC}
                    className="border-n-4 border-2 px-2 text-xl py-2 mt-5 rounded-lg"
                  >
                    <option value=""> Select sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>

                <label className="flex flex-col text-2xl py-5 mb-5">
                  Activity level:
                  <select 
                    value={activityLevel} 
                    onChange={handleALC}
                    className="border-n-4 border-2 px-2 text-xl py-2 mt-5 rounded-lg"
                  >
                    <option value=""> Select activity level</option>
                    <option value="sedentary">Sedentary (little or no exercise)</option>
                    <option value="light">Light (light exercise/sports 1-3 days/week)</option>
                    <option value="moderate">Moderate (moderate exercise/sports 3-5 days/week)</option>
                    <option value="intense">Intense (hard exercise/sports 6-7 days/week)</option>
                  </select>
                </label>
                
                <button 
                  className=" text-n-1 text-xl font-bold  px-10 py-5 mb-10 bg-n-4  border-solid border-r border-2 rounded-full hover:bg-n-2 hover:text-n-4"
                  onClick= {()=> {calculator(); ScrolltoSection("result")}}
                  >
                  Calculate
                </button>
              </div>
              <div id="result">
              {result && (
                <div className="w-full  relative md:pl-[2%] md:pr-[1%] lg:ml-48" >
                  <div className=" w-full  absolute z-0 inset-0 -m-5 bg-n-2 lg:mr-[10%]"> </div>
                  <div className="mt-5 mb-5 px-3 py-5  bg-gray-300 relative border-n-4 border-4 z-10 rounded-lg">
                    <h3 className="font-bold text-5xl">Daily Intake:</h3>
                    <p className="mt-5 py-3"><strong>BMR:</strong> {bmr.toFixed(0)} calories/day</p>
                    <p className="py-3"><strong>Protein:</strong> {macros.protein.toFixed(0)}  grams/day</p>
                    <p className="py-3"><strong>Fats:</strong> {macros.fats.toFixed(0)} grams/day</p>
                    <p className="py-3"><strong>Carbs:</strong> {macros.carbs.toFixed(0)} grams/day</p>

                    
                    <h3 className="font-bold mt-5 text-5xl">Eat:</h3>
                    <ul className=" px-5 py-3 list-disc">
                      {health.map((item, idx) => (
                          <li key={idx} className="mt-5">
                            {item.description}
                          </li>
                      ))}
                    </ul>

                    <h3 className="font-bold mt-5 text-5xl">Avoid:</h3>
                    <ul className="px-5 py-3 list-disc">
                      {junk.map((item, idx) => (
                          <li key={idx} className="mt-5">
                            {item.description}
                          </li>
                      ))}
                    </ul>
                    <div className="w-full flex justify-center items-center mt-10">
                      <button 
                        className="text-n-4 bg-n-1 text-xl font-bold relative h-100vh px-10 py-5 border-solid border-r border-n-4 border-2 rounded-full hover:bg-n-2 hover:text-n-4"
                      >
                        <Link 
                          to="/Meal" 
                          className="w-full h-full flex items-center justify-center"
                        >
                          Generate a meal for you!
                        </Link>
                      </button>
                    </div>
                  </div>
                  
                </div>
                
              )}
              
              </div>
            </div>
          </div>
        </div>
      </div>



      </div>
  )
}

export default Nutrition