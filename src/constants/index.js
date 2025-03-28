import L1 from "../assets/L1.jpg";
import L2 from "../assets/L2.jpg";
import L3 from "../assets/L3.webp";
import L4 from "../assets/L4.jpg";
import L5 from "../assets/L5.webp";
import B1 from "../assets/b1.jpg";
import B2 from "../assets/b2.jpg";
import B3 from "../assets/b3.jpg";
import C1 from "../assets/c1.jpg";
import C2 from "../assets/c2.jpg";
import C3 from "../assets/c3.avif";
import D1 from "../assets/d1.png"
import D2 from "../assets/d2.jpg"
import D3 from "../assets/d3.webp"
import D4 from "../assets/d4.jpg"
import CO1 from "../assets/core1.webP"
import CO2 from "../assets/core2.jpg"
import CO3 from "../assets/core3.webP"
import LE1 from "../assets/leg1.jpg"
import LE2 from "../assets/leg2.webp"
import LE3 from "../assets/leg3.jpg"
import LE4 from "../assets/leg4.jpg"
import LE5 from "../assets/leg5.webp"
import { LuSandwich, LuWheatOff, LuGrape, LuVegan } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { GiBroccoli } from "react-icons/gi";
import Any_B from "../assets/Meal/Anything-b.jpg"
import Any_D from "../assets/Meal/Anything-D.jpg"
import Any_L from "../assets/Meal/Anything-L.jpg"

import Keto_B from "../assets/Meal/Keto-B.jpg"
import Keto_D from "../assets/Meal/Keto-D.jpg"
import Keto_L from "../assets/Meal/Keto-L.jpg"

import Med_B from "../assets/Meal/Med-B.jpg"
import Med_D from "../assets/Meal/Med-D.jpeg"
import Med_L from "../assets/Meal/Med-L.jpg"

import Pa_B from "../assets/Meal/Pa-B.webp"
import Pa_D from "../assets/Meal/Pa-D.jpg"
import Pa_L from "../assets/Meal/Pa-L.jpg"

import Ve_B from "../assets/Meal/Ve-B.jpg"
import Ve_D from "../assets/Meal/Ve-D.jpg"
import Ve_L from "../assets/Meal/Ve-L.jpg"

import Vegan_B from "../assets/Meal/Vegan-B.jpg"
import Vegan_D from "../assets/Meal/Vegan-D.jpg"
import Vegan_L from "../assets/Meal/Vegan-L.jpg"




export const navigation = [
    {
        id: "0",
        title: 'Home',
        url:"/"
    },
    {
        id: "1",
        title: "Muscle",
        url: "#",
        hasSubmenu: true,
        submenu: [
          { id: 1, title: "Back", url: "/Back" },
          { id: 2, title: "Chest", url: "/Chest" },
          { id: 3, title: "Core", url: "/Core" },
          { id: 4, title: "Drill", url: "/Drill" },
          { id: 5, title: "Lower Body", url: "/LowerBody" },
        ]
    },
    {
        id: "2",
        title: "Nutrition",
        url:"/Nutrition",
    },
    {
        id: "4",
        title: "Meal",
        url:"/Meal",
    },
    {
        id: "3",
        title: "Plan",
        url:"/Plan",
    },
    {
        id: "4",
        title: "Contact",
        url:"/Contact",
    },
]

export const buttonData = [
    { image: L1, text: "Drill", link: "/Drill", description: "Learn more essential drills for football players" },
    { image: L2, text: "Chest", link: "/Chest", description: "Learn more essential chest exercises" },
    { image: L3, text: "Lower Body", link: "/LowerBody", description: "Improve your lower body strength" },
    { image: L4, text: "Back", link: "/Back", description: "Strengthen your back for better support" },
    { image: L5, text: "Core", link: "/Core", description: "Core is a key factor for your performance" },
  ];


  export const nutri = [
    {
        title: "Carbohydrates", 
        text: "Carbs are the main energy source for soccer's high-intensity demands. Complex carbs (like oats, brown rice, and whole grains) fuel muscles and prevent fatigue by maintaining glycogen stores, which are depleted during intense play." 
    },

    {
        title: "Protein", 
        text: "Protein aids in muscle repair and recovery, helping players bounce back faster after games and intense training sessions. Adequate protein intake (1.2-1.6g per kg body weight) supports muscle strength, reduces injury risk, and improves overall performance." 
    },

    {
        title: "Fats", 
        text: "Healthy fats (from sources like avocado, olive oil, and nuts) provide sustained energy and are crucial for hormone production, which regulates muscle growth and recovery. Fats also support endurance, keeping players energized during longer games." 
    },

    { 
        title: "Timing", 
        subtext: [
            "Pre-Game: Eating a balanced meal with carbs and protein 2-3 hours before a game provides steady energy for optimal performance. Light snacks 30-60 minutes before, like a banana or energy bar, can give a final energy boost.",
            "Post-Game:  Consuming quick-digesting carbs and protein within 30 minutes after a game helps replenish glycogen stores and repairs muscles, reducing soreness and preparing players for the next workout."] 
    },

    {
        title: "Hydration", 
        text: "Staying well-hydrated maintains endurance, focus, and reduces the risk of muscle cramps. Soccer players should aim for 2-3 liters daily and include electrolytes (from sports drinks or coconut water) to restore minerals lost in sweat, especially in hot conditions."
    },

    { 
        title: "Key Nutrients",
        subtext: [
            "Iron: Supports oxygen delivery to muscles, critical for stamina and endurance. Sources include red meat, leafy greens, and fortified cereals.",
            "Vitamin D & Calcium: Vital for bone health, these nutrients reduce injury risk from soccer's high-impact movements. They can be obtained from sunlight, dairy, and fortified foods.", 
            "Omega-3s: These healthy fats, found in fish and flaxseeds, reduce inflammation and support joint health, which aids in recovery and keeps joints flexible."
        ]
    },


  ];


  export const health = [
    { description: "Lean Proteins: Chicken, turkey, fish, tofu, and legumes for muscle repair and growth." },
    { description: "Whole Grains: Brown rice, quinoa, oats, and whole-grain pasta for sustained energy." },
    { description: "Healthy Fats: Avocado, nuts, seeds, and olive oil to support joint health and energy." },
    { description: "Fruits and Vegetables: Variety of colors for essential vitamins, minerals, and antioxidants." },
    { description: "Hydrating Beverages: Water, coconut water, and electrolyte drinks to stay hydrated." },
  ];


  export const junk = [
    { description: "Sugary Drinks and Snacks: Soda, candy, and pastries can lead to energy crashes." },
    { description: "Fried and Processed Foods: Chips, fast food, and processed meats can increase inflammation." },
    { description: "High-Fat Dairy Products: Such as whole milk and heavy cream, which can be harder to digest." },
    { description: "Alcohol: Can impact hydration, recovery, and overall athletic performance." },
    { description: "Excessive Caffeine: In high doses, it can lead to dehydration and jitteriness." },
  ];



  export const back =[
    {
        image:B1,
        text: "Pull Up",
        focus:"Lats, traps",
        description:"Grip the pull-up bar slightly wider than shoulder-width. Pull your chin above the bar and lower slowly. Add weight if advanced.",
        duration: "3 sets of 8-12 reps.",
        benefit: "Improves upper body strength for balance during physical duels."
    },
    {
        image:B2,
        text: "Meadow Rows",
        focus:"Lats, traps",
        description:"Place one end of a barbell in a landmine or secure corner. Stand perpendicular to the bar, hinge at your hips, and grip the bar near the weighted end with one hand. Pull the bar toward your lower ribs, keeping your elbow close to your body. Slowly lower it back down, and repeat.",
        duration: "3–4 sets of 8–12 reps per side.",
        benefit: "Enhances rotational stability, critical for shooting, passing, and cutting movements."
    },
    {
        image:B3,
        text: "Plank Row",
        focus:"Core, Lats, Traps, Shoulders",
        description:"Start in a high plank position with a dumbbell in each hand. While keeping your body straight and your core tight, row one dumbbell toward your ribs by bending your elbow. Lower it back down with control, then repeat on the other side, alternating rows. Avoid twisting your hips to maintain stability.",
        duration: "4 sets of 12-15 reps per side.",
        benefit: "Improves strength for athletic movements, making it ideal for sports like soccer where core stability and upper body strength are crucial."
    },
    
  ]



  export const chest =[
    {
        image:C1,
        text: "Barbell Bench Press",
        focus:"Pectorals, Triceps, Deltoids",
        description:"To perform the barbell bench press, lie flat on a bench and grip the barbell just wider than shoulder-width. Lower the bar to your chest and press it back up to the starting position, keeping your movements controlled and your core tight.",
        duration: "4-6 sets of 3-8 reps with progressively heavier weights",
        benefit: "Developing chest and triceps strength is important for many sports. For example, in contact sports like football or rugby, pushing movements like the bench press improve tackling and blocking power. In combat sports, it helps with pushing opponents away or striking power."
    },
    {
        image:C2,
        text: "Dip",
        focus:"Deltoids, Pectorals, Triceps",
        description:"Slowly lower your body by bending your elbows, keeping your elbows at about a 45-degree angle from your torso (not flaring them out too much). Push through your palms to raise your body back to the starting position, fully extending your arms at the top.",
        duration: "3–4 sets of 8–12 reps.",
        benefit: "his exercise builds pressing strength, making it beneficial for sports that require upper body pushing power, such as football"
    },
    {
        image:C3,
        text: "Push Up",
        focus:"Pectorals",
        description:"Slowly lower your body toward the floor by bending your elbows at a 45-degree angle. Push through the palms of your hands, extending your arms to press your body back up to the starting position. ",
        duration: "3 sets of 15-20 reps.",
        benefit: "Push-ups mimic pressing movements and are used in many athletic activities (e.g., combat sports, team sports), making them beneficial for overall functional strength."
    },
    
  ]


  export const core =[
    {
        image:CO1,
        text: "Landmine Rotation",
        focus:"Obliques, Deltoids",
        description:"With a firm grip on the bar, rotate your torso to one side by twisting your upper body while keeping your hips facing forward. Your arms should remain extended but follow the rotation of your torso",
        duration: "3-4 sets of 10-12 reps per side",
        benefit: "Enhances rotational power, critical for sports that require twisting movements like baseball, tennis, and soccer."
    },
    {
        image:CO2,
        text: "Bird-Dog row",
        focus:"Core, Lower Back, Deltoids, Lats",
        description:"Start in a tabletop position with a dumbbell in each hand, extending your right arm forward and left leg back. While holding that position, row the dumbbell towards your ribs, engaging your core and maintaining a neutral spine.",
        duration: "3–4 sets of 8–12 reps per side.",
        benefit: "improves core stability and balance while strengthening the back, shoulders, and glutes."
    },
    {
        image:CO3,
        text: "Pallof press",
        focus:"Core, Deltoidsw",
        description:"Stand with your feet shoulder-width apart, holding a resistance band or cable in both hands at chest height, with the band anchored to your side. Press your hands straight out in front of you, keeping your arms extended while resisting the rotational pull of the band, then slowly return to the starting position.",
        duration: "3 sets of 10-12 reps per side.",
        benefit: "strengthens the core, particularly the obliques, improving anti-rotational stability."
    },
    
  ]



  export const lower =[
    {
        image:LE1,
        text: "Romanian Deadlift",
        focus:"Hamstrings, Glutes, Lower Back, Core",
        description:"Hinge at the hips with a slight knee bend, lowering the barbell while keeping your back straight, then return to standing by driving your hips forward.",
        duration: "3-4 sets of 5-12 reps",
        benefit: "Improves posterior chain strength and hip hinge mobility."
    },
    {
        image:LE2,
        text: "Bulgarian Split Squats",
        focus:"Quadriceps, Glutes, Hamstrings, Hip Flexors",
        description:"Place one foot on a bench behind you, lower your body into a lunge position with your front knee tracking over your toes, then push through your front heel to return to standing.",
        duration: "3-4 sets of 8-12 reps per leg.",
        benefit: "Improves single-leg strength, balance, and stability, essential for powerful sprinting, changing direction, and maintaining body control during soccer movements."
    },
    {
        image:LE3,
        text: "Step-Ups",
        focus:"Quadriceps, Glutes, Hamstrings",
        description:"Step up onto a bench with one leg, then bring the other leg up, and step down with the same leg, alternating sides.",
        duration: "3-4 sets of 10-12 reps per leg.",
        benefit: "Builds strength and stability in the legs, improving acceleration, deceleration, and body control during soccer movements."
    },
    {
        image:LE4,
        text: "Squat Jumps",
        focus:"Quadriceps, Glutes, Hamstrings, Calves",
        description:"Start in a squat position, then explosively jump upward, reaching for height, and land softly back into the squat position.",
        duration: "3-4 sets of 10-15 reps.",
        benefit: "Enhances explosive power and lower body strength, improving speed and agility for quick sprints and jumps in soccer."
    },
    {
        image:LE5,
        text: "Calf Raises",
        focus:"Calves (Gastrocnemius and Soleus)",
        description:"Stand with your feet hip-width apart, rise onto the balls of your feet, hold for a second, then lower back down with control.",
        duration: "3-4 sets of 15-20 reps",
        benefit: "Strengthens the calf muscles, improving sprinting speed, agility, and overall footwork for soccer."
    },
    
  ]


  export const drill =[
    {
        image:D1,
        text: "Wall Passing",
        focus:"Passing accuracy, ball control, footwork, coordination",
        description:"Stand a few feet away from a wall, pass the ball to the wall with one foot, and receive it back with the same foot, alternating feet as you control the ball.",
        duration: "15 minutes",
        benefit: "Improves passing accuracy, ball control, and footwork while enhancing coordination and touch under pressure."
    },
    {
        image:D2,
        text: "Zip-Zap Mayhem",
        focus:"Agility, quick thinking, reaction speed, coordination",
        description:"Players in a group pass the ball quickly in random directions, shouting Zip for a short pass, Zap for a long pass, or Mayhem to switch positions and reset the play.",
        duration: "3-4 rounds of 2-3 minutes",
        benefit: "Improves decision-making, rapid direction changes, and footwork for high-pressure game scenarios."
    },
    {
        image:D3,
        text: "Scottish Run",
        focus:"Stamina, speed, agility, directional changes",
        description:"Sprint forward 10 yards, jog backward to start, then shuffle sideways 10 yards to the left and back, repeating the sequence continuously.",
        duration: "4-6 rounds of 1-2 minutes with 30-60 seconds rest",
        benefit: "Builds endurance, quick recovery, and adaptability for high-intensity phases of a soccer match."
    },
    {
        image:D4,
        text: "Square of Pain with Ball",
        focus:"Ball control, endurance, agility, passing",
        description:"Dribble a ball continuously along the perimeter of a square, stopping at each corner to perform a specific action (e.g., quick turn, pass to the center, or sprint with the ball to the next corner).",
        duration: "3-4 rounds of 2-3 minutes",
        benefit: "Enhances ball control, stamina, and quick directional changes under fatigue to simulate game conditions."
    },
  ]



export const dietOptions = [
  {
    icon: <LuSandwich size={80} color="f2ff33" />,
    label: "Anything",
    meals: {
      breakfast: {
        dishName: "Protein-Packed Oatmeal",
        image: Any_B,
        ingredients: [
            { name: "Rolled Oats", grams: 40 },
            { name: "Banana", grams: 50 },
            { name: "ALmond Butter", grams: 16 },
            { name: "Milk", grams: 120 },
            { name: "Chia seeds", grams: 15 }
          ],
          instructions: [
            "1. Cook the oats according to the package instructions, using almond milk or water.",
            "2. Once the oats are cooked, stir in the protein powder until well combined.",
            "3. op with sliced banana, almond butter, chia seeds, and a sprinkle of cinnamon."
          ]
      },
      lunch: {
        dishName: "Grilled Chicken and Quinoa Salad",
        image: Any_L,
        ingredients: [
            { name: "Chicken Breast", grams: 120 },
            { name: "Quinoa", grams: 90 },
            { name: "Mixed Greens", grams: 30 },
            { name: "Cherry Tomatoes", grams: 50 },
            { name: "Cucumber (Sliced)", grams: 50 },
            { name: "Olive oil", grams: 15 }
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
            { name: "Salmon Fillet", grams: 150 },
            { name: "Sweet Potato", grams: 200 }, // 1 medium sweet potato
            { name: "Broccoli Florets", grams: 100 },
            { name: "Olive Oil", grams: 15 },
            { name: "Garlic Powder", grams: 1 }, // 1/2 teaspoon
            { name: "Salt", grams: 0.5 }, // Adjust salt amount as per taste
            { name: "Pepper", grams: 0.5 }, // Adjust pepper amount as per taste
            { name: "Fresh Parsley", grams: 5, optional: true }
          ],
          instructions: [
            "1. Preheat the oven to 200°C (400°F).",
            "2. Toss the sweet potato cubes and broccoli florets in olive oil, garlic powder, salt, and pepper.",
            "3. Place the veggies on a baking sheet and roast for 25-30 minutes, or until tender.",
            "4. While the veggies roast, cook the salmon on a hot grill or skillet for about 3-4 minutes per side, until cooked through.",
            "5. Serve the salmon with the roasted veggies, and sprinkle with fresh parsley if desired."
          ]
      },
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
          { name: "Eggs", grams: 120 },
          { name: "Avocado", grams: 100 },
          { name: "Cheese", grams: 30 },
          { name: "Spinach", grams: 50 }
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
          { name: "Avocado", grams: 100 },
          { name: "Chicken", grams: 150 },
          { name: "Olives", grams: 30 },
          { name: "Spinach", grams: 50 },
          { name: "Cheese", grams: 40 }
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
          { name: "Salmon", grams: 150 },
          { name: "Asparagus", grams: 100 },
          { name: "Butter", grams: 20 },
          { name: "Garlic", grams: 5 }
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
        dishName: Med_B,
        image: "greek_yogurt_nuts.jpg",
        ingredients: [
          { name: "Greek Yogurt", grams: 200 },
          { name: "Almonds", grams: 30 },
          { name: "Honey", grams: 15 },
          { name: "Berries", grams: 50 }
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
          { name: "Cucumber", grams: 100 },
          { name: "Tomato", grams: 100 },
          { name: "Olives", grams: 30 },
          { name: "Feta Cheese", grams: 50 },
          { name: "Olive Oil", grams: 15 }
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
          { name: "Fish", grams: 150 },
          { name: "Quinoa", grams: 100 },
          { name: "Zucchini", grams: 80 },
          { name: "Lemon", grams: 10 }
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
          { name: "Eggs", grams: 120 },
          { name: "Sweet Potato", grams: 150 },
          { name: "Olive Oil", grams: 10 },
          { name: "Spinach", grams: 50 }
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
          { name: "Chicken", grams: 150 },
          { name: "Sweet Potato", grams: 150 },
          { name: "Spinach", grams: 50 },
          { name: "Avocado", grams: 100 }
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
          { name: "Steak", grams: 200 },
          { name: "Bell Peppers", grams: 100 },
          { name: "Mushrooms", grams: 100 },
          { name: "Olive Oil", grams: 15 }
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
          { name: "Oats", grams: 50 },
          { name: "Banana", grams: 100 },
          { name: "Almond Milk", grams: 200 },
          { name: "Chia Seeds", grams: 10 }
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
          { name: "Black Beans", grams: 100 },
          { name: "Rice", grams: 100 },
          { name: "Lettuce", grams: 50 },
          { name: "Guacamole", grams: 30 },
          { name: "Salsa", grams: 30 }
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
          { name: "Tofu", grams: 150 },
          { name: "Broccoli", grams: 100 },
          { name: "Soy Sauce", grams: 20 },
          { name: "Carrots", grams: 80 }
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
          { name: "Banana", grams: 100 },
          { name: "Berries", grams: 100 },
          { name: "Almond Milk", grams: 200 },
          { name: "Granola", grams: 30 }
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
          { name: "Pasta", grams: 100 },
          { name: "Tomato Sauce", grams: 150 },
          { name: "Olives", grams: 30 },
          { name: "Mozzarella", grams: 40 },
          { name: "Basil", grams: 10 }
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
          { name: "Bell Peppers", grams: 150 },
          { name: "Quinoa", grams: 100 },
          { name: "Black Beans", grams: 100 },
          { name: "Corn", grams: 50 }
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