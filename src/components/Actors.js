import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1> 
      { actors.forEach(actor => <div></div>) }
    </div>
  );
};

export default Actors;
