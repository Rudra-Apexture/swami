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

// //Herosection.js-main
// "use client";

// import { useState, useRef, useEffect } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js"; //Correct Path
// import CustomDropdown from "./Dropdown.js"; //Correct Path
// import { useRouter } from 'next/navigation'; // Import useRouter
// import { FaRegCalendarMinus } from "react-icons/fa";
// import { FaRegMoon } from "react-icons/fa";
// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1); // Number of rooms
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 }, // Default for 1 room
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const [numberOfNights, setNumberOfNights] = useState(0); // State for number of nights
//     const [isBooking, setIsBooking] = useState(false); // Loading state for Book Now button

//     const router = useRouter(); // Use useRouter hook

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

//     const handleBookNow = async () => {
//         setIsBooking(true); // Start loading animation

//         // Simulate a booking process (replace with your actual booking logic)
//         await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

//         const bookingData = {
//             date: dateRange,
//             numberOfNights,
//             totalAdults,
//             totalChildren,
//             rooms: selectedRoom.value,
//             guests,
//         };
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         setIsBooking(false); // End loading animation

//         // Redirect to the booking details page
//         router.push('/your-booking-detail');
//     };

//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center bg-orange-50 py-10">
//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side - Welcome Text */}
//                 <div className="px-4">
//                     <div className="lg:text-left text-center space-y-5">
//                         <div className="inline-block space-y-4">
//                             <h2 className="text-xl font-bold text-main capitalize">Welcome to</h2>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-prime leading-tight">
//                                 Sahajanand
//                                 <span className="bg-gradient-to-r block from-orange-500 to-amber-500 bg-clip-text text-transparent">Wellness</span>
//                             </h1>
//                         </div>
//                         <p className="text-gray-700 text-lg leading-relaxed">
//                             At Sahajanand Wellness, we believe true health is a harmonious blend of mind, body, and spirit. Rooted in ancient wisdom and powered by modern science, our mission is to guide you on a journey toward radiant well-being and Sahajanand—the effortless joy that springs from living in balance.
//                         </p>
//                         <div className="flex gap-4 items-center lg:justify-start justify-center">
//                             <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
//                             <span className="font-medium italic text-prime">"Wellness - The Best Gift to Yourself"</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="px-4">
//                     <div className="bg-white rounded-xl border borer-black md:p-6 p-3">
//                         <div className="space-y-6">
//                             {/* Date Selection */}
//                             <div>
//                                 <label className="flex items-center gap-2 text-[#3D3D3D] font-medium text-base mb-3">
//                                     <FaRegCalendarMinus className="text-main size-5" />
//                                     Select Your Stay Duration
//                                 </label>
//                                 <DatePickerWithRange onChange={handleDateRangeChange} />
//                             </div>

//                             <div className="bg-orange-50 p-3.5 rounded-lg flex items-center justify-between">
//                                 <div className="flex items-center gap-6">
//                                     <FaRegMoon className="size-5 text-main" />
//                                     <span className="text-[#3D3D3D] font-medium">Duration : </span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
//                                         {numberOfNights}
//                                     </span>
//                                     <span className="block text-prime font-medium">Night{numberOfNights !== 1 ? 's' : ''}</span>
//                                 </div>
//                             </div>

//                             <div>
//                                 {/* Guest Selection */}
//                                 <div className="flex gap-2">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-main
//                                 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                     </svg>
//                                     <label className="block text-[#3D3D3D] font-medium text-base mb-3">
//                                         Guest Information
//                                     </label>
//                                 </div>
//                                 <div
//                                     className="border border-gray-300 p-3.5 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
//                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                 >
//                                     <div className="flex gap-4 items-center">
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
//                                                 {selectedRoom.value}
//                                             </span>
//                                             <span className="text-prime font-medium">Room</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
//                                                 {totalAdults}
//                                             </span>
//                                             <span className="text-prime font-medium">Adults</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
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
//                             <button
//                                 onClick={handleBookNow} // Call the book now handler
//                                 className={`w-full bg-orange-500 text-white py-4 rounded-md font-medium text-lg ${isBooking ? 'opacity-60 cursor-not-allowed' : ''}`}
//                                 disabled={isBooking}
//                             >
//                                 {isBooking ? 'Booking...' : 'Book Now'}
//                             </button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

"use client";

import { useState, useRef, useEffect } from "react";
import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
import CustomDropdown from "./Dropdown.js";
import { useRouter } from 'next/navigation';
import { FaRegCalendarMinus, FaRegMoon, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";


const HeroSection = () => {
    const [dateRange, setDateRange] = useState(null);
    const [rooms, setRooms] = useState(1);
    const [guests, setGuests] = useState([
        { adults: 2, children: 0 },
    ]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [numberOfNights, setNumberOfNights] = useState(0);
    const [isBooking, setIsBooking] = useState(false);

    const router = useRouter();

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

    const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

    const [specialRequests, setSpecialRequests] = useState("");
    const [preferredLocation, setPreferredLocation] = useState(""); // New state
    const [newsletterSubscription, setNewsletterSubscription] = useState(false);

    const handleRoomChange = (roomOption) => {
        const newRoomCount = roomOption.value;
        setSelectedRoom(roomOption);

        setGuests((prevGuests) => {
            const newGuests = [...prevGuests];
            while (newGuests.length < newRoomCount) {
                newGuests.push({ adults: 2, children: 0 });
            }
            newGuests.length = newRoomCount;
            return newGuests;
        });
    };

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
            const startDate = new Date(newDateRange.from);
            const endDate = new Date(newDateRange.to);

            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(0, 0, 0, 0);

            const diffInTime = endDate.getTime() - startDate.getTime();
            const diffInDays = diffInTime / (1000 * 3600 * 24);
            setNumberOfNights(diffInDays);
        } else {
            setNumberOfNights(0);
        }
    };

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
    }, [dropdownRef]);

    const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);
    const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);
    const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

    const handleBookNow = async () => {
        setIsBooking(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const bookingData = {
            date: dateRange,
            numberOfNights,
            totalAdults,
            totalChildren,
            rooms: selectedRoom.value,
            guests,
            specialRequests,
            preferredLocation,
            newsletterSubscription,
        };
        localStorage.setItem('bookingData', JSON.stringify(bookingData));

        setIsBooking(false);

        router.push('/your-booking-detail');
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-orange-50 py-10">
            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Side - Welcome Text */}
                <div className="px-4">
                    <div className="lg:text-left text-center space-y-6">
                        <div className="inline-block space-y-4">
                            <h2 className="text-xl font-bold text-main capitalize">Welcome to</h2>
                            <h1 className="text-4xl lg:text-5xl font-bold text-prime leading-tight">
                                Sahajanand
                                <span className="bg-gradient-to-r block from-orange-500 to-amber-500 bg-clip-text text-transparent">Wellness</span>
                            </h1>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            At Sahajanand Wellness, we believe true health is a harmonious blend of mind, body, and spirit. Rooted in ancient wisdom and powered by modern science, our mission is to guide you on a journey toward radiant well-being and Sahajanand—the effortless joy that springs from living in balance.
                        </p>
                        <div className="flex gap-4 items-center lg:justify-start justify-center">
                            <div className="h-1 lg:w-20 w-10 bg-orange-500"></div>
                            <span className="font-medium italic text-prime">"Wellness - The Best Gift to Yourself"</span>
                        </div>
                    </div>
                    <div className="flex lg:justify-start justify-center gap-2 mt-6">
                        <div className="flex items-center bg-white border border-slate-100 lg:px-4 px-2 py-3 rounded-md shadow-sm">
                            <div className="p-2 rounded-full bg-main mr-3">
                                <FaPlus className="text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Meditation</p>
                                <p className="font-medium text-gray-800 text-nowrap">Daily Sessions</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white lg:px-4 py-3 border border-slate-100 px-2 rounded-md shadow-sm">
                            <div className="p-2 rounded-full bg-main mr-3">
                                <FaRegClock className="text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Yoga</p>
                                <p className="font-medium text-gray-800 text-nowrap">Expert Guidance</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Booking Form */}
                <div className="px-4">
                    <div className="bg-white rounded-xl border borer-black md:p-6 p-3">
                        <div className="space-y-4">
                            {/* Date Selection */}
                            <div>
                                <label className="flex items-center gap-2 text-[#3D3D3D] font-medium text-base mb-3">
                                    <FaRegCalendarMinus className="text-main size-5" />
                                    Select Your Stay Duration
                                </label>
                                <DatePickerWithRange onChange={handleDateRangeChange} />
                            </div>

                            <div className="bg-orange-50 p-3 rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <FaRegMoon className="size-5 text-main" />
                                    <span className="text-[#3D3D3D] font-medium">Duration : </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-6 rounded-full bg-main text-white flex items-center justify-center">
                                        {numberOfNights}
                                    </span>
                                    <span className="block text-prime font-medium">Night{numberOfNights !== 1 ? 's' : ''}</span>
                                </div>
                            </div>

                            <div>
                                {/* Guest Selection */}
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-main
                                " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <label className="block text-[#3D3D3D] font-medium text-base mb-3">
                                        Guest Information
                                    </label>
                                </div>
                                <div
                                    className="border border-gray-300 p-3 z-20 rounded-md cursor-pointer hover:bg-[#f5f5f5] transition"
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
                                    ref={dropdownRef}
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
                                                                value={adultOptions.find(opt => opt.value === guest.adults)}
                                                                onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
                                                            />
                                                        </div>

                                                        {/* Children Dropdown */}
                                                        <div>
                                                            <label className="block text-gray-600 mb-1 text-xs">Children</label>
                                                            <CustomDropdown
                                                                options={childOptions}
                                                                value={childOptions.find(opt => opt.value === guest.children)}
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

                            {/* New attractive fields */}
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2   ">
                                <div>
                                    <label className="flex items-center gap-2 text-[#3D3D3D] font-medium text-base mb-3">
                                        <FaStar className="text-main size-5" />
                                        Special Requests
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Dietary needs, allergies, etc."
                                        value={specialRequests}
                                        onChange={(e) => setSpecialRequests(e.target.value)}
                                        className="w-full border rounded-md p-3"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-[#3D3D3D] font-medium text-base mb-3">
                                        <FaMapMarkerAlt className="text-main size-5" />
                                        Preferred Location
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="City, landmark, or nearby attraction"
                                        value={preferredLocation}
                                        onChange={(e) => setPreferredLocation(e.target.value)}
                                        className="w-full border rounded-md p-3"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        checked={newsletterSubscription}
                                        onChange={(e) => setNewsletterSubscription(e.target.checked)}
                                        className="mr-2 text-orange-500 accent-main"
                                    />
                                    <label htmlFor="newsletter" className="text-[#3D3D3D] text-nowrap font-medium">
                                        Subscribe to our Newsletter for exclusive deals!
                                    </label>
                                </div>
                            </div>

                            {/* Book Button */}
                            <button
                                onClick={handleBookNow}
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



// "use client";

// import { useState, useRef, useEffect } from "react";
// import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
// import CustomDropdown from "./Dropdown.js";
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//     const [dateRange, setDateRange] = useState(null);
//     const [rooms, setRooms] = useState(1);
//     const [guests, setGuests] = useState([
//         { adults: 2, children: 0 },
//     ]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const [numberOfNights, setNumberOfNights] = useState(0);
//     const [isBooking, setIsBooking] = useState(false);
//     const [activeTab, setActiveTab] = useState('booking'); // 'booking' or 'about'

//     const router = useRouter();

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

//     const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
//     const [selectedGuest, setSelectedGuest] = useState();

//     const handleRoomChange = (roomOption) => {
//         const newRoomCount = roomOption.value;
//         setSelectedRoom(roomOption);

//         setGuests((prevGuests) => {
//             const newGuests = [...prevGuests];
//             while (newGuests.length < newRoomCount) {
//                 newGuests.push({ adults: 2, children: 0 });
//             }
//             newGuests.length = newRoomCount;
//             return newGuests;
//         });
//     };

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
//             const startDate = new Date(newDateRange.from);
//             const endDate = new Date(newDateRange.to);

//             startDate.setHours(0, 0, 0, 0);
//             endDate.setHours(0, 0, 0, 0);

//             const diffInTime = endDate.getTime() - startDate.getTime();
//             const diffInDays = diffInTime / (1000 * 3600 * 24);
//             setNumberOfNights(diffInDays);
//         } else {
//             setNumberOfNights(0);
//         }
//     };

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
//     }, [dropdownRef]);

//     const totalGuests = guests.reduce((sum, guest) => sum + guest.adults + guest.children, 0);
//     const totalAdults = guests.reduce((sum, guest) => sum + guest.adults, 0);
//     const totalChildren = guests.reduce((sum, guest) => sum + guest.children, 0);

//     const handleBookNow = async () => {
//         setIsBooking(true);
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         const bookingData = {
//             date: dateRange,
//             numberOfNights,
//             totalAdults,
//             totalChildren,
//             rooms: selectedRoom.value,
//             guests,
//         };
//         localStorage.setItem('bookingData', JSON.stringify(bookingData));

//         setIsBooking(false);
//         router.push('/your-booking-detail');
//     };

//     return (
//         <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">

//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-6xl px-4 grid lg:grid-cols-5 gap-8 items-center mb-16">
//                 {/* Left Side - Welcome Text */}
//                 <div className="lg:col-span-2 space-y-8">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="space-y-6"
//                     >
//                         <div className="space-y-2">
//                             <div className="flex items-center">
//                                 <div className="h-1 w-12 bg-amber-500 mr-4"></div>
//                                 <h2 className="text-lg font-medium text-amber-600">Welcome To</h2>
//                             </div>
//                             <h1 className="text-4xl lg:text-5xl font-bold text-prime leading-tight">
//                                 SAHAJANAND <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"> WELLNESS </span>
//                             </h1>
//                         </div>

//                         <p className="text-gray-600 text-lg leading-relaxed">
//                             Discover the perfect balance of ancient wisdom and modern wellness practices. Our ashram offers a sanctuary for those seeking physical rejuvenation, mental clarity, and spiritual growth.
//                         </p>

//                         <div className="flex flex-wrap gap-4 mt-6">
//                             <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm">
//                                 <div className="p-2 rounded-full bg-amber-100 mr-3">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-500">Meditation</p>
//                                     <p className="font-medium text-gray-800">Daily Sessions</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm">
//                                 <div className="p-2 rounded-full bg-amber-100 mr-3">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-500">Yoga</p>
//                                     <p className="font-medium text-gray-800">Expert Guidance</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Right Side - Booking Form */}
//                 <div className="lg:col-span-3">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="bg-white rounded-2xl shadow-xl overflow-hidden"
//                     >
//                         {/* Tabs */}
//                         <div className="flex border-b">
//                             <button
//                                 className={`flex-1 py-4 text-center font-medium transition-colors ${activeTab === 'booking' ? 'text-amber-600 border-b-2 border-amber-500' : 'text-gray-500 hover:text-amber-600'}`}
//                                 onClick={() => setActiveTab('booking')}
//                             >
//                                 Book Your Stay
//                             </button>
//                             <button
//                                 className={`flex-1 py-4 text-center font-medium transition-colors ${activeTab === 'about' ? 'text-amber-600 border-b-2 border-amber-500' : 'text-gray-500 hover:text-amber-600'}`}
//                                 onClick={() => setActiveTab('about')}
//                             >
//                                 About Ashram
//                             </button>
//                         </div>

//                         {activeTab === 'booking' ? (
//                             <div className="p-6 space-y-6">
//                                 {/* Date Selection */}
//                                 <div>
//                                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                         </svg>
//                                         Select Your Stay Dates
//                                     </label>
//                                     <DatePickerWithRange onChange={handleDateRangeChange} />
//                                 </div>

//                                 {/* Night Indicator */}
//                                 <div className="bg-amber-50 p-4 rounded-lg flex items-center justify-between">
//                                     <div className="flex items-center">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                                         </svg>
//                                         <span className="text-gray-700 font-medium">Duration:</span>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <span className="font-bold text-amber-800 text-lg mr-2">{numberOfNights}</span>
//                                         <span className="text-gray-600">Night{numberOfNights !== 1 ? 's' : ''}</span>
//                                     </div>
//                                 </div>

//                                 {/* Guest Selection */}
//                                 <div>
//                                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                         </svg>
//                                         Guest Information
//                                     </label>

//                                     <div
//                                         className="border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-amber-50 transition flex justify-between items-center"
//                                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                                     >
//                                         <div className="flex gap-4 items-center">
//                                             <div className="flex items-center gap-2">
//                                                 <span className="size-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-medium">
//                                                     {selectedRoom.value}
//                                                 </span>
//                                                 <span className="text-gray-700">Room{selectedRoom.value > 1 ? 's' : ''}</span>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <span className="size-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-medium">
//                                                     {totalAdults}
//                                                 </span>
//                                                 <span className="text-gray-700">Adult{totalAdults > 1 ? 's' : ''}</span>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <span className="size-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-medium">
//                                                     {totalChildren}
//                                                 </span>
//                                                 <span className="text-gray-700">Child{totalChildren !== 1 ? 'ren' : ''}</span>
//                                             </div>
//                                         </div>

//                                         <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </div>

//                                     {/* Dropdown Panel */}
//                                     <div
//                                         ref={dropdownRef}
//                                         className={`transform transition-all duration-300 bg-white ease-in-out origin-top absolute shadow-lg rounded-lg w-5/6 lg:w-2/5 border border-gray-200
//                                             ${isDropdownOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'}
//                                         `}
//                                         style={{ zIndex: 50 }}
//                                     >
//                                         <div className="p-4 bg-white rounded-lg">
//                                             <div className="space-y-4">
//                                                 {/* Number of Rooms Dropdown */}
//                                                 <div>
//                                                     <label className="block text-gray-700 font-medium mb-2 text-sm">Number of Rooms</label>
//                                                     <CustomDropdown
//                                                         options={roomOptions}
//                                                         value={selectedRoom}
//                                                         onChange={handleRoomChange}
//                                                     />
//                                                 </div>

//                                                 <div className="border-t border-gray-200 pt-4">
//                                                     <h3 className="font-medium text-gray-800 mb-2">Room Configuration</h3>
//                                                     {/* Rooms Section*/}
//                                                     {guests.map((guest, roomIndex) => (
//                                                         <div key={roomIndex} className="mb-4 p-3 bg-amber-50 rounded-lg">
//                                                             <div className="flex justify-between items-center mb-3">
//                                                                 <span className="font-medium text-amber-800">
//                                                                     Room {roomIndex + 1}
//                                                                 </span>
//                                                             </div>
//                                                             <div className="flex gap-4">
//                                                                 {/* Adults Dropdown */}
//                                                                 <div className="flex-1">
//                                                                     <label className="block text-gray-600 mb-1 text-xs">Adults</label>
//                                                                     <CustomDropdown
//                                                                         options={adultOptions}
//                                                                         value={adultOptions.find(opt => opt.value === guest.adults)}
//                                                                         onChange={(adultOption) => handleGuestChange(roomIndex, "adults", adultOption)}
//                                                                     />
//                                                                 </div>

//                                                                 {/* Children Dropdown */}
//                                                                 <div className="flex-1">
//                                                                     <label className="block text-gray-600 mb-1 text-xs">Children</label>
//                                                                     <CustomDropdown
//                                                                         options={childOptions}
//                                                                         value={childOptions.find(opt => opt.value === guest.children)}
//                                                                         onChange={(childOption) => handleGuestChange(roomIndex, "children", childOption)}
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>

//                                                 <button
//                                                     className="w-full bg-amber-50 text-amber-600 font-medium py-2 rounded-lg hover:bg-amber-100 transition"
//                                                     onClick={() => setIsDropdownOpen(false)}
//                                                 >
//                                                     Done
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Book Button */}
//                                 <button
//                                     onClick={handleBookNow}
//                                     className={`w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-lg font-medium text-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 ${isBooking ? 'opacity-60 cursor-not-allowed' : ''}`}
//                                     disabled={isBooking}
//                                 >
//                                     {isBooking ? (
//                                         <div className="flex items-center justify-center">
//                                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Booking...
//                                         </div>
//                                     ) : 'Reserve Your Stay'}
//                                 </button>

//                                 {/* Benefits */}
//                                 <div className="flex flex-wrap justify-between text-sm text-gray-600 pt-2">
//                                     <div className="flex items-center mb-2">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         Free Cancellation
//                                     </div>
//                                     <div className="flex items-center mb-2">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         Daily Meditation
//                                     </div>
//                                     <div className="flex items-center mb-2">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         Organic Meals
//                                     </div>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="p-6 space-y-4">
//                                 <h3 className="text-xl font-bold text-gray-800">About Sahajanand Ashram</h3>
//                                 <p className="text-gray-600">
//                                     At Sahajanand Wellness, we believe true health is a harmonious blend of mind, body, and spirit. Rooted in ancient wisdom and powered by modern science, our mission is to guide you on a journey toward radiant well-being and Sahajanand—the effortless joy that springs from living in balance.
//                                 </p>
//                                 <div className="grid grid-cols-2 gap-4 mt-4">
//                                     <div className="bg-amber-50 p-4 rounded-lg">
//                                         <h4 className="font-medium text-amber-800 mb-2">Daily Schedule</h4>
//                                         <ul className="text-sm text-gray-600 space-y-1">
//                                             <li>5:00 AM - Morning Meditation</li>
//                                             <li>7:00 AM - Yoga</li>
//                                             <li>8:30 AM - Breakfast</li>
//                                             <li>10:00 AM - Wellness Activities</li>
//                                         </ul>
//                                     </div>
//                                     <div className="bg-amber-50 p-4 rounded-lg">
//                                         <h4 className="font-medium text-amber-800 mb-2">Amenities</h4>
//                                         <ul className="text-sm text-gray-600 space-y-1">
//                                             <li>Meditation Hall</li>
//                                             <li>Yoga Studio</li>
//                                             <li>Organic Garden</li>
//                                             <li>Quiet Retreat Spaces</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <button
//                                     className="w-full bg-amber-100 text-amber-600 font-medium py-3 rounded-lg hover:bg-amber-200 transition mt-4"
//                                     onClick={() => setActiveTab('booking')}
//                                 >
//                                     Book Your Stay Now
//                                 </button>
//                             </div>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;








