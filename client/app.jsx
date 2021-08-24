import React from 'react';
import { useEffect, useState } from 'react';
import NumDiceInput from './components/NumDiceInput.jsx';
import NumSidesInput from './components/NumSidesInput.jsx';
import DiceTray from './components/DiceTray.jsx';

const App = (props) => {

  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumSides] = useState(6);


  return (
    <div>
      <NumDiceInput setNumDice={setNumDice} />
      <NumSidesInput setNumSides={setNumSides} />
      <DiceTray numDice={numDice} numSides={numSides} />
    </div>
  )
}

export default App;