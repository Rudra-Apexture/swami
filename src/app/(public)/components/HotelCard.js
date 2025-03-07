//HotelCard.js

"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component
import { IoCameraOutline } from 'react-icons/io5';
import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
import RoomCarousel from './RoomCarousel';
import { Tooltip } from 'react-tooltip';
import { FaArrowRightLong } from "react-icons/fa6";
import slugify from 'slugify'; // Import slugify

const HotelCard = ({ limit = null }) => {  //Accept the limit prop and make its default null
    const [showSlider, setShowSlider] = useState(false);
    const sliderRef = useRef(null);

    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };

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
            description: "Experience spiritual tranquility in our premium VidhyaDaan AC accommodation, designed for devotees seeking comfort during their sacred journey.",
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
            description: "The AannaDan Family Room provides spacious accommodations ideal for families or small groups seeking a peaceful spiritual retreat together.",
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
            description: "The Aarti Donation Room offers premium accommodations for devotees who wish to contribute to the sacred evening ritual tradition.",
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


    return (
        <>
            {roomsData.slice(0, limit ? limit : roomsData.length).map((room) => {  // Apply the slice based on the limit prop
                // Generate a slug from the room name
                const slug = slugify(room.name, { lower: true });
                return (
                    <div key={room.id} className='flex flex-col border border-gray-300 shadow-md rounded-2xl'>
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
                                            <h2 className="text-gray-800 lg:text-xl text-lg font-medium">{room.name || "Ashram Non AC Rooms"}</h2>
                                        </div>
                                        <div className="text-right">
                                            <p className="lg:text-2xl text-xl font-bold text-main">₹{room.price || "1200"}</p>
                                            <p className="text-gray-700 text-sm">Per Night</p>
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
                                        <Link href={`/rooms/${slug}`}>
                                            <button className="relative group bg-main text-white md:px-6 px-4 py-1.5 rounded-sm font-semibold">
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Image Slider (Conditionally Rendered) */}
                        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${showSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            {showSlider && (
                                <div ref={sliderRef} className="relative w-3/4 h-3/4">
                                    <RoomCarousel images={room.images} onClose={toggleSlider} />
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default HotelCard;