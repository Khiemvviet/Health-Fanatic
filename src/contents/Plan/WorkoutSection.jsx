import React from 'react';
import ExerciseItem from './ExerciseItem';
import PropTypes from 'prop-types';

const WorkoutSection = ({ day, exercises, borderColor }) => {
  return (
    <div className={`mb-6 p-5 border-l-4 ${borderColor} bg-gray-50 rounded-r-xl`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">{day}</h2>
      </div>

      {exercises.map((exercise) => (
        <ExerciseItem 
          key={exercise.name} 
          exercise={exercise} 
        />
      ))}
    </div>
  );
};

WorkoutSection.propTypes = {
    day: PropTypes.any.isRequired,
    exercises: PropTypes.any.isRequired,
    borderColor: PropTypes.any
};

export default WorkoutSection;