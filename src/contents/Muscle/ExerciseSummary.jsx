import React from 'react';
import PropTypes from 'prop-types';
import ExerciseCard from './ExerciseCard';


const ExerciseSummary = ({ title, exercises }) => {
  return (
    <div className="container mx-auto mt-28 min-h-[calc(100vh-215px)] flex justify-center flex-col">
      <span className="text-3xl font-bold text-center">
        {title}
      </span>

      <div className="container mx-auto max-w-4xl w-full">
        <div>
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


ExerciseSummary.propTypes = {
  title: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};

export default ExerciseSummary;