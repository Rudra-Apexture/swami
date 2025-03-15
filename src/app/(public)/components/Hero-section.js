// "use client";

// import { useState } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js.js";

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1);
//     const [guests, setGuests] = useState({ adults: 2, children: 0 });
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//     };

//     const handleRoomChange = (event) => {
//         setRooms(parseInt(event.target.value, 10));
//     };

//     const handleGuestChange = (roomIndex, type, value) => {
//         setGuests((prevGuests) => ({
//             ...prevGuests,
//             [type]: value,
//         }));
//     };

//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6] overflow-hidden">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center py-10">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-6">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-medium text-main mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-2xl md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
//                                                 {rooms}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
//                                                 {guests.adults}
//                                             </span>
//                                             <span className="text-black font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
//                                                 {guests.children}
//                                             </span>
//                                             <span className="text-black font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel with Improved Animation */}
//                                 <div
//                                     className={`transform transition-all duration-300 ease-in-out origin-top
//                                         ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}
//                                     `}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-orange-200 rounded-xl bg-white">
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-600 mb-1">Number of Rooms</label>
//                                                 <select
//                                                     value={rooms}
//                                                     onChange={handleRoomChange}
//                                                     className="w-full p-2 border border-orange-200 rounded-lg"
//                                                 >
//                                                     {[1, 2, 3].map((num) => (
//                                                         <option key={num} value={num}>
//                                                             {num} Room{num > 1 ? 's' : ''}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             </div>

//                                             {Array.from({ length: rooms }).map((_, index) => (
//                                                 <div key={index} className="p-2 flex items-center justify-between bg-orange-50/50 rounded-lg">
//                                                     <p className="font-medium text-gray-700 mb-3">Room {index + 1}</p>
//                                                     <div className="grid grid-cols-2 gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-700 mb-0.5">Adults</label>
//                                                             <select
//                                                                 value={guests.adults}
//                                                                 onChange={(e) =>
//                                                                     handleGuestChange(index, "adults", parseInt(e.target.value, 10))
//                                                                 }
//                                                                 className="w-full p-1.5 border border-orange-200 rounded-lg"
//                                                             >
//                                                                 {[1, 2, 3, 4, 5].map((num) => (
//                                                                     <option key={num} value={num}>
//                                                                         {num} Adult{num > 1 ? 's' : ''}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                         <div>
//                                                             <label className="block text-gray-700 mb-0.5">Children</label>
//                                                             <select
//                                                                 value={guests.children}
//                                                                 onChange={(e) =>
//                                                                     handleGuestChange(index, "children", parseInt(e.target.value, 10))
//                                                                 }
//                                                                 className="w-full p-1.5 border border-orange-200 rounded-lg"
//                                                             >
//                                                                 {[0, 1, 2, 3, 5].map((num) => (
//                                                                     <option key={num} value={num}>
//                                                                         {num} Child{num > 1 ? 'ren' : ''}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

// "use client";
// import { useState, useRef, useEffect } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js.js";

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1);
//     const [guests, setGuests] = useState({ adults: 2, children: 0 });
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const handleDateRangeChange = (newDateRange) => {
//         setDateRange(newDateRange);
//     };

//     const handleRoomChange = (event) => {
//         setRooms(parseInt(event.target.value, 10));
//     };

//     const handleGuestChange = (roomIndex, type, value) => {
//         setGuests((prevGuests) => ({
//             ...prevGuests,
//             [type]: value,
//         }));
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


//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6] overflow-hidden">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600] mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {rooms}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {guests.adults}
//                                             </span>
//                                             <span className="text-black font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {guests.children}
//                                             </span>
//                                             <span className="text-black font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-2/5 
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">
//                                             <div>
//                                                 <label className="block text-gray-600 mb-1">Number of Rooms</label>
//                                                 <select
//                                                     value={rooms}
//                                                     onChange={handleRoomChange}
//                                                     className="w-full p-2 border border-gray-300 rounded-sm"
//                                                 >
//                                                     {[1, 2, 3].map((num) => (
//                                                         <option key={num} value={num}>
//                                                             {num} Room{num > 1 ? 's' : ''}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             </div>

//                                             {Array.from({ length: rooms }).map((_, index) => (
//                                                 <div key={index} className="p-2 flex items-center justify-between   ">
//                                                     <p className="font-medium text-gray-700 mb-3">Room {index + 1}</p>
//                                                     <div className="grid grid-cols-2 gap-4">
//                                                         <div>
//                                                             <label className="block text-gray-700 mb-0.5">Adults</label>
//                                                             <select
//                                                                 value={guests.adults}
//                                                                 onChange={(e) =>
//                                                                     handleGuestChange(index, "adults", parseInt(e.target.value, 10))
//                                                                 }
//                                                                 className="w-full p-1.5 border border-gray-300 rounded-sm"
//                                                             >
//                                                                 {[1, 2, 3, 4, 5].map((num) => (
//                                                                     <option key={num} value={num}>
//                                                                         {num} Adult{num > 1 ? 's' : ''}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                         <div>
//                                                             <label className="block text-gray-700 mb-0.5">Children</label>
//                                                             <select
//                                                                 value={guests.children}
//                                                                 onChange={(e) =>
//                                                                     handleGuestChange(index, "children", parseInt(e.target.value, 10))
//                                                                 }
//                                                                 className="w-full p-1.5 border border-gray-300 rounded-sm"
//                                                             >
//                                                                 {[0, 1, 2, 3, 5].map((num) => (
//                                                                     <option key={num} value={num}>
//                                                                         {num} Child{num > 1 ? 'ren' : ''}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

// "use client";

// import { useState, useRef, useEffect, Fragment } from "react"; // Import Fragment
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js.js";
// import { Listbox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1);
//     const [guests, setGuests] = useState({ adults: 2, children: 0 });
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);


//     //Data for the dropdown menus
//     const roomOptions = [1, 2, 3];
//     const adultOptions = [1, 2, 3, 4, 5];
//     const childOptions = [0, 1, 2, 3, 5];

//     //State for headless selects.
//     const [selectedRoom, setSelectedRoom] = useState(1);
//     const [selectedAdults, setSelectedAdults] = useState(2);
//     const [selectedChildren, setSelectedChildren] = useState(0);

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


//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6]">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600] mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedAdults}
//                                             </span>
//                                             <span className="text-black font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedChildren}
//                                             </span>
//                                             <span className="text-black font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel with Improved Animation */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">

//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-600 mb-1">Number of Rooms</label>
//                                                 <Listbox value={selectedRoom} onChange={setSelectedRoom}>
//                                                     <div className="relative">
//                                                         <Listbox.Button className="relative w-full cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//                                                             <span className="block truncate">{selectedRoom} Room {selectedRoom > 1 ? 's' : ''}</span>
//                                                             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                                                                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                                                             </span>
//                                                         </Listbox.Button>
//                                                         <Transition
//                                                             as={Fragment} // Here is the important part: import Fragment!
//                                                             leave="transition ease-in duration-100"
//                                                             leaveFrom="opacity-100"
//                                                             leaveTo="opacity-0"
//                                                         >
//                                                             <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                                                                 {roomOptions.map((room) => (
//                                                                     <Listbox.Option
//                                                                         key={room}
//                                                                         className={({ active }) =>
//                                                                             classNames(
//                                                                                 active ? 'bg-orange-100 text-orange-900' : 'text-gray-900',
//                                                                                 'relative cursor-default select-none py-2 pl-10 pr-4'
//                                                                             )
//                                                                         }
//                                                                         value={room}
//                                                                     >
//                                                                         {({ selected }) => (
//                                                                             <>
//                                                                                 <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
//                                                                                     {room} Room{room > 1 ? 's' : ''}
//                                                                                 </span>
//                                                                                 {selected ? (
//                                                                                     <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-600">
//                                                                                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                                                                     </span>
//                                                                                 ) : null}
//                                                                             </>
//                                                                         )}
//                                                                     </Listbox.Option>
//                                                                 ))}
//                                                             </Listbox.Options>
//                                                         </Transition>
//                                                     </div>
//                                                 </Listbox>
//                                             </div>


//                                             {/* Room-Specific Guest Selection (using Listbox) */}
//                                             {Array.from({ length: selectedRoom }).map((_, index) => (
//                                                 <div key={index} className="p-2 flex items-center justify-between  ">
//                                                     <p className="font-medium text-gray-700 mb-3">Room {index + 1}</p>
//                                                     <div className="grid grid-cols-2 gap-4">

//                                                         {/* Adults Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1">Adults</label>
//                                                             <Listbox value={selectedAdults} onChange={setSelectedAdults}>
//                                                                 <div className="relative">
//                                                                     <Listbox.Button className="relative w-full cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//                                                                         <span className="block truncate">{selectedAdults} Adult{selectedAdults > 1 ? 's' : ''}</span>
//                                                                         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                                                                             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                                                                         </span>
//                                                                     </Listbox.Button>
//                                                                     <Transition
//                                                                         as={Fragment} // Here is the important part: import Fragment!
//                                                                         leave="transition ease-in duration-100"
//                                                                         leaveFrom="opacity-100"
//                                                                         leaveTo="opacity-0"
//                                                                     >
//                                                                         <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                                                                             {adultOptions.map((adult) => (
//                                                                                 <Listbox.Option
//                                                                                     key={adult}
//                                                                                     className={({ active }) =>
//                                                                                         classNames(
//                                                                                             active ? 'bg-orange-100 text-orange-900' : 'text-gray-900',
//                                                                                             'relative cursor-default select-none py-2 pl-10 pr-4'
//                                                                                         )
//                                                                                     }
//                                                                                     value={adult}
//                                                                                 >
//                                                                                     {({ selected }) => (
//                                                                                         <>
//                                                                                             <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
//                                                                                                 {adult} Adult{adult > 1 ? 's' : ''}
//                                                                                             </span>
//                                                                                             {selected ? (
//                                                                                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-600">
//                                                                                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                                                                                 </span>
//                                                                                             ) : null}
//                                                                                         </>
//                                                                                     )}
//                                                                                 </Listbox.Option>
//                                                                             ))}
//                                                                         </Listbox.Options>
//                                                                     </Transition>
//                                                                 </div>
//                                                             </Listbox>
//                                                         </div>



//                                                         {/* Children Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1">Children</label>
//                                                             <Listbox value={selectedChildren} onChange={setSelectedChildren}>
//                                                                 <div className="relative">
//                                                                     <Listbox.Button className="relative w-full cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//                                                                         <span className="block truncate">{selectedChildren} Child{selectedChildren !== 1 ? 'ren' : ''}</span>
//                                                                         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                                                                             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                                                                         </span>
//                                                                     </Listbox.Button>
//                                                                     <Transition
//                                                                         as={Fragment} // Here is the important part: import Fragment!
//                                                                         leave="transition ease-in duration-100"
//                                                                         leaveFrom="opacity-100"
//                                                                         leaveTo="opacity-0"
//                                                                     >
//                                                                         <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                                                                             {childOptions.map((child) => (
//                                                                                 <Listbox.Option
//                                                                                     key={child}
//                                                                                     className={({ active }) =>
//                                                                                         classNames(
//                                                                                             active ? 'bg-orange-100 text-orange-900' : 'text-gray-900',
//                                                                                             'relative cursor-default select-none py-2 pl-10 pr-4'
//                                                                                         )
//                                                                                     }
//                                                                                     value={child}
//                                                                                 >
//                                                                                     {({ selected }) => (
//                                                                                         <>
//                                                                                             <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
//                                                                                                 {child} Child{child !== 1 ? 'ren' : ''}
//                                                                                             </span>
//                                                                                             {selected ? (
//                                                                                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-600">
//                                                                                                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                                                                                 </span>
//                                                                                             ) : null}
//                                                                                         </>
//                                                                                     )}
//                                                                                 </Listbox.Option>
//                                                                             ))}
//                                                                         </Listbox.Options>
//                                                                     </Transition>
//                                                                 </div>
//                                                             </Listbox>
//                                                         </div>


//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }


// export default HeroSection;


// "use client";

// import { useState, useRef, useEffect, Fragment } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js.js";
// import Select from 'react-select'; // Import React Select
// // import 'react-select/dist/react-select.css'; // Import the CSS


// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1);
//     const [guests, setGuests] = useState({ adults: 2, children: 0 });
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);


//     //Data for the dropdown menus
//     const roomOptions = [1, 2, 3].map(num => ({ value: num, label: `${num} Room${num > 1 ? 's' : ''}` }));
//     const adultOptions = [1, 2, 3, 4, 5].map(num => ({ value: num, label: `${num} Adult${num > 1 ? 's' : ''}` }));
//     const childOptions = [0, 1, 2, 3, 5].map(num => ({ value: num, label: `${num} Child${num !== 1 ? 'ren' : ''}` }));

//     //State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedAdults, setSelectedAdults] = useState(adultOptions[1]);  // Defaults to 2 adults
//     const [selectedChildren, setSelectedChildren] = useState(childOptions[0]); // Defaults to 0 children

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


//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6]">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600] mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedAdults.value}
//                                             </span>
//                                             <span className="text-black font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedChildren.value}
//                                             </span>
//                                             <span className="text-black font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel with Improved Animation */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">

//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-600 mb-1">Number of Rooms</label>
//                                                 <Select
//                                                     value={selectedRoom}
//                                                     onChange={setSelectedRoom}
//                                                     options={roomOptions}
//                                                     className="basic-single"
//                                                     classNamePrefix="select"
//                                                 />
//                                             </div>

//                                             {/* Room-Specific Guest Selection (using React Select) */}
//                                             <div className="grid grid-cols-2 gap-4">
//                                                 {/* Adults Dropdown */}
//                                                 <div>
//                                                     <label className="block text-gray-600 mb-1">Adults</label>
//                                                     <Select
//                                                         value={selectedAdults}
//                                                         onChange={setSelectedAdults}
//                                                         options={adultOptions}
//                                                         className="basic-single"
//                                                         classNamePrefix="select"
//                                                     />
//                                                 </div>

//                                                 {/* Children Dropdown */}
//                                                 <div>
//                                                     <label className="block text-gray-600 mb-1">Children</label>
//                                                     <Select
//                                                         value={selectedChildren}
//                                                         onChange={setSelectedChildren}
//                                                         options={childOptions}
//                                                         className="basic-single"
//                                                         classNamePrefix="select"
//                                                     />
//                                                 </div>
//                                             </div>



//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }


// export default HeroSection;


// "use client";
// import { useState, useRef, useEffect, Fragment } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js.js";
// import dynamic from 'next/dynamic';  // Import dynamic
// // import 'react-select/dist/react-select.css'; // Import the CSS (optional, but good practice)


// // Dynamically import react-select with ssr: false
// const Select = dynamic(() => import('react-select'), {
//     ssr: false,
//     loading: () => <p>Loading...</p>,  // Optional: Add a loading indicator
// });


// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1);
//     const [guests, setGuests] = useState({ adults: 2, children: 0 });
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);


//     //Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({ value: num, label: `${num} Room${num > 1 ? 's' : ''}` }));
//     const adultOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({ value: num, label: `${num} Adult${num > 1 ? 's' : ''}` }));
//     const childOptions = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10].map(num => ({ value: num, label: `${num} Child${num !== 1 ? 'ren' : ''}` }));

//     //State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedAdults, setSelectedAdults] = useState(adultOptions[1]);  // Defaults to 2 adults
//     const [selectedChildren, setSelectedChildren] = useState(childOptions[0]); // Defaults to 0 children

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


//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6]">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600] mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedAdults.value}
//                                             </span>
//                                             <span className="text-black font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedChildren.value}
//                                             </span>
//                                             <span className="text-black font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel with Improved Animation */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">

//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-600 mb-1">Number of Rooms</label>
//                                                 {Select && (  // Conditionally render to ensure Select is loaded
//                                                     <Select
//                                                         value={selectedRoom}
//                                                         onChange={setSelectedRoom}
//                                                         options={roomOptions}
//                                                         className="basic-single"
//                                                         classNamePrefix="select"
//                                                     />
//                                                 )}
//                                             </div>

//                                             {/* Room-Specific Guest Selection (using React Select) */}
//                                             <div className="grid grid-cols-2 gap-4">
//                                                 {/* Adults Dropdown */}
//                                                 <div>
//                                                     <label className="block text-gray-600 mb-1">Adults</label>
//                                                     {Select && (
//                                                         <Select
//                                                             value={selectedAdults}
//                                                             onChange={setSelectedAdults}
//                                                             options={adultOptions}
//                                                             className="basic-single"
//                                                             classNamePrefix="select"
//                                                         />
//                                                     )}
//                                                 </div>

//                                                 {/* Children Dropdown */}
//                                                 <div>
//                                                     <label className="block text-gray-600 mb-1">Children</label>
//                                                     {Select && (
//                                                         <Select
//                                                             value={selectedChildren}
//                                                             onChange={setSelectedChildren}
//                                                             options={childOptions}
//                                                             className="basic-single"
//                                                             classNamePrefix="select"
//                                                         />
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }


// export default HeroSection;

// "use client";

// import { useState, useRef, useEffect, Fragment } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js.js";
// import CustomDropdown from "./Dropdown.js"; // Import your custom component

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1);  // Use a number instead of an object for simplicity
//     const [guests, setGuests] = useState({ adults: 2, children: 0 });
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);


//     //Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6].map(num => ({ value: num, label: `${num} Room${num > 1 ? 's' : ''}` }));
//     const adultOptions = [1, 2, 3,].map(num => ({ value: num, label: `${num} Adult${num > 1 ? 's' : ''}` }));
//     const childOptions = [0, 1, 2, 3].map(num => ({ value: num, label: `${num} Child${num !== 1 ? 'ren' : ''}` }));


//     //State for react-select.  Initialize with options!
//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedAdults, setSelectedAdults] = useState(adultOptions[1]);  // Defaults to 2 adults
//     const [selectedChildren, setSelectedChildren] = useState(childOptions[0]); // Defaults to 0 children
//     const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children

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


//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6]">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600] mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedAdults.value}
//                                             </span>
//                                             <span className="text-black font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedChildren.value}
//                                             </span>
//                                             <span className="text-black font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel with Improved Animation */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">

//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <CustomDropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={setSelectedRoom}
//                                                 />
//                                             </div>


//                                             {/* Adults Dropdown */}
//                                             <div className="flex justify-between items-center gap-2">
//                                                 <span>
//                                                     Room 1
//                                                 </span>
//                                                 <div className="flex gap-4">
//                                                     <div>
//                                                         <label className="block text-gray-600 mb-1">Adults</label>
//                                                         <CustomDropdown
//                                                             options={adultOptions}
//                                                             value={selectedAdults}
//                                                             onChange={setSelectedAdults}
//                                                         />
//                                                     </div>

//                                                     {/* Children Dropdown */}
//                                                     <div>
//                                                         <label className="block text-gray-600 mb-1">Children</label>
//                                                         <CustomDropdown
//                                                             options={childOptions}
//                                                             value={selectedChildren}
//                                                             onChange={setSelectedChildren}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default HeroSection;

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js.js";
// import CustomDropdown from "./Dropdown.js";

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3].map((num) => ({
//         value: num,
//         label: `${num} Child${num !== 1 ? "ren" : ""}`,
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


//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6]">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600] mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         {guests.map((guest, index) => (
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {guest.adults}
//                                             </span>
//                                         ))}
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel with Improved Animation */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">

//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <CustomDropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {/* Rooms Section*/}
//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         {/* Adults Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <CustomDropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         {/* Children Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <CustomDropdown
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

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default HeroSection;

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import CustomDropdown from "./Dropdown.js";

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3].map((num) => ({
//         value: num,
//         label: `${num} Child${num !== 1 ? "ren" : ""}`,
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

//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6]">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600] mb-2">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalGuests}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel with Improved Animation */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">

//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <CustomDropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {/* Rooms Section*/}
//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         {/* Adults Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <CustomDropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         {/* Children Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <CustomDropdown
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

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default HeroSection;

// "use client";
// import { useState, useRef, useEffect } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import CustomDropdown from "./Dropdown.js";

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3].map((num) => ({
//         value: num,
//         label: `${num} Child${num !== 1 ? "" : ""}`,
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

//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6] lg:py-20 py-10">
//             {/* Main Content Container */}
//             <div className="relative z-0 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block">
//                             <h2 className="text-xl font-bold text-[#FF7600]">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Guest Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-black font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-black font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                                 {totalChildren}
//                                             </span>
//                                             <span className="text-black font-medium">Children</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Dropdown Panel */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-5/6 lg:w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white">
//                                         <div className="space-y-1.5">

//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <CustomDropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {/* Rooms Section*/}
//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         {/* Adults Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <CustomDropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         {/* Children Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <CustomDropdown
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

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default HeroSection;


// "use client";
// import { useState, useRef, useEffect, Children } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import CustomDropdown from "./Dropdown.js";

// const HeroSection = () => {
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
//     const childOptions = [0, 1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Child${num !== 1 ? "ren" : ""}`,
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

//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6] lg:py-28 py-16">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block md:space-y-6 space-y-4">
//                             <h2 className="text-xl font-bold text-[#FF7600]">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/*      */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Night Shows */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Night :
//                                 </label>    
//                             </div>

//                             <div>
//                                 {/* Guest Selection */}
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
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

//                                 {/* Dropdown Panel */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-5/6 lg:w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <CustomDropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {/* Rooms Section*/}
//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         {/* Adults Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <CustomDropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         {/* Children Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <CustomDropdown
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

//                             {/* Book Button */}
//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-orange-600 transform transition hover:-translate-y-1 focus:ring-4 focus:ring-orange-200">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

// "use client";
// import { useState, useRef, useEffect } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import CustomDropdown from "./Dropdown.js";
// import Link from "next/link.js";

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const [numberOfNights, setNumberOfNights] = useState(0); // State for number of nights


//     // Data for the dropdown menus
//     const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
//         value: num,
//         label: `${num} Room${num > 1 ? "s" : ""}`,
//     }));
//     const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Adult${num > 1 ? "s" : ""}`,
//     }));
//     const childOptions = [0, 1, 2, 3, 4, 5].map((num) => ({
//         value: num,
//         label: `${num} Child${num !== 1 ? "ren" : ""}`,
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

//         if (newDateRange && newDateRange.from && newDateRange.to) {
//             // Calculate the difference in days.  Need to handle timezones!
//             const startDate = new Date(newDateRange.from);
//             const endDate = new Date(newDateRange.to);

//             // Set the time to midnight to ensure whole-day differences.
//             startDate.setHours(0, 0, 0, 0);
//             endDate.setHours(0, 0, 0, 0);

//             const diffInTime = endDate.getTime() - startDate.getTime();
//             const diffInDays = diffInTime / (1000 * 3600 * 24);
//             setNumberOfNights(diffInDays);
//         } else {
//             setNumberOfNights(0); // Reset if no valid range
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

//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6] lg:py-28 py-16">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block md:space-y-6 space-y-4">
//                             <h2 className="text-xl font-bold text-[#FF7600]">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                                 Sahajanand
//                                 <span className="block text-[#FF7600]">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg font-medium leading-relaxed">
//                             Experience tranquility and rejuvenation at our sacred ashram.
//                             Begin your journey towards inner peace and holistic wellness.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             {/* Night Shows */}
//                             <div className="flex items-center gap-2">
//                                 <label className="block text-prime font-medium">
//                                     Night :
//                                 </label>
//                                 <span className="size-6 rounded-full bg-[#FF7600] text-white flex items-center justify-center">
//                                     {numberOfNights}
//                                 </span>
//                             </div>

//                             <div>
//                                 {/* Guest Selection */}
//                                 <label className="block text-gray-700 font-medium mb-2">
//                                     Guest Information
//                                 </label>
//                                 <div
//                                     className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
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

//                                 {/* Dropdown Panel */}
//                                 <div
//                                     ref={dropdownRef} // Add the ref here
//                                     className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-5/6 lg:w-2/5
//                                         ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                     `}
//                                     style={{ zIndex: 50 }}
//                                 >
//                                     <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
//                                         <div className="space-y-1.5">
//                                             {/* Number of Rooms Dropdown */}
//                                             <div>
//                                                 <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
//                                                 <CustomDropdown
//                                                     options={roomOptions}
//                                                     value={selectedRoom}
//                                                     onChange={handleRoomChange}
//                                                 />
//                                             </div>


//                                             {/* Rooms Section*/}
//                                             {guests.map((guest, roomIndex) => (
//                                                 <div key={roomIndex} className="flex justify-between items-center gap-2">
//                                                     <span className="block text-gray-700 font-medium mb-1 text-sm">
//                                                         Room {roomIndex + 1}
//                                                     </span>
//                                                     <div className="flex gap-4">
//                                                         {/* Adults Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                             <CustomDropdown
//                                                                 options={adultOptions}
//                                                                 value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
//                                                                 onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                             />
//                                                         </div>

//                                                         {/* Children Dropdown */}
//                                                         <div>
//                                                             <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                             <CustomDropdown
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

//                             {/* Book Button */}
//                             <Link href='/your-booking-detail' >
//                                 <button className="w-full bg-orange-500 text-white py-4 rounded-md font-medium text-lg capitalize">
//                                     Book Now
//                                 </button>
//                             </Link>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

//Herosection.js
"use client";

import { useState, useRef, useEffect } from "react";
import { DatePickerWithRange } from "../../components/DatePickerWithRange.js"; //Correct Path
import CustomDropdown from "./Dropdown.js"; //Correct Path
import { useRouter } from 'next/navigation'; // Import useRouter

const HeroSection = () => {
    const [dateRange, setDateRange] = useState(null);
    const [rooms, setRooms] = useState(1); // Number of rooms
    const [guests, setGuests] = useState([
        { adults: 2, children: 0 }, // Default for 1 room
    ]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [numberOfNights, setNumberOfNights] = useState(0); // State for number of nights
    const [isBooking, setIsBooking] = useState(false); // Loading state for Book Now button

    const router = useRouter(); // Use useRouter hook

    // Data for the dropdown menus
    const roomOptions = [1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => ({
        value: num,
        label: `${num} Room${num > 1 ? "s" : ""}`,
    }));
    const adultOptions = [1, 2, 3, 4, 5].map((num) => ({
        value: num,
        label: `${num} Adult${num > 1 ? "s" : ""}`,
    }));
    const childOptions = [0, 1, 2, 3, 4, 5].map((num) => ({
        value: num,
        label: `${num} Child${num !== 1 ? "ren" : ""}`,
    }));

    // State for react-select.  Initialize with options!
    const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
    const [selectedGuest, setSelectedGuest] = useState(); // Default to 0 children

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
            // Calculate the difference in days.  Need to handle timezones!
            const startDate = new Date(newDateRange.from);
            const endDate = new Date(newDateRange.to);

            // Set the time to midnight to ensure whole-day differences.
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(0, 0, 0, 0);

            const diffInTime = endDate.getTime() - startDate.getTime();
            const diffInDays = diffInTime / (1000 * 3600 * 24);
            setNumberOfNights(diffInDays);
        } else {
            setNumberOfNights(0); // Reset if no valid range
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

    const handleBookNow = async () => {
        setIsBooking(true); // Start loading animation

        // Simulate a booking process (replace with your actual booking logic)
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

        const bookingData = {
            date: dateRange,
            numberOfNights,
            totalAdults,
            totalChildren,
            rooms: selectedRoom.value,
            guests,
        };
        localStorage.setItem('bookingData', JSON.stringify(bookingData));

        setIsBooking(false); // End loading animation

        // Redirect to the booking details page
        router.push('/your-booking-detail');
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FDF5E6] py-10">
            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Side - Welcome Text */}
                <div className="px-4">
                    <div className="lg:text-left text-center space-y-5">
                        <div className="inline-block space-y-4">
                            <h2 className="text-xl font-bold text-main">Welcome to</h2>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Sahajanand
                                <span className="block text-main">Wellness</span>
                            </h1>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            At Sahajanand Wellness, we believe true health is a harmonious blend of mind, body, and spirit. Rooted in ancient wisdom and powered by modern science, our mission is to guide you on a journey toward radiant well-being and Sahajanand—the effortless joy that springs from living in balance.
                        </p>
                        <div className="flex gap-4 items-center lg:justify-start justify-center">
                            <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
                            <span className="font-medium italic">"Wellness - The Best Gift to Yourself"</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Booking Form */}
                <div className="px-4">
                    <div className="bg-white rounded-xl border borer-black md:p-6 p-3 text-black">
                        <div className="space-y-6">
                            {/* Date Selection */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Select Your Stay Duration
                                </label>
                                <DatePickerWithRange onChange={handleDateRangeChange} />
                            </div>

                            {/* Night Shows */}
                            <div className="flex gap-2">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Night : 
                                </label>
                                <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
                                    {numberOfNights}
                                </span>
                            </div>

                            <div>
                                {/* Guest Selection */}
                                <label className="block text-gray-700 font-medium mb-2">
                                    Guest Information
                                </label>
                                <div
                                    className="border border-gray-300 p-2.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <div className="flex gap-4 items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
                                                {selectedRoom.value}
                                            </span>
                                            <span className="text-prime font-medium">Room</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
                                                {totalAdults}
                                            </span>
                                            <span className="text-prime font-medium">Adults</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
                                                {totalChildren}
                                            </span>
                                            <span className="text-prime font-medium">Children</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Dropdown Panel */}
                                <div
                                    ref={dropdownRef} // Add the ref here
                                    className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-md rounded-md w-5/6 lg:w-2/5
                                        ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
                                    `}
                                    style={{ zIndex: 50 }}
                                >
                                    <div className="mt-3 p-2.5 border border-gray-300 rounded-md bg-white" >
                                        <div className="space-y-1.5">
                                            {/* Number of Rooms Dropdown */}
                                            <div>
                                                <label className="block text-gray-700 font-medium mb-1 text-sm">Number of Rooms</label>
                                                <CustomDropdown
                                                    options={roomOptions}
                                                    value={selectedRoom}
                                                    onChange={handleRoomChange}
                                                />
                                            </div>


                                            {/* Rooms Section*/}
                                            {guests.map((guest, roomIndex) => (
                                                <div key={roomIndex} className="flex justify-between items-center gap-2">
                                                    <span className="block text-gray-700 font-medium mb-1 text-sm">
                                                        Room {roomIndex + 1}
                                                    </span>
                                                    <div className="flex gap-4">
                                                        {/* Adults Dropdown */}
                                                        <div>
                                                            <label className="block text-gray-600 mb-1 text-xs">Adults</label>
                                                            <CustomDropdown
                                                                options={adultOptions}
                                                                value={adultOptions.find(opt => opt.value === guest.adults)} // Find the right option
                                                                onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
                                                            />
                                                        </div>

                                                        {/* Children Dropdown */}
                                                        <div>
                                                            <label className="block text-gray-600 mb-1 text-xs">Children</label>
                                                            <CustomDropdown
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

                            {/* Book Button */}
                            <button
                                onClick={handleBookNow} // Call the book now handler
                                className={`w-full bg-orange-500 text-white py-4 rounded-md font-medium text-lg ${isBooking ? 'opacity-60 cursor-not-allowed' : ''}`}
                                disabled={isBooking}
                            >
                                {isBooking ? 'Booking...' : 'Book Now'}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;


