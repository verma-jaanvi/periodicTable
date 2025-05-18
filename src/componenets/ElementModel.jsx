import React from 'react';
import './PeriodicTable';

const ElementModal = ({ element, onClose }) => {
    return (
        <div className="fixed inset-0  bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-xs">
            <div className="flex items-center space-x-6">
                {/* Image box */}
                {/* <div className="w-40 h-40 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={element.image}
                        alt={element.name}
                        className="w-full h-full object-cover"
                    />
                </div> */}
                <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Low-poly 3D model"
                        width="100%"
                        height="100%"
                        src="https://sketchfab.com/playlists/embed?collection=c21909d81a8d473187bde869d1e3aca1&autostart=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; xr-spatial-tracking; execution-while-out-of-viewport; execution-while-not-rendered; web-share"
                        allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                    ></iframe>
                </div>

                {/* Modal Card */}
                <div className="bg-zinc-900 text-white rounded-xl shadow-2xl p-6 w-[24rem] relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-white hover:text-red-400 text-xl"
                    >
                        &#x2715;
                    </button>

                    {/* Header */}
                    <div className="mb-4">
                        <div className="text-4xl font-bold text-blue-400">{element.symbol}</div>
                        <div className="text-2xl font-semibold">{element.name}</div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-2 text-sm">
                        <div>
                            <span className="font-semibold">Atomic Number:</span> {element.number}
                        </div>
                        <div>
                            <span className="font-semibold">Elemental Group:</span> {element.group}
                        </div>
                        <div>
                            <span className="font-semibold">Standard State:</span> {element.state}
                        </div>
                        <div>
                            <span className="font-semibold">Year Discovered:</span> {element.discovered}
                        </div>
                        <div>
                            <span className="font-semibold">Element Facts:</span>
                            <p className="text-neutral-300">{element.facts}</p>
                        </div>
                        <div>
                            <span className="font-semibold">Element History:</span>
                            <p className="text-neutral-300">{element.history}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ElementModal;
