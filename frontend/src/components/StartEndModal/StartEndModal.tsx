import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { setStartPoint, setEndPoint } from '../store/actions';

const StartEndModal = () => {
  const dispatch = useDispatch();
  const [startPoint, setStartPointInput] = useState('');
  const [endPoint, setEndPointInput] = useState('');

const handleSubmit = () => {
//  dispatch(setStartPoint(startPoint));
 // dispatch(setEndPoint(endPoint));
};

  return (
    <div>
      <input
        type="text"
        placeholder="Start Point"
        value={startPoint}
        onChange={(e) => setStartPointInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Point"
        value={endPoint}
        onChange={(e) => setEndPointInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default StartEndModal;