// // components/ProgressBar.js

// import React from 'react';

// const ProgressBar = ({ progressWidth, currentCheckpoint }) => {
//     const checkpoints = [0, 50, 75, 100];

//     const getCheckpointStyle = (checkpointIndex) => {
//         const checkpointPercentage = checkpoints[checkpointIndex];

//         if (progressWidth > checkpointPercentage) {
//             return 'bg-orange-500 border-orange-500';
//         } else if (progressWidth >= checkpointPercentage) {
//             return 'bg-white border-orange-500';
//         } else {
//             return 'bg-gray-200 border-gray-300';
//         }
//     };

//     return (
//         <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
//             <div
//                 className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
//                 style={{ width: `${progressWidth}%` }}
//             ></div>

//             <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-1">
//                 <div className="relative">
//                     <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(0)}`}></div>
//                     <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Dates</span>
//                 </div>
//                 <div className="relative">
//                     <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(1)}`}></div>
//                     <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Rooms</span>
//                 </div>
//                 <div className="relative">
//                     <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(2)}`}></div>
//                     <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Options</span>
//                 </div>
//                 <div className="relative">
//                     <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(3)}`}></div>
//                     <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Book</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProgressBar;

// components/ProgressBar.js

import React from 'react';

const ProgressBar = ({ currentCheckpoint }) => {
    const checkpoints = [0, 1, 2, 3]; // Indices for checkpoints
    const progressWidths = {
        0: 0,  //Dates
        1: 50, //Rooms
        2: 75, //Options
        3: 100 //Book
    };

    const getCheckpointStyle = (checkpointIndex) => {
        if (currentCheckpoint > checkpointIndex) {
            return 'bg-orange-500 border-orange-500';
        } else if (currentCheckpoint === checkpointIndex) {
            return 'bg-white border-orange-500';
        } else {
            return 'bg-gray-200 border-gray-300';
        }
    };

    const calculateProgressWidth = () => {
        if (currentCheckpoint in progressWidths) {
            return progressWidths[currentCheckpoint];
        } else {
            return 0;  // Default fallback.  Should never reach here, but safe to have.
        }
    };

    const progressWidth = calculateProgressWidth();

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
            <div
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progressWidth}%` }}
            ></div>

            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-1">
                <div className="relative">
                    <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(0)}`}></div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Dates</span>
                </div>
                <div className="relative">
                    <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(1)}`}></div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Rooms</span>
                </div>
                <div className="relative">
                    <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(2)}`}></div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Options</span>
                </div>
                <div className="relative">
                    <div className={`md:size-5 size-3.5 rounded-full border-2 z-10 ${getCheckpointStyle(3)}`}></div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:text-xl text-base font-medium text-prime">Book</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;


