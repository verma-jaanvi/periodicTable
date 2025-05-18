import './PeriodicTable.css';
import React from 'react';
import { ELEMENTS } from '../constants/index';
import ElementTile from './ElementTile';
import ElementModal from './ElementModel';
import { useState } from 'react';

const PeriodicTable = () => {

    const [selectedType, setSelectedType] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedPeriod, setSelectedPeriod] = useState(null);

    const [selectedElement, setSelectedElement] = useState(null);

    const openModal = (element) => {
        return (
            // console.log(element)        
            setSelectedElement(element)
        )
    };
    const closeModal = () => setSelectedElement(null);

    return (
        <>
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    periodic
                    <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                        {" "}
                        Table
                    </span>
                </h1>
                <p className=" mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis voluptatibus illum quasi quam sequi ratione, minus explicabo rem non culpa reiciendis. Repudiandae amet blanditiis magnam reiciendis fugit odio rerum?
                    Assumenda accusantium ipsam cupiditate corporis minima, optio earum ratione tenetur necessitatibus nam nesciunt illum provident fuga? Aspernatur provident, quos quo suscipit ipsa dignissimos voluptate nemo asperiores tempore nostrum distinctio sint!
                </p>
            </div>

            {/* filter  */}
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 py-6 ">

                {/* Type Filter */}
                <div >
                    <h2 className="text-lg font-semibold mb-2">Element Type</h2>
                    <div className="flex flex-wrap gap-3" style={{color: "black"}}>
                        <button
                            onClick={() => setSelectedType(null)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${selectedType === null
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            All
                        </button>
                        {["Metal", "Nonmetal", "Metalloid"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-4 py-2 rounded-full border text-sm font-medium transition ${selectedType === type
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white border-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                {type}s
                            </button>
                        ))}
                    </div>
                </div>

                {/* Group Filter */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Group</h2>
                    <div className="flex flex-wrap gap-2" style={{color: "black"}}>
                        {[...Array(18)].map((_, i) => {
                            const g = (i + 1).toString();
                            return (
                                <button
                                    key={g}
                                    onClick={() => setSelectedGroup(g)}
                                    className={`w-10 h-10 rounded-full border text-sm font-medium transition ${selectedGroup === g
                                            ? 'bg-green-600 text-white'
                                            : 'bg-white border-gray-300 hover:bg-gray-100'
                                        }`}
                                >
                                    {g}
                                </button>
                            );
                        })}
                        <button
                            onClick={() => setSelectedGroup(null)}
                            className="ml-2 px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 text-sm font-medium"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Period Filter */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Period</h2>
                    <div className="flex flex-wrap gap-2" style={{color: "black"}}>
                        {[...Array(7)].map((_, i) => {
                            const p = (i + 1).toString();
                            return (
                                <button
                                    key={p}
                                    onClick={() => setSelectedPeriod(p)}
                                    className={`w-10 h-10 rounded-full border text-sm font-medium transition ${selectedPeriod === p
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-white border-gray-300 hover:bg-gray-100'
                                        }`}
                                >
                                    {p}
                                </button>
                            );
                        })}
                        <button
                            onClick={() => setSelectedPeriod(null)}
                            className="ml-2 px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 text-sm font-medium"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Periodic Table */}

            <div className="appContainer periodicTable" id="displayTable">
                {ELEMENTS
                    .filter((el) => {
                        const matchType = !selectedType || el.category === selectedType;
                        const matchGroup = !selectedGroup || el.group === selectedGroup;
                        const matchPeriod = !selectedPeriod || el.period === selectedPeriod;
                        return matchType && matchGroup && matchPeriod;
                    })
                    .map((el) => (
                        <ElementTile key={el.id} element={el} onClick={openModal} />
                    ))}


                {selectedElement && (
                    <ElementModal element={selectedElement} onClose={closeModal} />
                )}

                <div className="blankRow1"></div>
                <div className="blankRow2"></div>
                <div className="blankRow3"></div>
                <div className="blankRow4"></div>
                <div className="blankRow5"></div>

            </div>


        </>
    );
};

export default PeriodicTable;