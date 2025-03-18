// export default function OurClient() {
//     return (
//         <section className="Our-Clients my-10">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//                     Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                         Clients
//                     </span>
//                 </h2>
//             </div >
//         </section >
//     );
// }


// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';


// const clients = [
//     { id: 1, name: 'talo', imageUrl: '/assets/icons/talo.png' },
//     { id: 2, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
//     { id: 3, name: 'noted', imageUrl: '/assets/icons/noted.png' },
//     { id: 4, name: 'goan', imageUrl: '/assets/icons/goan.png' },
//     { id: 5, name: 'mowi', imageUrl: '/assets/icons/mowi.png' },
//     { id: 6, name: 'talo', imageUrl: '/assets/icons/talo.png' },
//     { id: 7, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
//     { id: 8, name: 'noted', imageUrl: '/assets/icons/noted.png' },
//     { id: 9, name: 'goan', imageUrl: '/assets/icons/goan.png' },
//     { id: 10, name: 'mowi', imageUrl: '/assets/icons/mowi.png' }
// ];

// const ClientSwiper = () => {
//     return (
//         <div className="bg-gray-50 py-10">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl md:text-4xl mb-10 font-bold text-center">
//                     Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                         Clients
//                     </span>
//                 </h2>
//                 <Swiper
//                     slidesPerView={5}
//                     spaceBetween={30}
//                     loop={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     speed={500}
//                     modules={[Autoplay, Pagination]}
//                     breakpoints={{
//                         320: {
//                             slidesPerView: 2,
//                             spaceBetween: 20,
//                         },
//                         640: {
//                             slidesPerView: 3,
//                             spaceBetween: 20,
//                         },
//                         768: {
//                             slidesPerView: 4,
//                             spaceBetween: 30,
//                         },
//                         1024: {
//                             slidesPerView: 5,
//                             spaceBetween: 30,
//                         },
//                     }}
//                     className="mySwiper"
//                 >
//                     {clients.map((client) => (
//                         <SwiperSlide key={client.id}>
//                             <div className="bg-white rounded-lg border border-gray-300/50 flex items-center justify-center h-36">
//                                 <Image
//                                     src={client.imageUrl}
//                                     alt={client.name}
//                                     width={150}  // Adjust as needed
//                                     height={80} // Adjust as needed
//                                     className="object-contain w-24"
//                                 />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default ClientSwiper;

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Autoplay, Pagination } from 'swiper/modules';

// const clients = [
//     { id: 1, name: 'talo', imageUrl: '/assets/icons/talo.png' },
//     { id: 2, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
//     { id: 3, name: 'noted', imageUrl: '/assets/icons/noted.png' },
//     { id: 4, name: 'goan', imageUrl: '/assets/icons/goan.png' },
//     { id: 5, name: 'mowi', imageUrl: '/assets/icons/mowi.png' },
//     { id: 6, name: 'talo', imageUrl: '/assets/icons/talo.png' },
//     { id: 7, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
//     { id: 8, name: 'noted', imageUrl: '/assets/icons/noted.png' },
//     { id: 9, name: 'goan', imageUrl: '/assets/icons/goan.png' },
//     { id: 10, name: 'mowi', imageUrl: '/assets/icons/mowi.png' }
// ];

// const ClientSwiper = () => {
//     return (
//         <div className="bg-gray-50 py-10">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl md:text-4xl mb-10 font-bold text-center">
//                     Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                         Clients
//                     </span>
//                 </h2>
//                 <Swiper
//                     slidesPerView={5}
//                     spaceBetween={30}
//                     loop={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     speed={1000} // Smoother transition speed
//                     modules={[Autoplay, Pagination]}
//                     breakpoints={{
//                         320: {
//                             slidesPerView: 2,
//                             spaceBetween: 15,
//                         },
//                         640: {
//                             slidesPerView: 3,
//                             spaceBetween: 20,
//                         },
//                         768: {
//                             slidesPerView: 4,
//                             spaceBetween: 25,
//                         },
//                         1024: {
//                             slidesPerView: 5,
//                             spaceBetween: 30,
//                         },
//                     }}
//                     className="mySwiper"
//                 >
//                     {clients.map((client) => (
//                         <SwiperSlide key={client.id}>
//                             {/* logo div */}
//                             <div className="bg-white rounded-xl border border-slate-300 flex items-center justify-center h-36">
//                                 <Image
//                                     src={client.imageUrl}
//                                     alt={client.name}
//                                     width={150}  // Adjust as needed
//                                     height={80} // Adjust as needed
//                                     className="object-contain w-24"
//                                 />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default ClientSwiper;

// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Autoplay, Pagination } from 'swiper/modules';

// const clients = [
//     { id: 1, name: 'talo', imageUrl: '/assets/icons/talo.png' },
//     { id: 2, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
//     { id: 3, name: 'noted', imageUrl: '/assets/icons/noted.png' },
//     { id: 4, name: 'goan', imageUrl: '/assets/icons/goan.png' },
//     { id: 5, name: 'mowi', imageUrl: '/assets/icons/mowi.png' },
//     { id: 6, name: 'talo', imageUrl: '/assets/icons/talo.png' },
//     { id: 7, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
//     { id: 8, name: 'noted', imageUrl: '/assets/icons/noted.png' },
//     { id: 9, name: 'goan', imageUrl: '/assets/icons/goan.png' },
//     { id: 10, name: 'mowi', imageUrl: '/assets/icons/mowi.png' }
// ];

// const ClientSwiper = () => {
//     return (
//         <div className="bg-gray-50 py-10">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl md:text-4xl mb-10 font-bold text-center">
//                     Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                         Clients
//                     </span>
//                 </h2>
//                 <div className="relative">
//                     <Swiper
//                         slidesPerView={5}
//                         spaceBetween={30}
//                         loop={true}
//                         autoplay={{
//                             delay: 2500,
//                             disableOnInteraction: false,
//                         }}
//                         speed={1000} // Smoother transition speed
//                         pagination={{
//                             el: '.swiper-custom-pagination',
//                             clickable: true,
//                             renderBullet: function (index, className) {
//                                 return '<span class="' + className + ' custom-bullet"></span>';
//                             },
//                         }}
//                         modules={[Autoplay, Pagination]}
//                         breakpoints={{
//                             320: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 15,
//                             },
//                             640: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 20,
//                             },
//                             768: {
//                                 slidesPerView: 5,
//                                 spaceBetween: 25,
//                             },
//                         }}
//                         className="mySwiper"
//                     >
//                         {clients.map((client) => (
//                             <SwiperSlide key={client.id}>
//                                 {/* logo div */}
//                                 <div className="bg-white rounded-xl border border-slate-300 flex items-center justify-center h-36">
//                                     <Image
//                                         src={client.imageUrl}
//                                         alt={client.name}
//                                         width={150}  // Adjust as needed
//                                         height={80} // Adjust as needed
//                                         className="object-cover w-24"
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* External pagination container */}
//                     <div className="swiper-custom-pagination flex justify-center mt-8"></div>
//                 </div>
//             </div>

//             {/* Add custom styles for the pagination bullets */}
//             <style jsx global>{`
//                 .swiper-custom-pagination {
//                     position: static;
//                     width: 100%;
//                 }

//                 .swiper-custom-pagination .swiper-pagination-bullet {
//                     width: 12px;
//                     height: 12px;
//                     margin: 0 5px;
//                     background-color: #D98324;
//                     opacity: 0.7;
//                     transition: all 0.3s ease;
//                 }

//                 .swiper-custom-pagination .swiper-pagination-bullet-active {
//                     background-color: #f97316;
//                     opacity: 1;
//                     width: 25px;
//                     border-radius: 5px;
//                 }

//                 .custom-bullet {
//                     display: inline-block;
//                     border-radius: 20px;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ClientSwiper;

'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const clients = [
    { id: 1, name: 'talo', imageUrl: '/assets/icons/talo.png' },
    { id: 2, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
    { id: 3, name: 'noted', imageUrl: '/assets/icons/noted.png' },
    { id: 4, name: 'goan', imageUrl: '/assets/icons/goan.png' },
    { id: 5, name: 'mowi', imageUrl: '/assets/icons/mowi.png' },
    { id: 6, name: 'talo', imageUrl: '/assets/icons/talo.png' },
    { id: 7, name: 'solidstate', imageUrl: '/assets/icons/solidstate.png' },
    { id: 8, name: 'noted', imageUrl: '/assets/icons/noted.png' },
    { id: 9, name: 'goan', imageUrl: '/assets/icons/goan.png' },
    { id: 10, name: 'mowi', imageUrl: '/assets/icons/mowi.png' }
];

const ClientSwiper = () => {
    return (
        <div className="bg-gray-50 pb-10">
            <div className="container mx-auto">
                <h2 className="md:text-3xl text-2xl lg:text-4xl mb-10 font-medium text-center">
                    Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                        Clients
                    </span>
                </h2>
                <div className="relative container mx-auto px-4">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={1000} // Smoother transition speed
                        pagination={{
                            el: '.swiper-custom-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + ' custom-bullet"></span>';
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 25,
                            },
                        }}
                        className="mySwiper"
                    >
                        {clients.map((client) => (
                            <SwiperSlide key={client.id}>
                                {/* logo div with hover effect */}
                                <div className="client-logo-card bg-white rounded-xl border border-slate-300 flex items-center justify-center lg:h-36 h-24 relative overflow-hidden group">
                                    {/* Logo with scale effect */}
                                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={client.imageUrl}
                                            alt={client.name}
                                            width={150}
                                            height={80}
                                            className="object-cover w-24"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* External pagination container */}
                    <div className="swiper-custom-pagination flex justify-center mt-8"></div>
                </div>
            </div>

            <div className='absolute top-0 bg-gradient-to-l bg-main to-white'></div>

            {/* Add custom styles for the pagination bullets and hover effects */}
            <style jsx global>{`
                .swiper-custom-pagination {
                    position: static;
                    width: 100%;
                }

                .swiper-custom-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    margin: 0 5px;
                    background-color: #F0A04A;
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }

                .swiper-custom-pagination .swiper-pagination-bullet-active {
                    background-color: #f97316;
                    opacity: 1;
                    width: 25px;
                    border-radius: 5px;
                }

                .custom-bullet {
                    display: inline-block;
                    border-radius: 20px;
                }

                /* Client logo card hover effects */
                .client-logo-card {
                    transition: all 0.4s ease;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }

                .client-logo-card:hover {
                    box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.15);
                    border-color: rgba(249, 115, 22, 0.5);
                }

                /* Wave animation */
                .wave-effect {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    top: -50%;
                    left: -50%;
                    background: radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%);
                    opacity: 0;
                    transform: scale(0);
                    border-radius: 40%;
                    transition: opacity 0.3s ease;
                    z-index: 1;
                }

                .client-logo-card:hover .wave-effect {
                    opacity: 0.7;
                    transform: scale(1);
                    animation: wave 2s linear infinite;
                }

                @keyframes wave {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};


export default ClientSwiper;



