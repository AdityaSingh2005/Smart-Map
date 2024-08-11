import React from 'react';
import { useSelector } from 'react-redux';

const TimeDistanceTracker = () => {
  const { travelTime, travelDistance } = useSelector((state) => state.routing);

  return (
    <div>
      <p>Travel Time: {travelTime} minutes</p>
      <p>Travel Distance: {travelDistance} km</p>
    </div>
  );
};

export default TimeDistanceTracker;