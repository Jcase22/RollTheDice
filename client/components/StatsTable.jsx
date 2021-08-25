import React from 'react';

const StatsTable = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Total</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.total}</td>
          <td>{parseFloat((props.total / Number(props.numDice)).toFixed(2))}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default StatsTable;