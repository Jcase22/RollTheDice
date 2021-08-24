import React from 'react';
import {useEffect, useState} from 'react';
import Dice from './Dice.jsx';

const DiceTray = (props) => {

  const [allDice, setAllDice] = useState([])

  useEffect(() => {
    setAllDice(diceMaker(props.numDice))
  }, [props.numDice + props.numSides])

  const diceMaker = (number) => {
    var diceTray = []
    for (var i = 0; i < Number(number); i++) {
      diceTray.push(<Dice numSides={props.numSides}/>)
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