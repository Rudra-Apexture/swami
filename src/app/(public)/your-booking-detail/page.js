// import React from 'react'

// const page = () => {
//     return (
//         /* My Booking Processing Bar */
//         <div className='text-2xl text-center bg-red-300 my-10'>your-booking-detail</div>
//     )
// }

// export default page

// pages/your-booking-detail.js (Your Booking Details Page)

// "use client";

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'; // Use next/navigation for useRouter
// import { format } from 'date-fns';

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0); // For the progress bar animation

//     useEffect(() => {
//         // Retrieve booking data from localStorage (or wherever you stored it)
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));
//             // Animate the progress bar up to "Rooms" (which is 50% in this case)
//             setProgressWidth(50);
//         } else {
//             // Redirect to the home page if there's no booking data.
//             router.push('/'); // Redirect to home if no data
//         }
//     }, [router]);

//     if (!bookingData) {
//         return <div>Loading...</div>; // Or a more user-friendly loading state
//     }

//     // Format the date for display
//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';


//     return (
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
//                 <div
//                     className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
//                     style={{ width: `${progressWidth}%` }}
//                 ></div>
//                 <div className="flex justify-between text-lg font-medium text-prime mt-1">
//                     <div>Dates</div>
//                     <div>Rooms</div>
//                     <div>Options</div>
//                     <div>Book</div>
//                 </div>
//             </div>



//             {/* Booking Summary */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="grid grid-cols-3 gap-4">
//                     <div>
//                         <p className="text-sm text-gray-600">Check-in</p>
//                         <p className="font-bold">{formattedCheckInDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-600">Nights</p>
//                         <p className="font-bold">{bookingData.numberOfNights}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-600">Adults</p>
//                         <p className="font-bold">{bookingData.totalAdults}</p>
//                     </div>
//                 </div>
//                 <button
//                     className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-200"
//                     onClick={() => router.back()} // Go back to the previous page
//                 >
//                     Change Dates
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;

// "use client";

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0); // For the progress bar animation

//     useEffect(() => {
//         // Retrieve booking data from localStorage (or wherever you stored it)
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));
//             // Animate the progress bar up to "Rooms" (which is 50% in this case)
//             setProgressWidth(50);
//         } else {
//             // Redirect to the home page if there's no booking data.
//             router.push('/'); // Redirect to home if no data
//         }
//     }, [router]);

//     if (!bookingData) {
//         return <div>Loading...</div>; // Or a more user-friendly loading state
//     }

//     // Format the date for display
//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';

//     // Helper function to determine checkpoint styles
//     const getCheckpointStyle = (checkpointPercentage) => {
//         if (progressWidth > checkpointPercentage) {
//             return 'bg-orange-500 border-orange-500'; // Fully completed
//         } else if (progressWidth === checkpointPercentage) {
//             return 'bg-white border-orange-500';   // Currently active
//         } else {
//             return 'bg-gray-200 border-gray-300';   // Not yet reached
//         }
//     };


//     return (
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 relative">
//                 <div
//                     className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
//                     style={{ width: `${progressWidth}%` }}
//                 ></div>

//                 {/* --- Checkpoints --- */}
//                 <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-1">
//                     {/* Checkpoint 1: Dates */}
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full border-2 z-10 ${getCheckpointStyle(0)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Dates</span>
//                     </div>

//                     {/* Checkpoint 2: Rooms */}
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full  border-2 z-10 ${getCheckpointStyle(50)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Rooms</span>
//                     </div>

//                     {/* Checkpoint 3: Options */}
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full border-2 z-10 ${getCheckpointStyle(75)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Options</span>
//                     </div>


//                     {/* Checkpoint 4: Book */}
//                     <div className="relative">
//                         <div className={`w-4 h-4 rounded-full border-2 z-10 ${getCheckpointStyle(100)}`}></div>
//                         <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl font-medium text-prime">Book</span>
//                     </div>
//                 </div>
//                 {/* --- End Checkpoints --- */}
//             </div>



//             {/* Booking Summary */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="grid grid-cols-3 gap-4">
//                     <div>
//                         <p className="text-sm text-gray-600">Check-in</p>
//                         <p className="font-bold">{formattedCheckInDate}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-600">Nights</p>
//                         <p className="font-bold">{bookingData.numberOfNights}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-600">Adults</p>
//                         <p className="font-bold">{bookingData.totalAdults}</p>
//                     </div>
//                 </div>
//                 <button
//                     className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-200"
//                     onClick={() => router.back()} // Go back to the previous page
//                 >
//                     Change Dates
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;


// "use client";

// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan, IoMdPhonePortrait } from "react-icons/io";
// import HotelCard from '../components/HotelCard'

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0);
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
//     const [loading, setLoading] = useState(true); // Add a loading state
//     const progressRef = useRef(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));

//             // Simulate loading for 1 seconds
//             setTimeout(() => {
//                 setLoading(false); // Set loading to false after 2 seconds
//                 animateProgressBar();
//             }, 1000);

//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     const animateProgressBar = () => {
//         const checkpoints = [0, 50, 75, 100];
//         let currentProgress = 0;
//         let checkpointIndex = 0;

//         const animationInterval = setInterval(() => {
//             if (currentProgress >= checkpoints[checkpointIndex + 1]) {
//                 checkpointIndex++;
//                 setCurrentCheckpoint(checkpointIndex);

//                 if (checkpointIndex >= checkpoints.length - 1) {
//                     clearInterval(animationInterval);
//                 }
//             }

//             currentProgress += 0.5;  //Smooth increment
//             setProgressWidth(currentProgress);

//             if (currentProgress >= 50) {
//                 clearInterval(animationInterval);
//             }
//         }, 20); // Interval
//     };


//     if (!bookingData) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }

//     // Show loading spinner while loading is true
//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }


//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';

//     const getCheckpointStyle = (checkpointIndex) => {
//         const checkpoints = [0, 50, 75, 100];
//         const checkpointPercentage = checkpoints[checkpointIndex];

//         if (progressWidth > checkpointPercentage) {
//             return 'bg-orange-500 border-orange-500';
//         } else if (progressWidth >= checkpointPercentage) {
//             return 'bg-white border-orange-500'; // Added animate-bounce
//         } else {
//             return 'bg-gray-200 border-gray-300';
//         }
//     };


//     return (
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

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

//             <div className='grid lg:grid-cols-3 grid-cols-2 my-10 gap-4'>
//                 <HotelCard />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;


// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan, IoMdPhonePortrait } from "react-icons/io";
// import HotelCard from '../components/HotelCard'

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0);
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
//     const [loading, setLoading] = useState(true); // Add a loading state
//     const progressRef = useRef(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));

//             // Simulate loading for 1 seconds
//             setTimeout(() => {
//                 setLoading(false); // Set loading to false after 2 seconds
//                 animateProgressBar();
//             }, 1000);

//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     const animateProgressBar = () => {
//         const checkpoints = [0, 50, 75, 100];
//         let currentProgress = 0;
//         let checkpointIndex = 0;

//         const animationInterval = setInterval(() => {
//             if (currentProgress >= checkpoints[checkpointIndex + 1]) {
//                 checkpointIndex++;
//                 setCurrentCheckpoint(checkpointIndex);

//                 if (checkpointIndex >= checkpoints.length - 1) {
//                     clearInterval(animationInterval);
//                 }
//             }

//             currentProgress += 0.5;  //Smooth increment
//             setProgressWidth(currentProgress);

//             if (currentProgress >= 50) {
//                 clearInterval(animationInterval);
//             }
//         }, 15); // Interval
//     };


//     if (!bookingData) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }

//     // Show loading spinner while loading is true
//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }


//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';

//     const getCheckpointStyle = (checkpointIndex) => {
//         const checkpoints = [0, 50, 75, 100];
//         const checkpointPercentage = checkpoints[checkpointIndex];

//         if (progressWidth > checkpointPercentage) {
//             return 'bg-orange-500 border-orange-500';
//         } else if (progressWidth >= checkpointPercentage) {
//             return 'bg-white border-orange-500'; // Added animate-bounce
//         } else {
//             return 'bg-gray-200 border-gray-300';
//         }
//     };


//     return (
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

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

//             <div className='grid lg:grid-cols-3 grid-cols-2 my-10 gap-4'>
//                 <HotelCard filterAdults={bookingData.totalAdults} />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;

// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan, IoMdPhonePortrait } from "react-icons/io";
// import HotelCard from '../components/HotelCard'

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0);
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
//     const [loading, setLoading] = useState(true); // Add a loading state
//     const progressRef = useRef(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));

//             // Simulate loading for 1 seconds
//             setTimeout(() => {
//                 setLoading(false); // Set loading to false after 2 seconds
//                 animateProgressBar();
//             }, 1000);

//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     const animateProgressBar = () => {
//         const checkpoints = [0, 50, 75, 100];
//         let currentProgress = 0;
//         let checkpointIndex = 0;

//         const animationInterval = setInterval(() => {
//             if (currentProgress >= checkpoints[checkpointIndex + 1]) {
//                 checkpointIndex++;
//                 setCurrentCheckpoint(checkpointIndex);

//                 if (checkpointIndex >= checkpoints.length - 1) {
//                     clearInterval(animationInterval);
//                 }
//             }

//             currentProgress += 0.5;  //Smooth increment
//             setProgressWidth(currentProgress);

//             if (currentProgress >= 50) {
//                 clearInterval(animationInterval);
//             }
//         }, 20); // Interval
//     };


//     if (!bookingData) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }

//     // Show loading spinner while loading is true
//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }


//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';

//     const getCheckpointStyle = (checkpointIndex) => {
//         const checkpoints = [0, 50, 75, 100];
//         const checkpointPercentage = checkpoints[checkpointIndex];

//         if (progressWidth > checkpointPercentage) {
//             return 'bg-orange-500 border-orange-500';
//         } else if (progressWidth >= checkpointPercentage) {
//             return 'bg-white border-orange-500'; // Added animate-bounce
//         } else {
//             return 'bg-gray-200 border-gray-300';
//         }
//     };


//     return (
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

//             <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
//                 <div
//                     ref={progressRef}
//                     className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
//                     style={{ width: `${progressWidth}%` }}
//                 ></div>

//                 {/* progress bar */}
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

//             <div className='grid lg:grid-cols-3 grid-cols-2 my-10 gap-4'>
//                 <HotelCard filterAdults={bookingData.totalAdults} />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;

// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan, IoMdPhonePortrait } from "react-icons/io";
// import HotelCard from '../components/HotelCard';
// import Options from '../book-now/page'; // Import Options component

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0);
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
//     const [loading, setLoading] = useState(true); // Add a loading state
//     const progressRef = useRef(null);
//     const [selectedRoom, setSelectedRoom] = useState(null); // new state

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));

//             // Simulate loading for 1 seconds
//             setTimeout(() => {
//                 setLoading(false); // Set loading to false after 2 seconds
//                 animateProgressBar(50);
//             }, 1000);

//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     const animateProgressBar = (targetWidth) => {
//         const checkpoints = [0, 50, 75, 100];
//         let currentProgress = progressWidth;
//         let checkpointIndex = currentCheckpoint;

//         const animationInterval = setInterval(() => {
//             if (currentProgress >= targetWidth) {
//                 clearInterval(animationInterval);
//                 setCurrentCheckpoint(checkpoints.indexOf(targetWidth)); // Update checkpoint
//                 return;
//             }

//             currentProgress += 1;  //Smooth increment
//             setProgressWidth(currentProgress);

//         }, 50); // Interval
//     };


//     if (!bookingData) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }

//     // Show loading spinner while loading is true
//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }


//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';

//     const getCheckpointStyle = (checkpointIndex) => {
//         const checkpoints = [0, 50, 75, 100];
//         const checkpointPercentage = checkpoints[checkpointIndex];

//         if (progressWidth > checkpointPercentage) {
//             return 'bg-orange-500 border-orange-500';
//         } else if (progressWidth >= checkpointPercentage) {
//             return 'bg-white border-orange-500'; // Added animate-bounce
//         } else {
//             return 'bg-gray-200 border-gray-300';
//         }
//     };
//     const handleRoomSelect = (room) => {

//         setSelectedRoom(room);
//         animateProgressBar(75); // Proceed to Options
//     };


//     return (
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

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
//             {progressWidth < 75 ? (
//                 <div className='grid lg:grid-cols-3 grid-cols-2 my-10 gap-4'>
//                     <HotelCard filterAdults={bookingData.totalAdults} onRoomSelect={handleRoomSelect} />
//                 </div>
//             ) : (
//                 <Options selectedRoom={selectedRoom} bookingData={bookingData} />  //Display Options if progress is at or beyond 75
//             )}
//         </div>
//     );
// };

// export default YourBookingDetail;
// "use client";

// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan, IoMdPhonePortrait } from "react-icons/io";
// import HotelCard from '../components/HotelCard';
// import Options from '../book-now/page'; // Import Options component

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0);
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
//     const [loading, setLoading] = useState(true); // Add a loading state
//     const progressRef = useRef(null);
//     const [selectedRoom, setSelectedRoom] = useState(null); // new state

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));

//             // Simulate loading for 1 seconds
//             setTimeout(() => {
//                 setLoading(false); // Set loading to false after 2 seconds
//                 animateProgressBar(50);
//             }, 1000);

//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     const animateProgressBar = (targetWidth) => {
//         const checkpoints = [0, 50, 75, 100];
//         let currentProgress = progressWidth;
//         let checkpointIndex = currentCheckpoint;

//         const animationInterval = setInterval(() => {
//             if (currentProgress >= targetWidth) {
//                 clearInterval(animationInterval);
//                 setCurrentCheckpoint(checkpoints.indexOf(targetWidth)); // Update checkpoint
//                 return;
//             }

//             currentProgress += 0.5;  //Smooth increment
//             setProgressWidth(currentProgress);

//         }, 20); // Interval
//     };


//     if (!bookingData) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }

//     // Show loading spinner while loading is true
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
//             return 'bg-white border-orange-500'; // Added animate-bounce
//         } else {
//             return 'bg-gray-200 border-gray-300';
//         }
//     };
//     const handleRoomSelect = (room) => {

//         setSelectedRoom(room);
//         animateProgressBar(75); // Proceed to Options
//     };


//     return (
//         <div className="p-8">
//             <h1 className="text-3xl text-center font-medium mb-10">Your Booking Details</h1>

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
//             {progressWidth < 75 ? (
//                 <div className='grid lg:grid-cols-3 grid-cols-2 my-10 gap-4'>
//                     <HotelCard filterAdults={bookingData.totalAdults} onRoomSelect={handleRoomSelect} />
//                 </div>
//             ) : (
//                 <Options selectedRoom={selectedRoom} bookingData={bookingData} />  //Display Options if progress is at or beyond 75
//             )}
//         </div>
//     );
// };

// export default YourBookingDetail;

// "use client";

// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan, IoMdPhonePortrait } from "react-icons/io";
// import HotelCard from '../components/HotelCard';


// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [loading, setLoading] = useState(true); // Add a loading state

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));
//             setLoading(false); // Set loading to false after 2 seconds
//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     if (!bookingData) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//             </div>
//         );
//     }

//     // Show loading spinner while loading is true
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
//         <div className="p-8">
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

//             <div className='grid lg:grid-cols-3 grid-cols-2 my-10 gap-4'>
//                 <HotelCard filterAdults={bookingData.totalAdults} />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;


// "use client";

// import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";
// import HotelCard from '../components/HotelCard';
// import ProgressBar from '../../components/ProgressBar';

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(0);
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const progressRef = useRef(null);
//     const initialCheckpoint = 0;

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));

//             // Simulate loading for 1 seconds
//             setTimeout(() => {
//                 setLoading(false); // Set loading to false after 2 seconds
//                 animateProgressBar(50);
//             }, 1000);

//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     const animateProgressBar = (targetWidth) => {
//         const checkpoints = [0, 50, 75, 100];
//         let currentProgress = progressWidth;
//         let checkpointIndex = currentCheckpoint;

//         const animationInterval = setInterval(() => {
//             if (currentProgress >= targetWidth) {
//                 clearInterval(animationInterval);
//                 setCurrentCheckpoint(checkpoints.indexOf(targetWidth)); // Update checkpoint
//                 //  if (targetWidth === 75) {
//                 //     setTimeout(() => setOptionsVisible(true), 20); // Delay to allow progress animation to complete
//                 // }
//                 return;
//             }

//             currentProgress += 0.5;  //Smooth increment
//             setProgressWidth(currentProgress);

//         }, 20); // Interval
//     };


//     if (!bookingData) {
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
//             <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking Details</h1>

//             <ProgressBar progressWidth={progressWidth} currentCheckpoint={currentCheckpoint} />

//             <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
//                 <div className="md:flex gap-8 grid grid-cols-2">
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
//                     className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md"
//                     onClick={() => router.back()}
//                 >
//                     Change Dates
//                 </button>
//             </div>

//             <div className='grid lg:grid-cols-3 grid-cols-1 my-10 gap-4'>
//                 <HotelCard filterAdults={bookingData.totalAdults} />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;

// "use client";

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";
// import HotelCard from '../components/HotelCard';
// import ProgressBar from '../../components/ProgressBar';

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [progressWidth, setProgressWidth] = useState(100); // Full progress bar
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(3); // Last Checkpoint
//     const [loading, setLoading] = useState(false); // Remove Loading state

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));
//         } else {
//             router.push('/');
//         }
//     }, [router]);


//     if (!bookingData) {
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
//             <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking Details</h1>

//             <ProgressBar progressWidth={progressWidth} currentCheckpoint={currentCheckpoint} />

//             <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
//                 <div className="md:flex gap-8 grid grid-cols-2">
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
//                     className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md"
//                     onClick={() => router.back()}
//                 >
//                     Change Dates
//                 </button>
//             </div>

//             <div className='grid lg:grid-cols-3 grid-cols-1 my-10 gap-4'>
//                 <HotelCard filterAdults={bookingData.totalAdults} />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;


// YourBookingDetail.js
// working...
// "use client";

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { format } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";
// import HotelCard from '../components/HotelCard';
// import ProgressBar from '../../components/ProgressBar';

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(1); // Set Checkpoint to 1

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             setBookingData(JSON.parse(storedData));
//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     if (!bookingData) {
//         return null; // Return null if no booking data.
//     }

//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';
//     const formattedCheckOutDate = bookingData.date?.to ? format(new Date(bookingData.date.to), 'dd/MM/yyyy') : '';

//     return (
//         <div className="lg:p-8 p-4">
//             <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'> Rooms </span>  </h1>

//             <ProgressBar currentCheckpoint={currentCheckpoint} />

//             <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
//                 <div className="md:flex gap-8 grid grid-cols-2">
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
//                     className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md"
//                     onClick={() => router.back()}
//                 >
//                     Change Dates
//                 </button>
//             </div>

//             <div className='grid lg:grid-cols-3 grid-cols-1 my-10 gap-4'>
//                 <HotelCard filterAdults={bookingData.totalAdults} />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;


// app/your-booking-detail/page.js
// "use client";

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { format, differenceInDays } from 'date-fns';
// import { FaArrowRightToBracket } from "react-icons/fa6";
// import { FaCalendar } from "react-icons/fa6";
// import { IoIosMan } from "react-icons/io";
// import HotelCard from '../components/HotelCard';
// import ProgressBar from '../../components/ProgressBar';  // Make sure this path is correct

// const YourBookingDetail = () => {
//     const router = useRouter();
//     const [bookingData, setBookingData] = useState(null);
//     const [numberOfNights, setNumberOfNights] = useState(0);  // State for number of nights
//     const [currentCheckpoint, setCurrentCheckpoint] = useState(1); // Set Checkpoint to 1

//     useEffect(() => {
//         const storedData = localStorage.getItem('bookingData');
//         if (storedData) {
//             const parsedData = JSON.parse(storedData);
//             setBookingData(parsedData);

//             // Calculate number of nights
//             if (parsedData.date && parsedData.date.from && parsedData.date.to) {
//                 const checkInDate = new Date(parsedData.date.from);
//                 const checkOutDate = new Date(parsedData.date.to);
//                 const nights = differenceInDays(checkOutDate, checkInDate);
//                 setNumberOfNights(nights);
//             }
//         } else {
//             router.push('/');
//         }
//     }, [router]);

//     if (!bookingData) {
//         return null; // Return null if no booking data.
//     }

//     const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';
//     const formattedCheckOutDate = bookingData.date?.to ? format(new Date(bookingData.date.to), 'dd/MM/yyyy') : '';

//     return (
//         <div className="lg:p-8 p-4">
//             <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'> Rooms </span>  </h1>

//             <ProgressBar currentCheckpoint={currentCheckpoint} />

//             <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
//                 <div className="md:flex gap-8 grid grid-cols-2">
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
//                             {numberOfNights}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-prime font-medium">Adults</p>
//                         <p className="flex items-center gap-2 mt-2">
//                             <IoIosMan className='size-5 text-main' />
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

//             <div className='grid lg:grid-cols-3 grid-cols-1 my-10 gap-4'>
//                 <HotelCard filterAdults={bookingData.totalAdults} />
//             </div>
//         </div>
//     );
// };

// export default YourBookingDetail;

// app/your-booking-detail/page.js
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format, differenceInDays } from 'date-fns';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import HotelCard from '../components/HotelCard';
import ProgressBar from '../../components/ProgressBar';  // Make sure this path is correct

const YourBookingDetail = () => {
    const router = useRouter();
    const [bookingData, setBookingData] = useState(null);
    const [currentCheckpoint, setCurrentCheckpoint] = useState(1); // Set Checkpoint to 1

    useEffect(() => {
        const storedData = localStorage.getItem('bookingData');
        if (storedData) {
            setBookingData(JSON.parse(storedData));

        } else {
            router.push('/');
        }
    }, [router]);

    if (!bookingData) {
        return null; // Return null if no booking data.
    }

    const formattedCheckInDate = bookingData.date?.from ? format(new Date(bookingData.date.from), 'dd/MM/yyyy') : '';
    const formattedCheckOutDate = bookingData.date?.to ? format(new Date(bookingData.date.to), 'dd/MM/yyyy') : '';

    return (
        <div className="lg:p-8 p-4">
            <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'> Rooms </span>  </h1>

            <ProgressBar currentCheckpoint={currentCheckpoint} />

            <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
                <div className="md:flex gap-8 grid grid-cols-2">
                    <div>
                        <p className="text-sm text-prime font-medium">Check-in</p>
                        <p className="flex items-center gap-2 mt-2">
                            <FaArrowRightToBracket className='size-5 text-main' />
                            {formattedCheckInDate}</p>
                    </div>
                    <div>
                        <p className="text-sm text-prime font-medium">Check-out</p>
                        <p className="flex items-center gap-2 mt-2">
                            <FaArrowRightToBracket className='size-5 text-main' />
                            {formattedCheckOutDate}</p>
                    </div>
                    <div>
                        <p className="text-sm text-prime font-medium">Nights</p>
                        <p className="flex items-center gap-2 mt-2">
                            <FaCalendar className='size-5 text-main' />
                            {bookingData.numberOfNights}</p>
                    </div>
                    <div>
                        <p className="text-sm text-prime font-medium">Adults</p>
                        <p className="flex items-center gap-2 mt-2">
                            <IoIosMan className='size-5 text-main' />
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

            <div className='grid lg:grid-cols-3 grid-cols-1 my-10 gap-4'>
                <HotelCard filterAdults={bookingData.totalAdults} />
            </div>
        </div>
    );
};

export default YourBookingDetail;




