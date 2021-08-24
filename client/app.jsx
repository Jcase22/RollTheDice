import React from 'react';
import { useEffect, useState } from 'react';
import NumDiceInput from './components/NumDiceInput.jsx';
import NumSidesInput from './components/NumSidesInput.jsx';
import DiceTray from './components/DiceTray.jsx';
import Button from 'react-bootstrap/Button'


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
      <h1 className='title-card'> Roll The Dice </h1>
      <div className='input-container'>
        <NumDiceInput setNumDice={setNumDice} />
        <NumSidesInput setNumSides={setNumSides} />
      </div>
      <button className='roll-dice-btn' onClick={() => {
        var start = Date.now();
        var end = start + 4000;
        const generateNum = () => {
          start = Date.now()
          var numArray = [];
          for (var i = 0; i < Number(numDice); i++) {
            numArray.push(getRandomInt(numSides))
          }
          setRandomNum(numArray)
          setTrigger(trigger + 1)
          if(start > end) clearInterval(timer)
        }
        var timer = setInterval(generateNum, 250)
      }} >Roll</button>
      <DiceTray numDice={numDice} numSides={numSides} randomNum={randomNum} trigger={trigger} />
      <Feedback />
    </div>
  )
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

export default App;
