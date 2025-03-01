// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { IoCameraOutline } from 'react-icons/io5';
// import { FaWifi, FaBath, FaMonument } from 'react-icons/fa';
// import RoomCarousel from './RoomCarousel';
// import { FaChildren } from "react-icons/fa6";


// const HotelCard = ({ room }) => {
//     const [showSlider, setShowSlider] = useState(false);
//     const sliderRef = useRef(null);

//     const toggleSlider = () => {
//         setShowSlider(!showSlider);
//     };

//     // Disable scroll when slider is open
//     useEffect(() => {
//         if (showSlider) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         return () => {
//             document.body.style.overflow = 'unset'; // Restore on unmount
//         };
//     }, [showSlider]);

//     const handleOutsideClick = (e) => {
//         if (sliderRef.current && !sliderRef.current.contains(e.target)) {
//             setShowSlider(false);
//         }
//     };

//     useEffect(() => {
//         if (showSlider) {
//             document.addEventListener('mousedown', handleOutsideClick);
//         } else {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, [showSlider]);

//     return (
//         <>
//             <div className='container mx-auto px-4'>
//                 <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
//                     <span className="text-prime"> Room & Suites </span>
//                     <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                         Our Rooms
//                     </span>
//                 </h1>
//                 <div className='flex justify-center'>
//                     <p className='text-prime font-medium text-xl max-w-4xl text-center'>
//                         Risus consequat donec vel mi diam lobortis maximus laoreet nisi. Fames torquent neque duis pharetra urna per facilisis nunc cras blandit.
//                     </p>
//                 </div>
//             </div>
//             <div className="w-full max-w-7xl mx-auto border border-slate-300/50 rounded-lg shadow-md overflow-hidden flex my-14">
//                 {/* Image Section */}
//                 <div className="w-1/3 relative">
//                     <Image
//                         src={room.images[0]}
//                         alt={room.name}
//                         width={500}
//                         height={400}
//                         className="object-cover h-full w-full"
//                     />
//                     {/* Camera Button */}
//                     <button
//                         onClick={toggleSlider}
//                         className="absolute top-2 right-2 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300" // Added duration-300
//                     >
//                         <IoCameraOutline size={20} />
//                     </button>
//                 </div>

//                 {/* Content Section */}
//                 <div className="w-1/3 p-4 space-y-2.5 border-r-2 border-r-gray-300">
//                     <h2 className="text-2xl font-medium text-main">{room.name}</h2>
//                     <p className="text-gray-700 text-md">{room.description}</p>
//                     <div className="flex space-x-4 mt-2">
//                         {room.facilities.wifi && <FaWifi className='text-prime size-5' />}
//                         {room.facilities.bath && <FaBath className='text-prime size-5' />}
//                         {room.facilities.monument && <FaMonument className='text-prime size-5' />}
//                     </div>
//                 </div>

//                 {/* Pricing and Details Section */}
//                 <div className="w-1/3 p-4 flex flex-col items-center justify-center bg-gray-50">
//                     <div className="flex items-center mb-4">
//                         <FaChildren className='size-8 text-main' />
//                     </div>
//                     <p className="text-2xl font-bold">₹{room.price}</p>
//                     <p className="text-gray-700 font-medium">Per Night</p>
//                     <button className="bg-main text-white px-10 py-2 rounded mt-4">
//                         Details
//                     </button>
//                 </div>

//                 {/* Image Slider (Conditionally Rendered) */}
//                 <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                     {showSlider && (
//                         <div ref={sliderRef} className="relative w-3/4 h-3/4">
//                             <RoomCarousel images={room.images} onClose={toggleSlider} />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default HotelCard;


"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoCameraOutline } from 'react-icons/io5';
import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
import RoomCarousel from './RoomCarousel';
import { Tooltip } from 'react-tooltip';
import { FaArrowRightLong } from "react-icons/fa6";

const HotelCard = ({ room }) => {
    const [showSlider, setShowSlider] = useState(false);
    const sliderRef = useRef(null);

    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };

    // Handle body scroll lock when slider is open
    useEffect(() => {
        if (showSlider) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showSlider]);

    // Handle outside click to close slider
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (sliderRef.current && !sliderRef.current.contains(e.target)) {
                setShowSlider(false);
            }
        };

        if (showSlider) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showSlider]);

    // Map facility icons to components
    const facilityIcons = {
        wifi: { icon: <FaWifi />, label: "Free Wifi" },
        bath: { icon: <FaBath />, label: "Bathroom" },
        room: { icon: <FaUniversity />, label: "Room" },
        air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
    };

    return (
        <>
            {/* Image Section */}
            <div className='flex flex-col border border-gray-300 shadow-md rounded-2xl lg:mb-12'>
                <div className='relative h-62 overflow-hidden'>
                    <Image
                        src={room.images[0]}
                        alt={room.name}
                        width={600}
                        height={400}
                        className="object-cover h-full w-full roundeds"
                    />
                    {/* Camera Button */}
                    <button
                        onClick={toggleSlider}
                        className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300" // Added duration-300
                    >
                        <IoCameraOutline size={20} />
                    </button>

                    {/* Room Type Badge */}
                    <div className="absolute top-3 left-3 bg-main text-white px-2 py-0.5 rounded-sm text-sm font-medium">
                        {room.name}
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="border-b border-gray-300/50 pb-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-orange-600 lg:text-lg text-md font-medium">{room.category || "Economy"}</h3>
                                    <h2 className="text-gray-800 lg:text-xl text-lg font-medium text-nowrap">{room.name || "Ashram Non AC Rooms"}</h2>
                                </div>
                                <div className="text-right">
                                    <p className="lg:text-3xl text-2xl font-bold text-main">₹{room.price || "1200"}</p>
                                    <p className="text-gray-700 text-sm font-medium">Per Night</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="py-2 flex-grow">
                            <p className="text-gray-700 pb-2">{room.description || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
                            {/* Facilities */}
                            <div className="">
                                <h4 className="text-prime font-medium mb-2">Amenities</h4>
                                <div className="flex gap-3">
                                    {room.facilities ? (
                                        Object.entries(room.facilities)
                                            .filter(([key, value]) => value === true)
                                            .map(([key]) => (
                                                facilityIcons[key] && (
                                                    <div key={key}>
                                                        <div
                                                            className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
                                                            data-tooltip-id={`tooltip-${key}`}
                                                            data-tooltip-content={facilityIcons[key].label}
                                                            data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
                                                        >
                                                            {facilityIcons[key].icon}
                                                        </div>
                                                        <Tooltip id={`tooltip-${key}`} place="top" />
                                                    </div>
                                                )
                                            ))
                                    ) : (
                                        ['wifi', 'bath', 'meditation'].map(key => (
                                            <div key={key} className="text-center">
                                                <div
                                                    className="mx-auto text-orange-600 bg-orange-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
                                                    data-tooltip-id={`tooltip-${key}`}
                                                    data-tooltip-content={facilityIcons[key].label}
                                                >
                                                    {facilityIcons[key].icon}
                                                </div>
                                                <Tooltip id={`tooltip-${key}`} place="top" />
                                                <span className="text-xs text-gray-600 mt-1 block">{facilityIcons[key].label}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="pt-2">
                            <div className="flex justify-end items-center">
                                <button className="bg-[#ff5700] gap-2.5 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center">
                                    Details
                                    <FaArrowRightLong className='size-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Slider (Conditionally Rendered) */}
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {showSlider && (
                    <div ref={sliderRef} className="relative w-3/4 h-3/4">
                        <RoomCarousel images={room.images} onClose={toggleSlider} />
                    </div>
                )}
            </div>
        </>
    );
};

export default HotelCard;
