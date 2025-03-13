// // pages/book-now.js
// "use client";

// import React, { useEffect, useState } from 'react';
// import Options from '../';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";

// const BookNowPage = () => {
//     const [selectedRoom, setSelectedRoom] = useState(null);
//     const [bookingData, setBookingData] = useState(null);
//     const router = useRouter();
//     const [loading, setLoading] = useState(true); // Add a loading state

//     useEffect(() => {
//         const roomData = localStorage.getItem('selectedRoom');
//         const bookingInfo = localStorage.getItem('bookingData');

//         if (roomData && bookingInfo) {
//             setSelectedRoom(JSON.parse(roomData));
//             setBookingData(JSON.parse(bookingInfo));
//             setLoading(false);
//         } else {
//             router.push('/'); // Redirect if data is missing
//         }

//     }, [router]);

//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }
//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';
//     const formattedCheckOutDate = bookingData.date?.to ? format(new Date(bookingData.date.to), 'dd/MM/yyyy') : '';

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

//             <div className="bg-white flex justify-between items-center p-4 mt-16 rounded-lg shadow-md">
//                 <div className="flex gap-8">
//                     <div>
//                         <p className="text-sm text-prime font-medium">Check-in</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaArrowRightToBracket className='size-5 text-main' />
//                             {formattedCheckInDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Check-out</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaArrowRightToBracket className='size-5 text-main' />
//                             {formattedCheckOutDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Nights</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaCalendar className='size-5 text-main' />
//                             {bookingData.numberOfNights}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Adults</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <IoIosMan className='size-5 text-main' />
//                             {bookingData.totalAdults}</p>
//                     </div>
//                 </div>
//                 <button
//                     className="px-4 py-2 bg-orange-500 text-white rounded-md"
//                     onClick={() => router.back()}
//                 >
//                     Change Dates
//                 </button>
//             </div>

//             <Options selectedRoom={selectedRoom} bookingData={bookingData} />
//         </div>
//     );
// };

// export default BookNowPage;

// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { Tooltip } from 'react-tooltip';
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import Link from 'next/link';
// import { PiStarFourFill } from "react-icons/pi";
// const Options = ({ selectedRoom, bookingData }) => {

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     return (
//         <>
//             <div className='lg:py-10 py-5'>
//                 {selectedRoom ? (
//                     <div className="bg-white rounded-lg shadow-sm border lg:p-6 p-2">

//                         {/* Room Image */}
//                         <div className='flex lg:flex-row flex-col lg:gap-8 gap-4'>
//                             <div>
//                                 <Image
//                                     src={selectedRoom.images[0]}
//                                     alt={selectedRoom.name}
//                                     width={500}
//                                     height={400}
//                                     className="rounded-md w-full h-full bg-cover"
//                                 />
//                             </div>

//                             <div>
//                                 <h2 className="lg:text-2xl text-xl text-main font-medium mb-4">{selectedRoom.name}</h2>
//                                 {/* Description */}
//                                 <p className="text-gray-700 mb-4 lg:text-xl text-justify text-lg">{selectedRoom.description}</p>

//                                 {/* Characteristics (Amenities) */}
//                                 <h3 className="lg:text-xl text-lg font-medium mb-2">Characteristics :</h3>
//                                 <div className="flex gap-3 lg:mb-4">
//                                     {selectedRoom.facilities ? (
//                                         Object.entries(selectedRoom.facilities)
//                                             .filter(([key, value]) => value === true)
//                                             .map(([key]) => (
//                                                 facilityIcons[key] && (
//                                                     <div key={key}>
//                                                         <div
//                                                             className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                             data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                     </div>
//                                                 )
//                                             ))
//                                     ) : null}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center border-t border-gray-300 mt-5 pt-5">
//                             <div className="flex items-center gap-2">
//                                 {/* <span className="p-2 rounded-full bg-main">
//                                 </span> */}
//                                 <PiStarFourFill className='size-5 font-medium text-main' />
//                                 <span className="text-lg font-medium text-prime">Standard Rate</span>
//                             </div>
//                             <div className="ml-auto text-xl font-bold text-orange-500">₹ {selectedRoom.price}</div>
//                         </div>
//                         <div className="mt-2 text-base text-gray-700">
//                             Breakfast Included | Free Cancellation
//                         </div>
//                     </div>
//                 ) : (
//                     <p className="text-center text-gray-500">No room selected yet.</p>
//                 )}
//             </div>

//             <div className='flex justify-between cursor-pointer'>
//                 <Link href='/your-booking-detail' className='px-6 py-2 flex gap-2 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'>
//                     <FaArrowLeft className='group-hover:-translate-x-5 transition-transform ease-in-out duration-500' />
//                     Back Now
//                 </Link>

//                 {/* ConformRoom Booking */}
//                 <Link href="/conform-booking" className='px-6 py-2 flex gap-4 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'>
//                     <FaArrowRight className='group-hover:translate-x-3 transition-transform ease-in-out duration-500' />
//                     Book Now
//                 </Link>
//             </div>
//         </>
//     );
// };

// export default Options;


"use client";

import React from 'react';
import Image from 'next/image';
import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { PiStarFourFill } from "react-icons/pi";
import { useRouter } from 'next/navigation';

const Options = () => {
    const [selectedRoom, setSelectedRoom] = React.useState(null);
    const router = useRouter();

    React.useEffect(() => {
        const storedRoom = localStorage.getItem('selectedRoom');
        if (storedRoom) {
            setSelectedRoom(JSON.parse(storedRoom));
        }
    }, []);

    const facilityIcons = {
        wifi: { icon: <FaWifi />, label: "Free Wifi" },
        bath: { icon: <FaBath />, label: "Bathroom" },
        room: { icon: <FaUniversity />, label: "Room" },
        air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
    };

    const handleBookNow = () => {
        router.push('/conform-booking'); //Navigate to confirmation page
    };

    return (
        <>
            <div className='lg:py-10 py-5'>
                {selectedRoom ? (
                    <div className="bg-white rounded-lg shadow-sm border lg:p-6 p-2">
                        {/* Room Image */}
                        <div className='flex lg:flex-row flex-col lg:gap-8 gap-4'>
                            <div>
                                <Image
                                    src={selectedRoom.images[0]}
                                    alt={selectedRoom.name}
                                    width={500}
                                    height={400}
                                    className="rounded-md w-full h-full bg-cover"
                                />
                            </div>

                            <div>
                                <h2 className="lg:text-2xl text-xl text-main font-medium mb-4">{selectedRoom.name}</h2>
                                {/* Description */}
                                <p className="text-gray-700 mb-4 lg:text-xl text-justify text-lg">{selectedRoom.description}</p>

                                {/* Characteristics (Amenities) */}
                                <h3 className="lg:text-xl text-lg font-medium mb-2">Characteristics :</h3>
                                <div className="flex gap-3 lg:mb-4">
                                    {selectedRoom.facilities ? (
                                        Object.entries(selectedRoom.facilities)
                                            .filter(([key, value]) => value === true)
                                            .map(([key]) => (
                                                facilityIcons[key] && (
                                                    <div key={key}>
                                                        <div
                                                            className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
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
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center border-t border-gray-300 mt-5 pt-5">
                            <div className="flex items-center gap-2">
                                {/* <span className="p-2 rounded-full bg-main">
                                </span> */}
                                <PiStarFourFill className='size-5 font-medium text-main' />
                                <span className="text-lg font-medium text-prime">Standard Rate</span>
                            </div>
                            <div className="ml-auto text-xl font-bold text-orange-500">₹ {selectedRoom.price}</div>
                        </div>
                        <div className="mt-2 text-base text-gray-700">
                            Breakfast Included | Free Cancellation
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No room selected yet.</p>
                )}
            </div>

            <div className='flex justify-between cursor-pointer'>
                <Link href='/your-booking-detail' className='px-6 py-2 flex gap-2 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'>
                    <FaArrowLeft className='group-hover:-translate-x-5 transition-transform ease-in-out duration-500' />
                    Back Now
                </Link>

                <button
                    onClick={handleBookNow} // Use the handleBookNow function
                    className='px-6 py-2 flex gap-4 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'
                >
                    <FaArrowRight className='group-hover:translate-x-3 transition-transform ease-in-out duration-500' />
                    Book Now
                </button>
            </div>
        </>
    );
};

export default Options;


