import React from 'react'
import WorkoutSection from '../contents/Plan/WorkoutSection';
import f4 from "../assets/f4.jpg";


const Plan = () => {
  const workoutSections = [
    {
      day: 'Monday - Lower Body',
      exercises: [
        { 
          name: 'Romanian Deadlift + Step-Ups', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Bulletproof your hamstring'
        },
        { 
          name: 'Bulgarian Split Squats', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen your quads'
        },
        { 
          name: 'Squats-Jumps + Calf Raises', 
          duration: '30 mins', 
          icon: '🎯',
          description: 'Jump higher for athletic movements'
        },
      ]
    },
    {
      day: 'Wednesday - Upper Body',
      exercises: [
        { 
          name: 'Pull Up + Meadow Rows', 
          duration: '30 mins', 
          icon: '💪',
          description: 'Strengthen your Back'
        },
        { 
          name: 'Barbell Bench Press + Dip', 
          duration: '30 mins', 
          icon: '🔧',
          description: 'Strengthen your Chest'
        },
        { 
          name: 'Landmine Rotation + Pallof Press', 
          duration: '30 mins', 
          icon: '⚡',
          description: 'Strengthen your core'
        },
      ]
    },
    {
      day: 'Friday',
      exercises: [
        { 
          name: 'Drill + Ball Control', 
          duration: '45 mins', 
          icon: '⚡',
          description: 'Enhance your ball control with essential drills'
        },
      ]
    }
  ];


  const workoutSections2 = [
    {
      day: 'Monday - Lower Body',
      exercises: [
        { 
          name: 'Romanian Deadlift + Step-Ups', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Bulletproof your hamstring'
        },
        { 
          name: 'Bulgarian Split Squats', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen your quads'
        },
        { 
          name: 'Squats-Jumps + Calf Raises', 
          duration: '30 mins', 
          icon: '🎯',
          description: 'Jump higher for athletic movements'
        },
      ]
    },
   {
      day: 'Tuesday - Back',
      exercises: [
        { 
          name: 'Pull Up + Meadow Rows + Plank Row', 
          duration: '1 hour', 
          icon: '💪',
          description: 'Strengthen your Back'
        },
      ]
    },
    {
      day: 'Wednesday - Chest',
      exercises: [
        { 
          name: 'Barbell Bench Press + Dip + Push Up', 
          duration: '1 hour', 
          icon: '🔧',
          description: 'Strengthen your Chest'
        },

      ]
    },
    {
      day: 'Friday',
      exercises: [
        { 
          name: 'Drill+Core', 
          duration: '2 hours', 
          icon: '⚡',
          description: 'Build explosive power, lower-body strength, and stability to improve athletic performance.'
        },
      ]
    }
  ];

  const workoutSections3 = [
    {
      day: 'Monday - Lower Body',
      exercises: [
        { 
          name: 'Romanian Deadlift + Step-Ups', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Bulletproof your hamstring'
        },
        { 
          name: 'Bulgarian Split Squats', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen your quads'
        },
        { 
          name: 'Squats-Jumps + Calf Raises', 
          duration: '30 mins', 
          icon: '🎯',
          description: 'Jump higher for athletic movements'
        },
      ]
    },
   {
      day: 'Tuesday - Back',
      exercises: [
        { 
          name: 'Pull Up + Meadow Rows + Plank Row', 
          duration: '1 hour', 
          icon: '💪',
          description: 'Strengthen your Back'
        },
      ]
    },
    {
      day: 'Wednesday - Chest',
      exercises: [
        { 
          name: 'Barbell Bench Press + Dip + Push Up', 
          duration: '1 hour', 
          icon: '🔧',
          description: 'Strengthen your Chest'
        },

      ]
    },
    {
      day: 'Thursday - Core',
      exercises: [
        { 
          name: 'Core', 
          duration: '2 hours', 
          icon: '⚡',
          description: 'Build explosive power, lower-body strength, and stability to improve athletic performance.'
        },
      ]
    },
    {
      day: 'Friday - Drill',
      exercises: [
        { 
          name: 'Drill', 
          duration: '1 hours', 
          icon: '⚡',
          description: 'Build explosive power, lower-body strength, and stability to improve athletic performance.'
        },
      ]
    }
  ];

  
  return (
    <>
    <div className="relative w-full h-screen">
      <img 
        src={f4}
        alt="Yamal"
        className="absolute top-0 left-0  w-full h-full object-cover"
      />
      
      <div className="absolute flex px-10 flex-col bg-black/60 text-n-1 justify-center top-0 w-full h-full">
        <div id="Intro" className="font-bold text-5xl  text-center mt-20 mb-20 pt-10">
          <h1>The importance of planning</h1>
        </div>

        <div id="Description" className=" lg:text-xl mt-5 mb-10 text-center px-20 py-10 space-y-5 lg:px-40">
        <p>A workout plan is crucial for an athlete's performance, recovery, and long-term health. Here are the key reasons why</p>

          <div className="pt-5 pb-3 text-left">
            <ul className="space-y-4">
              <li>
                <strong>Optimized Performance:</strong> Targets sport-specific skills and movements to improve strength, speed, endurance, and flexibility.
              </li>
              <li>
                <strong> Injury Prevention:</strong> Balances workloads, avoiding overtraining and fatigue-related injuries.
              </li>
              <li>
                <strong>Recovery and Longevity:</strong> ncludes periodization, alternating intense and moderate sessions to reduce burnout.
              </li>
              <li>
                <strong>Mental Focus and Discipline:</strong> A structured plan keeps athletes motivated and focused on short- and long-term goals.
              </li>
              <li>
                <strong>Consistency and Adaptability:</strong> Establishes a routine for consistent improvements.
              </li>
              <li>
                <strong> Nutritional Synergy:</strong> Integrates meals or supplements to match workout intensity (e.g., high-protein post-workout meals).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-3">
      <div className="max-w-4xl  p-6 bg-white shadow-lg rounded-xl mt-28 mb-10 mx-5 border-n-4 border-2">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 3 sessions a week</h1>
        {workoutSections.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-red-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-red-500' : 
              index === 3 ? 'border-red-500' : 
              'border-red-500'
            }
          />
        ))}
      </div>

      <div className="max-w-4xl  p-6 bg-white shadow-lg rounded-xl mt-28 mb-10 mx-5 border-n-4 border-2">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 4 sessions a week</h1>
        {workoutSections2.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-red-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-red-500' : 
              index === 3 ? 'border-red-500' : 
              'border-red-500'
            }
          />
        ))}
      </div>

      <div className="max-w-4xl  p-6 bg-white shadow-lg rounded-xl mt-28 mb-10 mx-5 border-n-4 border-2">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 5 sessions a week</h1>
        {workoutSections3.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-red-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-red-500' : 
              index === 3 ? 'border-red-500' : 
              'border-red-500'
            }
          />
        ))}
      </div>
      </div>
    </>


  )
}

export default Plan