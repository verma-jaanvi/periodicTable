import React from 'react';
import { useState } from 'react';

const ElementTile = ({ element, onClick }) => {
  const { category, title, number, weight, symbol, name } = element;

  return (
    <div className={`${category} elementTile`} title={title} onClick={() => onClick(element)}>
      <div className="elementNumber">{number}</div>
      <div className="absolute top-1 right-1 text-xs text-white">{weight}</div>
      <div className="elementSymbol">{symbol}</div>
      <div className="elementName">{name}</div>
    </div>

  );
};

export default ElementTile;
