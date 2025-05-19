import React from "react";

const FilterBar = ({onCategoryChange, onStateChange, onGroupChange, onPeriodChange, onReset }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-green-800 text-white p-4 rounded-md shadow-md flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 mr-4">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 000 2h14a1 1 0 100-2H3zm2 5a1 1 0 000 2h10a1 1 0 100-2H5zm-2 5a1 1 0 000 2h14a1 1 0 100-2H3z" />
        </svg>
        <span className="text-white font-semibold">Filters</span>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => onReset()} className="border border-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700">All</button>
        <button  onClick={() => onCategoryChange('metal')} className="border border-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700">Metals</button>
        <button  onClick={() => onCategoryChange('metalloid')} className="border border-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700">Metalloids</button>
        <button  onClick={() => onCategoryChange('nonMetal')} className="border border-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700">Nonmetals</button>
        <button onClick={() => onCategoryChange('nobleGas')} className="border px-4 py-1 rounded hover:bg-gray-700">Noble Gases</button>
      </div>

      <div className="h-5 border-l border-gray-600 mx-4"></div>

      <div className="flex items-center gap-2">
        <button className="bg-gray-700 text-white px-4 py-1 rounded">States</button>
        <button className="border border-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700">Groups</button>
        <button className="border border-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700">Periods</button>
      </div>

       {/* State Filter */}
      <div className="flex items-center gap-2">
        <button onClick={() => onStateChange('Gas')} className="bg-gray-700 px-4 py-1 rounded">Gases</button>
        <button onClick={() => onStateChange('Liquid')} className="bg-gray-700 px-4 py-1 rounded">Liquids</button>
        <button onClick={() => onStateChange('Solid')} className="bg-gray-700 px-4 py-1 rounded">Solids</button>
        <button onClick={() => onStateChange('Unknown')} className="bg-gray-700 px-4 py-1 rounded">Unknown</button>
      </div>
    </div>
  );
};

export default FilterBar;
