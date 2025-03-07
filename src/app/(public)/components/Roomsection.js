// "use client";

// import React from 'react'
// import Link from 'next/link';
// import { FaArrowRightLong } from 'react-icons/fa6';
// import HotelCard from './HotelCard';

// const Roomsection = () => {
//     return (
//         <div className='container mx-auto px-4 pb-10'>
//             <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
//                 <span className="text-prime"> Room & Suites </span>
//                 <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                     Our Rooms
//                 </span>
//             </h1>
//             <div className='flex justify-center'>
//                 <p className='text-prime font-medium lg:text-xl text-lg max-w-4xl text-center'>
//                     Risus consequat donec vel mi diam lobortis maximus laoreet nisi. Fames torquent neque duis pharetra urna per facilisis nunc cras blandit.
//                 </p>
//             </div>


//             {/* Hotel cards */}
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto px-4">
//                 <HotelCard />
//             </div>

//             <div className='flex justify-center items-center mt-10'>
//                 <Link href='/rooms' className='capitalize flex items-center gap-4 text-lg bg-main text-center rounded-md text-white px-5 py-2'>
//                     view all rooms
//                     <FaArrowRightLong />
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default Roomsection

"use client";

import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import HotelCard from './HotelCard';

const Roomsection = () => {
    return (
        <div className='container mx-auto px-4 py-10'> 
            <h1 className="text-3xl lg:text-4xl font-medium mb-6 text-center">
                <span className="text-prime"> Room & Suites </span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Our Rooms
                </span>
            </h1>
            <div className='flex justify-center pb-10'>
                <p className='text-gray-700 text-lg max-w-4xl text-center'>
                    Risus consequat donec vel mi diam lobortis maximus laoreet nisi. Fames torquent neque duis pharetra urna per facilisis nunc cras blandit.
                </p>
            </div>

            {/* Hotel cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                <HotelCard limit={3} />
            </div>

            <div className='flex justify-center items-center mt-10'>
                <Link href='/rooms' className='capitalize flex items-center gap-4 text-lg bg-main text-center rounded-md text-white px-5 py-2'>
                    view all rooms
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    );
};

export default Roomsection;