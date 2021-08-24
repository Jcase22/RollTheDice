import React from 'react';
import { useEffect, useState } from 'react';
import NumDiceInput from './components/NumDiceInput.jsx';
import NumSidesInput from './components/NumSidesInput.jsx';
import DiceTray from './components/DiceTray.jsx';

const App = (props) => {

  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumSides] = useState(6);
  const [randomNum, setRandomNum] = useState([]);
  const [trigger, setTrigger] = useState(0);

  const generateNum = () => {
    var numArray = [];
    for (var i = 0; i < Number(numDice); i++) {
      numArray.push(getRandomInt(numSides))
    }
    setRandomNum(numArray)
    setTrigger(trigger + 1)
  }

  return (
    <div>
      <button onClick={generateNum}>roll dice</button>
      <NumDiceInput setNumDice={setNumDice} />
      <NumSidesInput setNumSides={setNumSides} />
      <DiceTray numDice={numDice} numSides={numSides} randomNum={randomNum} trigger={trigger}/>
    </div>
  )
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}


export default App;