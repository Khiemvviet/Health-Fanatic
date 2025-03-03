import React from 'react';
import PropTypes from 'prop-types';

const ExerciseItem = ({ exercise }) => {
  return (
    <div className="flex items-center mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mr-4 text-3xl">
        {exercise?.icon}
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-lg text-gray-800">{exercise?.name}</h3>
        <p className="text-gray-600 text-sm">{exercise?.description}</p>
      </div>
      <div className="flex items-center text-gray-500" style={{minWidth:'90px'}}>
        <span className="text-sm ml-2">⏰ {exercise?.duration}</span>
      </div>
    </div>
  );
};

ExerciseItem.propTypes = {
    exercise: PropTypes.any.isRequired
};

export default ExerciseItem;