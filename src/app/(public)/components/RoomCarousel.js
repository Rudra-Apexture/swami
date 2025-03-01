// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const RoomCarousel = ({ images, onClose }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 1500); // Change image every 3 seconds

//         return () => clearInterval(timer); // Cleanup on unmount
//     }, [images.length]);

//     const goToPrevious = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     };

//     const goToNext = () => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//         <div className="relative w-full h-full">
//             <Image
//                 src={images[currentImageIndex]}
//                 alt={`Slide ${currentImageIndex + 1}`}
//                 width={700}
//                 height={600}
//                 className="object-contain w-full h-full"
//             />

//             {/* Overlay with Close Button  */}
//             {/* <div className="absolute top-2 right-2">
//                 <button onClick={onClose} className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>
//             </div> */}


//             {/* Navigation Buttons  */}
//             <button
//                 onClick={goToPrevious}
//                 className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-main text-white rounded-full p-2 hover:bg-orange-700 cursor-pointer transition"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                 </svg>
//             </button>
//             <button
//                 onClick={goToNext}
//                 className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-main text-white rounded-full p-2 hover:bg-orange-700 cursor-pointer transition"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                 </svg>
//             </button>
//         </div>
//     );
// };

// export default RoomCarousel;


"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const RoomCarousel = ({ images }) => {
    const [swiper, setSwiper] = useState(null);
    const [activeDirection, setActiveDirection] = useState(null); // 'prev' or 'next' or null

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
        <div className="flex justify-center items-center w-full h-full relative">
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
                                    className='rounded-lg'
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