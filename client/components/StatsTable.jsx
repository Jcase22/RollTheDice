import React from 'react';

const StatsTable = (props) => {

  return (
   <div className='stats-container'>
     <div className='stats-header'>
       <h2>Total</h2>
       <h2>Average</h2>
     </div>
     <div className='stats-number'>
       <h2>{props.total}</h2>
       <h2>{parseFloat((props.total / Number(props.numDice)).toFixed(2))}</h2>
     </div>
   </div>
  )
}

export default StatsTable;


// <table>
// <thead>
//   <tr>
//     <th>Total</th>
//     <th>Average</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>{props.total}</td>
//     <td>{parseFloat((props.total / Number(props.numDice)).toFixed(2))}</td>
//   </tr>
// </tbody>
// </table>