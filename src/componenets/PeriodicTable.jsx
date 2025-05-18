import './PeriodicTable.css';
import React from 'react';
import { ELEMENTS } from '../constants/index';
import ElementTile from './ElementTile';

const PeriodicTable = () => {
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

            <div className="modalContainer">
                <div className="modal">
                    <div className="modalHeadingContainer">
                        <div className="modalElementSymbol"></div>
                        <div className="modalHeading elementHeading"></div>
                    </div>
                    <div className="infoSection">
                        <div className="modalLabel">Atomic number:<span className=" modalInfo atomicNumber"></span></div>
                        <div className="modalLabel">Elemental Group:<span className=" modalInfo elementalGroup"></span></div>
                        <div className="modalLabel">Standard State:<span className=" modalInfo elementState"></span></div>
                        <div className="modalLabel">Year discovered:<span className=" modalInfo yearDiscovered"></span></div>
                        <div className="modalLabel modalFactLabel">Element Facts:
                            <p className="modalInfo elementFacts"></p>
                        </div>
                        <div className="modalLabel">Element history:
                            <p className="modalInfo elementHistory">
                            </p>
                        </div>


                    </div>
                    <button className="modalButton previousButton">Previous Element</button>
                    <button className="modalButton nextButton">Next Element</button>
                    <button className=" closeButton">&#x2715</button>
                </div>
            </div>


            <div className="periodicTable" id="displayTable">
                    {ELEMENTS.map((el) => (
                        <ElementTile
                            key={el.id}
                            category={el.category}
                            title={el.title}
                            number={el.number}
                            weight={el.weight}
                            symbol={el.symbol}
                            name={el.name}
                        />
                    ))}

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