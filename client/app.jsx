import React from 'react';
import { useEffect, useState } from 'react';
import NumDiceInput from './components/NumDiceInput.jsx';
import NumSidesInput from './components/NumSidesInput.jsx';
import DiceTray from './components/DiceTray.jsx';
import Feedback from './components/Feedback.jsx'
import StatsTable from './components/StatsTable.jsx'
import Button from 'react-bootstrap/Button'


const App = (props) => {

  const [title, setTitle] = useState('Have The Cheek')
  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumSides] = useState(6);
  const [randomNum, setRandomNum] = useState([]);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    var summedDice = randomNum.reduce((currentTotal, num) => {
      return num + currentTotal
    }, 0)
    setTotal(summedDice)
    setAverage(summedDice/ Number(numDice))

  }, [randomNum])

  const diceRoller = () => {
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
  }

  const onMouseOver = (e) => {
    setTitle('Roll The Dice')
  }

  const onMouseOut = (e) => {
    setTitle('Have The Cheek')
  }

  return (
    <div>
      <h1 className='title-card'
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
      >{title}</h1>
      <div className='input-container'>
        <NumDiceInput setNumDice={setNumDice} numDice={numDice} />
        <NumSidesInput setNumSides={setNumSides} numSides={numSides} />
      </div>
      <button className='roll-dice-btn' onClick={diceRoller} >Roll</button>
      <DiceTray numDice={numDice} numSides={numSides} randomNum={randomNum} />
      <StatsTable total={total} numDice={numDice} />
      <Feedback />
    </div>
  )
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

export default App;
