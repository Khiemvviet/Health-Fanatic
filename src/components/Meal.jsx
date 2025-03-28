// In Meal.js
import React, { useState } from "react";
import { dietOptions } from "../constants"; 
import g2 from "../assets/g2.jpg"; 

const Meal = () => {
  const [nutrition, setNutrition] = useState(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return {
        calories: parsedData.bmr || "",
        carbs: parsedData.macros?.carbs || "",
        fats: parsedData.macros?.fats || "",
        protein: parsedData.macros?.protein || "",
      };
    }
    return { calories: "", carbs: "", fats: "", protein: "" };
  });

  const [selectedDiet, setSelectedDiet] = useState("");
  const [generatedMeals, setGeneratedMeals] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const generateMeal = () => {
    const mealPlan = dietOptions.find((diet) => diet.label === selectedDiet);
    if (!mealPlan) return;

    setSelectedImage(mealPlan.image); // Set image of selected diet
    setSelectedMeals(mealPlan.meals); // Set meals array containing name and ingredients

    const totalCalories = parseInt(nutrition.calories, 10);
    const totalCarbs = parseInt(nutrition.carbs, 10);
    const totalFats = parseInt(nutrition.fats, 10);
    const totalProtein = parseInt(nutrition.protein, 10);

    setGeneratedMeals({
      breakfast: { calories: totalCalories * 0.25, carbs: totalCarbs * 0.25, fats: totalFats * 0.25, protein: totalProtein * 0.25 },
      lunch: { calories: totalCalories * 0.35, carbs: totalCarbs * 0.35, fats: totalFats * 0.35, protein: totalProtein * 0.35 },
      dinner: { calories: totalCalories * 0.40, carbs: totalCarbs * 0.40, fats: totalFats * 0.40, protein: totalProtein * 0.40 },
    });
  };

  return (
    <div className="relative">
      <div className="bg-n-1 px-10 justify-center">
        <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5">
          <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
            <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">
              Effortless Nutrition, Personalized for You
            </h1>
            <p className="text-n-3 text-xl mb-10 leading-relaxed">
              Take the guesswork out of meal planning. Eat This Much designs customized meal plans tailored to your preferences, budget, and lifestyle.
            </p>
          </div>
          <img src={g2} alt="Meal" className="mt-10 mb-5 border-black border-2 z-10" />
        </div>
      </div>

      <div className="bg-n-1 flex flex-col items-center text-center py-10">
        <h1 className="font-bold text-5xl text-n-4 leading-loose mb-6">Create Your Meal Plan</h1>
        <div className="w-fit max-w-full p-8 border-2 border-n-4 rounded-2xl shadow-lg">
          <p className="text-n-4 text-xl mb-10 leading-relaxed">Preferred Diet</p>
          <div className="flex flex-wrap justify-center gap-8">
            {dietOptions.map((option, index) => (
              <button
                key={index}
                className={`w-40 lg:w-32 h-32 flex flex-col items-center justify-center border-2 rounded-lg text-n-4 shadow-md transition ${
                  selectedDiet === option.label ? "border-n-2 bg-n-3" : "border-n-4"
                }`}
                onClick={() => setSelectedDiet(option.label)}
              >
                {option.icon}
                <span className="mt-2 text-sm">{option.label}</span>
              </button>
            ))}
          </div>

          <button className="text-n-4 text-xl mt-5 font-bold border-n-4 border-2 px-10 py-5 rounded-full hover:bg-n-2" onClick={generateMeal}>
            Generate
          </button>
        </div>
      </div>

      {generatedMeals && (
        <div className="mt-10 text-center">
          <h2 className="font-bold text-3xl text-n-4 mb-4">Generated Meals</h2>
          {selectedImage && <img src={selectedImage} alt={selectedDiet} className="w-96 mx-auto mb-4 rounded-lg shadow-lg" />}
          <div className="flex justify-around">
            {Object.keys(selectedMeals).map((mealKey, idx) => {
              const meal = selectedMeals[mealKey];
              return (
                <div key={idx} className="flex flex-col items-center">
                  <h3 className="text-xl text-n-4">{meal.dishName}</h3>
                  <p className="text-sm">Ingredients: {meal.ingredients?.map((ing) => ing.name).join(", ")}</p>
                  <p className="text-sm">Calories: {generatedMeals[mealKey].calories.toFixed(0)}</p>
                  <p className="text-sm">Carbs: {generatedMeals[mealKey].carbs.toFixed(0)}g</p>
                  <p className="text-sm">Fats: {generatedMeals[mealKey].fats.toFixed(0)}g</p>
                  <p className="text-sm">Protein: {generatedMeals[mealKey].protein.toFixed(0)}g</p>
                  <div className="mt-4">
                    <h4 className="font-semibold">Instructions:</h4>
                    <ul className="list-disc text-sm">
                      {meal.instructions?.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meal;
