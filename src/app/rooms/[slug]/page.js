// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '../../(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack /> Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities ? (
//                                 Object.entries(room.facilities)
//                                     .filter(([value]) => value === true)
//                                     .map(([key]) => (
//                                         facilityIcons[key] && (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         )
//                                     ))
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={guest.id} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RoomDetails;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '../../(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack /> Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <Link href="/your-booking-detail">
//                                     <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                         Book Now
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RoomDetails;

// app/(public)/rooms/[slug]/page.js


// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange";
// import Dropdown from '@/app/(public)/components/Dropdown';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack /> Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RoomDetails;

// app/(public)/rooms/[slug]/page.js

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';
// import { format, differenceInDays } from 'date-fns';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
//     const [numberOfNights, setNumberOfNights] = useState(0);

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             const checkInDate = new Date(newDateRange.from);
//             const checkOutDate = new Date(newDateRange.to);
//             const nights = differenceInDays(checkOutDate, checkInDate);
//             setNumberOfNights(nights);
//         } else {
//             setNumberOfNights(0);
//         }
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//             numberOfNights: numberOfNights
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack /> Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 {dateRange && dateRange.from && dateRange.to && (
//                                     <p className="mt-2 text-gray-600">Night : {numberOfNights}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RoomDetails;

// app/(public)/rooms/[slug]/page.js

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';
// import { format, differenceInDays } from 'date-fns';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
//     const [numberOfNights, setNumberOfNights] = useState(0);

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             const checkInDate = new Date(newDateRange.from);
//             const checkOutDate = new Date(newDateRange.to);
//             const nights = differenceInDays(checkOutDate, checkInDate) + 1; // **ADD + 1**
//             setNumberOfNights(nights);
//         } else {
//             setNumberOfNights(0);
//         }
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//             numberOfNights: numberOfNights
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack /> Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 {dateRange && dateRange.from && dateRange.to && (
//                                     <p className="mt-2 text-gray-600">Night : {numberOfNights}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}

//             {/* Availability Calendar Create */}
//             <div className='mt-10'>
//                 <h1 className='text-prime font-medium text-2xl'>
//                     Availability Calendar
//                 </h1>


//             </div>

//         </div>
//     );
// };

// export default RoomDetails;


// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';
// import { format, differenceInDays } from 'date-fns';
// import { RiArrowLeftSLine } from "react-icons/ri";
// import { RiArrowRightSLine } from "react-icons/ri";

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
//     const [numberOfNights, setNumberOfNights] = useState(0);

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             const checkInDate = new Date(newDateRange.from);
//             const checkOutDate = new Date(newDateRange.to);
//             const nights = differenceInDays(checkOutDate, checkInDate) + 1; // **ADD + 1**
//             setNumberOfNights(nights);
//         } else {
//             setNumberOfNights(0);
//         }
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//             numberOfNights: numberOfNights
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const getDaysInMonth = (year, month) => {
//         return new Date(year, month + 1, 0).getDate();
//     };

//     const getFirstDayOfMonth = (year, month) => {
//         return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
//     };

//     const getMonthName = (monthIndex) => {
//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         return months[monthIndex];
//     };

//     const Calendar = () => {
//         const currentDate = new Date();
//         const currentYear = currentDate.getFullYear();
//         const currentMonth = currentDate.getMonth();

//         const [selectedYear, setSelectedYear] = useState(currentYear);
//         const [selectedMonth, setSelectedMonth] = useState(currentMonth);

//         const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
//         const firstDayOfMonth = getFirstDayOfMonth(selectedYear, selectedMonth);

//         const prevMonth = () => {
//             if (selectedMonth === 0) {
//                 setSelectedYear(selectedYear - 1);
//                 setSelectedMonth(11);
//             } else {
//                 setSelectedMonth(selectedMonth - 1);
//             }
//         };

//         const nextMonth = () => {
//             if (selectedMonth === 11) {
//                 setSelectedYear(selectedYear + 1);
//                 setSelectedMonth(0);
//             } else {
//                 setSelectedMonth(selectedMonth + 1);
//             }
//         };

//         const monthName = getMonthName(selectedMonth);

//         const days = [];
//         for (let i = 1; i <= daysInMonth; i++) {
//             days.push(i);
//         }

//         return (
//             <div className="bg-white rounded-lg shadow-md p-4">
//                 <div className="flex justify-between items-center mb-4">
//                     <button onClick={prevMonth} className="px-2 py-1 rounded hover:bg-gray-200">
//                         <RiArrowLeftSLine className='size-5' />
//                     </button>
//                     <h2 className="text-lg font-semibold">{monthName} {selectedYear}</h2>
//                     <button onClick={nextMonth} className="px-2 py-1 rounded hover:bg-gray-200">
//                         <RiArrowRightSLine className='size-5' />
//                     </button>
//                 </div>

//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                                 <th key={day} className="text-gray-700 text-left font-medium p-2">
//                                     {day}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7))].map((_, weekIndex) => (
//                             <tr key={weekIndex}>
//                                 {[...Array(7)].map((__, dayIndex) => {
//                                     const dayNumber = weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
//                                     const isDayInMonth = dayNumber > 0 && dayNumber <= daysInMonth;

//                                     return (
//                                         <td key={dayIndex} className={`p-2 border border-gray-200 text-center ${isDayInMonth ? 'text-gray-800' : 'text-gray-400'}`}>
//                                             {isDayInMonth ? dayNumber : ''}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };

//     const AvailabilityCalendar = () => {
//         const currentDate = new Date();
//         const currentYear = currentDate.getFullYear();
//         const currentMonth = currentDate.getMonth();

//         const [selectedYear, setSelectedYear] = useState(currentYear);

//         const monthCount = 3; // Display 3 months
//         const monthsToDisplay = [...Array(monthCount)].map((_, i) => {
//             const monthIndex = (currentMonth + i) % 12;
//             const year = currentYear + Math.floor((currentMonth + i) / 12);
//             return { monthIndex, year };
//         });

//         return (
//             <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold  text-gray-900 capitalize">Availability Calendar</h2>
//                     {/* Year selector */}
//                 </div>

//                 <div className="flex gap-6 overflow-x-auto">
//                     {monthsToDisplay.map(({ monthIndex, year }) => (
//                         <CalendarMonth key={`${year}-${monthIndex}`} year={year} monthIndex={monthIndex} />
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     const CalendarMonth = ({ year, monthIndex }) => {
//         const daysInMonth = getDaysInMonth(year, monthIndex);
//         const firstDayOfMonth = getFirstDayOfMonth(year, monthIndex);
//         const monthName = getMonthName(monthIndex);
//         const [available, setAvailable] = useState(true);

//         const days = [];
//         for (let i = 1; i <= daysInMonth; i++) {
//             days.push(i);
//         }

//         return (
//             <div className="bg-white rounded-lg shadow-md p-4 w-72 flex-shrink-0">
//                 <h3 className="text-lg text-main font-semibold mb-2 text-center">{monthName} {year}</h3>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//                                 <th key={day} className="text-gray-900 text-center font-medium p-1">
//                                     {day}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7))].map((_, weekIndex) => (
//                             <tr key={weekIndex}>
//                                 {[...Array(7)].map((__, dayIndex) => {
//                                     const dayNumber = weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
//                                     const isDayInMonth = dayNumber > 0 && dayNumber <= daysInMonth;

//                                     return (
//                                         <td key={dayIndex}
//                                             className={`p-1 border border-gray-200 text-center ${isDayInMonth ? 'text-gray-800' : 'text-gray-400'}
//                                                         ${isDayInMonth ? 'cursor-pointer hover:bg-gray-100 transition-colors' : ''}`}>
//                                             {isDayInMonth ? (
//                                                 <button
//                                                     onClick={() => {
//                                                         if (available) {
//                                                             // Make unavailable
//                                                             setAvailable(false);
//                                                         } else {
//                                                             // Make available
//                                                             setAvailable(true);
//                                                         }
//                                                     }}
//                                                     className={`${available ? '' : 'line-through text-red-500'}`}>
//                                                     {dayNumber}
//                                                 </button>
//                                             ) : ''}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };


//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack /> Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 {dateRange && dateRange.from && dateRange.to && (
//                                     <p className="mt-2 text-gray-600">Night : {numberOfNights}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}

//             {/* Availability Calendar Create */}
//             <div className='mt-10'>
//                 <AvailabilityCalendar />
//             </div>

//         </div>
//     );
// };

// export default RoomDetails;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';
// import { format, differenceInDays } from 'date-fns';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
//     const [numberOfNights, setNumberOfNights] = useState(0);

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             const checkInDate = new Date(newDateRange.from);
//             const checkOutDate = new Date(newDateRange.to);
//             const nights = differenceInDays(checkOutDate, checkInDate) + 1; // **ADD + 1**
//             setNumberOfNights(nights);
//         } else {
//             setNumberOfNights(0);
//         }
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//             numberOfNights: numberOfNights
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const getDaysInMonth = (year, month) => {
//         return new Date(year, month + 1, 0).getDate();
//     };

//     const getFirstDayOfMonth = (year, month) => {
//         return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
//     };

//     const getMonthName = (monthIndex) => {
//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         return months[monthIndex];
//     };

//     const Calendar = ({ year, month, availability, setAvailability }) => {
//         const daysInMonth = getDaysInMonth(year, month);
//         const firstDayOfMonth = getFirstDayOfMonth(year, month); // 0 (Sunday) to 6 (Saturday)
//         const monthName = getMonthName(month);

//         const days = [];
//         for (let i = 1; i <= daysInMonth; i++) {
//             days.push(i);
//         }

//         const handleDayClick = (day) => {
//             const dateKey = `${year}-${month + 1}-${day}`;
//             setAvailability((prev) => ({
//                 ...prev,
//                 [dateKey]: !prev[dateKey], // Toggle availability
//             }));
//         };

//         return (
//             <div className="bg-white rounded-lg shadow-md border border-gray-300/50 p-4 w-72 flex-shrink-0">
//                 <h3 className="text-lg font-semibold mb-2 text-center">{monthName} {year}</h3>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//                                 <th key={day} className="text-gray-700 text-center font-medium p-1">
//                                     {day}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(Math.ceil((daysInMonth + (firstDayOfMonth + 6) % 7) / 7))].map((_, weekIndex) => (
//                             <tr key={weekIndex}>
//                                 {[...Array(7)].map((__, dayIndex) => {
//                                     const dayNumber = weekIndex * 7 + dayIndex - ((firstDayOfMonth + 6) % 7) + 1;
//                                     const isDayInMonth = dayNumber > 0 && dayNumber <= daysInMonth;
//                                     const dateKey = `${year}-${month + 1}-${dayNumber}`;
//                                     const isAvailable = availability[dateKey] !== false; // Default to true

//                                     return (
//                                         <td
//                                             key={dayIndex}
//                                             className={`p-1 border border-gray-200 text-center ${isDayInMonth ? 'text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors' : 'text-gray-400'
//                                                 } ${isDayInMonth ? (isAvailable ? '' : 'line-through text-red-500') : ''
//                                                 }`}
//                                             onClick={() => isDayInMonth && handleDayClick(dayNumber)}
//                                         >
//                                             {isDayInMonth ? dayNumber : ""}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };

//     const AvailabilityCalendar = () => {
//         const currentDate = new Date();
//         const [year, setYear] = useState(currentDate.getFullYear()); // Start with current year
//         const [month, setMonth] = useState(currentDate.getMonth()); // Start with current month


//         const [availability, setAvailability] = useState({}); // Stores availability for each date


//         // Initialize availability for the displayed months (you can fetch from API here)
//         useEffect(() => {
//             const initialAvailability = {};
//             for (let i = -1; i <= 1; i++) { // Previous, current, and next month
//                 const currentYear = year;
//                 let currentMonth = month + i;

//                 if (currentMonth < 0) {
//                     currentMonth = 11;
//                     year - 1;
//                 } else if (currentMonth > 11) {
//                     currentMonth = 0;
//                     year + 1;
//                 }

//                 const daysInMonth = getDaysInMonth(year, currentMonth);

//                 for (let day = 1; day <= daysInMonth; day++) {
//                     const dateKey = `${year}-${currentMonth + 1}-${day}`;
//                     initialAvailability[dateKey] = true; // Default to available
//                 }
//             }

//             setAvailability(initialAvailability);
//         }, [month, year]);

//         const goToPreviousMonth = () => {
//             if (month === 0) {
//                 setYear(year - 1);
//                 setMonth(11);
//             } else {
//                 setMonth(month - 1);
//             }
//         };

//         const goToNextMonth = () => {
//             if (month === 11) {
//                 setYear(year + 1);
//                 setMonth(0);
//             } else {
//                 setMonth(month + 1);
//             }
//         };

//         const handleSelectYear = (e) => {
//             setYear(parseInt(e.target.value));
//         };

//         return (
//             <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-800">Availability Calendar</h2>

//                 <div className="flex items-center space-x-4">
//                     {/* Year Selector */}
//                     <select
//                         value={year}
//                         onChange={handleSelectYear}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     >
//                         {Array.from({ length: 11 }, (_, i) => year - 5 + i).map((y) => (
//                             <option key={y} value={y}>
//                                 {y}
//                             </option>
//                         ))}
//                     </select>

//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <label className="flex items-center">
//                         <input type="checkbox" checked={true} readOnly className="mr-2" />
//                         Available
//                     </label>
//                     <label className="flex items-center">
//                         <span className="mr-2 inline-block size-3.5 bg-red-500 rounded-full"></span>
//                         Not Available
//                     </label>
//                 </div>

//                 <div className="flex justify-center space-x-4 overflow-x-auto mt-10 relative">
//                     <button onClick={goToPreviousMonth} >
//                         <MdKeyboardArrowLeft className='bg-orange-500 rounded size-6 text-white absolute top-5 left-48

//                         ' />
//                     </button>

//                     <Calendar
//                         year={year}
//                         month={month - 1 < 0 ? 11 : month - 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                     />

//                     <Calendar year={year} month={month} availability={availability} setAvailability={setAvailability} />
//                     <Calendar
//                         year={year}
//                         month={month + 1 > 11 ? 0 : month + 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                     />

//                     <button onClick={goToNextMonth} >
//                         <MdKeyboardArrowRight className='bg-orange-500 rounded size-6 text-white absolute top-5 right-48' />
//                     </button>

//                 </div>


//             </div>
//         );
//     };


//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack />  Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 {dateRange && dateRange.from && dateRange.to && (
//                                     <p className="mt-2 text-gray-600">Night : {numberOfNights}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}

//             {/* Availability Calendar Create */}
//             <div className='mt-10'>
//                 <AvailabilityCalendar />
//             </div>

//         </div>
//     );
// };

// export default RoomDetails;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';
// import { format, differenceInDays } from 'date-fns';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
//     const [numberOfNights, setNumberOfNights] = useState(0);

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             const checkInDate = new Date(newDateRange.from);
//             const checkOutDate = new Date(newDateRange.to);
//             const nights = differenceInDays(checkOutDate, checkInDate) + 1; // **ADD + 1**
//             setNumberOfNights(nights);
//         } else {
//             setNumberOfNights(0);
//         }
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//             numberOfNights: numberOfNights
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const getDaysInMonth = (year, month) => {
//         return new Date(year, month + 1, 0).getDate();
//     };

//     const getFirstDayOfMonth = (year, month) => {
//         return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
//     };

//     const getMonthName = (monthIndex) => {
//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         return months[monthIndex];
//     };

//     const Calendar = ({ year, month, availability, setAvailability }) => {
//         const daysInMonth = getDaysInMonth(year, month);
//         const firstDayOfMonth = getFirstDayOfMonth(year, month); // 0 (Sunday) to 6 (Saturday)
//         const monthName = getMonthName(month);

//         const days = [];
//         for (let i = 1; i <= daysInMonth; i++) {
//             days.push(i);
//         }

//         const handleDayClick = (day) => {
//             const dateKey = `${year}-${month + 1}-${day}`;
//             setAvailability((prev) => ({
//                 ...prev,
//                 [dateKey]: !prev[dateKey], // Toggle availability
//             }));
//         };

//         return (
//             <div className="bg-white rounded-lg shadow-md border border-gray-300/50 p-4 w-72 flex-shrink-0">
//                 <h3 className="text-lg font-semibold mb-2 text-center">{monthName} {year}</h3>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//                                 <th key={day} className="text-gray-700 text-center font-medium p-1">
//                                     {day}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(Math.ceil((daysInMonth + (firstDayOfMonth + 6) % 7) / 7))].map((_, weekIndex) => (
//                             <tr key={weekIndex}>
//                                 {[...Array(7)].map((__, dayIndex) => {
//                                     const dayNumber = weekIndex * 7 + dayIndex - ((firstDayOfMonth + 6) % 7) + 1;
//                                     const isDayInMonth = dayNumber > 0 && dayNumber <= daysInMonth;
//                                     const dateKey = `${year}-${month + 1}-${dayNumber}`;
//                                     const isAvailable = availability[dateKey] !== false; // Default to true

//                                     return (
//                                         <td
//                                             key={dayIndex}
//                                             className={`p-1 border border-gray-200 text-center ${isDayInMonth ? 'text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors' : 'text-gray-400'
//                                                 } ${isDayInMonth ? (isAvailable ? '' : 'line-through text-red-500') : ''
//                                                 }`}
//                                             onClick={() => isDayInMonth && handleDayClick(dayNumber)}
//                                         >
//                                             {isDayInMonth ? dayNumber : ""}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };

//     const AvailabilityCalendar = () => {
//         const currentDate = new Date();
//         const [year, setYear] = useState(currentDate.getFullYear()); // Start with current year
//         const [month, setMonth] = useState(currentDate.getMonth()); // Start with current month

//         const [availability, setAvailability] = useState({}); // Stores availability for each date


//         // Initialize availability for the displayed months (you can fetch from API here)
//         useEffect(() => {
//             const initialAvailability = {};
//             for (let i = -1; i <= 1; i++) { // Previous, current, and next month
//                 let currentYear = year; // Use let for modification inside the loop
//                 let currentMonth = month + i;

//                 if (currentMonth < 0) {
//                     currentMonth = 11;
//                     currentYear = year - 1; // Update the year as well
//                 } else if (currentMonth > 11) {
//                     currentMonth = 0;
//                     currentYear = year + 1; // Update the year as well
//                 }

//                 const daysInMonth = getDaysInMonth(currentYear, currentMonth);

//                 for (let day = 1; day <= daysInMonth; day++) {
//                     const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
//                     initialAvailability[dateKey] = true; // Default to available
//                 }
//             }

//             setAvailability(initialAvailability);
//         }, [month, year]);

//         const goToPreviousMonth = () => {
//             if (month === 0) {
//                 setYear(year - 1);
//                 setMonth(11);
//             } else {
//                 setMonth(month - 1);
//             }
//         };

//         const goToNextMonth = () => {
//             if (month === 11) {
//                 setYear(year + 1);
//                 setMonth(0);
//             } else {
//                 setMonth(month + 1);
//             }
//         };

//         const handleSelectYear = (e) => {
//             setYear(parseInt(e.target.value));
//         };

//         const monthOptions = Array.from({ length: 12 }, (_, i) => {
//             const date = new Date(year, i, 1); // Create a date object for the month
//             return {
//                 value: i,
//                 label: `${getMonthName(i)} ${year}`, // Format the label as "Month Year"
//             };
//         });

//         const currentMonthYearLabel = `${getMonthName(month)} ${year}`;

//         return (
//             <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-800">Availability Calendar</h2>

//                 <div className="flex items-center space-x-4">
//                     {/* Year Selector */}
//                     <select
//                         value={currentMonthYearLabel}
//                         onChange={(e) => {
//                             const selectedValue = e.target.value;
//                             const [monthName, yearStr] = selectedValue.split(" "); // Split into month and year

//                             const monthIndex = monthOptions.findIndex(opt => opt.label === selectedValue);
//                             const selectedYear = parseInt(yearStr, 10);

//                             if (!isNaN(selectedYear) && monthIndex !== -1) {
//                                 setYear(selectedYear); // Update the year
//                                 setMonth(monthIndex);  // Update the month
//                             }
//                         }}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     >
//                         {monthOptions.map((option) => (
//                             <option key={option.value} value={option.label}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>

//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <label className="flex items-center">
//                         <input type="checkbox" checked={true} readOnly className="mr-2" />
//                         Available
//                     </label>
//                     <label className="flex items-center">
//                         <span className="mr-2 inline-block size-3.5 bg-red-500 rounded-full"></span>
//                         Not Available
//                     </label>
//                 </div>

//                 <div className="flex justify-center space-x-4 overflow-x-auto mt-10 relative">
//                     <button onClick={goToPreviousMonth} >
//                         <MdKeyboardArrowLeft className='bg-orange-500 rounded size-6 text-white absolute top-5 left-48' />
//                     </button>

//                     <Calendar
//                         year={month - 1 < 0 ? year - 1 : year} // Handle year change
//                         month={month - 1 < 0 ? 11 : month - 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                     />

//                     <Calendar year={year} month={month} availability={availability} setAvailability={setAvailability} />
//                     <Calendar
//                         year={month + 1 > 11 ? year + 1 : year} // Handle year change
//                         month={month + 1 > 11 ? 0 : month + 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                     />

//                     <button onClick={goToNextMonth} >
//                         <MdKeyboardArrowRight className='bg-orange-500 rounded size-6 text-white absolute top-5 right-48' />
//                     </button>

//                 </div>


//             </div>
//         );
//     };


//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack />  Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 {dateRange && dateRange.from && dateRange.to && (
//                                     <p className="mt-2 text-gray-600">Night : {numberOfNights}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}

//             {/* Availability Calendar Create */}
//             <div className='mt-10'>
//                 <AvailabilityCalendar />
//             </div>

//         </div>
//     );
// };

// export default RoomDetails;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';
// import { format, differenceInDays } from 'date-fns';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
//     const [numberOfNights, setNumberOfNights] = useState(0);

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             const checkInDate = new Date(newDateRange.from);
//             const checkOutDate = new Date(newDateRange.to);
//             const nights = differenceInDays(checkOutDate, checkInDate) + 1; // **ADD + 1**
//             setNumberOfNights(nights);
//         } else {
//             setNumberOfNights(0);
//         }
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//             numberOfNights: numberOfNights
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const getDaysInMonth = (year, month) => {
//         return new Date(year, month + 1, 0).getDate();
//     };

//     const getFirstDayOfMonth = (year, month) => {
//         return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
//     };

//     const getMonthName = (monthIndex) => {
//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         return months[monthIndex];
//     };

//     const Calendar = ({ year, month, availability, setAvailability }) => {
//         const daysInMonth = getDaysInMonth(year, month);
//         const firstDayOfMonth = getFirstDayOfMonth(year, month); // 0 (Sunday) to 6 (Saturday)
//         const monthName = getMonthName(month);

//         const days = [];
//         for (let i = 1; i <= daysInMonth; i++) {
//             days.push(i);
//         }

//         const handleDayClick = (day) => {
//             const dateKey = `${year}-${month + 1}-${day}`;
//             setAvailability((prev) => ({
//                 ...prev,
//                 [dateKey]: !prev[dateKey], // Toggle availability
//             }));
//         };

//         return (
//             <div className="bg-white rounded-lg p-4 w-72 flex-shrink-0">
//                 <h3 className="text-lg font-semibold mb-2 text-center">{monthName} {year}</h3>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//                                 <th key={day} className="text-gray-700 text-center font-medium p-1">
//                                     {day}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(Math.ceil((daysInMonth + (firstDayOfMonth + 6) % 7) / 7))].map((_, weekIndex) => (
//                             <tr key={weekIndex}>
//                                 {[...Array(7)].map((__, dayIndex) => {
//                                     const dayNumber = weekIndex * 7 + dayIndex - ((firstDayOfMonth + 6) % 7) + 1;
//                                     const isDayInMonth = dayNumber > 0 && dayNumber <= daysInMonth;
//                                     const dateKey = `${year}-${month + 1}-${dayNumber}`;
//                                     const isAvailable = availability[dateKey] !== false; // Default to true

//                                     return (
//                                         <td
//                                             key={dayIndex}
//                                             className={`p-1 border border-gray-200 text-center ${isDayInMonth ? 'text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors' : 'text-gray-400'
//                                                 } ${isDayInMonth ? (isAvailable ? '' : 'line-through text-red-500') : ''
//                                                 }`}
//                                             onClick={() => isDayInMonth && handleDayClick(dayNumber)}
//                                         >
//                                             {isDayInMonth ? dayNumber : ""}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };

//     const AvailabilityCalendar = () => {
//         const currentDate = new Date();
//         const [year, setYear] = useState(currentDate.getFullYear()); // Start with current year
//         const [month, setMonth] = useState(currentDate.getMonth()); // Start with current month

//         //NEW STATE TO KEEP TRACK OF SELECTED YEAR MONTH
//         const [selectedMonth, setSelectedMonth] = useState({
//             value: currentDate.getMonth(),
//             label: `${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`
//         });


//         const [availability, setAvailability] = useState({}); // Stores availability for each date


//         // Initialize availability for the displayed months (you can fetch from API here)
//         useEffect(() => {
//             const initialAvailability = {};
//             for (let i = -1; i <= 1; i++) { // Previous, current, and next month
//                 let currentYear = year; // Use let for modification inside the loop
//                 let currentMonth = month + i;

//                 if (currentMonth < 0) {
//                     currentMonth = 11;
//                     currentYear = year - 1; // Update the year as well
//                 } else if (currentMonth > 11) {
//                     currentMonth = 0;
//                     currentYear = year + 1; // Update the year as well
//                 }

//                 const daysInMonth = getDaysInMonth(currentYear, currentMonth);

//                 for (let day = 1; day <= daysInMonth; day++) {
//                     const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
//                     initialAvailability[dateKey] = true; // Default to available
//                 }
//             }

//             setAvailability(initialAvailability);
//         }, [month, year]);

//         const goToPreviousMonth = () => {
//             if (month === 0) {
//                 setYear(year - 1);
//                 setMonth(11);
//             } else {
//                 setMonth(month - 1);
//             }
//         };

//         const goToNextMonth = () => {
//             if (month === 11) {
//                 setYear(year + 1);
//                 setMonth(0);
//             } else {
//                 setMonth(month + 1);
//             }
//         };



//         const monthOptions = Array.from({ length: 12 }, (_, i) => {
//             const date = new Date(year, i, 1); // Create a date object for the month
//             return {
//                 value: i,
//                 label: `${getMonthName(i)} ${year}`, // Format the label as "Month Year"
//             };
//         });

//         const currentMonthYearLabel = `${getMonthName(month)} ${year}`;


//         const handleSelectYear = (selectedMonthOption) => {
//             setSelectedMonth(selectedMonthOption)
//             setYear(new Date(year, selectedMonthOption.value).getFullYear());
//             setMonth(selectedMonthOption.value);
//         }

//         return (
//             <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-800">Availability Calendar</h2>

//                 <div className="flex items-center space-x-4">
//                     {/* Year Selector */}
//                     <select
//                         value={selectedMonth.label}
//                         onChange={(e) => {
//                             const selectedValue = e.target.value;
//                             const selectedOption = monthOptions.find(opt => opt.label === selectedValue);

//                             if (selectedOption) {
//                                 handleSelectYear(selectedOption)
//                             }
//                         }}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     >
//                         {monthOptions.map((option) => (
//                             <option key={option.value} value={option.label}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>

//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <label className="flex items-center">
//                         <input type="checkbox" checked={true} readOnly className="mr-2" />
//                         Available
//                     </label>
//                     <label className="flex items-center">
//                         <span className="mr-2 inline-block size-3.5 bg-red-500 rounded-full"></span>
//                         Not Available
//                     </label>
//                 </div>

//                 <div className="flex justify-center space-x-4 overflow-x-auto mt-10 relative">
//                     <button onClick={goToPreviousMonth} >
//                         <MdKeyboardArrowLeft className='bg-orange-500 rounded size-6 text-white absolute top-5 left-48' />
//                     </button>

//                     <Calendar
//                         year={month - 1 < 0 ? year - 1 : year} // Handle year change
//                         month={month - 1 < 0 ? 11 : month - 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                     />

//                     <Calendar year={year} month={month} availability={availability} setAvailability={setAvailability} />
//                     <Calendar
//                         year={month + 1 > 11 ? year + 1 : year} // Handle year change
//                         month={month + 1 > 11 ? 0 : month + 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                     />

//                     <button onClick={goToNextMonth} >
//                         <MdKeyboardArrowRight className='bg-orange-500 rounded size-6 text-white absolute top-5 right-48' />
//                     </button>

//                 </div>


//             </div>
//         );
//     };


//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}
//             <Link href="/rooms">
//                 <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
//                     <IoArrowBack />  Back to All Rooms
//                 </button>
//             </Link>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 {dateRange && dateRange.from && dateRange.to && (
//                                     <p className="mt-2 text-gray-600">Night : {numberOfNights}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-6 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-prime font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     ref={dropdownRef}
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <Dropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <Dropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <Dropdown
//                                                                 options={childOptions}
//                                                                 value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                                 onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 text-center text-gray-600 text-sm">
//                                 <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Image Slider Modal */}
//             {showSlider && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                     <div className="relative w-4/5 h-4/5">
//                         <RoomCarousel
//                             images={room.images}
//                             onClose={closeImageSlider}
//                             initialSlide={selectedImageIndex}
//                         />
//                     </div>
//                 </div>
//             )}

//             {/* Availability Calendar Create */}
//             <div className='mt-10'>
//                 <AvailabilityCalendar />
//             </div>

//         </div>
//     );
// };

// export default RoomDetails;

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { IoArrowBack } from 'react-icons/io5';
// import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
// import RoomCarousel from '@/app/(public)/components/RoomCarousel';
// import slugify from 'slugify';
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import Dropdown from '@/app/(public)/components/Dropdown';
// import { format, differenceInDays } from 'date-fns';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// const RoomDetails = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const router = useRouter();  // Access the router

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4].map((num) => ({
//         value: num,
//         label: `${num} Child${num != 1 ? "ren" : ""}`,
//     }));

//     // State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
//     const [numberOfNights, setNumberOfNights] = useState(0);

//     // Handle room count change (from the Number of Rooms dropdown)
//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         // Update the `guests` state to match the new room count
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 }); // Default guest count
//             }
//             newGuests.length = newRoomCount; // Truncate if necessary
//             return newGuests;
//         });
//     };

//     // Handle changes in the Adults or Children dropdowns for a specific room
//     const handleGuestChange = (roomIndex, type, guestOption) => {
//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             newGuests[roomIndex] = {
//                 ...newGuests[roomIndex],
//                 [type]: guestOption.value,
//             };
//             return newGuests;
//         });
//     };


//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             const checkInDate = new Date(newDateRange.from);
//             const checkOutDate = new Date(newDateRange.to);
//             const nights = differenceInDays(checkOutDate, checkInDate) + 1; // **ADD + 1**
//             setNumberOfNights(nights);
//         } else {
//             setNumberOfNights(0);
//         }
//     };


//     // Close the dropdown if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

//     // Calculate total number of guests (sum of adults + children across all rooms)
//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

//     // Calculate total number of adults
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

//     // Calculate total number of children
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const { slug } = useParams();
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showSlider, setShowSlider] = useState(false);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
//         },
//         {
//             id: 4,
//             name: "VidhyaDaan [Premium Room ] 2",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 5,
//             name: "AannaDan [Family Room) 4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//         {
//             id: 6,
//             name: "Aarti Donation 2/4",
//             details: "Ashram AC Room",
//             description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
//         },
//     ];

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true); // Start loading

//             // Simulate an API call or data fetching delay
//             await new Promise((resolve) => setTimeout(resolve, 500)); // Delay of 2 seconds


//             if (slug) {
//                 // Find the room by comparing slugs
//                 const foundRoom = roomsData.find(
//                     room => slugify(room.name, { lower: true }) === slug
//                 );

//                 setRoom(foundRoom);

//             }

//             setLoading(false);
//         };
//         fetchData();
//     }, [slug]);

//     const openImageSlider = (index) => {
//         setSelectedImageIndex(index);
//         setShowSlider(true);
//     };

//     const closeImageSlider = () => {
//         setShowSlider(false);
//     };


//     const handleBookNow = () => {
//         if (!dateRange || !dateRange.from || !dateRange.to) {
//             alert("Please select a valid date range."); // You can replace with a more elegant notification
//             return;
//         }

//         const bookingData = {
//             date: dateRange,
//             totalAdults: totalAdults,
//             totalChildren: totalChildren,
//             numberOfRooms: selectedRoom.value,
//             numberOfNights: numberOfNights
//         };

//         // Store the booking data in localStorage
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         // Redirect to the YourBookingDetail page
//         router.push('/your-booking-detail');
//     };

//     if (loading) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
//                     <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold italic text-gray-900 mb-4">Room Not Found</h2>
//                     <p className="text-gray-600 mb-6 text-lg">Sorry, we couldn't find the room you're looking for.</p>
//                     <Link href="/rooms">
//                         <button className="bg-main cursor-pointer text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
//                             <IoArrowBack /> Return to All Rooms
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const getDaysInMonth = (year, month) => {
//         return new Date(year, month + 1, 0).getDate();
//     };

//     const getFirstDayOfMonth = (year, month) => {
//         return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
//     };

//     const getMonthName = (monthIndex) => {
//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         return months[monthIndex];
//     };

//     const Calendar = ({ year, month, availability, setAvailability, selectedMonth }) => {
//         const daysInMonth = getDaysInMonth(year, month);
//         const firstDayOfMonth = getFirstDayOfMonth(year, month); // 0 (Sunday) to 6 (Saturday)
//         const monthName = getMonthName(month);


//         const days = [];
//         for (let i = 1; i <= daysInMonth; i++) {
//             days.push(i);
//         }

//         const handleDayClick = (day) => {
//             const dateKey = `${year}-${month + 1}-${day}`;
//             setAvailability((prev) => ({
//                 ...prev,
//                 [dateKey]: !prev[dateKey], // Toggle availability
//             }));
//         };

//         return (
//             <div className="bg-white rounded-lg p-4 w-72 flex-shrink-0">
//                 <h3 className="text-lg font-semibold mb-2 text-center">{monthName} {year}</h3>
//                 <table className="w-full">
//                     <thead>
//                         <tr>
//                             {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//                                 <th key={day} className="text-gray-700 text-center font-medium p-1">
//                                     {day}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {[...Array(Math.ceil((daysInMonth + (firstDayOfMonth + 6) % 7) / 7))].map((_, weekIndex) => (
//                             <tr key={weekIndex}>
//                                 {[...Array(7)].map((__, dayIndex) => {
//                                     const dayNumber = weekIndex * 7 + dayIndex - ((firstDayOfMonth + 6) % 7) + 1;
//                                     const isDayInMonth = dayNumber > 0 && dayNumber <= daysInMonth;
//                                     const dateKey = `${year}-${month + 1}-${dayNumber}`;
//                                     const isAvailable = availability[dateKey] !== false; // Default to true

//                                     return (
//                                         <td
//                                             key={dayIndex}
//                                             className={`p-1 border border-gray-200 text-center ${isDayInMonth ? 'text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors' : 'text-gray-400'
//                                                 } ${isDayInMonth ? (isAvailable ? '' : 'line-through text-red-500') : ''
//                                                 }`}
//                                             onClick={() => isDayInMonth && handleDayClick(dayNumber)}
//                                         >
//                                             {isDayInMonth ? dayNumber : ""}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };

//     const AvailabilityCalendar = () => {
//         const currentDate = new Date();
//         const [year, setYear] = useState(currentDate.getFullYear()); // Start with current year
//         const [month, setMonth] = useState(currentDate.getMonth()); // Start with current month

//         //NEW STATE TO KEEP TRACK OF SELECTED YEAR MONTH
//         const [selectedMonth, setSelectedMonth] = useState({
//             value: currentDate.getMonth(),
//             label: `${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`
//         });

//         const [availability, setAvailability] = useState({}); // Stores availability for each date

//         // Handle Year Month from Dropdown Selector
//         const handleSelectYear = (selectedMonthOption) => {
//             setSelectedMonth(selectedMonthOption)
//             setYear(new Date(year, selectedMonthOption.value).getFullYear());
//             setMonth(selectedMonthOption.value);

//             // Update Availability Calendar after year and month change
//             updateAvailability(
//                 new Date(year, selectedMonthOption.value).getFullYear(),
//                 selectedMonthOption.value
//             );
//         };

//         // Initialize availability for the displayed months (you can fetch from API here)
//         useEffect(() => {
//             updateAvailability(year, month);
//         }, []);

//         const updateAvailability = (year, month) => {
//             const initialAvailability = {};
//             // Ensure that month is within the valid range (0-11)
//             const validatedMonth = Math.max(0, Math.min(11, month));

//             for (let i = -1; i <= 1; i++) { // Previous, current, and next month
//                 let currentYear = year; // Use let for modification inside the loop
//                 let currentMonth = validatedMonth + i;

//                 if (currentMonth < 0) {
//                     currentMonth = 11;
//                     currentYear = year - 1; // Update the year as well
//                 } else if (currentMonth > 11) {
//                     currentMonth = 0;
//                     currentYear = year + 1; // Update the year as well
//                 }

//                 const daysInMonth = getDaysInMonth(currentYear, currentMonth);

//                 for (let day = 1; day <= daysInMonth; day++) {
//                     const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
//                     initialAvailability[dateKey] = true; // Default to available
//                 }
//             }

//             setAvailability(initialAvailability);
//         }

//         const goToPreviousMonth = () => {
//             if (month === 0) {
//                 setYear(year - 1);
//                 setMonth(11);
//                 setSelectedMonth({
//                     value: 11,
//                     label: `${getMonthName(11)} ${year - 1}`
//                 })
//             } else {
//                 setMonth(month - 1);
//                 setSelectedMonth({
//                     value: month - 1,
//                     label: `${getMonthName(month - 1)} ${year}`
//                 })
//             }
//         };

//         const goToNextMonth = () => {
//             if (month === 11) {
//                 setYear(year + 1);
//                 setMonth(0);
//                 setSelectedMonth({
//                     value: 0,
//                     label: `${getMonthName(0)} ${year + 1}`
//                 })
//             } else {
//                 setMonth(month + 1);
//                 setSelectedMonth({
//                     value: month + 1,
//                     label: `${getMonthName(month + 1)} ${year}`
//                 })
//             }
//         };


//         const monthOptions = Array.from({ length: 12 }, (_, i) => {
//             const date = new Date(year, i, 1); // Create a date object for the month
//             return {
//                 value: i,
//                 label: `${getMonthName(i)} ${year}`, // Format the label as "Month Year"
//             };
//         });

//         return (
//             <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-800">Availability Calendar</h2>

//                 <div className="flex items-center space-x-4">
//                     {/* Year Selector */}
//                     <select
//                         value={selectedMonth.label}
//                         onChange={(e) => {
//                             const selectedValue = e.target.value;
//                             const selectedOption = monthOptions.find(opt => opt.label === selectedValue);

//                             if (selectedOption) {
//                                 handleSelectYear(selectedOption)
//                             }
//                         }}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     >
//                         {monthOptions.map((option) => (
//                             <option key={option.value} value={option.label}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>

//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <label className="flex items-center">
//                         <input type="checkbox" checked={true} readOnly className="mr-2" />
//                         Available
//                     </label>
//                     <label className="flex items-center">
//                         <span className="mr-2 inline-block size-3.5 bg-red-500 rounded-full"></span>
//                         Not Available
//                     </label>
//                 </div>

//                 <div className="flex justify-center space-x-4 overflow-x-auto mt-10 relative">
//                     <button onClick={goToPreviousMonth} >
//                         <MdKeyboardArrowLeft className='bg-orange-500 rounded size-6 text-white absolute top-5 left-48' />
//                     </button>

//                     <Calendar
//                         year={month - 1 < 0 ? year - 1 : year} // Handle year change
//                         month={month - 1 < 0 ? 11 : month - 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                         selectedMonth={selectedMonth}
//                     />

//                     <Calendar
//                         year={year}
//                         month={month}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                         selectedMonth={selectedMonth}
//                     />
//                     <Calendar
//                         year={month + 1 > 11 ? year + 1 : year} // Handle year change
//                         month={month + 1 > 11 ? 0 : month + 1}
//                         availability={availability}
//                         setAvailability={setAvailability}
//                         selectedMonth={selectedMonth}
//                     />

//                     <button onClick={goToNextMonth} >
//                         <MdKeyboardArrowRight className='bg-orange-500 rounded size-6 text-white absolute top-5 right-48' />
//                     </button>

//                 </div>


//             </div>
//         );
//     };


//     return (
//         <div className="container mx-auto p-4 mb-10">
//             {/* Back button */}

//             <div className=" text-main text-lg transition duration-300 mb-6 inline-block group">
//                 <Link href="/rooms" className='items-center gap-4 flex'>
//                     <IoArrowBack className='group-hover:-translate-x-2.5 transition-transform ease-in duration-200' />
//                     <span>Back to All Rooms</span>
//                 </Link>
//             </div>


//             <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
//                 {/* Left column - Images */}
//                 <div className="md:col-span-2">
//                     <div className="grid grid-cols-2 gap-3">
//                         {room.images.slice(0, 4).map((image, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
//                                 onClick={() => openImageSlider(index)}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${room.name} - Image ${index + 1}`}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                                 />
//                                 {index === 3 && room.images.length > 4 && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Room description */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
//                         <p className="text-gray-700">{room.description}</p>
//                     </div>

//                     {/* Room amenities */}
//                     <div className="mt-8">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {room.facilities && Object.keys(room.facilities).length > 0 ? (
//                                 Object.entries(room.facilities).map(([key, value]) => {
//                                     if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
//                                         return (
//                                             <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
//                                                 <div
//                                                     className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
//                                                     data-tooltip-id={`tooltip-detail-${key}`}
//                                                     data-tooltip-content={facilityIcons[key].label}
//                                                 >
//                                                     {facilityIcons[key].icon}
//                                                 </div>
//                                                 <Tooltip id={`tooltip-detail-${key}`} place="top" />
//                                                 <span className="text-gray-700">{facilityIcons[key].label}</span>
//                                             </div>
//                                         );
//                                     }
//                                     return null; // Skip if value is false or icon is not defined
//                                 })
//                             ) : (
//                                 <p>No facilities information available</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="md:col-span-1">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
//                         <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
//                         <p className="text-gray-600 mb-4">{room.details}</p>

//                         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//                             <span className="text-gray-700 font-medium">Price per night</span>
//                             <span className="text-3xl font-bold text-main">₹{room.price}</span>
//                         </div>

//                         {/* <div className='space-y-2'>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 {dateRange && dateRange.from && dateRange.to && (
//                                  { numberOfNights }
//                                 )}
//                             </div>
//                         </div> */}

//                         <div>
//                             <label className="block text-gray-700 font-medium mb-2">
//                                 Guest Information
//                             </label>
//                             <div
//                                 className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                             >
//                                 <div className="flex gap-6 items-center">
//                                     <div className="flex items-center gap-2">
//                                         <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                             {selectedRoom.value}
//                                         </span>
//                                         <span className="text-prime font-medium">Room</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                             {totalAdults}
//                                         </span>
//                                         <span className="text-prime font-medium">Adults</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                             {totalChildren}
//                                         </span>
//                                         <span className="text-prime font-medium">Children</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                                 ref={dropdownRef}
//                                 className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                 style={{ zIndex: 50 }}
//                             >
//                                 <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                     <div className="space-y-1.5">
//                                         <div>
//                                             <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                             <Dropdown
//                                                 options={roomOptions}
//                                                 value={selectedRoom}
//                                                 onChange={handleRoomChange}
//                                             />
//                                         </div>


//                                         {guests.map((guest, roomIndex) => (
//                                             <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                 <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                     Room {roomIndex + 1}
//                                                 </span>
//                                                 <div className="flex gap-4">
//                                                     <div>
//                                                         <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                         <Dropdown
//                                                             options={adultOptions}
//                                                             value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                             onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                         />
//                                                     </div>

//                                                     <div>
//                                                         <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                         <Dropdown
//                                                             options={childOptions}
//                                                             value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
//                                                             onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-6 text-center text-gray-600 text-sm">
//                             <button onClick={handleBookNow} className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//             {/* Image Slider Modal */ }
//     {
//         showSlider && (
//             <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//                 <div className="relative w-4/5 h-4/5">
//                     <RoomCarousel
//                         images={room.images}
//                         onClose={closeImageSlider}
//                         initialSlide={selectedImageIndex}
//                     />
//                 </div>
//             </div>
//         )
//     }

//     {/* Availability Calendar Create */ }
//     <div className='mt-5'>
//         <AvailabilityCalendar />
//     </div>
//     );
// };

// export default RoomDetails;


"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import RoomCarousel from '@/app/(public)/components/RoomCarousel';
import slugify from 'slugify';
import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
import Dropdown from '@/app/(public)/components/Dropdown';
import { format, differenceInDays } from 'date-fns';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const RoomDetails = () => {
    const [dateRange, setDateRange] = useState(null);
    const [rooms, setRooms] = useState(1); // Number of rooms
    const [guests, setGuests] = useState([
        { adults: 2, children: 0 }, // Default for 1 room
    ]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const router = useRouter();  // Access the router

    // Data for the dropdown menus
    const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
        value: num,
        label: `${num} Room${num > 1 ? "s" : ""}`,
    }));
    const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
        value: num,
        label: `${num} Adult${num > 1 ? "s" : ""}`,
    }));
    const childOptions = [0, 1, 2, 3, 4].map((num) => ({
        value: num,
        label: `${num} Child${num != 1 ? "ren" : ""}`,
    }));

    // State for react-select.  Initialize with options!
    const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
    const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children
    const [numberOfNights, setNumberOfNights] = useState(0);

    // Handle room count change (from the Number of Rooms dropdown)
    const handleRoomChange = (roomOption) => {
        const newRoomCount = roomOption.value;
        setSelectedRoom(roomOption);

        // Update the `guests` state to match the new room count
        setGuests((prevGuests) => {
            const newGuests = [...prevGuests];
            while (newGuests.length < newRoomCount) {
                newGuests.push({ adults: 2, children: 0 }); // Default guest count
            }
            newGuests.length = newRoomCount; // Truncate if necessary
            return newGuests;
        });
    };

    // Handle changes in the Adults or Children dropdowns for a specific room
    const handleGuestChange = (roomIndex, type, guestOption) => {
        setGuests((prevGuests) => {
            const newGuests = [...prevGuests];
            newGuests[roomIndex] = {
                ...newGuests[roomIndex],
                [type]: guestOption.value,
            };
            return newGuests;
        });
    };


    const handleDateRangeChange = (newDateRange) => {
        setDateRange(newDateRange);
        if (newDateRange && newDateRange.from && newDateRange.to) {
            const checkInDate = new Date(newDateRange.from);
            const checkOutDate = new Date(newDateRange.to);
            const nights = differenceInDays(checkOutDate, checkInDate) + 1; // **ADD + 1**
            setNumberOfNights(nights);
        } else {
            setNumberOfNights(0);
        }
    };


    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);  // Important: Add dropdownRef as a dependency

    // Calculate total number of guests (sum of adults + children across all rooms)
    const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);

    // Calculate total number of adults
    const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);

    // Calculate total number of children
    const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

    const { slug } = useParams();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSlider, setShowSlider] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const roomsData = [
        {
            id: 1,
            name: "Economy GowSeva",
            details: "Ashram Non AC Rooms",
            description: "Comfortable room to stay and enjoy the premine facilities. Both a bicycle rental service and a car rental service are available",
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
        },
        {
            id: 2,
            name: "Normal GowSeva",
            details: "Ashram Non AC Rooms",
            description: "Non-Ac rooms. swaminarayan ashram is 4.1km from the Yog Nagari Rishikesh railway station, as well as easy to get transport for station",
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
        },
        {
            id: 3,
            name: "Semi Deluxe Brahmbhoj",
            details: "Ashram AC Room",
            description: "The daily breakfast offers continental or vegetarian options you have selected. Hotwater is available is bathroom.",
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
        },
        {
            id: 4,
            name: "VidhyaDaan [Premium Room ] 2",
            details: "Ashram AC Room",
            description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
        },
        {
            id: 5,
            name: "AannaDan [Family Room) 4",
            details: "Ashram AC Room",
            description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
        },
        {
            id: 6,
            name: "Aarti Donation 2/4",
            details: "Ashram AC Room",
            description: "We must inform all the devotees that this is not a hotel but a dharmshala run by a religious trust (Sahajanand Wellness) for serving the pilgrims and saints. Therefore, we don't provide any television or entertainment features. We are unable to provide room service too. Food is provided only in the langar hall all the three times. Visitors are thus requested to help maintain the serenity of the ashram. The whole idea of providing online room booking is to make proper arrangements in advance because ashram",
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
        },
    ];

    const facilityIcons = {
        wifi: { icon: <FaWifi />, label: "Free Wifi" },
        bath: { icon: <FaBath />, label: "Bathroom" },
        room: { icon: <FaUniversity />, label: "Room" },
        air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading

            // Simulate an API call or data fetching delay
            await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay of 2 seconds


            if (slug) {
                // Find the room by comparing slugs
                const foundRoom = roomsData.find(
                    room => slugify(room.name, { lower: true }) === slug
                );

                setRoom(foundRoom);

            }

            setLoading(false);
        };
        fetchData();
    }, [slug]);

    const openImageSlider = (index) => {
        setSelectedImageIndex(index);
        setShowSlider(true);
    };

    const closeImageSlider = () => {
        setShowSlider(false);
    };


    const handleBookNow = () => {
        if (!dateRange || !dateRange.from || !dateRange.to) {
            alert("Please select a valid date range."); // You can replace with a more elegant notification
            return;
        }

        const bookingData = {
            date: dateRange,
            totalAdults: totalAdults,
            totalChildren: totalChildren,
            numberOfRooms: selectedRoom.value,
            numberOfNights: numberOfNights
        };

        // Store the booking data in localStorage
        localStorage.setItem('bookingData', JSON.stringify(bookingData));

        // Redirect to the YourBookingDetail page
        router.push('/your-booking-detail');
    };

    if (loading) {
        return (
            <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main mx-auto"></div>
                    <p className="mt-4 text-main text-lg font-medium">Loading room details...</p>
                </div>
            </div>
        );
    }

    if (!room) {
        return (
            <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
                    <p className="text-gray-600 mb-6">Sorry, we couldn't find the room you're looking for.</p>
                    <Link href="/rooms">
                        <button className="bg-main text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-2 mx-auto">
                            <IoArrowBack /> Return to All Rooms
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
    };

    const getMonthName = (monthIndex) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[monthIndex];
    };

    const Calendar = ({ year, month, availability, setAvailability, selectedMonth }) => {
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month); // 0 (Sunday) to 6 (Saturday)
        const monthName = getMonthName(month);


        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        const handleDayClick = (day) => {
            const dateKey = `${year}-${month + 1}-${day}`;
            setAvailability((prev) => ({
                ...prev,
                [dateKey]: !prev[dateKey], // Toggle availability
            }));
        };

        return (
            <div className="bg-white rounded-lg p-4 w-72 flex-shrink-0">
                <h3 className="text-lg font-semibold mb-2 text-center">{monthName} {year}</h3>
                <table className="w-full">
                    <thead>
                        <tr>
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                <th key={day} className="text-gray-700 text-center font-medium p-1">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(Math.ceil((daysInMonth + (firstDayOfMonth + 6) % 7) / 7))].map((_, weekIndex) => (
                            <tr key={weekIndex}>
                                {[...Array(7)].map((__, dayIndex) => {
                                    const dayNumber = weekIndex * 7 + dayIndex - ((firstDayOfMonth + 6) % 7) + 1;
                                    const isDayInMonth = dayNumber > 0 && dayNumber <= daysInMonth;
                                    const dateKey = `${year}-${month + 1}-${dayNumber}`;
                                    const isAvailable = availability[dateKey] !== false; // Default to true

                                    return (
                                        <td
                                            key={dayIndex}
                                            className={`p-1 border border-gray-200 text-center ${isDayInMonth ? 'text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors' : 'text-gray-400'
                                                } ${isDayInMonth ? (isAvailable ? '' : 'line-through text-red-500') : ''
                                                }`}
                                            onClick={() => isDayInMonth && handleDayClick(dayNumber)}
                                        >
                                            {isDayInMonth ? dayNumber : ""}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const AvailabilityCalendar = () => {
        const currentDate = new Date();
        const [year, setYear] = useState(currentDate.getFullYear()); // Start with current year
        const [month, setMonth] = useState(currentDate.getMonth()); // Start with current month

        //NEW STATE TO KEEP TRACK OF SELECTED YEAR MONTH
        const [selectedMonth, setSelectedMonth] = useState({
            value: currentDate.getMonth(),
            label: `${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`
        });

        const [availability, setAvailability] = useState({}); // Stores availability for each date

        // Handle Year Month from Dropdown Selector
        const handleSelectYear = (selectedMonthOption) => {
            setSelectedMonth(selectedMonthOption)
            setYear(new Date(year, selectedMonthOption.value).getFullYear());
            setMonth(selectedMonthOption.value);

            // Update Availability Calendar after year and month change
            updateAvailability(
                new Date(year, selectedMonthOption.value).getFullYear(),
                selectedMonthOption.value
            );
        };

        // Initialize availability for the displayed months (you can fetch from API here)
        useEffect(() => {
            updateAvailability(year, month);
        }, []);

        const updateAvailability = (year, month) => {
            const initialAvailability = {};
            // Ensure that month is within the valid range (0-11)
            const validatedMonth = Math.max(0, Math.min(11, month));

            for (let i = -1; i <= 1; i++) { // Previous, current, and next month
                let currentYear = year; // Use let for modification inside the loop
                let currentMonth = validatedMonth + i;

                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear = year - 1; // Update the year as well
                } else if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear = year + 1; // Update the year as well
                }

                const daysInMonth = getDaysInMonth(currentYear, currentMonth);

                for (let day = 1; day <= daysInMonth; day++) {
                    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
                    initialAvailability[dateKey] = true; // Default to available
                }
            }

            setAvailability(initialAvailability);
        }

        const goToPreviousMonth = () => {
            if (month === 0) {
                setYear(year - 1);
                setMonth(11);
                setSelectedMonth({
                    value: 11,
                    label: `${getMonthName(11)} ${year - 1}`
                })
            } else {
                setMonth(month - 1);
                setSelectedMonth({
                    value: month - 1,
                    label: `${getMonthName(month - 1)} ${year}`
                })
            }
        };

        const goToNextMonth = () => {
            if (month === 11) {
                setYear(year + 1);
                setMonth(0);
                setSelectedMonth({
                    value: 0,
                    label: `${getMonthName(0)} ${year + 1}`
                })
            } else {
                setMonth(month + 1);
                setSelectedMonth({
                    value: month + 1,
                    label: `${getMonthName(month + 1)} ${year}`
                })
            }
        };


        const monthOptions = Array.from({ length: 12 }, (_, i) => {
            const date = new Date(year, i, 1); // Create a date object for the month
            return {
                value: i,
                label: `${getMonthName(i)} ${year}`, // Format the label as "Month Year"
            };
        });

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Availability Calendar</h2>

                <div className="flex items-center space-x-4">
                    {/* Year Selector */}
                    <select
                        value={selectedMonth.label}
                        onChange={(e) => {
                            const selectedValue = e.target.value;
                            const selectedOption = monthOptions.find(opt => opt.label === selectedValue);

                            if (selectedOption) {
                                handleSelectYear(selectedOption)
                            }
                        }}
                        className="border border-gray-300 rounded-md px-2 py-1"
                    >
                        {monthOptions.map((option) => (
                            <option key={option.value} value={option.label}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                </div>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                        <input type="checkbox" checked={true} readOnly className="mr-2" />
                        Available
                    </label>
                    <label className="flex items-center">
                        <span className="mr-2 inline-block size-3.5 bg-red-500 rounded-full"></span>
                        Not Available
                    </label>
                </div>

                <div className="flex lg:flex-row  flex-col justify-center space-x-4 overflow-x-auto lg:mt-10 relative">
                    <button onClick={goToPreviousMonth} >
                        <MdKeyboardArrowLeft className='bg-orange-500 rounded size-6 text-white absolute top-5 lg:left-48 left-5' />
                    </button>

                    <Calendar
                        year={month - 1 < 0 ? year - 1 : year} // Handle year change
                        month={month - 1 < 0 ? 11 : month - 1}
                        availability={availability}
                        setAvailability={setAvailability}
                        selectedMonth={selectedMonth}
                    />

                    <Calendar
                        year={year}
                        month={month}
                        availability={availability}
                        setAvailability={setAvailability}
                        selectedMonth={selectedMonth}
                    />
                    <Calendar
                        year={month + 1 > 11 ? year + 1 : year} // Handle year change
                        month={month + 1 > 11 ? 0 : month + 1}
                        availability={availability}
                        setAvailability={setAvailability}
                        selectedMonth={selectedMonth}
                    />

                    <button onClick={goToNextMonth} >
                        <MdKeyboardArrowRight className='bg-orange-500 rounded size-6 text-white absolute top-5 lg:right-48 right-20' />
                    </button>
                </div>
            </div>
        );
    };


    return (
        <div className="container mx-auto p-4 mb-10">

            {/* Back button */}
            <div className=" text-main lg:text-lg text-base transition duration-300 mb-4 inline-block group">
                <Link href="/rooms" className='items-center gap-2 flex'>
                    <IoArrowBack className='group-hover:-translate-x-2.5 transition-transform ease-in duration-200' />
                    <span>Back to All Rooms</span>
                </Link>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                {/* Left column - Images */}
                <div className="md:col-span-2">
                    <div className="grid grid-cols-2 gap-3">
                        {room.images.slice(0, 4).map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
                                onClick={() => openImageSlider(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`${room.name} - Image ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                />
                                {index === 3 && room.images.length > 4 && (
                                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                                        <span className="text-white text-lg font-medium">+{room.images.length - 4} more</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Room description */}
                    <div className="mt-8">
                        <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-2">Description</h2>
                        <p className="text-gray-700 font-medium">{room.description}</p>
                    </div>

                    {/* Room amenities */}
                    <div className="mt-8">
                        <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-2">Amenities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {room.facilities && Object.keys(room.facilities).length > 0 ? (
                                Object.entries(room.facilities).map(([key, value]) => {
                                    if (value && facilityIcons[key]) {  //Ensure value is true and icon exists
                                        return (
                                            <div key={key} className="flex items-center gap-3 lg:p-3 p-2 border border-gray-200 rounded-lg">
                                                <div
                                                    className="text-white bg-prime p-1 rounded-sm size-8 flex items-center justify-center"
                                                    data-tooltip-id={`tooltip-detail-${key}`}
                                                    data-tooltip-content={facilityIcons[key].label}
                                                >
                                                    {facilityIcons[key].icon}
                                                </div>
                                                <Tooltip id={`tooltip-detail-${key}`} place="top" />
                                                <span className="text-gray-700">{facilityIcons[key].label}</span>
                                            </div>
                                        );
                                    }
                                    return null; // Skip if value is false or icon is not defined
                                })
                            ) : (
                                <p>No facilities information available</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
                        <h1 className="lg:text-2xl text-xl font-bold text-gray-800 mb-1">{room.name}</h1>
                        <p className="text-gray-700 mb-4">{room.details}</p>

                        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                            <span className="text-gray-700 font-medium">Price per night</span>
                            <span className="lg:text-3xl text-2xl font-bold text-main">₹{room.price}</span>
                        </div>

                        <div className='space-y-2'>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Select Your Stay Duration
                                </label>
                                <DatePickerWithRange onChange={handleDateRangeChange} />
                                {dateRange && dateRange.from && dateRange.to && (
                                    <div className='flex gap-2 py-2'>
                                        <label className="block text-gray-700 font-medium mb-2">Night :
                                        </label>
                                        <span className='size-6 rounded-full bg-main text-white flex items-center justify-center'>
                                            {numberOfNights}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Guest Information
                                </label>
                                <div
                                    className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <div className="flex gap-6 items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
                                                {selectedRoom.value}
                                            </span>
                                            <span className="text-prime font-medium">Room</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
                                                {totalAdults}
                                            </span>
                                            <span className="text-prime font-medium">Adults</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
                                                {totalChildren}
                                            </span>
                                            <span className="text-prime font-medium">Children</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    ref={dropdownRef}
                                    className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-[92%]
                                        ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
                                    `}
                                    style={{ zIndex: 50 }}
                                >
                                    <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
                                        <div className="space-y-1.5">
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
                                                <Dropdown
                                                    options={roomOptions}
                                                    value={selectedRoom}
                                                    onChange={handleRoomChange}
                                                />
                                            </div>


                                            {guests.map((guest, roomIndex) => (
                                                <div key={roomIndex} className="flex justify-between items-center gap-2">
                                                    <span className="block text-gray-700 font-medium mb-1 text-sm">
                                                        Room {roomIndex + 1}
                                                    </span>
                                                    <div className="flex gap-4">
                                                        <div>
                                                            <label className="block text-gray-600 mb-1 text-xs">Adults</label>
                                                            <Dropdown
                                                                options={adultOptions}
                                                                value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
                                                                onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
                                                            />
                                                        </div>

                                                        <div>
                                                            <label className="block text-gray-600 mb-1 text-xs">Children</label>
                                                            <Dropdown
                                                                options={childOptions}
                                                                value={childOptions.find(opt => opt.value === guest.children)} // Find the right option
                                                                onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center text-gray-600 text-sm">
                                <button onClick={handleBookNow} className="w-full bg-orange-500 text-white lg:py-4 py-2 rounded-md font-medium text-lg">
                                    Book Now
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Image Slider Modal */}
            {showSlider && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 backdrop-blur-sm z-50">
                    <div className="relative md:w-5/6 w-[90%] md:h-4/5 h-full">
                        <RoomCarousel
                            images={room.images}
                            onClose={closeImageSlider}
                            initialSlide={selectedImageIndex}
                        />
                    </div>
                </div>
            )}

            {/* Availability Calendar Create */}
            <div className='mt-10'>
                <AvailabilityCalendar />
            </div>

        </div>
    );
};

export default RoomDetails;

