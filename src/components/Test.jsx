
// // import React, { useState } from "react";
// // // import { dietOptions } from "../constants"; 
// // import g2 from "../assets/g2.jpg"; 

// // const Meal = () => {
// //   // const [nutrition, setNutrition] = useState(() => {
// //   //   const storedData = localStorage.getItem("userData");
// //   //   if (storedData) {
// //   //     const parsedData = JSON.parse(storedData);
// //   //     return {
// //   //       calories: parsedData.bmr || "",
// //   //       carbs: parsedData.macros?.carbs || "",
// //   //       fats: parsedData.macros?.fats || "",
// //   //       protein: parsedData.macros?.protein || "",
// //   //     };
// //   //   }
// //   //   return { calories: "", carbs: "", fats: "", protein: "" };
// //   // });

// //   // const [selectedDiet, setSelectedDiet] = useState("");
// //   // const [generatedMeals, setGeneratedMeals] = useState(null);
// //   // const [selectedImage, setSelectedImage] = useState(null);
// //   // const [selectedMeals, setSelectedMeals] = useState([]);

// //   // const generateMeal = () => {
// //   //   const mealPlan = dietOptions.find((diet) => diet.label === selectedDiet);
// //   //   if (!mealPlan) return;

// //   //   setSelectedImage(mealPlan.image); 
// //   //   setSelectedMeals(mealPlan.meals); 

// //   //   const totalCalories = parseInt(nutrition.calories, 10);
// //   //   const totalCarbs = parseInt(nutrition.carbs, 10);
// //   //   const totalFats = parseInt(nutrition.fats, 10);
// //   //   const totalProtein = parseInt(nutrition.protein, 10);

// //   //   setGeneratedMeals({
// //   //     breakfast: { calories: totalCalories * 0.25, carbs: totalCarbs * 0.25, fats: totalFats * 0.25, protein: totalProtein * 0.25 },
// //   //     lunch: { calories: totalCalories * 0.35, carbs: totalCarbs * 0.35, fats: totalFats * 0.35, protein: totalProtein * 0.35 },
// //   //     dinner: { calories: totalCalories * 0.40, carbs: totalCarbs * 0.40, fats: totalFats * 0.40, protein: totalProtein * 0.40 },
// //   //   });
// //   // };

// //   return (
// //     <div className="relative">
// //       <div className="bg-n-1 px-10 justify-center">
// //         <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5">
// //           <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
// //             <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">
// //               Effortless Nutrition, Personalized for You
// //             </h1>
// //             <p className="text-n-3 text-xl mb-10 leading-relaxed">
// //               Take the guesswork out of meal planning. Eat This Much designs customized meal plans tailored to your preferences, budget, and lifestyle.
// //             </p>
// //           </div>
// //           <div className="w-full relative overflow-hidden md:pl-[2%] md:pr-[5%]" >
// //             <div className="absolute inset-0 -m-5 bg-n-2"> </div>
// //               <img
// //                   src={g2}
// //                   alt="Meal"
// //                   className="mt-10 mb-5 relative border-black border-2 z-10"
// //               >
// //               </img>
// //             </div>
// //         </div>
// //       </div>

// //       {/* <div className="bg-n-1 flex flex-col items-center text-center py-10">
// //         <h1 className="font-bold text-5xl text-n-4 leading-loose mb-6">Create Your Meal Plan</h1>
// //         <div className="w-fit max-w-full p-8 border-2 border-n-4 rounded-2xl shadow-lg">
// //           <p className="text-n-4 text-xl mb-10 leading-relaxed">Preferred Diet</p>
// //           <div className="flex flex-wrap justify-center gap-8">
// //             {dietOptions.map((option, index) => (
// //               <button
// //                 key={index}
// //                 className={`w-40 lg:w-32 h-32 flex flex-col items-center justify-center border-2 rounded-lg text-n-4 shadow-md transition ${
// //                   selectedDiet === option.label ? "border-n-2 bg-n-3" : "border-n-4"
// //                 }`}
// //                 onClick={() => setSelectedDiet(option.label)}
// //               >
// //                 {option.icon}
// //                 <span className="mt-2 text-sm">{option.label}</span>
// //               </button>
// //             ))}
// //           </div>

// //           <button className="text-n-4 text-xl mt-5 font-bold border-n-4 border-2 px-10 py-5 rounded-full hover:bg-n-2" onClick={generateMeal}>
// //             Generate
// //           </button>
// //         </div>
// //       </div>

// //       {generatedMeals && (
// //         <div className="mt-10 text-center">
// //           <h2 className="font-bold text-3xl text-n-4 mb-4">Generated Meals</h2>
// //           {selectedImage && <img src={selectedImage} alt={selectedDiet} className="w-96 mx-auto mb-4 rounded-lg shadow-lg" />}
// //           <div className="flex justify-around">
// //             {Object.keys(selectedMeals).map((mealKey, idx) => {
// //               const meal = selectedMeals[mealKey];
// //               return (
// //                 <div key={idx} className="flex flex-col items-center">
// //                   <h3 className="text-xl text-n-4">{meal.dishName}</h3>
// //                   <p className="text-sm">Ingredients: {meal.ingredients?.map((ing) => ing.name).join(", ")}</p>
// //                   <p className="text-sm">Calories: {generatedMeals[mealKey].calories.toFixed(0)}</p>
// //                   <p className="text-sm">Carbs: {generatedMeals[mealKey].carbs.toFixed(0)}g</p>
// //                   <p className="text-sm">Fats: {generatedMeals[mealKey].fats.toFixed(0)}g</p>
// //                   <p className="text-sm">Protein: {generatedMeals[mealKey].protein.toFixed(0)}g</p>
// //                   <div className="mt-4">
// //                     <h4 className="font-semibold">Instructions:</h4>
// //                     <ul className="list-disc text-sm">
// //                       {meal.instructions?.map((instruction, index) => (
// //                         <li key={index}>{instruction}</li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       )} */}
// //     </div>
// //   );
// // };

// // export default Meal;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; 
// import g2 from "../assets/g2.jpg";
// import { LuSandwich, LuWheatOff, LuGrape, LuVegan } from "react-icons/lu";
// import { TbMeat } from "react-icons/tb";
// import { GiBroccoli } from "react-icons/gi";

// const Meal = () => {
//   const [nutrition, setNutrition] = useState(() => {
//     const storedData = localStorage.getItem("userData");
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       return {
//         calories: parsedData.bmr || "",
//         carbs: parsedData.macros?.carbs || "",
//         fats: parsedData.macros?.fats || "",
//         protein: parsedData.macros?.protein || "",
//       };
//     }
//     return { calories: "", carbs: "", fats: "", protein: "" };
//   });

//   // State for selected diet
//   const [selectedDiet, setSelectedDiet] = useState("");

//   // State for generated meals
//   const [generatedMeals, setGeneratedMeals] = useState(null);

//   const dietOptions = [
//     { icon: <LuSandwich size={80} color='f2ff33' />, label: "Anything" },
//     { icon: <LuWheatOff size={80} color='ffd133'/>, label: "Keto" },
//     { icon: <LuGrape size={80} color='e333ff'/>, label: "Mediterranean" },
//     { icon: <TbMeat size={80} color='ff6b33'/>, label: "Paleo" },
//     { icon: <LuVegan size={80} color='33ff56'/>, label: "Vegan" },
//     { icon: <GiBroccoli size={80} color='green' />, label: "Vegetarian" }
//   ];

//   // Meal generation logic
//   const generateMeal = () => {
//     const totalCalories = parseInt(nutrition.calories, 10);
//     const totalCarbs = parseInt(nutrition.carbs, 10);
//     const totalFats = parseInt(nutrition.fats, 10);
//     const totalProtein = parseInt(nutrition.protein, 10);

//     // Meal distribution (simple example: 25% breakfast, 35% lunch, 40% dinner)
//     const breakfast = {
//       calories: totalCalories * 0.25,
//       carbs: totalCarbs * 0.25,
//       fats: totalFats * 0.25,
//       protein: totalProtein * 0.25,
//     };

//     const lunch = {
//       calories: totalCalories * 0.35,
//       carbs: totalCarbs * 0.35,
//       fats: totalFats * 0.35,
//       protein: totalProtein * 0.35,
//     };

//     const dinner = {
//       calories: totalCalories * 0.40,
//       carbs: totalCarbs * 0.40,
//       fats: totalFats * 0.40,
//       protein: totalProtein * 0.40,
//     };

//     // Set the generated meals
//     setGeneratedMeals({
//       breakfast,
//       lunch,
//       dinner,
//     });
//   };

//   return (
//     <div className="relative">
//       <div className="bg-n-1 px-10 justify-center">
//         <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5">
//           <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
//             <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">Effortless Nutrition, Personalized for You</h1>
//             <p className="text-n-3 text-xl mb-10 leading-relaxed">
//               Take the guesswork out of meal planning. Eat This Much designs customized meal plans tailored to your preferences, budget, and lifestyle.
//             </p>
//           </div>

//           <div className="w-full relative overflow-hidden md:pl-[2%] md:pr-[5%] top-10 bottom-10">
//             <div className="absolute inset-0 -m-5 bg-n-2 top-10"></div>
//             <img src={g2} alt="Meal" className="mt-10 mb-5 relative border-black border-2 z-10" />
//           </div>
//         </div>
//       </div>

//       <div className="bg-n-1 flex flex-col items-center text-center py-10">
//         <h1 className="font-bold text-5xl text-n-4 leading-loose mb-6">
//           Create Your Meal Plan
//         </h1>
//         <div className="w-fit max-w-full p-8 border-2 border-n-4 rounded-2xl shadow-lg">
//           <p className="text-n-4 text-xl mb-10 leading-relaxed">Preferred Diet</p>
//           <div className="flex flex-wrap justify-center gap-8 grid-cols-6">
//             {dietOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className={`w-40 lg:w-32 h-32 flex flex-col items-center justify-center border-2 rounded-lg text-n-4 bg-n-1 shadow-md hover:bg-n-3 transition ${
//                   selectedDiet === option.label ? "border-n-2 bg-n-3" : "border-n-4"
//                 }`}
//                 onClick={() => setSelectedDiet(option.label)}
//               >
//                 {option.icon}
//                 <span className="mt-2 text-sm">{option.label}</span>
//               </button>
//             ))}
//           </div>

//           <div className="mt-10 text-center">
//             <p className="text-n-4 text-xl mb-4">I want to eat</p>
//             <div className="flex justify-center gap-8">
//               <div className="flex flex-col items-center">
//                 <input
//                   type="number"
//                   value={nutrition.calories}
//                   onChange={(e) => setNutrition({ ...nutrition, calories: e.target.value })}
//                   placeholder="2000"
//                   className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
//                 />
//                 <span className="text-sm">calories</span>
//               </div>
//             </div>

//             <p className="text-n-4 text-xl mb-4 mt-6">At least</p>
//             <div className="flex justify-center gap-8">
//               <div className="flex flex-col items-center">
//                 <input
//                   type="number"
//                   value={nutrition.carbs}
//                   onChange={(e) => setNutrition({ ...nutrition, carbs: e.target.value })}
//                   placeholder="50"
//                   className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
//                 />
//                 <span className="text-sm">g Carbs</span>
//               </div>

//               <div className="flex flex-col items-center">
//                 <input
//                   type="number"
//                   value={nutrition.fats}
//                   onChange={(e) => setNutrition({ ...nutrition, fats: e.target.value })}
//                   placeholder="44"
//                   className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
//                 />
//                 <span className="text-sm">g Fat</span>
//               </div>

//               <div className="flex flex-col items-center">
//                 <input
//                   type="number"
//                   value={nutrition.protein}
//                   onChange={(e) => setNutrition({ ...nutrition, protein: e.target.value })}
//                   placeholder="50"
//                   className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
//                 />
//                 <span className="text-sm">g Protein</span>
//               </div>
//             </div>

//             <p className="mt-6 text-n-3 text-sm">
//               Not sure?{" "}
//               <span className="text-n-3">Try our </span>
//               <Link 
//                 to="/nutrition" 
//                 className="font-bold underline text-n-4 cursor-pointer hover:text-n-2"
//               >
//                 Calorie Calculator
//               </Link>
//             </p>

//             <button 
//                 className="text-n-4 text-xl mt-5 font-bold relative h-100vh border-n-4 border-2 px-10 py-5 rounded-full hover:bg-n-2 hover:text-n-4"
//                 onClick={generateMeal}
//             >
//                 Generate
//             </button>
//           </div>
//         </div>
//       </div>

//       {generatedMeals && (
//         <div className="mt-10 text-center">
//           <h2 className="font-bold text-3xl text-n-4 mb-4">Generated Meals</h2>
//           <div className="flex justify-around">
//             {['breakfast', 'lunch', 'dinner'].map((meal, idx) => (
//               <div key={idx} className="flex flex-col items-center">
//                 <h3 className="text-xl text-n-4 capitalize">{meal}</h3>
//                 <p className="text-sm">Calories: {generatedMeals[meal].calories.toFixed(0)}</p>
//                 <p className="text-sm">Carbs: {generatedMeals[meal].carbs.toFixed(0)}g</p>
//                 <p className="text-sm">Fats: {generatedMeals[meal].fats.toFixed(0)}g</p>
//                 <p className="text-sm">Protein: {generatedMeals[meal].protein.toFixed(0)}g</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Meal;



