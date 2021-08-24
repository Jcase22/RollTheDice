import React from 'react';
import { useEffect, useState } from 'react';
import NumDiceInput from './components/NumDiceInput.jsx';
import NumSidesInput from './components/NumSidesInput.jsx';
import DiceTray from './components/DiceTray.jsx';
import Feedback from './components/Feedback.jsx'
import Button from 'react-bootstrap/Button'


const App = (props) => {

  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumSides] = useState(6);
  const [randomNum, setRandomNum] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    var summedDice = randomNum.reduce((currentTotal, num) => {
      return num + currentTotal
    }, 0)
    setTotal(summedDice)
  }, [randomNum])

  return (
    <div>
      <h1 className='title-card'> Roll The Dice </h1>
      <div className='input-container'>
        <NumDiceInput setNumDice={setNumDice} />
        <NumSidesInput setNumSides={setNumSides} />
      </div>
      <button className='roll-dice-btn' onClick={() => {
        var start = Date.now();
        var end = start + 3500;
        const generateNum = () => {
          start = Date.now()
          var numArray = [];
          for (var i = 0; i < Number(numDice); i++) {
            numArray.push(getRandomInt(numSides))
          }
          setRandomNum(numArray)
          if(start > end) clearInterval(timer)
        }
        var timer = setInterval(generateNum, 100)
      }} >Roll</button>
      <DiceTray numDice={numDice} numSides={numSides} randomNum={randomNum} />
      <h1 className='title-card'>Total</h1>
      <h2 className='title-card'>{total}</h2>
      <Feedback />
    </div>
  )
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

export default App;
