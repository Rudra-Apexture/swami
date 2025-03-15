
// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { Tooltip } from 'react-tooltip';
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import Link from 'next/link';
// import { PiStarFourFill } from "react-icons/pi";
// import { useRouter } from 'next/navigation';

// const Options = () => {
//     const [selectedRoom, setSelectedRoom] = React.useState(null);
//     const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
//     const router = useRouter();

//     React.useEffect(() => {
//         const storedRoom = localStorage.getItem('selectedRoom');
//         if (storedRoom) {
//             setSelectedRoom(JSON.parse(storedRoom));
//         }
//     }, []);

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     const handleBookNow = () => {
//         router.push('/conform-booking'); //Navigate to confirmation page
//     };

//     const goToPrevious = () => {
//         setCurrentImageIndex((prevIndex) =>
//             prevIndex === 0 ? selectedRoom.images.length - 1 : prevIndex - 1
//         );
//     };

//     const goToNext = () => {
//         setCurrentImageIndex((prevIndex) =>
//             prevIndex === selectedRoom.images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <>
//             <div className='lg:py-10 py-5'>
//                 {selectedRoom ? (
//                     <div className="bg-white rounded-lg shadow-sm border lg:p-6 p-2">
//                         {/* Room Image */}
//                         <div className='flex lg:flex-row flex-col lg:gap-8 gap-4'>
//                             <div className="relative">
//                                 {/* Slider Controls */}
//                                 {selectedRoom.images.length > 1 && (
//                                     <>
//                                         <button
//                                             onClick={goToPrevious}
//                                             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//                                         >
//                                             <FaArrowLeft />
//                                         </button>
//                                         <button
//                                             onClick={goToNext}
//                                             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//                                         >
//                                             <FaArrowRight />
//                                         </button>
//                                     </>
//                                 )}

//                                 {/* Image Display */}
//                                 <Image
//                                     src={selectedRoom.images[currentImageIndex]}
//                                     alt={`${selectedRoom.name} - Image ${currentImageIndex + 1}`}
//                                     width={500}
//                                     height={400}
//                                     className="rounded-md w-full h-full object-cover"
//                                     style={{ objectFit: 'cover' }}
//                                 />
//                             </div>

//                             <div>
//                                 <h2 className="lg:text-2xl text-xl text-main font-medium mb-4">{selectedRoom.name}</h2>
//                                 {/* Description */}
//                                 <p className="text-gray-700 mb-4 lg:text-xl text-justify text-lg">{selectedRoom.description}</p>

//                                 {/* Characteristics (Amenities) */}
//                                 <h3 className="lg:text-xl text-lg font-medium mb-2">Characteristics :</h3>
//                                 <div className="flex gap-3 lg:mb-4">
//                                     {selectedRoom.facilities ? (
//                                         Object.entries(selectedRoom.facilities)
//                                             .filter(([key, value]) => value === true)
//                                             .map(([key]) => (
//                                                 facilityIcons[key] && (
//                                                     <div key={key}>
//                                                         <div
//                                                             className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                             data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                     </div>
//                                                 )
//                                             ))
//                                     ) : null}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center border-t border-gray-300 mt-5 pt-5">
//                             <div className="flex items-center gap-2">
//                                 <PiStarFourFill className='size-5 font-medium text-main' />
//                                 <span className="text-lg font-medium text-prime">Standard Rate</span>
//                             </div>
//                             <div className="ml-auto text-xl font-bold text-orange-500">₹ {selectedRoom.price}</div>
//                         </div>
//                         <div className="mt-2 text-base text-gray-700">
//                             Breakfast Included | Free Cancellation
//                         </div>
//                     </div>
//                 ) : (
//                     <p className="text-center text-gray-500">No room selected yet.</p>
//                 )}
//             </div>

//             <div className='flex justify-between cursor-pointer'>
//                 <Link href='/your-booking-detail' className='px-6 py-2 flex gap-2 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'>
//                     <FaArrowLeft className='group-hover:-translate-x-5 transition-transform ease-in-out duration-500' />
//                     Back Now
//                 </Link>

//                 <button
//                     onClick={handleBookNow} // Use the handleBookNow function
//                     className='px-6 py-2 flex gap-4 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'
//                 >
//                     <FaArrowRight className='group-hover:translate-x-3 transition-transform ease-in-out duration-500' />
//                     Book Now
//                 </button>
//             </div>
//         </>
//     );
// };


// export default Options;

// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { Tooltip } from 'react-tooltip';
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import Link from 'next/link';
// import { PiStarFourFill } from "react-icons/pi";
// import { useRouter } from 'next/navigation';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import Swiper modules (Navigation, Pagination)
// import { Navigation, Pagination } from 'swiper/modules';

// const Options = () => {
//     const [selectedRoom, setSelectedRoom] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//         const storedRoom = localStorage.getItem('selectedRoom');
//         if (storedRoom) {
//             setSelectedRoom(JSON.parse(storedRoom));
//         }
//     }, []);

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     const handleBookNow = () => {
//         router.push('/conform-booking'); //Navigate to confirmation page
//     };

//     return (
//         <>
//             <div className='lg:py-10 py-5'>
//                 {selectedRoom ? (
//                     <div className="bg-white rounded-lg shadow-sm border lg:p-6 p-2">
//                         {/* Room Image */}
//                         <div className='flex lg:flex-row flex-col lg:gap-8 gap-4'>
//                             <div className="relative w-1/3">
//                                 <Swiper
//                                     spaceBetween={30}
//                                     slidesPerView={1}
//                                     navigation={true}
//                                     pagination={{ clickable: true }}
//                                     modules={[Navigation, Pagination]}
//                                     className="mySwiper"
//                                 >
//                                     {selectedRoom.images?.map((image, index) => (
//                                         <SwiperSlide key={index}>
//                                             <Image
//                                                 src={image}
//                                                 alt={`${selectedRoom.name} - Image ${index + 1}`}
//                                                 width={500}
//                                                 height={400}
//                                                 className="rounded-md w-full h-full object-cover"
//                                                 style={{ objectFit: 'cover' }}
//                                             />
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>
//                             </div>

//                             <div>
//                                 <h2 className="lg:text-2xl text-xl text-main font-medium mb-4">{selectedRoom.name}</h2>
//                                 {/* Description */}
//                                 <p className="text-gray-700 mb-4 lg:text-xl text-justify text-lg">{selectedRoom.description}</p>

//                                 {/* Characteristics (Amenities) */}
//                                 <h3 className="lg:text-xl text-lg font-medium mb-2">Characteristics :</h3>
//                                 <div className="flex gap-3 lg:mb-4">
//                                     {selectedRoom.facilities ? (
//                                         Object.entries(selectedRoom.facilities)
//                                             .filter(([key, value]) => value === true)
//                                             .map(([key]) => (
//                                                 facilityIcons[key] && (
//                                                     <div key={key}>
//                                                         <div
//                                                             className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                             data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                     </div>
//                                                 )
//                                             ))
//                                     ) : null}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center border-t border-gray-300 mt-5 pt-5">
//                             <div className="flex items-center gap-2">
//                                 <PiStarFourFill className='size-5 font-medium text-main' />
//                                 <span className="text-lg font-medium text-prime">Standard Rate</span>
//                             </div>
//                             <div className="ml-auto text-xl font-bold text-orange-500">₹ {selectedRoom.price}</div>
//                         </div>
//                         <div className="mt-2 text-base text-gray-700">
//                             Breakfast Included | Free Cancellation
//                         </div>
//                     </div>
//                 ) : (
//                     <p className="text-center text-gray-500">No room selected yet.</p>
//                 )}
//             </div>

//             <div className='flex justify-between cursor-pointer'>
//                 <Link href='/your-booking-detail' className='px-6 py-2 flex gap-2 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'>
//                     <FaArrowLeft className='group-hover:-translate-x-5 transition-transform ease-in-out duration-500' />
//                     Back Now
//                 </Link>

//                 <button
//                     onClick={handleBookNow} // Use the handleBookNow function
//                     className='px-6 py-2 flex gap-4 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'
//                 >
//                     <FaArrowRight className='group-hover:translate-x-3 transition-transform ease-in-out duration-500' />
//                     Book Now
//                 </button>
//             </div>
//         </>
//     );
// };

// export default Options;

// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
// import { Tooltip } from 'react-tooltip';
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import Link from 'next/link';
// import { PiStarFourFill } from "react-icons/pi";
// import { useRouter } from 'next/navigation';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import Swiper modules (Navigation, Pagination)
// import { Navigation, Pagination } from 'swiper/modules';

// const Options = () => {
//     const [selectedRoom, setSelectedRoom] = useState(null);
//     const [swiperInstance, setSwiperInstance] = useState(null);
//     const [isHovered, setIsHovered] = useState(false);
//     const router = useRouter();

//     useEffect(() => {
//         const storedRoom = localStorage.getItem('selectedRoom');
//         if (storedRoom) {
//             setSelectedRoom(JSON.parse(storedRoom));
//         }
//     }, []);

//     const facilityIcons = {
//         wifi: { icon: <FaWifi />, label: "Free Wifi" },
//         bath: { icon: <FaBath />, label: "Bathroom" },
//         room: { icon: <FaUniversity />, label: "Room" },
//         air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
//     };

//     const handleBookNow = () => {
//         router.push('/conform-booking'); //Navigate to confirmation page
//     };

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     return (
//         <>
//             <div className='lg:py-10 py-5'>
//                 {selectedRoom ? (
//                     <div className="bg-white rounded-lg shadow-sm border lg:p-6 p-2">
//                         {/* Room Image */}
//                         <div className='flex lg:flex-row flex-col gap-6'>
//                             <div
//                                 className="relative md:w-1/3 w-full h-full"
//                                 onMouseEnter={handleMouseEnter}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 <Swiper
//                                     spaceBetween={30}
//                                     slidesPerView={1}
//                                     pagination={{ clickable: true }}
//                                     modules={[Navigation, Pagination]}
//                                     className="mySwiper"
//                                     onSwiper={setSwiperInstance} // Capture the Swiper instance
//                                 >
//                                     {selectedRoom.images?.map((image, index) => (
//                                         <SwiperSlide key={index}>
//                                             <Image
//                                                 src={image}
//                                                 alt={`${selectedRoom.name} - Image ${index + 1}`}
//                                                 width={500}
//                                                 height={400}
//                                                 className="rounded-md w-full h-full object-cover"
//                                                 style={{ objectFit: 'cover' }}
//                                             />
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>
//                             </div>

//                             <div>
//                                 <h2 className="lg:text-2xl text-xl text-main font-medium my-2">{selectedRoom.name}</h2>
//                                 {/* Description */}
//                                 <p className="text-gray-700 mb-4 lg:text-xl text-justify text-lg">{selectedRoom.description}</p>

//                                 {/* Characteristics (Amenities) */}
//                                 <h3 className="lg:text-xl text-lg font-medium mb-2">Characteristics :</h3>
//                                 <div className="flex gap-3 mt-5">
//                                     {selectedRoom.facilities ? (
//                                         Object.entries(selectedRoom.facilities)
//                                             .filter(([key, value]) => value === true)
//                                             .map(([key]) => (
//                                                 facilityIcons[key] && (
//                                                     <div key={key}>
//                                                         <div
//                                                             className="text-white bg-[#2b2d2e] p-2 rounded-sm size-8 flex items-center justify-center"
//                                                             data-tooltip-id={`tooltip-${key}`}
//                                                             data-tooltip-content={facilityIcons[key].label}
//                                                             data-tooltip-class-name='custom-tooltip animate__animated animate__bounce'
//                                                         >
//                                                             {facilityIcons[key].icon}
//                                                         </div>
//                                                         <Tooltip id={`tooltip-${key}`} place="top" />
//                                                     </div>
//                                                 )
//                                             ))
//                                     ) : null}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center border-t border-gray-300 mt-5 pt-5">
//                             <div className="flex items-center gap-2">
//                                 <PiStarFourFill className='size-5 font-medium text-main' />
//                                 <span className="text-lg font-medium text-prime">Standard Rate</span>
//                             </div>
//                             <div className="ml-auto text-xl font-bold text-orange-500">₹ {selectedRoom.price}</div>
//                         </div>
//                         <div className="mt-2 text-base text-gray-700">
//                             Breakfast Included | Free Cancellation
//                         </div>
//                     </div>
//                 ) : (
//                     <p className="text-center text-gray-500">No room selected yet.</p>
//                 )}
//             </div>

//             <div className='flex justify-between cursor-pointer'>
//                 <Link href='/your-booking-detail' className='px-6 py-2 flex gap-2 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'>
//                     <FaArrowLeft className='group-hover:-translate-x-5 transition-transform ease-in-out duration-500' />
//                     Back Now
//                 </Link>

//                 <button
//                     onClick={handleBookNow} // Use the handleBookNow function
//                     className='px-6 py-2 flex gap-4 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'
//                 >
//                     <FaArrowRight className='group-hover:translate-x-3 transition-transform ease-in-out duration-500' />
//                     Book Now
//                 </button>
//             </div>
//         </>
//     );
// };

// export default Options;


"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaWifi, FaBath, FaUniversity, FaRegSnowflake } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { PiStarFourFill } from "react-icons/pi";
import { useRouter } from 'next/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules (Navigation, Pagination)
import { Navigation, Pagination } from 'swiper/modules';

const Options = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedRoom = localStorage.getItem('selectedRoom');
        if (storedRoom) {
            setSelectedRoom(JSON.parse(storedRoom));
        }
    }, []);

    const facilityIcons = {
        wifi: { icon: <FaWifi />, label: "Free Wifi" },
        bath: { icon: <FaBath />, label: "Bathroom" },
        room: { icon: <FaUniversity />, label: "Room" },
        air: { icon: <FaRegSnowflake />, label: "Air Conditioner" }
    };

    const handleBookNow = () => {
        router.push('/conform-booking'); //Navigate to confirmation page
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className='lg:py-10 py-5'>
                {selectedRoom ? (
                    <div className="bg-white rounded-lg shadow-sm border lg:p-6 p-2">
                        {/* Room Image */}
                        <div className='flex lg:flex-row flex-col lg:gap-6 gap-2'>
                            <div
                                className="relative lg:w-1/3 w-full"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    pagination={{
                                        clickable: true,
                                        renderBullet: (index, className) => {
                                            return `<span class="${className} custom-swiper-pagination-bullet"></span>`;
                                        },
                                    }}
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                    onSwiper={setSwiperInstance} // Capture the Swiper instance
                                >
                                    {selectedRoom.images?.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={image}
                                                alt={`${selectedRoom.name} - Image ${index + 1}`}
                                                width={500}
                                                height={400}
                                                className="rounded-md w-full h-full object-cover"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div>
                                <h2 className="lg:text-2xl text-lg text-main font-medium my-2">{selectedRoom.name}</h2>
                                {/* Description */}
                                <p className="text-gray-700 mb-4 lg:text-xl text-justify text-base">{selectedRoom.description}</p>

                                {/* Characteristics (Amenities) */}
                                <h3 className="lg:text-xl text-lg font-medium mb-2">Characteristics :</h3>
                                <div className="flex gap-3 mt-5">
                                    {selectedRoom.facilities ? (
                                        Object.entries(selectedRoom.facilities)
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
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center border-t border-gray-300 mt-5 pt-5">
                            <div className="flex items-center gap-2">
                                <PiStarFourFill className='size-5 font-medium text-main' />
                                <span className="text-lg font-medium text-prime">Standard Rate</span>
                            </div>
                            <div className="ml-auto lg:text-xl text-lg font-bold text-orange-500">₹ {selectedRoom.price}</div>
                        </div>
                        <div className="my-1.5 text-base text-gray-700">
                            Breakfast Included | Free Cancellation
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No room selected yet.</p>
                )}
            </div>

            <div className='flex justify-between cursor-pointer'>
                <Link href='/your-booking-detail' className='px-6 py-2 flex gap-2 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'>
                    <FaArrowLeft className='group-hover:-translate-x-5 transition-transform ease-in-out duration-500' />
                    Back Now
                </Link>

                <button
                    onClick={handleBookNow} // Use the handleBookNow function
                    className='px-6 py-2 flex gap-4 group items-center text-main hover:bg-main hover:text-white transition-colors duration-200 ease-in-out font-medium md:border border-0 border-main rounded-md'
                >
                    <FaArrowRight className='group-hover:translate-x-3 transition-transform ease-in-out duration-500' />
                    Book Now
                </button>
            </div>

            {/* Global Styles to Override Swiper Pagination Colors */}
            <style jsx global>{`
              .custom-swiper-pagination-bullet {
                background-color: #f0f0f0; /* Inactive bullet color */
                opacity: 0.5; /* Adjust opacity as needed */
                width: 10px;   /* Adjust size as needed */
                height: 10px;  /* Adjust size as needed */
                border-radius: 50%;
                display: inline-block;
                margin: 0 4px;
              }

              .custom-swiper-pagination-bullet.swiper-pagination-bullet-active {
                background-color: #ff5700; /* Active bullet color */
                opacity: 1;
              }

              .swiper-pagination {
                bottom: 10px !important; /* Adjust position if needed */
              }
            `}</style>
        </>
    );
};

export default Options;


