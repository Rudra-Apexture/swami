
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import Image from 'next/image';
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";

// const RoomCarousel = ({ images }) => {
//     const [swiper, setSwiper] = useState(null);
//     const [activeDirection, setActiveDirection] = useState(null); // 'prev' or 'next' or null

//     useEffect(() => {
//         if (swiper) {
//             const handleSlideChangeTransitionStart = () => {
//                 const isGoingForward = swiper.activeIndex < swiper.previousIndex;
//                 setActiveDirection(isGoingForward ? 'prev' : 'next');
//             };

//             const handleSlideChangeTransitionEnd = () => {
//                 setActiveDirection(null);
//             };

//             swiper.on('slideChangeTransitionStart', handleSlideChangeTransitionStart);
//             swiper.on('slideChangeTransitionEnd', handleSlideChangeTransitionEnd);

//             return () => {
//                 swiper.off('slideChangeTransitionStart', handleSlideChangeTransitionStart);
//                 swiper.off('slideChangeTransitionEnd', handleSlideChangeTransitionEnd);
//             };
//         }
//     }, [swiper]);

//     const swiperOptions = {
//         modules: [Navigation, Pagination, Autoplay],
//         spaceBetween: 20,
//         slidesPerView: 1,
//         navigation: {
//             prevEl: '.custom-swiper-button-prev',
//             nextEl: '.custom-swiper-button-next',
//         },
//         pagination: { clickable: true },
//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//         },
//         loop: true,
//         speed: 1500,
//         effect: 'slide',
//         grabCursor: true,
//         onSwiper: (swiper) => setSwiper(swiper),
//         style: {
//             "--swiper-navigation-color": "#ff5700",
//             "--swiper-pagination-color": "#ff5700",
//         },
//     };

//     return (
//         <div className="flex justify-center items-center w-full h-full relative">
//             <div className="max-w-4xl w-full">
//                 <Swiper {...swiperOptions}>
//                     {images.map((image, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="relative w-full h-[450px]">
//                                 <Image
//                                     src={image}
//                                     alt={`Slide ${index + 1}`}
//                                     fill
//                                     priority
//                                     className='rounded-lg'
//                                 />
//                             </div>
//                         </SwiperSlide>
//                     ))}

//                 </Swiper>
//             </div>

//             {/* Custom Navigation Buttons */}
//             <div
//                 className={`custom-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-md p-2.5 transition-colors duration-300 ease-out ${activeDirection === 'prev' ? 'bg-[#ff5700]' : 'bg-black'
//                     } text-white`}
//             >
//                 <FaChevronLeft className='size-5' />
//             </div>
//             <div
//                 className={`custom-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-md p-2.5 transition-colors duration-300 ease-out ${activeDirection === 'next' ? 'bg-[#ff5700]' : 'bg-black'
//                     } text-white`}
//             >
//                 <FaChevronRight className='size-5' />
//             </div>
//         </div>
//     );
// };

// export default RoomCarousel;

"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const RoomCarousel = ({ images, onClose }) => {
    const [swiper, setSwiper] = useState(null);
    const [activeDirection, setActiveDirection] = useState(null); // 'prev' or 'next' or null
    const carouselRef = useRef(null); // Create a ref for the carousel container

    useEffect(() => {
        if (swiper) {
            const handleSlideChangeTransitionStart = () => {
                const isGoingForward = swiper.activeIndex < swiper.previousIndex;
                setActiveDirection(isGoingForward ? 'prev' : 'next');
            };

            const handleSlideChangeTransitionEnd = () => {
                setActiveDirection(null);
            };

            swiper.on('slideChangeTransitionStart', handleSlideChangeTransitionStart);
            swiper.on('slideChangeTransitionEnd', handleSlideChangeTransitionEnd);

            return () => {
                swiper.off('slideChangeTransitionStart', handleSlideChangeTransitionStart);
                swiper.off('slideChangeTransitionEnd', handleSlideChangeTransitionEnd);
            };
        }
    }, [swiper]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (carouselRef.current && !carouselRef.current.contains(event.target)) {
                onClose(); // Call the onClose function if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const swiperOptions = {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
        },
        pagination: { clickable: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
        effect: 'slide',
        grabCursor: true,
        onSwiper: (swiper) => setSwiper(swiper),
        style: {
            "--swiper-navigation-color": "#ff5700",
            "--swiper-pagination-color": "#ff5700",
        },
    };

    return (
        <div className="flex justify-center items-center w-full h-full relative" ref={carouselRef}> {/* Attach the ref here */}
            <div className="max-w-4xl w-full">
                <Swiper {...swiperOptions}>
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[450px]">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    priority
                                    className='rounded-lg object-cover' // Added object-cover
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            {/* Custom Navigation Buttons */}
            <div
                className={`custom-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-md p-2.5 transition-colors duration-300 ease-out ${activeDirection === 'prev' ? 'bg-[#ff5700]' : 'bg-black'
                    } text-white`}
            >
                <FaChevronLeft className='size-5' />
            </div>
            <div
                className={`custom-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-md p-2.5 transition-colors duration-300 ease-out ${activeDirection === 'next' ? 'bg-[#ff5700]' : 'bg-black'
                    } text-white`}
            >
                <FaChevronRight className='size-5' />
            </div>
        </div>
    );
};

export default RoomCarousel;
