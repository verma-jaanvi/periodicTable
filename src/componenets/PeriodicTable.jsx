import './PeriodicTable.css';
import React from 'react';
import { ELEMENTS } from '../constants/index';
import ElementTile from './ElementTile';
import ElementModal from './ElementModel';
import { useState } from 'react';
import FilterBar from "./FilterBar";

const PeriodicTable = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
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

    const handleReset = () => {
        setSelectedCategory(null);
        setSelectedState(null);
        setSelectedGroup(null);
        setSelectedPeriod(null);
    };

    const isElementVisible = (el) => {
        return (
            (!selectedCategory || el.category === selectedCategory) &&
            (!selectedState || el.state === selectedState) &&
            (!selectedGroup || el.group === selectedGroup) &&
            (!selectedPeriod || el.period === selectedPeriod)
        );
    };

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
                    Mock data is added in index.jsx so the filter property maynot be showing correct result. But the property id working if it shows any items working.
                </p>
            </div>

            {/* filter  */}
            <div className="p-6">
                <FilterBar
                    onCategoryChange={setSelectedCategory}
                    onStateChange={setSelectedState}
                    onGroupChange={setSelectedGroup}
                    onPeriodChange={setSelectedPeriod}
                    onReset={handleReset}
                />
            </div>


            {/* Periodic Table */}

            <div className="appContainer periodicTable" id="displayTable">
                {ELEMENTS.map(el => {
                    const dimmed = !isElementVisible(el);
                    return (
                        <div
                            key={el.id}
                            className={`${dimmed ? "grayscale opacity-40 pointer-events-none" : ""}`}
                        >
                            <ElementTile element={el} onClick={openModal} />
                        </div>
                    );
                })}

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