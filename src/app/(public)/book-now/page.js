
// "use client";

// import React, { useEffect, useState } from 'react';
// import Options from '../components/book-now';
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

// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";
// import Options from '../components/book-now';

// const BookNowPage = () => {
//     const router = useRouter();
//     const [selectedRoom, setSelectedRoom] = useState(null);
//     const [bookingData, setBookingData] = useState(null);

//     const [progressWidth, setProgressWidth] = useState(75); // Start at 75
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(2); // Options
//     const [loading, setLoading] = useState(true);
//     const progressRef = useRef(null);
//     const [optionsVisible, setOptionsVisible] = useState(true); // Ensure options are visible

//     useEffect(() => {
//         const roomData = localStorage.getItem('selectedRoom');
//         const bookingInfo = localStorage.getItem('bookingData');

//         if (roomData && bookingInfo) {
//             setSelectedRoom(JSON.parse(roomData));
//             setBookingData(JSON.parse(bookingInfo));
//             setLoading(false);
//             // setProgressBar(50,50);
//             // animateProgressBar(50,50)
//         } else {
//             router.push('/'); // Redirect if data is missing
//         }
//     }, [router]);

//     useEffect(() => {
//         if (loading) return;
//     }, [loading]);


//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }

//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';
//     const formattedCheckOutDate = bookingData.date?.to ? format(new Date(bookingData.date.to), 'dd/MM/yyyy') : '';

//     const getCheckpointStyle = (checkpointIndex) => {
//         const checkpoints = [0, 50, 75, 100];
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
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>


//             {/* progress Bars */}
//             <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
//                 <div
//                     ref={progressRef}
//                     className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
//                     style={{ width: `${progressWidth}%` }}
//                 ></div>

//                 <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-1">
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full border-2 z-10 ${getCheckpointStyle(0)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Dates</span>
//                     </div>
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full border-2 z-10 ${getCheckpointStyle(1)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Rooms</span>
//                     </div>
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full border-2 z-10 ${getCheckpointStyle(2)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Options</span>
//                     </div>
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full border-2 z-10 ${getCheckpointStyle(3)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Book</span>
//                     </div>
//                 </div>
//             </div>

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

//             <div className={`options-container ${optionsVisible ? 'options-visible' : ''}`}>
//                 <Options selectedRoom={selectedRoom} bookingData={bookingData} />
//             </div>
//         </div>
//     );
// };

// export default BookNowPage;

// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";
// import Options from '../components/book-now';
// import ProgressBar from '../../components/ProgressBar';

// const BookNowPage = () => {
//     const router = useRouter();
//     const [selectedRoom, setSelectedRoom] = useState(null);
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(75); // Start at 75
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(2); // Options
//     const [loading, setLoading] = useState(true);
//     const progressRef = useRef(null);
//     const [optionsVisible, setOptionsVisible] = useState(true);
//     const initialCheckpoint = 2;

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
//         <div className="lg:p-8 p-4">
//             <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
//                 Options
//             </span> </h1>

//             <ProgressBar progressWidth={progressWidth} currentCheckpoint={currentCheckpoint} />

//             <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
//                 <div className="md:flex gap-8 grid grid-cols-2">
//                     <div>
//                         <p className="text-sm text-prime font-medium">Check-in</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
//                             {formattedCheckInDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Check-out</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
//                             {formattedCheckOutDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Nights</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaCalendar className='lg:size-5 size-4 text-main' />
//                             {bookingData.numberOfNights}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Adults</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <IoIosMan className='lg:size-5 size-4 text-main' />
//                             {bookingData.totalAdults}</p>
//                     </div>
//                 </div>
//                 <button
//                     className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md"
//                     onClick={() => router.back()}
//                 >
//                     Change Dates
//                 </button>
//             </div>

//             <div className={`options-container ${optionsVisible ? 'options-visible' : ''}`}>
//                 <Options selectedRoom={selectedRoom} bookingData={bookingData} />
//             </div>
//         </div>
//     );
// };

// export default BookNowPage;

// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";
// import Options from '../components/book-now';
// import ProgressBar from '../../components/ProgressBar';

// const BookNowPage = () => {
//     const router = useRouter();
//     const [selectedRoom, setSelectedRoom] = useState(null);
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(75); // Start at 75
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(2); // Options
//     const [loading, setLoading] = useState(true);
//     const progressRef = useRef(null);
//     const [optionsVisible, setOptionsVisible] = useState(true);
//     const initialCheckpoint = 2;

//     useEffect(() => {
//         const roomData = localStorage.getItem('selectedRoom');
//         const bookingInfo = localStorage.getItem('bookingData');

//         if (roomData && bookingInfo) {
//             // Simulate a delay for a smoother transition (optional)
//             setTimeout(() => {
//                 setSelectedRoom(JSON.parse(roomData));
//                 setBookingData(JSON.parse(bookingInfo));
//                 setLoading(false);
//             }, 500); // Adjust the delay (in milliseconds) as needed
//         } else {
//             router.push('/'); // Redirect if data is missing
//         }
//     }, [router]);

//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen bg-gray-100'>
//                 <div className="animate-pulse flex space-x-3">
//                     <div className="h-8 w-8 bg-orange-400 rounded-full"></div>
//                     <div className="h-8 w-8 bg-orange-400 rounded-full"></div>
//                     <div className="h-8 w-8 bg-orange-400 rounded-full"></div>
//                 </div>
//             </div>
//         );
//     }

//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';
//     const formattedCheckOutDate = bookingData.date?.to ? format(new Date(bookingData.date.to), 'dd/MM/yyyy') : '';

//     return (
//         <div className="lg:p-8 p-4">
//             <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
//                 Options
//             </span> </h1>

//             <ProgressBar progressWidth={progressWidth} currentCheckpoint={currentCheckpoint} />

//             <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
//                 <div className="md:flex gap-8 grid grid-cols-2">
//                     <div>
//                         <p className="text-sm text-prime font-medium">Check-in</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
//                             {formattedCheckInDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Check-out</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
//                             {formattedCheckOutDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Nights</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <FaCalendar className='lg:size-5 size-4 text-main' />
//                             {bookingData.numberOfNights}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Adults</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <IoIosMan className='lg:size-5 size-4 text-main' />
//                             {bookingData.totalAdults}</p>
//                     </div>
//                 </div>
//                 <button
//                     className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md"
//                     onClick={() => router.back()}
//                 >
//                     Change Dates
//                 </button>
//             </div>

//             <div className={`options-container ${optionsVisible ? 'options-visible' : ''}`}>
//                 <Options selectedRoom={selectedRoom} bookingData={bookingData} />
//             </div>
//         </div>
//     );
// };

// export default BookNowPage;


"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import Options from '../components/book-now';
import ProgressBar from '../../components/ProgressBar';

const BookNowPage = () => {
    const router = useRouter();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [bookingData, setBookingData] = useState(null);
    const [progressWidth, setProgressWidth] = useState(75);
    const [currentCheckpoint, setCurrentCheckpoint] = useState(2);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const roomData = localStorage.getItem('selectedRoom');
            const bookingInfo = localStorage.getItem('bookingData');

            if (roomData && bookingInfo) {
                try {
                    setSelectedRoom(JSON.parse(roomData));
                    setBookingData(JSON.parse(bookingInfo));
                } catch (error) {
                    console.error("Error parsing data from localStorage:", error);
                    // Handle parsing error, perhaps redirect or clear storage
                    localStorage.removeItem('selectedRoom');
                    localStorage.removeItem('bookingData');
                    router.push('/'); // Redirect to homepage or error page
                    return;
                }
                setLoading(false);
            } else {
                router.push('/'); // Redirect if data is missing
            }
        };

        fetchData();
    }, [router]);

    if (selectedRoom === null || bookingData === null) {
        return null; // Render nothing or redirect
    }


    const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';
    const formattedCheckOutDate = bookingData.date?.to ? format(new Date(bookingData.date.to), 'dd/MM/yyyy') : '';

    return (
        <div className="lg:p-8 p-4">
            <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
                Options
            </span> </h1>

            <ProgressBar progressWidth={progressWidth} currentCheckpoint={currentCheckpoint} />

            <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
                <div className="md:flex gap-8 grid grid-cols-2">
                    <div>
                        <p className="text-sm text-prime font-medium">Check-in</p>
                        <p className="flex items-center gap-2 mt-2">
                            <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
                            {formattedCheckInDate}</p>
                    </div>
                    <div>
                        <p className="text-sm text-prime font-medium">Check-out</p>
                        <p className="flex items-center gap-2 mt-2">
                            <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
                            {formattedCheckOutDate}</p>
                    </div>
                    <div>
                        <p className="text-sm text-prime font-medium">Nights</p>
                        <p className="flex items-center gap-2 mt-2">
                            <FaCalendar className='lg:size-5 size-4 text-main' />
                            {bookingData.numberOfNights}</p>
                    </div>
                    <div>
                        <p className="text-sm text-prime font-medium">Adults</p>
                        <p className="flex items-center gap-2 mt-2">
                            <IoIosMan className='lg:size-5 size-4 text-main' />
                            {bookingData.totalAdults}</p>
                    </div>
                </div>
                <button
                    className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md"
                    onClick={() => router.back()}
                >
                    Change Dates
                </button>
            </div>

            <div className={`options-container`}>
                <Options selectedRoom={selectedRoom} bookingData={bookingData} />
            </div>
        </div>
    );
};

export default BookNowPage;