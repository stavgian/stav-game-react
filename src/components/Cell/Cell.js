import React from 'react';
import './Cell.scss';

const Cell = ({color, size}) => {
  let classString = "cell-" + size + " " + color;
  return (
    <div className={classString} onClick={(e) => {
        console.log('Color:',color)
    }}>
    </div>
    
  );
}

export default Cell;