import React from 'react';
import {useEffect, useState} from 'react';
import Dice from './Dice.jsx';

const DiceTray = (props) => {

  const [allDice, setAllDice] = useState([])

  useEffect(() => {
    setAllDice(diceMaker(props.numDice))
  }, [props.numDice])

  useEffect(() => {
    setAllDice(diceMaker(props.numDice))
  }, [props.trigger])

  const diceMaker = (number) => {
    var diceTray = []
    for (var i = 0; i < Number(number); i++) {
      diceTray.push(<Dice numSides={props.numSides} face={props.randomNum[i]}/>)
    }
    return diceTray
  }

  return (
    <div>
      {allDice}
    </div>
  )
}

export default DiceTray;