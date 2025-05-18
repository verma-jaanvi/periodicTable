import React from 'react';

const ElementTile = ({ category, title, number, weight, symbol, name }) => {
  return (
    <div className={`${category} elementTile`} title={title}>
      <div className="elementNumber">{number}</div>
      <div className="absolute top-1 right-1 text-xs text-white">{weight}</div>
      <div className="elementSymbol">{symbol}</div>
      <div className="elementName">{name}</div>
    </div>
  );
};

export default ElementTile;
