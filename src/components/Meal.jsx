import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import g2 from "../assets/g2.jpg";
import { LuSandwich, LuWheatOff, LuGrape, LuVegan } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { GiBroccoli } from "react-icons/gi";
import Any_B from "../assets/Meal/Anything-b.jpg";
import Any_D from "../assets/Meal/Anything-D.jpg";
import Any_L from "../assets/Meal/Anything-L.jpg";
import Keto_B from "../assets/Meal/Keto-B.jpg";
import Keto_D from "../assets/Meal/Keto-D.jpg";
import Keto_L from "../assets/Meal/Keto-L.jpg";
import Med_B from "../assets/Meal/Med-B.jpg";
import Med_D from "../assets/Meal/Med-D.jpeg";
import Med_L from "../assets/Meal/Med-L.jpg";
import Pa_B from "../assets/Meal/Pa-B.webp";
import Pa_D from "../assets/Meal/Pa-D.jpg";
import Pa_L from "../assets/Meal/Pa-L.jpg";
import Ve_B from "../assets/Meal/Ve-B.jpg";
import Ve_D from "../assets/Meal/Ve-D.jpg";
import Ve_L from "../assets/Meal/Ve-L.jpg";
import Vegan_B from "../assets/Meal/Vegan-B.jpg";
import Vegan_D from "../assets/Meal/Vegan-D.jpg";
import Vegan_L from "../assets/Meal/Vegan-L.jpg"


const dietOptions = [
    {
      icon: <LuSandwich size={80} color="f2ff33" />,
      label: "Anything",
      meals: {
        breakfast: {
          dishName: "Protein-Packed Oatmeal",
          image: Any_B,
          ingredients: [
            "Rolled Oats: 40 grams",
            "Banana: 50 grams",
            "Almond Butter: 16 grams",
            "Milk: 120 ml",
            "Chia seeds: 15 grams"
          ],
          instructions: [
            "1. Cook the oats according to the package instructions, using almond milk or water.",
            "2. Once the oats are cooked, stir in the protein powder until well combined.",
            "3. Top with sliced banana, almond butter, chia seeds, and a sprinkle of cinnamon."
          ]
        },
        lunch: {
          dishName: "Grilled Chicken and Quinoa Salad",
          image: Any_L,
          ingredients: [
            "Chicken Breast: 120 grams",
            "Quinoa: 90 grams",
            "Mixed Greens: 30 grams",
            "Cherry Tomatoes: 50 grams",
            "Cucumber (Sliced): 50 grams",
            "Olive oil: 15 grams"
          ],
          instructions: [
            "1. Grill the chicken breast until cooked through and slice it into strips.",
            "2. Toss the cooked quinoa with mixed greens, cherry tomatoes, and cucumber.",
            "3. Drizzle with olive oil and lemon juice, then season with salt and pepper.",
            "4. Top with grilled chicken strips."
          ]
        },
        dinner: {
          dishName: "Salmon with Roasted Vegetables and Sweet Potato",
          image: Any_D,
          ingredients: [
            "Salmon Fillet: 150 grams",
            "Sweet Potato: 200 grams",
            "Broccoli Florets: 100 grams",
            "Olive Oil: 15 grams",
            "Garlic Powder: 1 gram",
            "Salt: 0.5 gram",
            "Pepper: 0.5 gram",
            "Fresh Parsley: 5 grams (optional)"
          ],
          instructions: [
            "1. Preheat the oven to 200°C (400°F).",
            "2. Toss the sweet potato cubes and broccoli florets in olive oil, garlic powder, salt, and pepper.",
            "3. Place the veggies on a baking sheet and roast for 25-30 minutes, or until tender.",
            "4. While the veggies roast, cook the salmon on a hot grill or skillet for about 3-4 minutes per side, until cooked through.",
            "5. Serve the salmon with the roasted veggies, and sprinkle with fresh parsley if desired."
          ]
        }
      }
    },
    {
      icon: <LuWheatOff size={80} color="ffd133" />,
      label: "Keto",
      meals: {
        breakfast: {
          dishName: "Avocado Omelette",
          image: Keto_B,
          ingredients: [
            "Eggs: 120 grams",
            "Avocado: 100 grams",
            "Cheese: 30 grams",
            "Spinach: 50 grams"
          ],
          instructions: [
            "1. Beat the eggs and add the spinach.",
            "2. Heat the pan and cook the eggs with spinach.",
            "3. Slice the avocado and place on top of the omelette.",
            "4. Add cheese, fold, and serve."
          ]
        },
        lunch: {
          dishName: "Keto Salad",
          image: Keto_L,
          ingredients: [
            "Avocado: 100 grams",
            "Chicken: 150 grams",
            "Olives: 30 grams",
            "Spinach: 50 grams",
            "Cheese: 40 grams"
          ],
          instructions: [
            "1. Cook the chicken and slice it.",
            "2. Mix the spinach, olives, and avocado.",
            "3. Top with chicken and cheese.",
            "4. Toss together and serve."
          ]
        },
        dinner: {
          dishName: "Grilled Salmon & Asparagus",
          image: Keto_D,
          ingredients: [
            "Salmon: 150 grams",
            "Asparagus: 100 grams",
            "Butter: 20 grams",
            "Garlic: 5 grams"
          ],
          instructions: [
            "1. Preheat the grill or skillet.",
            "2. Season the salmon and grill for 4-5 minutes per side.",
            "3. Cook asparagus in butter and garlic for 4-5 minutes.",
            "4. Serve the salmon with the asparagus."
          ]
        }
      }
    },
    {
      icon: <LuGrape size={80} color="e333ff" />,
      label: "Mediterranean",
      meals: {
        breakfast: {
          dishName: "Greek Yogurt with Nuts and Berries",
          image: Med_B,
          ingredients: [
            "Greek Yogurt: 200 grams",
            "Almonds: 30 grams",
            "Honey: 15 grams",
            "Berries: 50 grams"
          ],
          instructions: [
            "1. Scoop the Greek yogurt into a bowl.",
            "2. Top with almonds, honey, and fresh berries.",
            "3. Serve and enjoy!"
          ]
        },
        lunch: {
          dishName: "Greek Salad",
          image: Med_L,
          ingredients: [
            "Cucumber: 100 grams",
            "Tomato: 100 grams",
            "Olives: 30 grams",
            "Feta Cheese: 50 grams",
            "Olive Oil: 15 grams"
          ],
          instructions: [
            "1. Chop the cucumber and tomato.",
            "2. Combine with olives, feta cheese, and olive oil.",
            "3. Toss and serve."
          ]
        },
        dinner: {
          dishName: "Grilled Fish & Quinoa",
          image: Med_D,
          ingredients: [
            "Fish: 150 grams",
            "Quinoa: 100 grams",
            "Zucchini: 80 grams",
            "Lemon: 10 grams"
          ],
          instructions: [
            "1. Grill the fish with lemon juice and herbs.",
            "2. Cook the quinoa according to package instructions.",
            "3. Sauté zucchini with olive oil and serve with the fish."
          ]
        }
      }
    },
    {
      icon: <TbMeat size={80} color="ff6b33" />,
      label: "Paleo",
      meals: {
        breakfast: {
          dishName: "Scrambled Eggs & Sweet Potato",
          image: Pa_B,
          ingredients: [
            "Eggs: 120 grams",
            "Sweet Potato: 150 grams",
            "Olive Oil: 10 grams",
            "Spinach: 50 grams"
          ],
          instructions: [
            "1. Scramble the eggs with olive oil and spinach.",
            "2. Roast the sweet potato slices in the oven or skillet.",
            "3. Serve together."
          ]
        },
        lunch: {
          dishName: "Paleo Bowl",
          image: Pa_L,
          ingredients: [
            "Chicken: 150 grams",
            "Sweet Potato: 150 grams",
            "Spinach: 50 grams",
            "Avocado: 100 grams"
          ],
          instructions: [
            "1. Grill the chicken and slice it.",
            "2. Roast the sweet potatoes.",
            "3. Assemble the bowl with chicken, sweet potato, spinach, and avocado."
          ]
        },
        dinner: {
          dishName: "Steak & Roasted Vegetables",
          image: Pa_D,
          ingredients: [
            "Steak: 200 grams",
            "Bell Peppers: 100 grams",
            "Mushrooms: 100 grams",
            "Olive Oil: 15 grams"
          ],
          instructions: [
            "1. Grill or pan-sear the steak.",
            "2. Roast bell peppers and mushrooms with olive oil.",
            "3. Serve together."
          ]
        }
      }
    },
    {
      icon: <LuVegan size={80} color="33ff56" />,
      label: "Vegan",
      meals: {
        breakfast: {
          dishName: "Oatmeal & Fruits",
          image: Vegan_B,
          ingredients: [
            "Oats: 50 grams",
            "Banana: 100 grams",
            "Almond Milk: 200 grams",
            "Chia Seeds: 10 grams"
          ],
          instructions: [
            "1. Cook the oats with almond milk.",
            "2. Slice the banana and add to the oatmeal.",
            "3. Sprinkle chia seeds on top and serve."
          ]
        },
        lunch: {
          dishName: "Vegan Burrito",
          image: Vegan_L,
          ingredients: [
            "Black Beans: 100 grams",
            "Rice: 100 grams",
            "Lettuce: 50 grams",
            "Guacamole: 30 grams",
            "Salsa: 30 grams"
          ],
          instructions: [
            "1. Warm the rice and black beans.",
            "2. Layer the rice, beans, lettuce, guacamole, and salsa in a tortilla.",
            "3. Roll it up and serve."
          ]
        },
        dinner: {
          dishName: "Tofu Stir-fry",
          image: Vegan_D,
          ingredients: [
            "Tofu: 150 grams",
            "Broccoli: 100 grams",
            "Soy Sauce: 20 grams",
            "Carrots: 80 grams"
          ],
          instructions: [
            "1. Sauté the tofu in soy sauce until crispy.",
            "2. Stir-fry the broccoli and carrots.",
            "3. Combine tofu with vegetables and serve."
          ]
        }
      }
    },
    {
      icon: <GiBroccoli size={80} color="green" />,
      label: "Vegetarian",
      meals: {
        breakfast: {
          dishName: "Smoothie Bowl",
          image: Ve_B,
          ingredients: [
            "Banana: 100 grams",
            "Berries: 100 grams",
            "Almond Milk: 200 grams",
            "Granola: 30 grams"
          ],
          instructions: [
            "1. Blend the banana, berries, and almond milk.",
            "2. Pour into a bowl and top with granola."
          ]
        },
        lunch: {
          dishName: "Vegetarian Pasta",
          image: Ve_L,
          ingredients: [
            "Pasta: 100 grams",
            "Tomato Sauce: 150 grams",
            "Olives: 30 grams",
            "Mozzarella: 40 grams",
            "Basil: 10 grams"
          ],
          instructions: [
            "1. Cook the pasta according to package instructions.",
            "2. Heat the tomato sauce and toss with pasta.",
            "3. Add olives, mozzarella, and basil on top."
          ]
        },
        dinner: {
          dishName: "Stuffed Peppers",
          image: Ve_D,
          ingredients: [
            "Bell Peppers: 150 grams",
            "Quinoa: 100 grams",
            "Black Beans: 100 grams",
            "Corn: 50 grams"
          ],
          instructions: [
            "1. Cook quinoa and mix with black beans and corn.",
            "2. Stuff bell peppers with the quinoa mixture.",
            "3. Roast the stuffed peppers for 20 minutes and serve."
          ]
        }
      }
    }
  ];


  const Meal = () => {
    const [nutrition, setNutrition] = useState({
      calories: "",
      carbs: "",
      fats: "",
      protein: ""
    });
  
    const [selectedDiet, setSelectedDiet] = useState("");
    const [generatedMeals, setGeneratedMeals] = useState(null);
  
    // Input handlers for user nutrition data
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNutrition((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const generateMeal = () => {
      const totalCalories = parseInt(nutrition.calories, 10);
      const totalCarbs = parseInt(nutrition.carbs, 10);
      const totalFats = parseInt(nutrition.fats, 10);
      const totalProtein = parseInt(nutrition.protein, 10);
  
      const breakfast = {
        calories: totalCalories * 0.25,
        carbs: totalCarbs * 0.25,
        fats: totalFats * 0.25,
        protein: totalProtein * 0.25,
      };
  
      const lunch = {
        calories: totalCalories * 0.35,
        carbs: totalCarbs * 0.35,
        fats: totalFats * 0.35,
        protein: totalProtein * 0.35,
      };
  
      const dinner = {
        calories: totalCalories * 0.40,
        carbs: totalCarbs * 0.40,
        fats: totalFats * 0.40,
        protein: totalProtein * 0.40,
      };
  
      setGeneratedMeals({
        breakfast,
        lunch,
        dinner,
      });
    };
  
    return (
      <div className="relative">
        <div className="bg-n-1 px-10 justify-center">
          <div className="flex flex-col px-5 lg:text-left lg:flex-row py-5">
            <div id="Intro" className="w-full text-center lg:text-left lg:pl-[10%] lg:mr-[10%] lg:mt-5">
              <h1 className="font-bold mt-20 mb-10 text-5xl text-n-4 leading-loose">Effortless Nutrition, Personalized for You</h1>
              <p className="text-n-3 text-xl mb-10 leading-relaxed">
                Take the guesswork out of meal planning. Eat This Much designs customized meal plans tailored to your preferences, budget, and lifestyle.
              </p>
            </div>
  
            <div className="w-full relative overflow-hidden md:pl-[2%] md:pr-[5%] top-10 bottom-10">
              <div className="absolute inset-0 -m-5 bg-n-2 top-10"></div>
              <img src={g2} alt="Meal" className="mt-10 mb-5 relative border-black border-2 z-10" />
            </div>
          </div>
        </div>


       
    <div className='bg-n-1 flex flex-col items-center text-center py-10'>
    <h1 className="font-bold text-5xl text-n-4 leading-loose mb-6">
          Create Your Meal Plan
    </h1>
    <div className="w-fit max-w-full p-8 border-2 border-n-4 rounded-2xl shadow-lg">
        <div className="bg-n-1 flex flex-wrap gap-6 grid-cols-3 justify-center py-10">
          {dietOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedDiet(option.label)}
              className={`w-40 lg:w-32 h-32 flex flex-col items-center justify-center border-2 rounded-lg text-n-4 bg-n-1 shadow-md hover:bg-n-3 transition ${selectedDiet === option.label ? "border-n-2 bg-n-3" : "border-n-4"}`}
            >
              {option.icon}
              <span className="mt-2 text-lg">{option.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-10 text-center">
              <p className="text-n-4 text-xl mb-4">I want to eat</p>
              <div className="flex justify-center gap-8">
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={nutrition.calories}
                    onChange={(e) => setNutrition({ ...nutrition, calories: e.target.value })}
                    placeholder="2000"
                    className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
                  />
                  <span className="text-sm">calories</span>
                </div>
              </div>
  
              <p className="text-n-4 text-xl mb-4 mt-6">At least</p>
              <div className="flex justify-center gap-8">
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={nutrition.carbs}
                    onChange={(e) => setNutrition({ ...nutrition, carbs: e.target.value })}
                    placeholder="50"
                    className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
                  />
                  <span className="text-sm">g Carbs</span>
                </div>
  
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={nutrition.fats}
                    onChange={(e) => setNutrition({ ...nutrition, fats: e.target.value })}
                    placeholder="44"
                    className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
                  />
                  <span className="text-sm">g Fat</span>
                </div>
  
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={nutrition.protein}
                    onChange={(e) => setNutrition({ ...nutrition, protein: e.target.value })}
                    placeholder="50"
                    className="w-24 p-2 border-2 border-n-4 rounded-lg mb-2 text-center"
                  />
                  <span className="text-sm">g Protein</span>
                </div>
              </div>
  
              <p className="mt-6 text-n-3 text-sm">
                Not sure?{" "}
                <span className="text-n-3">Try our </span>
                <Link 
                  to="/nutrition" 
                  className="font-bold underline text-n-4 cursor-pointer hover:text-n-2"
                >
                  Calorie Calculator
                </Link>
              </p>
              <button 
                  className="text-n-4 text-xl mt-5 font-bold relative h-100vh border-n-4 border-2 px-10 py-5 rounded-full hover:bg-n-2 hover:text-n-4"
                  onClick={generateMeal}
              >
                  Generate
              </button>
              </div>
        </div>
        </div>
  
        {selectedDiet && generatedMeals && (
          <div className="bg-n-2 py-10 px-5">
            <h2 className="text-2xl text-n-4 mb-5">{selectedDiet} Meal Plan</h2>
            <div className="flex flex-col space-y-5">
              {['breakfast', 'lunch', 'dinner'].map((mealTime) => (
                <div key={mealTime} className="bg-n-3 p-5 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-n-1 capitalize">{generatedMeals[mealTime].dishName}</h3>
                  <img src={dietOptions.find(option => option.label === selectedDiet).meals[mealTime].image} alt={mealTime} className="w-full rounded-lg" />
                  <ul className="mt-3">
                    {dietOptions.find(option => option.label === selectedDiet).meals[mealTime].ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                  <ol className="mt-3">
                    {dietOptions.find(option => option.label === selectedDiet).meals[mealTime].instructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ol>
                  <div className="mt-5">
                    <strong>Nutrition:</strong>
                    <p>Calories: {Math.round(generatedMeals[mealTime].calories)} kcal</p>
                    <p>Carbs: {Math.round(generatedMeals[mealTime].carbs)} g</p>
                    <p>Fats: {Math.round(generatedMeals[mealTime].fats)} g</p>
                    <p>Protein: {Math.round(generatedMeals[mealTime].protein)} g</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Meal;