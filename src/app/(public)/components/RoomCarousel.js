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


// main
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import Image from 'next/image';
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";

// const RoomCarousel = ({ images, onClose }) => {
//     const [swiper, setSwiper] = useState(null);
//     const [activeDirection, setActiveDirection] = useState(null); // 'prev' or 'next' or null
//     const carouselRef = useRef(null); // Create a ref for the carousel container

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

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (carouselRef.current && !carouselRef.current.contains(event.target)) {
//                 onClose(); // Call the onClose function if clicked outside
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [onClose]);

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
//         <div className="flex justify-center items-center w-full h-full relative" ref={carouselRef}> {/* Attach the ref here */}
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
//                                     className='rounded-lg object-cover' // Added object-cover
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
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const RoomCarousel = ({ images, onClose }) => {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        if (swiper) {
            const handleSlideChange = () => {
                setActiveIndex(swiper.realIndex);
            };

            swiper.on('slideChange', handleSlideChange);

            return () => {
                swiper.off('slideChange', handleSlideChange);
            };
        }
    }, [swiper]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (carouselRef.current && !carouselRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handlePrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };

    const swiperOptions = {
        modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 6,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className} w-3 h-3 bg-gray-400 opacity-70 transition-all duration-300  ${activeIndex === index ? 'bg-[#ff5700] w-5 opacity-100' : ''} rounded-full"></span>`;
            },
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        loop: true,
        speed: 1000,
        onSwiper: setSwiper,
    };

    return (
        <div
            className="flex justify-center items-center w-full h-full relative py-10"
            ref={carouselRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="max-w-5xl w-full relative">
                <Swiper {...swiperOptions} className="py-10">
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="w-4/5">
                            <div className="relative w-full h-[510px] overflow-hidden rounded-xl group">
                                <Image
                                    src={image}
                                    alt={`Room view ${index + 1}`}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-3 py-1 bg-[#ff5700] rounded-full text-sm font-medium mb-2">
                                        Room {index + 1}
                                    </span>
                                    <h3 className="lg:text-xl text-lg font-medium">Beautiful Interior Design</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom navigation buttons */}
                <div className={`transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 z-10 lg:size-10 size-8 p-2 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/50 rounded-full text-white shadow-lg hover:bg-[#ff5700] transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <FaArrowLeft className="size-5" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 z-10 lg:size-10 size-8 p-2 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/50 rounded-full text-white shadow-lg hover:bg-[#ff5700] transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <FaArrowRight className="size-5" />
                    </button>
                </div>

                {/* Custom pagination */}
                <div className="swiper-pagination flex justify-center gap-2 mt-6"></div>

                {/* Image counter */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {activeIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export default RoomCarousel;





