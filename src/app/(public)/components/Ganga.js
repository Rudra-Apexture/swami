
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa'; // Import play icon

import { IoClose } from "react-icons/io5";
import { Button } from 'react-day-picker';


const GangaSection = () => {
    const [videoVisible, setVideoVisible] = useState(false);
    const modalRef = useRef(null);

    const toggleVideoVisibility = () => {
        setVideoVisible(!videoVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setVideoVisible(false);
            }
        };

        if (videoVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [videoVisible]);

    return (
        <div className="container mx-auto lg:py-12 py-6 px-4">
            <div className="flex flex-col lg:flex-row gap-4 rounded-2xl overflow-hidden">

                {/* Image Section */}
                <div className="relative lg:w-1/2 rounded-2xl overflow-hidden">
                    <Image
                        src="/assets/image/ganga-ghat.jpg" // Replace with your image path
                        alt="Ganga Maiya"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full rounded-2xl"
                        priority
                    />

                    {/* Play Button Overlay */}
                    <button
                        onClick={toggleVideoVisibility}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 bg-opacity-75 hover:bg-opacity-90 text-white rounded-full lg:p-4 p-2 focus:outline-none transition-colors duration-300"
                        aria-label="Play Video"
                    >
                        <FaPlayCircle size={28} />
                    </button>
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 p-0 lg:p-8 flex flex-col justify-center">
                    <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Ganga <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Maiya</span>
                    </h2>
                    <p className="text-prime leading-relaxed font-medium">
                        The sprawling Ganga basin, an area of 860,000 sq km spread across 11 states,
                        is the world's most populous river basin. It is home to more than 600 million
                        Indians, close to half the country's population; and over 40 percent of the
                        country's GDP is generated in this region.
                    </p>
                    <p className="text-prime leading-relaxed font-medium mt-4">
                        The basin provides more than one-third of India's surface water, 90 percent of
                        which is used for irrigation. Paradoxically, this fertile region is also home to
                        some of the poorest sections of India's population, with more than 200 million
                        people living below the national poverty line.
                    </p>
                </div>
            </div>

            {/* Video Modal */}
            {videoVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm bg-opacity-50 z-50">
                    <div className="relative rounded-lg max-w-4xl w-full mx-4 overflow-auto" ref={modalRef}>
                        {/* <button
                            onClick={toggleVideoVisibility}
                            className="absolute top-0 right-0 text-white cursor-pointer p-0.5 rounded bg-main"
                            aria-label="Close Video"
                        >
                            <IoClose className='size-5' />
                        </button> */}

                        
                        <div className="">
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/Q0gYQrebGwY?feature=oembed?playlist=Q0gYQrebGwY&mute=0&autoplay=0&loop=no&controls=0&start=0&end=" // Replace with your video ID
                                title="Ganga Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GangaSection;    