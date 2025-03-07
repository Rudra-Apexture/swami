
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';


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
            <div className="flex flex-col lg:flex-row gap-8 rounded-2xl overflow-hidden">

                {/* Image Section */}
                <div className="relative group">
                    {/* BeHind Image */}
                    <div className="absolute inset-0 bg-linear-to-b from-main via-white to-white rounded-2xl transform md:rotate-6 rotate-4 transition-all duration-300"></div>
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/image/aarti.webp"
                            alt="Ganga Arti at Sahajanand Wellness Trust"
                            width={600}
                            height={450}
                            className="object-cover w-full h-[380px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <button
                            onClick={toggleVideoVisibility}
                            className="absolute bottom-4 right-4 cursor-pointer flex items-center gap-3 bg-white/90 backdrop-blur-sm text-main p-1.5 px-4 rounded-full group"
                        >
                            <FaPlay className="lg:size-5 size-4" />
                            <span className="font-medium text-sm md:text-base">Watch Ganga Arti</span>
                        </button>
                    </div>
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 p-0 lg:p-8 flex flex-col justify-center">
                    <h2 className="md:text-3xl text-2xl lg:text-4xl font-medium text-prime mb-4">
                        Ganga <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Maiya</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The sprawling Ganga basin, an area of 860,000 sq km spread across 11 states,
                        is the world's most populous river basin. It is home to more than 600 million
                        Indians, close to half the country's population; and over 40 percent of the
                        country's GDP is generated in this region.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mt-4">
                        The basin provides more than one-third of India's surface water, 90 percent of
                        which is used for irrigation. Paradoxically, this fertile region is also home to
                        some of the poorest sections of India's population, with more than 200 million
                        people living below the national poverty line.
                    </p>
                </div>
            </div>

            {/* Video Modal */}
            {
                videoVisible && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm bg-opacity-50 z-50">
                        <div className="relative rounded-lg max-w-4xl w-full mx-4 overflow-auto" ref={modalRef}>

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
                )
            }
        </div >
    );
};

export default GangaSection;    