
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import RoomCarousel from '../../(public)/components/RoomCarousel';
import slugify from 'slugify';
import { DatePickerWithRange } from "../../components/DatePickerWithRange.js";
import Dropdown from '@/app/(public)/components/Dropdown';


const RoomDetails = () => {

    const [dateRange, setDateRange] = useState(null);
    const [rooms, setRooms] = useState(1); // Number of rooms
    const [guests, setGuests] = useState([
        { adults: 2, children: 0 }, // Default for 1 room
    ]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <div className="container mx-auto p-4 mb-10">
            {/* Back button */}
            <Link href="/rooms">
                <button className="flex items-center gap-2 text-main hover:text-main-dark transition duration-300 mb-6">
                    <IoArrowBack /> Back to All Rooms
                </button>
            </Link>

            <div className="grid md:grid-cols-3 gap-6">
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
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
                        <p className="text-gray-700">{room.description}</p>
                    </div>

                    {/* Room amenities */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {room.facilities ? (
                                Object.entries(room.facilities)
                                    .filter(([key, value]) => value === true)
                                    .map(([key]) => (
                                        facilityIcons[key] && (
                                            <div key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                                                <div
                                                    className="text-white bg-prime p-2 rounded-sm size-8 flex items-center justify-center"
                                                    data-tooltip-id={`tooltip-detail-${key}`}
                                                    data-tooltip-content={facilityIcons[key].label}
                                                >
                                                    {facilityIcons[key].icon}
                                                </div>
                                                <Tooltip id={`tooltip-detail-${key}`} place="top" />
                                                <span className="text-gray-700">{facilityIcons[key].label}</span>
                                            </div>
                                        )
                                    ))
                            ) : (
                                <p>No facilities information available</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Booking form */}
                {/* <div className="md:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
                        <p className="text-gray-600 mb-4">{room.details}</p>

                        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                            <span className="text-gray-700 font-medium">Price per night</span>
                            <span className="text-3xl font-bold text-main">₹{room.price}</span>
                        </div>

                        <div className='space-y-2'>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Select Your Stay Duration
                                </label>
                                <DatePickerWithRange onChange={handleDateRangeChange} />
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
                                <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="md:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 sticky top-22">
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">{room.name}</h1>
                        <p className="text-gray-600 mb-4">{room.details}</p>

                        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                            <span className="text-gray-700 font-medium">Price per night</span>
                            <span className="text-3xl font-bold text-main">₹{room.price}</span>
                        </div>

                        <div className='space-y-2'>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Select Your Stay Duration
                                </label>
                                <DatePickerWithRange onChange={handleDateRangeChange} />
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
                                                <div key={guest.id} className="flex justify-between items-center gap-2">
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
                                <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium text-lg">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Slider Modal */}
            {showSlider && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
                    <div className="relative w-4/5 h-4/5">
                        <RoomCarousel
                            images={room.images}
                            onClose={closeImageSlider}
                            initialSlide={selectedImageIndex}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomDetails;