

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoCameraOutline } from 'react-icons/io5';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake, FaMale } from 'react-icons/fa'; // Import FaMale (already present, ensuring it's imported)
// import RoomCarousel from './RoomCarousel';
// import { Tooltip } from 'react-tooltip';
// //import { FaArrowRightLong } from "react-icons/fa6"; // Not used, so commented out
// import slugify from 'slugify';

// const HotelCard = ({ limit = null }) => {
//     const [showSlider, setShowSlider] = useState(false);
//     const sliderRef = useRef(null);

//     const toggleSlider = () => {
//         setShowSlider(!showSlider);
//     };

//     useEffect(() => {
//         if (showSlider) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [showSlider]);

//     useEffect(() => {
//         const handleOutsideClick = (e) => {
//             if (sliderRef.current && !sliderRef.current.contains(e.target)) {
//                 setShowSlider(false);
//             }
//         };

//         if (showSlider) {
//             document.addEventListener('mousedown', handleOutsideClick);
//         } else {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, [showSlider]);

//     const roomsData = [
//         {
//             id: 1,
//             name: "Economy GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
//             price: 1200,
//             images: [
//                 "/assets/image/room1.jpg",
//                 "/assets/image/room2.jpg",
//                 "/assets/image/room3.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 2, // Added members
//         },
//         {
//             id: 2,
//             name: "Normal GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
//             price: 1500,
//             images: [
//                 "/assets/image/room4.jpg",
//                 "/assets/image/room5.jpg",
//                 "/assets/image/room6.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 3, // Added members
//         },
//         {
//             id: 3,
//             name: "Semi Deluxe Brahmbhoj",
//             details: "Ashram AC Room",
//             description: "The daily breakfast offers continental or vegetarian options you have selected. Hotwater is available is bathroom.",
//             price: 2100,
//             images: [
//                 "/assets/image/room7.jpg",
//                 "/assets/image/room8.jpg",
//                 "/assets/image/room9.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3, // Added members
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "Experience spiritual tranquility in our premium VidhyaDaan AC accommodation, designed for devotees seeking comfort during their sacred journey.",
//             price: 2400,
//             images: [
//                 "/assets/image/blue-room.jpg",
//                 "/assets/image/room8.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3, // Added members
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "The AannaDan Family Room provides spacious accommodations ideal for families or small groups seeking a peaceful spiritual retreat together.",
//             price: 3600,
//             images: [
//                 "/assets/image/red-room.jpg",
//                 "/assets/image/tworoom.jpg",
//                 "/assets/image/dubbleblue.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 5, // Added members
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "The Aarti Donation Room offers premium accommodations for devotees who wish to contribute to the sacred evening ritual tradition.",
//             price: 4500,
//             images: [
//                 "/assets/image/aarti-room.jpg",
//                 "/assets/image/red-lazarus.jpg",
//                 "/assets/image/blue-lazarus.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 air: true,
//             },
//             members: 5, // Added members
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };


//     return (
//         <>
//             {roomsData.slice(0, limit ? limit : roomsData.length).map((room) => {
//                 const slug = slugify(room.name, { lower: true });
//                 return (
//                     <div key={room.id} className='flex flex-col border border-gray-300 shadow-md rounded-2xl'>
//                         <div className='relative h-62 overflow-hidden'>
//                             <Image
//                                 src={room.images[0]}
//                                 alt={room.name}
//                                 width={600}
//                                 height={400}
//                                 className="object-cover h-full w-full roundeds"
//                             />
//                             <button
//                                 onClick={toggleSlider}
//                                 className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300"
//                             >
//                                 <IoCameraOutline size={20} />
//                             </button>

//                             <div className="absolute top-3 left-3 bg-main text-white px-2 py-0.5 rounded-sm text-sm font-medium">
//                                 {room.name}
//                             </div>
//                         </div>

//                         <div className="p-4">
//                             <div className="flex flex-col h-full">
//                                 <div className="border-b border-gray-300/50 pb-2">
//                                     <div className="flex justify-between items-start">
//                                         <div>
//                                             <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
//                                             {/* Room Member */}
//                                             <div className="flex mt-1.5 -space-x-2">
//                                                 {[...Array(room.members)].map((_, index) => (
//                                                     <FaMale key={index} className="text-main size-5" />
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <div className="text-right">
//                                             <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
//                                             <p className="text-gray-700 text-sm">Per Night</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="py-2 flex-grow">
//                                     <p className="text-gray-700 pb-2">{room.description || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
//                                     <div className="">
//                                         <h4 className="text-prime font-medium mb-2">Amenities</h4>
//                                         <div className="flex gap-3">
//                                             {room.facilities ? (
//                                                 Object.entries(room.facilities)
//                                                     .filter(([key, value]) => value === true)
//                                                     .map(([key]) => (
//                                                         facilityIcons[key] && (
//                                                             <div key={key}>
//                                                                 <div
//                                                                     className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                                     data-tooltip-id={`tooltip-${key}`}
//                                                                     data-tooltip-content={facilityIcons[key].label}
//                                                                     data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                                 >
//                                                                     {facilityIcons[key].icon}
//                                                                 </div>
//                                                                 <Tooltip id={`tooltip-${key}`} place="top" />
//                                                             </div>
//                                                         )
//                                                     ))
//                                             ) : (
//                                                 ['wifi', 'bath', 'meditation'].map(key => (  //This else condition isn't necessary as you are now handling facilities correctly
//                                                     <div key={key} className="text-center">
//                                                         <div
//                                                             className="mx-auto text-orange-600 bg-orange-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                         <span className="text-xs text-gray-600 mt-1 block">{facilityIcons[key].label}</span>
//                                                     </div>
//                                                 ))
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="pt-2">
//                                     <div className="flex justify-end items-center">
//                                         <Link href={`/rooms/${slug}`}>
//                                             <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
//                                                 Details
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                             {showSlider && (
//                                 <div ref={sliderRef} className="relative w-3/4 h-3/4">
//                                     <RoomCarousel images={room.images} onClose={toggleSlider} />
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     );
// };

// export default HotelCard;


// // HotelCard.js
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoCameraOutline } from 'react-icons/io5';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake, FaMale } from 'react-icons/fa';
// import RoomCarousel from './RoomCarousel';
// import { Tooltip } from 'react-tooltip';
// import slugify from 'slugify';
// import { usePathname } from 'next/navigation'; // Import usePathname

// const HotelCard = ({ limit = null }) => {
//     const [showSlider, setShowSlider] = useState(false);
//     const sliderRef = useRef(null);
//     const pathname = usePathname(); // Get the current pathname

//     const toggleSlider = () => {
//         setShowSlider(!showSlider);
//     };

//     useEffect(() => {
//         const handleOutsideClick = (e) => {
//             if (sliderRef.current && !sliderRef.current.contains(e.target)) {
//                 setShowSlider(false);
//             }
//         };

//         if (showSlider) {
//             document.addEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//         } else {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Ensure scrolling is restored on unmount
//         };
//     }, [showSlider]);



//     const roomsData = [
//         {
//             id: 1,
//             name: "Economy GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
//             price: 1200,
//             images: [
//                 "/assets/image/room1.jpg",
//                 "/assets/image/room2.jpg",
//                 "/assets/image/room3.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 2,
//         },
//         {
//             id: 2,
//             name: "Normal GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
//             price: 1500,
//             images: [
//                 "/assets/image/room4.jpg",
//                 "/assets/image/room5.jpg",
//                 "/assets/image/room6.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 3,
//         },
//         {
//             id: 3,
//             name: "Semi Deluxe Brahmbhoj",
//             details: "Ashram AC Room",
//             description: "The daily breakfast offers continental or vegetarian options you have selected. Hotwater is available is bathroom.",
//             price: 2100,
//             images: [
//                 "/assets/image/room7.jpg",
//                 "/assets/image/room8.jpg",
//                 "/assets/image/room9.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "Experience spiritual tranquility in our premium VidhyaDaan AC accommodation, designed for devotees seeking comfort during their sacred journey.",
//             price: 2400,
//             images: [
//                 "/assets/image/blue-room.jpg",
//                 "/assets/image/room8.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "The AannaDan Family Room provides spacious accommodations ideal for families or small groups seeking a peaceful spiritual retreat together.",
//             price: 3600,
//             images: [
//                 "/assets/image/red-room.jpg",
//                 "/assets/image/tworoom.jpg",
//                 "/assets/image/dubbleblue.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 5,
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "The Aarti Donation Room offers premium accommodations for devotees who wish to contribute to the sacred evening ritual tradition.",
//             price: 4500,
//             images: [
//                 "/assets/image/aarti-room.jpg",
//                 "/assets/image/red-lazarus.jpg",
//                 "/assets/image/blue-lazarus.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 air: true,
//             },
//             members: 5,
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };


//     return (
//         <>
//             {roomsData.slice(0, limit ? limit : roomsData.length).map((room) => {
//                 const slug = slugify(room.name, { lower: true });
//                 const buttonText = pathname.startsWith('/your-booking-detail') ? 'Select' : 'Details';
//                 const buttonLink = pathname.startsWith('/') ? `/book-now` : `/rooms/${slug}`; //Correct link


//                 return (
//                     <div key={room.id} className='flex flex-col border border-gray-300 shadow-md rounded-2xl'>
//                         <div className='relative h-62 overflow-hidden'>
//                             <Image
//                                 src={room.images[0]}
//                                 alt={room.name}
//                                 width={600}
//                                 height={400}
//                                 className="object-cover h-full w-full roundeds"
//                             />
//                             <button
//                                 onClick={toggleSlider}
//                                 className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300"
//                             >
//                                 <IoCameraOutline size={20} />
//                             </button>

//                             <div className="absolute top-3 left-3 bg-main text-white px-2 py-0.5 rounded-sm text-sm font-medium">
//                                 {room.name}
//                             </div>
//                         </div>

//                         <div className="p-4">
//                             <div className="flex flex-col h-full">
//                                 <div className="border-b border-gray-300/50 pb-2">
//                                     <div className="flex justify-between items-start">
//                                         <div>
//                                             <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
//                                             {/* Room Member */}
//                                             <div className="flex mt-1.5 -space-x-2">
//                                                 {[...Array(room.members)].map((_, index) => (
//                                                     <FaMale key={index} className="text-main size-5" />
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <div className="text-right">
//                                             <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
//                                             <p className="text-gray-700 text-sm">Per Night</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="py-2 flex-grow">
//                                     <p className="text-gray-700 pb-2">{room.description || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
//                                     <div className="">
//                                         <h4 className="text-prime font-medium mb-2">Amenities</h4>
//                                         <div className="flex gap-3">
//                                             {room.facilities ? (
//                                                 Object.entries(room.facilities)
//                                                     .filter(([key, value]) => value === true)
//                                                     .map(([key]) => (
//                                                         facilityIcons[key] && (
//                                                             <div key={key}>
//                                                                 <div
//                                                                     className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                                     data-tooltip-id={`tooltip-${key}`}
//                                                                     data-tooltip-content={facilityIcons[key].label}
//                                                                     data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                                 >
//                                                                     {facilityIcons[key].icon}
//                                                                 </div>
//                                                                 <Tooltip id={`tooltip-${key}`} place="top" />
//                                                             </div>
//                                                         )
//                                                     ))
//                                             ) : (
//                                                 ['wifi', 'bath', 'meditation'].map(key => (  //This else condition isn't necessary
//                                                     <div key={key} className="text-center">
//                                                         <div
//                                                             className="mx-auto text-orange-600 bg-orange-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                         <span className="text-xs text-gray-600 mt-1 block">{facilityIcons[key].label}</span>
//                                                     </div>
//                                                 ))
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="pt-2">
//                                     <div className="flex justify-end items-center">
//                                         <Link href={buttonLink}>
//                                             <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
//                                                 {buttonText}
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                             {showSlider && (
//                                 <div ref={sliderRef} className="relative w-3/4 h-3/4">
//                                     <RoomCarousel images={room.images} onClose={toggleSlider} />
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     );
// };

// export default HotelCard;

// HotelCard.js
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoCameraOutline } from 'react-icons/io5';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake, FaMale } from 'react-icons/fa';
// import RoomCarousel from './RoomCarousel';
// import { Tooltip } from 'react-tooltip';
// import slugify from 'slugify';
// import { usePathname } from 'next/navigation'; // Import usePathname

// const HotelCard = ({ limit = null, filterAdults = null }) => {
//     const [showSlider, setShowSlider] = useState(false);
//     const sliderRef = useRef(null);
//     const pathname = usePathname(); // Get the current pathname

//     const toggleSlider = () => {
//         setShowSlider(!showSlider);
//     };

//     useEffect(() => {
//         const handleOutsideClick = (e) => {
//             if (sliderRef.current && !sliderRef.current.contains(e.target)) {
//                 setShowSlider(false);
//             }
//         };

//         if (showSlider) {
//             document.addEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//         } else {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Ensure scrolling is restored on unmount
//         };
//     }, [showSlider]);



//     const roomsData = [
//         {
//             id: 1,
//             name: "Economy GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
//             price: 1200,
//             images: [
//                 "/assets/image/room1.jpg",
//                 "/assets/image/room2.jpg",
//                 "/assets/image/room3.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 2,
//         },
//         {
//             id: 2,
//             name: "Normal GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
//             price: 1500,
//             images: [
//                 "/assets/image/room4.jpg",
//                 "/assets/image/room5.jpg",
//                 "/assets/image/room6.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 3,
//         },
//         {
//             id: 3,
//             name: "Semi Deluxe Brahmbhoj",
//             details: "Ashram AC Room",
//             description: "The daily breakfast offers continental or vegetarian options you have selected. Hotwater is available is bathroom.",
//             price: 2100,
//             images: [
//                 "/assets/image/room7.jpg",
//                 "/assets/image/room8.jpg",
//                 "/assets/image/room9.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "Experience spiritual tranquility in our premium VidhyaDaan AC accommodation, designed for devotees seeking comfort during their sacred journey.",
//             price: 2400,
//             images: [
//                 "/assets/image/blue-room.jpg",
//                 "/assets/image/room8.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "The AannaDan Family Room provides spacious accommodations ideal for families or small groups seeking a peaceful spiritual retreat together.",
//             price: 3600,
//             images: [
//                 "/assets/image/red-room.jpg",
//                 "/assets/image/tworoom.jpg",
//                 "/assets/image/dubbleblue.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 5,
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "The Aarti Donation Room offers premium accommodations for devotees who wish to contribute to the sacred evening ritual tradition.",
//             price: 4500,
//             images: [
//                 "/assets/image/aarti-room.jpg",
//                 "/assets/image/red-lazarus.jpg",
//                 "/assets/image/blue-lazarus.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 air: true,
//             },
//             members: 5,
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     // Conditionally filter rooms based on the number of adults
//     const filteredRooms = filterAdults
//         ? roomsData.filter(room => room.members >= filterAdults)
//         : roomsData;


//     return (
//         <>
//             {filteredRooms.slice(0, limit ? limit : filteredRooms.length).map((room) => {
//                 const slug = slugify(room.name, { lower: true });
//                 const buttonText = pathname.startsWith('/your-booking-detail') ? 'Select' : 'Details';
//                 const buttonLink = pathname.startsWith('/') ? `/rooms/${slug}` : `/book-now`; //Correct link


//                 return (
//                     <div key={room.id} className='flex flex-col border border-gray-300 shadow-md rounded-2xl'>
//                         <div className='relative h-62 overflow-hidden'>
//                             <Image
//                                 src={room.images[0]}
//                                 alt={room.name}
//                                 width={600}
//                                 height={400}
//                                 className="object-cover h-full w-full roundeds"
//                             />
//                             <button
//                                 onClick={toggleSlider}
//                                 className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300"
//                             >
//                                 <IoCameraOutline size={20} />
//                             </button>

//                             <div className="absolute top-3 left-3 bg-main text-white px-2 py-0.5 rounded-sm text-sm font-medium">
//                                 {room.name}
//                             </div>
//                         </div>

//                         <div className="p-4">
//                             <div className="flex flex-col h-full">
//                                 <div className="border-b border-gray-300/50 pb-2">
//                                     <div className="flex justify-between items-start">
//                                         <div>
//                                             <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
//                                             {/* Room Member */}
//                                             <div className="flex mt-1.5 -space-x-2">
//                                                 {[...Array(room.members)].map((_, index) => (
//                                                     <FaMale key={index} className="text-main size-5" />
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <div className="text-right">
//                                             <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
//                                             <p className="text-gray-700 text-sm">Per Night</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="py-2 flex-grow">
//                                     <p className="text-gray-700 pb-2">{room.description || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
//                                     <div className="">
//                                         <h4 className="text-prime font-medium mb-2">Amenities</h4>
//                                         <div className="flex gap-3">
//                                             {room.facilities ? (
//                                                 Object.entries(room.facilities)
//                                                     .filter(([key, value]) => value === true)
//                                                     .map(([key]) => (
//                                                         facilityIcons[key] && (
//                                                             <div key={key}>
//                                                                 <div
//                                                                     className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                                     data-tooltip-id={`tooltip-${key}`}
//                                                                     data-tooltip-content={facilityIcons[key].label}
//                                                                     data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                                 >
//                                                                     {facilityIcons[key].icon}
//                                                                 </div>
//                                                                 <Tooltip id={`tooltip-${key}`} place="top" />
//                                                             </div>
//                                                         )
//                                                     ))
//                                             ) : (
//                                                 ['wifi', 'bath', 'meditation'].map(key => (  //This else condition isn't necessary
//                                                     <div key={key} className="text-center">
//                                                         <div
//                                                             className="mx-auto text-orange-600 bg-orange-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                         <span className="text-xs text-gray-600 mt-1 block">{facilityIcons[key].label}</span>
//                                                     </div>
//                                                 ))
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="pt-2">
//                                     <div className="flex justify-end items-center">
//                                         <Link href={buttonLink}>
//                                             <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
//                                                 {buttonText}
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                             {showSlider && (
//                                 <div ref={sliderRef} className="relative w-3/4 h-3/4">
//                                     <RoomCarousel images={room.images} onClose={toggleSlider} />
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     );
// };

// export default HotelCard;

// HotelCard.js
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoCameraOutline } from 'react-icons/io5';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake, FaMale } from 'react-icons/fa';
// import RoomCarousel from './RoomCarousel';
// import { Tooltip } from 'react-tooltip';
// import slugify from 'slugify';
// import { usePathname } from 'next/navigation'; // Import usePathname

// const HotelCard = ({ limit = null, filterAdults = null }) => {
//     const [showSlider, setShowSlider] = useState(false);
//     const sliderRef = useRef(null);
//     const pathname = usePathname(); // Get the current pathname

//     const toggleSlider = () => {
//         setShowSlider(!showSlider);
//     };

//     useEffect(() => {
//         const handleOutsideClick = (e) => {
//             if (sliderRef.current && !sliderRef.current.contains(e.target)) {
//                 setShowSlider(false);
//             }
//         };

//         if (showSlider) {
//             document.addEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//         } else {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Ensure scrolling is restored on unmount
//         };
//     }, [showSlider]);



//     const roomsData = [
//         {
//             id: 1,
//             name: "Economy GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
//             price: 1200,
//             images: [
//                 "/assets/image/room1.jpg",
//                 "/assets/image/room2.jpg",
//                 "/assets/image/room3.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 2,
//         },
//         {
//             id: 2,
//             name: "Normal GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
//             price: 1500,
//             images: [
//                 "/assets/image/room4.jpg",
//                 "/assets/image/room5.jpg",
//                 "/assets/image/room6.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 3,
//         },
//         {
//             id: 3,
//             name: "Semi Deluxe Brahmbhoj",
//             details: "Ashram AC Room",
//             description: "The daily breakfast offers continental or vegetarian options you have selected. Hotwater is available is bathroom.",
//             price: 2100,
//             images: [
//                 "/assets/image/room7.jpg",
//                 "/assets/image/room8.jpg",
//                 "/assets/image/room9.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "Experience spiritual tranquility in our premium VidhyaDaan AC accommodation, designed for devotees seeking comfort during their sacred journey.",
//             price: 2400,
//             images: [
//                 "/assets/image/blue-room.jpg",
//                 "/assets/image/room8.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "The AannaDan Family Room provides spacious accommodations ideal for families or small groups seeking a peaceful spiritual retreat together.",
//             price: 3600,
//             images: [
//                 "/assets/image/red-room.jpg",
//                 "/assets/image/tworoom.jpg",
//                 "/assets/image/dubbleblue.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 5,
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "The Aarti Donation Room offers premium accommodations for devotees who wish to contribute to the sacred evening ritual tradition.",
//             price: 4500,
//             images: [
//                 "/assets/image/aarti-room.jpg",
//                 "/assets/image/red-lazarus.jpg",
//                 "/assets/image/blue-lazarus.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 air: true,
//             },
//             members: 2,
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     // Conditionally filter rooms based on the number of adults
//     const filteredRooms = filterAdults
//         ? roomsData.filter(room => room.members === filterAdults)
//         : roomsData;


//     return (
//         <>
//             {filteredRooms.slice(0, limit ? limit : filteredRooms.length).map((room) => {
//                 const slug = slugify(room.name, { lower: true });
//                 const buttonText = pathname.startsWith('/your-booking-detail') ? 'Select' : 'Details';
//                 const buttonLink = pathname.startsWith('/') ? `/book-now` : `/rooms/${slug}`; //Correct link


//                 return (
//                     <div key={room.id} className='flex flex-col border border-gray-300 shadow-md rounded-2xl'>
//                         <div className='relative h-62 overflow-hidden'>
//                             <Image
//                                 src={room.images[0]}
//                                 alt={room.name}
//                                 width={600}
//                                 height={400}
//                                 className="object-cover h-full w-full roundeds"
//                             />
//                             <button
//                                 onClick={toggleSlider}
//                                 className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300"
//                             >
//                                 <IoCameraOutline size={20} />
//                             </button>

//                             <div className="absolute top-3 left-3 bg-main text-white px-2 py-0.5 rounded-sm text-sm font-medium">
//                                 {room.name}
//                             </div>
//                         </div>

//                         <div className="p-4">
//                             <div className="flex flex-col h-full">
//                                 <div className="border-b border-gray-300/50 pb-2">
//                                     <div className="flex justify-between items-start">
//                                         <div>
//                                             <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
//                                             {/* Room Member */}
//                                             <div className="flex mt-1.5 -space-x-2">
//                                                 {[...Array(room.members)].map((_, index) => (
//                                                     <FaMale key={index} className="text-main size-5" />
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <div className="text-right">
//                                             <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
//                                             <p className="text-gray-700 text-sm">Per Night</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="py-2 flex-grow">
//                                     <p className="text-gray-700 pb-2">{room.description || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
//                                     <div className="">
//                                         <h4 className="text-prime font-medium mb-2">Amenities</h4>
//                                         <div className="flex gap-3">
//                                             {room.facilities ? (
//                                                 Object.entries(room.facilities)
//                                                     .filter(([key, value]) => value === true)
//                                                     .map(([key]) => (
//                                                         facilityIcons[key] && (
//                                                             <div key={key}>
//                                                                 <div
//                                                                     className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                                     data-tooltip-id={`tooltip-${key}`}
//                                                                     data-tooltip-content={facilityIcons[key].label}
//                                                                     data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                                 >
//                                                                     {facilityIcons[key].icon}
//                                                                 </div>
//                                                                 <Tooltip id={`tooltip-${key}`} place="top" />
//                                                             </div>
//                                                         )
//                                                     ))
//                                             ) : (
//                                                 ['wifi', 'bath', 'meditation'].map(key => (  //This else condition isn't necessary
//                                                     <div key={key} className="text-center">
//                                                         <div
//                                                             className="mx-auto text-orange-600 bg-orange-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                         <span className="text-xs text-gray-600 mt-1 block">{facilityIcons[key].label}</span>
//                                                     </div>
//                                                 ))
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="pt-2">
//                                     <div className="flex justify-end items-center">
//                                         <Link href={buttonLink}>
//                                             <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
//                                                 {buttonText}
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                             {showSlider && (
//                                 <div ref={sliderRef} className="relative w-3/4 h-3/4">
//                                     <RoomCarousel images={room.images} onClose={toggleSlider} />
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     );
// };

// export default HotelCard;   

// HotelCard.js
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoCameraOutline } from 'react-icons/io5';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake, FaMale } from 'react-icons/fa';
// import RoomCarousel from './RoomCarousel';
// import { Tooltip } from 'react-tooltip';
// import slugify from 'slugify';
// import { usePathname, useRouter } from 'next/navigation'; // Import usePathname and useRouter

// const HotelCard = ({ limit = null, filterAdults = null, onRoomSelect }) => {  //Added onRoomSelect
//     const [showSlider, setShowSlider] = useState(false);
//     const sliderRef = useRef(null);
//     const pathname = usePathname(); // Get the current pathname
//     const [noRoomsFound, setNoRoomsFound] = useState(false); // New state
//     const router = useRouter();


//     const toggleSlider = () => {
//         setShowSlider(!showSlider);
//     };

//     useEffect(() => {
//         const handleOutsideClick = (e) => {
//             if (sliderRef.current && !sliderRef.current.contains(e.target)) {
//                 setShowSlider(false);
//             }
//         };

//         if (showSlider) {
//             document.addEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//         } else {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Ensure scrolling is restored on unmount
//         };
//     }, [showSlider]);



//     const roomsData = [
//         {
//             id: 1,
//             name: "Economy GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
//             price: 1200,
//             images: [
//                 "/assets/image/room1.jpg",
//                 "/assets/image/room2.jpg",
//                 "/assets/image/room3.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 2,
//             slug: "economy-gowseva"
//         },
//         {
//             id: 2,
//             name: "Normal GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
//             price: 1500,
//             images: [
//                 "/assets/image/room4.jpg",
//                 "/assets/image/room5.jpg",
//                 "/assets/image/room6.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 3,
//             slug: "normal-gowseva"
//         },
//         {
//             id: 3,
//             name: "Semi Deluxe Brahmbhoj",
//             details: "Ashram AC Room",
//             description: "The daily breakfast offers continental or vegetarian options you have selected. Room is neture type of look like a  Hotwater is available is bathroom.",
//             price: 2100,
//             images: [
//                 "/assets/image/room7.jpg",
//                 "/assets/image/room8.jpg",
//                 "/assets/image/room9.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//             slug: "semi-deluxe-brahmbhoj"
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "Experience spiritual tranquility in our premium VidhyaDaan AC accommodation, designed for devotees seeking comfort during their sacred journey.",
//             price: 2400,
//             images: [
//                 "/assets/image/blue-room.jpg",
//                 "/assets/image/room8.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//             slug: "vidhyadaan-premium"
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "The AannaDan Family Room provides spacious accommodations ideal for families or small groups seeking a peaceful spiritual retreat together.",
//             price: 3600,
//             images: [
//                 "/assets/image/red-room.jpg",
//                 "/assets/image/tworoom.jpg",
//                 "/assets/image/dubbleblue.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 5,
//             slug: "family-room"
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "The Aarti Donation Room offers premium accommodations for devotees who wish to contribute to the sacred evening ritual tradition.",
//             price: 4500,
//             images: [
//                 "/assets/image/aarti-room.jpg",
//                 "/assets/image/red-lazarus.jpg",
//                 "/assets/image/blue-lazarus.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 air: true,
//             },
//             members: 2,
//             slug: "aarti-donation"
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     // Conditionally filter rooms based on the number of adults
//     const filteredRooms = filterAdults
//         ? roomsData.filter(room => room.members === filterAdults)
//         : roomsData;

//     useEffect(() => {
//         if (filterAdults && filteredRooms.length === 0) {
//             setNoRoomsFound(true);
//         } else {
//             setNoRoomsFound(false);
//         }
//     }, [filterAdults, filteredRooms]);


//     const handleSelectRoom = (room) => { // New function
//         onRoomSelect(room);

//     };

//     return (
//         <>
//             {noRoomsFound ? (
//                 <div className="text-center text-gray-500 py-4">Room not found</div>
//             ) : (
//                 filteredRooms.slice(0, limit ? limit : filteredRooms.length).map((room) => {
//                     const slug = slugify(room.name, { lower: true });
//                     const buttonText = pathname.startsWith('/your-booking-detail') ? 'Select' : 'Details';
//                     const buttonLink = pathname.startsWith('/') ? `/rooms/${slug}` : ``; //Correct link


//                     return (
//                         <div key={room.id} className='flex flex-col border border-gray-300 shadow-md rounded-2xl'>
//                             <div className='relative h-62 overflow-hidden'>
//                                 <Image
//                                     src={room.images[0]}
//                                     alt={room.name}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover h-full w-full roundeds"
//                                 />
//                                 <button
//                                     onClick={toggleSlider}
//                                     className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300"
//                                 >
//                                     <IoCameraOutline size={20} />
//                                 </button>

//                                 <div className="absolute top-3 left-3 bg-main text-white px-2 py-0.5 rounded-sm text-sm font-medium">
//                                     {room.name}
//                                 </div>
//                             </div>

//                             <div className="p-4">
//                                 <div className="flex flex-col h-full">
//                                     <div className="border-b border-gray-300/50 pb-2">
//                                         <div className="flex justify-between items-start">
//                                             <div>
//                                                 <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
//                                                 {/* Room Member */}
//                                                 <div className="flex mt-1.5 -space-x-2">
//                                                     {[...Array(room.members)].map((_, index) => (
//                                                         <FaMale key={index} className="text-main size-5" />
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                             <div className="text-right">
//                                                 <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
//                                                 <p className="text-gray-700 text-sm">Per Night</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="py-2 flex-grow">
//                                         <p className="text-gray-700 pb-2">{room.description || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
//                                         <div className="">
//                                             <h4 className="text-prime font-medium mb-2">Amenities</h4>
//                                             <div className="flex gap-3">
//                                                 {room.facilities ? (
//                                                     Object.entries(room.facilities)
//                                                         .filter(([key, value]) => value === true)
//                                                         .map(([key]) => (
//                                                             facilityIcons[key] && (
//                                                                 <div key={key}>
//                                                                     <div
//                                                                         className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                                         data-tooltip-id={`tooltip-${key}`}
//                                                                         data-tooltip-content={facilityIcons[key].label}
//                                                                         data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                                     >
//                                                                         {facilityIcons[key].icon}
//                                                                     </div>
//                                                                     <Tooltip id={`tooltip-${key}`} place="top" />
//                                                                 </div>
//                                                             )
//                                                         ))
//                                                 ) : (
//                                                     ['wifi', 'bath', 'meditation'].map(key => (  //This else condition isn't necessary
//                                                         <div key={key} className="text-center">
//                                                             <div
//                                                                 className="mx-auto text-orange-600 bg-orange-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
//                                                                 data-tooltip-id={`tooltip-${key}`}
//                                                                 data-tooltip-content={facilityIcons[key].label}
//                                                             >
//                                                                 {facilityIcons[key].icon}
//                                                             </div>
//                                                             <Tooltip id={`tooltip-${key}`} place="top" />
//                                                             <span className="text-xs text-gray-600 mt-1 block">{facilityIcons[key].label}</span>
//                                                         </div>
//                                                     ))
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="pt-2">
//                                         <div className="flex justify-end items-center">
//                                             {pathname.startsWith('/your-booking-detail') ? (
//                                                 <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold" onClick={() => handleSelectRoom(room)}>
//                                                     {buttonText}
//                                                 </button>
//                                             ) : (
//                                                 <Link href={buttonLink}>
//                                                     <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
//                                                         {buttonText}
//                                                     </button>
//                                                 </Link>
//                                             )}


//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                                 {showSlider && (
//                                     <div ref={sliderRef} className="relative w-3/4 h-3/4">
//                                         <RoomCarousel images={room.images} onClose={toggleSlider} />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )
//                 })
//             )}
//         </>
//     );
// };

// export default HotelCard;


// // HotelCard.js
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoCameraOutline } from 'react-icons/io5';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake, FaMale } from 'react-icons/fa';
// import RoomCarousel from './RoomCarousel';
// import { Tooltip } from 'react-tooltip';
// import slugify from 'slugify';
// import { usePathname, useRouter } from 'next/navigation'; // Import usePathname and useRouter

// const HotelCard = ({ limit = null, filterAdults = null, onRoomSelect }) => {  //Added onRoomSelect
//     const [showSlider, setShowSlider] = useState(false);
//     const sliderRef = useRef(null);
//     const pathname = usePathname(); // Get the current pathname
//     const [noRoomsFound, setNoRoomsFound] = useState(false); // New state
//     const router = useRouter();


//     const toggleSlider = () => {
//         setShowSlider(!showSlider);
//     };

//     useEffect(() => {
//         const handleOutsideClick = (e) => {
//             if (sliderRef.current && !sliderRef.current.contains(e.target)) {
//                 setShowSlider(false);
//             }
//         };

//         if (showSlider) {
//             document.addEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//         } else {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.body.style.overflow = 'unset'; // Ensure scrolling is restored on unmount
//         };
//     }, [showSlider]);



//     const roomsData = [
//         {
//             id: 1,
//             name: "Economy GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
//             price: 1200,
//             images: [
//                 "/assets/image/room1.jpg",
//                 "/assets/image/room2.jpg",
//                 "/assets/image/room3.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 2,
//             slug: "economy-gowseva"
//         },
//         {
//             id: 2,
//             name: "Normal GowSeva",
//             details: "Ashram Non AC Rooms",
//             description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
//             price: 1500,
//             images: [
//                 "/assets/image/room4.jpg",
//                 "/assets/image/room5.jpg",
//                 "/assets/image/room6.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//             },
//             members: 3,
//             slug: "normal-gowseva"
//         },
//         {
//             id: 3,
//             name: "Semi Deluxe Brahmbhoj",
//             details: "Ashram AC Room",
//             description: "The daily breakfast offers continental or vegetarian options you have selected. Hotwater is available is bathroom.",
//             price: 2100,
//             images: [
//                 "/assets/image/room7.jpg",
//                 "/assets/image/room8.jpg",
//                 "/assets/image/room9.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//             slug: "semi-deluxe-brahmbhoj"
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "Experience spiritual tranquility in our premium VidhyaDaan AC accommodation, designed for devotees seeking comfort during their sacred journey.",
//             price: 2400,
//             images: [
//                 "/assets/image/blue-room.jpg",
//                 "/assets/image/room8.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 3,
//             slug: "vidhyadaan-premium"
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "The AannaDan Family Room provides spacious accommodations ideal for families or small groups seeking a peaceful spiritual retreat together.",
//             price: 3600,
//             images: [
//                 "/assets/image/red-room.jpg",
//                 "/assets/image/tworoom.jpg",
//                 "/assets/image/dubbleblue.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 room: true,
//                 air: true,
//             },
//             members: 5,
//             slug: "aannadan-family"
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "The Aarti Donation Room offers premium accommodations for devotees who wish to contribute to the sacred evening ritual tradition.",
//             price: 4500,
//             images: [
//                 "/assets/image/aarti-room.jpg",
//                 "/assets/image/red-lazarus.jpg",
//                 "/assets/image/blue-lazarus.jpg",
//                 "/assets/image/red-blue.jpg",
//             ],
//             facilities: {
//                 wifi: true,
//                 bath: true,
//                 air: true,
//             },
//             members: 2,
//             slug: "aarti-donation"
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     // Conditionally filter rooms based on the number of adults
//     const filteredRooms = filterAdults
//         ? roomsData.filter(room => room.members === filterAdults)
//         : roomsData;

//     useEffect(() => {
//         if (filterAdults && filteredRooms.length === 0) {
//             setNoRoomsFound(true);
//         } else {
//             setNoRoomsFound(false);
//         }
//     }, [filterAdults, filteredRooms]);


//     const handleSelectRoom = (room) => { // New function
//         onRoomSelect({  // Pass the whole room object
//             name: room.name,
//             description: room.description,
//             images: room.images,
//             facilities: room.facilities,
//             price: room.price
//         });

//     };

//     return (
//         <>
//             {noRoomsFound ? (
//                 <div className="text-center text-gray-500 py-4">Room not found</div>
//             ) : (
//                 filteredRooms.slice(0, limit ? limit : filteredRooms.length).map((room) => {
//                     const slug = slugify(room.name, { lower: true });
//                     const buttonText = pathname.startsWith('/your-booking-detail') ? 'Select' : 'Details';
//                     const buttonLink = pathname.startsWith('/') ? `/book-now` : `/rooms/${slug}`; //Correct link


//                     return (
//                         <div key={room.id} className='flex flex-col border border-gray-300 shadow-md rounded-2xl'>
//                             <div className='relative h-62 overflow-hidden'>
//                                 <Image
//                                     src={room.images[0]}
//                                     alt={room.name}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover h-full w-full roundeds"
//                                 />
//                                 <button
//                                     onClick={toggleSlider}
//                                     className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300"
//                                 >
//                                     <IoCameraOutline size={20} />
//                                 </button>

//                                 <div className="absolute top-3 left-3 bg-main text-white px-2 py-0.5 rounded-sm text-sm font-medium">
//                                     {room.name}
//                                 </div>
//                             </div>

//                             <div className="p-4">
//                                 <div className="flex flex-col h-full">
//                                     <div className="border-b border-gray-300/50 pb-2">
//                                         <div className="flex justify-between items-start">
//                                             <div>
//                                                 <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
//                                                 {/* Room Member */}
//                                                 <div className="flex mt-1.5 -space-x-2">
//                                                     {[...Array(room.members)].map((_, index) => (
//                                                         <FaMale key={index} className="text-main size-5" />
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                             <div className="text-right">
//                                                 <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
//                                                 <p className="text-gray-700 text-sm">Per Night</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="py-2 flex-grow">
//                                         <p className="text-gray-700 pb-2">{room.description || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
//                                         <div className="">
//                                             <h4 className="text-prime font-medium mb-2">Amenities</h4>
//                                             <div className="flex gap-3">
//                                                 {room.facilities ? (
//                                                     Object.entries(room.facilities)
//                                                         .filter(([key, value]) => value === true)
//                                                         .map(([key]) => (
//                                                             facilityIcons[key] && (
//                                                                 <div key={key}>
//                                                                     <div
//                                                                         className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                                         data-tooltip-id={`tooltip-${key}`}
//                                                                         data-tooltip-content={facilityIcons[key].label}
//                                                                         data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                                     >
//                                                                         {facilityIcons[key].icon}
//                                                                     </div>
//                                                                     <Tooltip id={`tooltip-${key}`} place="top" />
//                                                                 </div>
//                                                             )
//                                                         ))
//                                                 ) : (
//                                                     ['wifi', 'bath', 'meditation'].map(key => (  //This else condition isn't necessary
//                                                         <div key={key} className="text-center">
//                                                             <div
//                                                                 className="mx-auto text-orange-600 bg-orange-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
//                                                                 data-tooltip-id={`tooltip-${key}`}
//                                                                 data-tooltip-content={facilityIcons[key].label}
//                                                             >
//                                                                 {facilityIcons[key].icon}
//                                                             </div>
//                                                             <Tooltip id={`tooltip-${key}`} place="top" />
//                                                             <span className="text-xs text-gray-600 mt-1 block">{facilityIcons[key].label}</span>
//                                                         </div>
//                                                     ))
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="pt-2">
//                                         <div className="flex justify-end items-center">
//                                             {pathname.startsWith('/your-booking-detail') ? (
//                                                 <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold" onClick={() => handleSelectRoom(room)}>
//                                                     {buttonText}
//                                                 </button>
//                                             ) : (
//                                                 <Link href={buttonLink}>
//                                                     <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
//                                                         {buttonText}
//                                                     </button>
//                                                 </Link>
//                                             )}


//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                                 {showSlider && (
//                                     <div ref={sliderRef} className="relative w-3/4 h-3/4">
//                                         <RoomCarousel images={room.images} onClose={toggleSlider} />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )
//                 })
//             )}
//         </>
//     );
// };

// export default HotelCard;


// HotelCard.js
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoCameraOutline } from 'react-icons/io5';
import { FaWifi, FaBath, FaUniversity, FaRegSnowflake, FaMale } from 'react-icons/fa';
import RoomCarousel from './RoomCarousel';
import { Tooltip } from 'react-tooltip';
import slugify from 'slugify';
import { usePathname, useRouter } from 'next/navigation'; // Import usePathname and useRouter
import Link from 'next/link';

const HotelCard = ({ limit = null, filterAdults = null, onRoomSelect }) => {  //Added onRoomSelect
    const [showSlider, setShowSlider] = useState(false);
    const sliderRef = useRef(null);
    const pathname = usePathname(); // Get the current pathname
    const [noRoomsFound, setNoRoomsFound] = useState(false); // New state
    const router = useRouter();

    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (sliderRef.current && !sliderRef.current.contains(e.target)) {
                setShowSlider(false);
            }
        };

        if (showSlider) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.body.style.overflow = 'unset'; // Ensure scrolling is restored on unmount
        };

    }, [showSlider]);

    const roomsData = [
        {
            id: 1,
            name: "Economy GowSeva",
            details: "Ashram Non AC Rooms",
            description: "Experience affordable comfort at the Economy GowSeva Room, designed for budget-conscious travelers seeking simplicity and value. Our rooms offer clean, cozy accommodations with essential amenities like comfortable bedding, hygienic facilities, and 24/7 service. Ideal for pilgrims, solo travelers, or short stays, GowSeva ensures a peaceful retreat without compromising on basic needs. Enjoy a hassle-free stay with a touch of warmth and hospitality. Perfect for those prioritizing practicality and affordability.",
            price: 1200,
            images: [
                "/assets/image/room1.jpg",
                "/assets/image/room2.jpg",
                "/assets/image/room3.jpg",
            ],
            facilities: {
                wifi: true,
                bath: true,
                room: true,
            },
            members: 2,
            slug: "economy-gowseva"
        },
        {
            id: 2,
            name: "Normal GowSeva",
            details: "Ashram Non AC Rooms",
            description: "Discover balanced comfort and convenience with in the Normal GowSeva Room, ideal for travelers seeking a relaxed stay with enhanced amenities. Featuring spacious interiors, modern furnishings, and thoughtful touches like Wi-Fi, a work desk, and a flat-screen TV, our rooms cater to both leisure and business needs. Enjoy hygienic private bathrooms, cozy bedding, and 24/7 assistance for a stress-free experience. Perfect for families, couples, or travelers desiring extra comfort without luxury pricing.",
            price: 1500,
            images: [
                "/assets/image/room4.jpg",
                "/assets/image/room5.jpg",
                "/assets/image/room6.jpg",
            ],
            facilities: {
                wifi: true,
                bath: true,
                room: true,
            },
            members: 3,
            slug: "normal-gowseva"
        },
        {
            id: 3,
            name: "Semi Deluxe Brahmbhoj",
            details: "Ashram AC Room",
            description: "Elevate your stay with the Semi Deluxe Brahmbhoj Room, designed for guests seeking a harmonious blend of comfort and cultural tradition. These spacious rooms feature upgraded amenities, including elegant furnishings, premium bedding, and a serene ambiance. The highlight? Exclusive access to authentic Brahmbhoj meals—nutritious, sattvic cuisine prepared with devotion, perfect for spiritual seekers or those observing ritual purity.",
            price: 2100,
            images: [
                "/assets/image/room7.jpg",
                "/assets/image/room8.jpg",
                "/assets/image/room9.jpg",
            ],
            facilities: {
                wifi: true,
                bath: true,
                room: true,
                air: true,
            },
            members: 3,
            slug: "semi-deluxe-brahmbhoj"
        },
        {
            id: 4,
            name: "VidhyaDaan [Premium Room ] 2",
            details: "Ashram AC Room",
            description: "Unlock an elevated experience in the VidhyaDaan Premium Suite, crafted for discerning guests who value knowledge, space, and sophistication. This expansive two-room sanctuary combines modern luxury with an inspiring ambiance, ideal for scholars, professionals, or families seeking a serene yet productive retreat.",
            price: 2400,
            images: [
                "/assets/image/blue-room.jpg",
                "/assets/image/room8.jpg",
            ],
            facilities: {
                wifi: true,
                bath: true,
                room: true,
                air: true,
            },
            members: 3,
            slug: "vidhyadaan-premium"
        },
        {
            id: 5,
            name: "AannaDan [Family Room) 4",
            details: "Ashram AC Room",
            description: "Embrace togetherness in the AannaDan Family Suite, a sprawling 4-room haven designed for families or groups seeking space, comfort, and shared moments. Rooted in the spirit of AannaDan (nourishment through food and community), this suite blends home-like warmth with thoughtful amenities for memorable stays.",
            price: 3600,
            images: [
                "/assets/image/red-room.jpg",
                "/assets/image/tworoom.jpg",
                "/assets/image/dubbleblue.jpg",
                "/assets/image/red-blue.jpg",
            ],
            facilities: {
                wifi: true,
                bath: true,
                room: true,
                air: true,
            },
            members: 5,
            slug: "aannadan-family"
        },
        {
            id: 6,
            name: "Aarti Donation 2/4",
            details: "Ashram AC Room",
            description: "Immerse your family in spiritual serenity with Aarti Donation Suite, a harmonious 2/4-room retreat designed for devotees and families seeking a sacred space to connect and rejuvenate. Inspired by the tradition of Aarti (devotional light offerings), this suite blends spiritual ambience with modern comforts, ensuring a stay that nourishes the soul.",
            price: 4500,
            images: [
                "/assets/image/aarti-room.jpg",
                "/assets/image/red-lazarus.jpg",
                "/assets/image/blue-lazarus.jpg",
                "/assets/image/red-blue.jpg",
            ],
            facilities: {
                wifi: true,
                bath: true,
                air: true,
            },
            members: 2,
            slug: "aarti-donation"
        },
    ];

    const facilityIcons = {
        wifi: { icon: <FaWifi />, label: "Free Wifi" },
        bath: { icon: <FaBath />, label: "Bathroom" },
        room: { icon: <FaUniversity />, label: "Room" },
        air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
    };

    // Conditionally filter rooms based on the number of adults
    const filteredRooms = filterAdults
        ? roomsData.filter(room => room.members === filterAdults)
        : roomsData;

    useEffect(() => {
        if (filterAdults && filteredRooms.length === 0) {
            setNoRoomsFound(true);
        } else {
            setNoRoomsFound(false);
        }
    }, [filterAdults, filteredRooms]);

    const handleSelectRoom = (room) => {
        // Store the selected room data in localStorage
        localStorage.setItem('selectedRoom', JSON.stringify(room));

        // Trigger navigation to "/book-now"
        router.push('/book-now');
    };

    return (
        <>
            {noRoomsFound ? (
                <div className='flex justify-center items-center'>
                    <h1 className="text-2xl font-medium text-red-500">
                        No rooms found
                    </h1>
                </div>
            ) : (
                filteredRooms.slice(0, limit ? limit : filteredRooms.length).map((room) => {
                    const slug = slugify(room.name, { lower: true });
                    const buttonText = pathname.startsWith('/your-booking-detail') ? 'Select' : 'Details    ';
                    const buttonLink = pathname.startsWith('/') ? `/rooms/${slug}` : `/book-room`; //Correct link
                    return (
                        <div key={room.id} className='flex flex-col border group overflow-hidden border-gray-300 shadow-md rounded-2xl'>
                            <div className='relative h-62 overflow-hidden'>
                                <Image
                                    src={room.images[0]}
                                    alt={room.name}
                                    width={600}
                                    height={400}
                                    className="object-cover h-full w-full roundeds group-hover:scale-110 transition-transform ease-in-out duration-300"
                                />
                                <button
                                    onClick={toggleSlider}
                                    className="absolute top-3 right-3 bg-white hover:bg-black hover:text-white bg-opacity-60 cursor-pointer rounded p-1 hover:bg-opacity-100 transition duration-300"
                                >
                                    <IoCameraOutline className='size-5 group-hover:rotate-90 transition-transform duration-300 ease-in-out' />
                                </button>

                                <div className="absolute top-3 left-3 bg-orange-500/70 text-white px-3 py-0.5 rounded-full text-sm">
                                    {room.name}
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex flex-col h-full">
                                    <div className="border-b border-gray-300 mb-2">
                                        <div className="flex justify-between items-start space-y-2.5">
                                            <div>
                                                <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
                                                {/* Room Member */}
                                                <div className="flex mt-1.5 -space-x-2">
                                                    {[...Array(room.members)].map((_, index) => (
                                                        <FaMale key={index} className="text-main size-5" />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
                                                <p className="text-gray-700 text-sm">Per Night</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <p className="text-gray-700 text-justify pb-4 h-28">{room.description.split(' ').slice(0, 24).join(' ') + '...' || "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available"}</p>
                                        <div className="">
                                            <h4 className="text-slate-900 font-medium mb-2">Amenities : </h4>
                                            <div className="flex gap-3">
                                                {room.facilities ? (
                                                    Object.entries(room.facilities)
                                                        .filter(([key, value]) => value === true)
                                                        .map(([key]) => (
                                                            facilityIcons[key] && (
                                                                <div key={key}>
                                                                    <div
                                                                        className="text-white bg-[#323536] p-1.5 rounded-sm size-8 flex items-center justify-center"
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
                                                    ['wifi', 'bath', 'meditation'].map(key => (  //This else condition isn't necessary
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

                                    <div className="pt-2">
                                        <div className="flex justify-end items-center">
                                            {pathname.startsWith('/your-booking-detail') ? (
                                                <button className="relative cursor-pointer group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold" onClick={() => handleSelectRoom(room)}>
                                                    {buttonText}
                                                </button>
                                            ) : (
                                                <Link href={buttonLink}>
                                                    <button className="relative cursor-pointer group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
                                                        {buttonText}
                                                    </button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                {showSlider && (
                                    <div ref={sliderRef} className="relative w-3/4 h-3/4">
                                        <RoomCarousel images={room.images} onClose={toggleSlider} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })
            )}
        </>
    );
};

export default HotelCard;



