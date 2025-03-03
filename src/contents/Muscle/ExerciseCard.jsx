import React from 'react';

import PropTypes from 'prop-types';


const ExerciseCard = ({ exercise }) => {
  return (
    <div className="mb-8">
      <h4 className="text-xl font-bold mt-5">{exercise?.title}</h4>
      <p className="mt-3">{exercise?.description}</p>
      <div className="w-4/5 h-4/5 mt-5 rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={exercise?.imageUrl} alt={exercise?.title} />
      </div>
      <p className="mt-4 mb-3">Instructions:</p>
      <ul className="list-disc pl-12">
        {exercise?.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.any.isRequired,
};

export default ExerciseCard;