import React from 'react';
import {useEffect, useState} from 'react';

const Dice = (props) => {


  return (
    <div className='dice'>
      {props.face || 1}
    </div>
  )
}

export default Dice;