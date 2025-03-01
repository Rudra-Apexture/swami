// // components/MySwiper.js
// "use client";

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const MySwiper = () => {
//     return (
//         <Swiper
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//             }}
//             pagination={{
//                 clickable: true,
//             }}
//             speed={500}
//             navigation={true}
//             modules={[Autoplay, Pagination, Navigation]}
//             className="mySwiper"  // Keep this className for styling, update if needed
//             style={{ maxWidth: '800px', margin: '0 auto' }} // Adjust as needed
//         >
//             <SwiperSlide>Slide 1</SwiperSlide>
//             <SwiperSlide>Slide 2</SwiperSlide>
//             <SwiperSlide>Slide 3</SwiperSlide>
//             <SwiperSlide>Slide 4</SwiperSlide>
//             <SwiperSlide>Slide 5</SwiperSlide>
//             <SwiperSlide>Slide 6</SwiperSlide>
//             <SwiperSlide>Slide 7</SwiperSlide>
//             <SwiperSlide>Slide 8</SwiperSlide>
//             <SwiperSlide>Slide 9</SwiperSlide>
//         </Swiper>
//     );
// };

// export default MySwiper;

// 'use client';
// import { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';
// import "swiper/css/pagination";
// import 'swiper/css/navigation';

// const images = [
//     '/assets/image/ganga-arti.jpg',
//     '/assets/image/food-place.jpg',
//     '/assets/image/letter.jpg',
//     '/assets/image/whitemen.jpg',
//     '/assets/image/swami.jpg',
//     '/assets/image/arti.jpg',
//     '/assets/image/redroom.jpg',
//     '/assets/image/lobby.jpg',
//     '/assets/image/quote.jpg',
//     '/assets/image/shavrav.jpg',
//     '/assets/image/floor.jpg',
//     '/assets/image/rooms.jpg',
//     '/assets/image/gallery.jpg',
//     '/assets/image/river.jpg',
// ];

// export default function Slider() {
//     const swiperRef = useRef(null);

//     return (
//         <div className="relative w-full max-w-5xl mx-auto py-10">
//             {/* Custom Navigation Buttons */}
//             <button
//                 className="absolute -left-15 top-1/2 -translate-y-1/2 bg-main text-white p-1.5 hover:bg-black cursor-pointer shadow-md rounded-md z-10"
//                 onClick={() => swiperRef.current?.slidePrev()}
//             >
//                 <ChevronLeft size={24} />
//             </button>
//             <button
//                 className="absolute -right-15 top-1/2 -translate-y-1/2 bg-main text-white p-1.5 hover:bg-black cursor-pointer shadow-md rounded-md z-10"
//                 onClick={() => swiperRef.current?.slideNext()}
//             >
//                 <ChevronRight size={24} />
//             </button>

//             {/* Swiper Slider */}
//             <Swiper
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 modules={[Navigation, Pagination, Autoplay]}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 autoplay={{ delay: 3500, disableOnInteraction: false }}
//                 slidesPerView={3}
//                 spaceBetween={20}
//                 loop
//                 speed={500}
//                 breakpoints={{
//                     640: { slidesPerView: 1 },
//                     768: { slidesPerView: 2 },
//                     1024: { slidesPerView: 3 },
//                 }}
//             >
//                 {images.map((src, index) => (
//                     <SwiperSlide key={index} className="">
//                         <div className="rounded-lg overflow-hidden">
//                             <img
//                                 src={src}
//                                 alt={`Slide ${index + 1}`}
//                                 className="w-full h-64 object-cover"
//                             />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }

// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';

// // Import Swiper styles
// import 'swiper/css';
// import "swiper/css/pagination";
// import 'swiper/css/navigation';

// const images = [
//     '/assets/image/ganga-arti.jpg',
//     '/assets/image/food-place.jpg',
//     '/assets/image/letter.jpg',
//     '/assets/image/whitemen.jpg',
//     '/assets/image/swami.jpg',
//     '/assets/image/arti.jpg',
//     '/assets/image/redroom.jpg',
//     '/assets/image/lobby.jpg',
//     '/assets/image/quote.jpg',
//     '/assets/image/shavrav.jpg',
//     '/assets/image/floor.jpg',
//     '/assets/image/rooms.jpg',
//     '/assets/image/gallery.jpg',
//     '/assets/image/river.jpg',
// ];

// export default function Slider() {
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [slidesCount, setSlidesCount] = useState(images.length);

//     useEffect(() => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.on('slideChange', () => {
//                 setActiveIndex(swiperRef.current.swiper.realIndex);
//             });
//             setSlidesCount(swiperRef.current.swiper.slides.length);
//         }
//     }, [swiperRef]);

//     const handlePaginationClick = (index) => {
//         if (swiperRef.current) {
//             swiperRef.current.swiper.slideToLoop(index);
//         }
//     };


//     return (
//         <div className='container mx-auto px-4'>
//             <div className="relative w-full max-w-5xl mx-auto py-10">
//                 {/* Custom Navigation Buttons */}
//                 <button
//                     className="absolute lg:-left-15 -left-2.5 top-1/2 -translate-y-1/2 bg-main text-white lg:p-1.5 hover:bg-black cursor-pointer shadow-md rounded-md z-10"
//                     onClick={() => swiperRef.current?.swiper.slidePrev()}
//                 >
//                     <ChevronLeft size={20} />
//                 </button>
//                 <button
//                     className="absolute lg:-right-15 -right-2.5 top-1/2 -translate-y-1/2 bg-main text-white lg:p-1.5 hover:bg-black cursor-pointer shadow-md rounded-md z-10"
//                     onClick={() => swiperRef.current?.swiper.slideNext()}
//                 >
//                     <ChevronRight size={20} />
//                 </button>

//                 {/* Swiper Slider */}
//                 <Swiper
//                     onSwiper={(swiper) => (swiperRef.current = { swiper })}
//                     modules={[Navigation, Autoplay, Pagination]}
//                     spaceBetween={20}
//                     loop
//                     speed={500}
//                     slidesPerView={3}
//                     autoplay={{ delay: 1500, disableOnInteraction: false }}
//                     breakpoints={{
//                         320: { slidesPerView: 1 },
//                         768: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                     pagination={false} // Disable default pagination
//                     onSlideChange={() => setActiveIndex(swiperRef.current?.swiper.realIndex || 0)}
//                 >
//                     {images.map((src, index) => (
//                         <SwiperSlide key={index} className="">
//                             <div className="rounded-lg overflow-hidden">
//                                 <Image
//                                     src={src}
//                                     alt={`Slide ${index + 1}`}
//                                     width={500} // Adjust as needed, maintaining aspect ratio
//                                     height={250} // Adjust as needed, maintaining aspect ratio
//                                     className="w-full h-64 object-cover"
//                                 />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Custom Pagination */}
//                 <div className="flex justify-center pt-6">
//                     {images.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`lg:size-3 size-2 rounded-full mx-1 ${activeIndex === index ? 'border-2 border-main bg-white' : 'bg-main/50 '} transition-colors duration-300`}
//                             onClick={() => handlePaginationClick(index)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
// import Image from 'next/image';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import "swiper/css/pagination";
// import 'swiper/css/navigation';

// const images = [
//     '/assets/image/ganga-arti.jpg',
//     '/assets/image/food-place.jpg',
//     '/assets/image/letter.jpg',
//     '/assets/image/whitemen.jpg',
//     '/assets/image/swami.jpg',
//     '/assets/image/arti.jpg',
//     '/assets/image/redroom.jpg',
//     '/assets/image/lobby.jpg',
//     '/assets/image/quote.jpg',
//     '/assets/image/shavrav.jpg',
//     '/assets/image/floor.jpg',
//     '/assets/image/rooms.jpg',
//     '/assets/image/gallery.jpg',
//     '/assets/image/river.jpg',
// ];

// export default function AshramSlider() {
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.on('slideChange', () => {
//                 setActiveIndex(swiperRef.current.swiper.realIndex);
//             });
//         }
//     }, [swiperRef]);

//     const handlePaginationClick = (index) => {
//         if (swiperRef.current) {
//             swiperRef.current.swiper.slideToLoop(index);
//         }
//     };

//     return (
//         <div className="relative bg-gradient-to-b from-amber-50 to-orange-100 py-16 px-4 overflow-hidden">
//             {/* Decorative Elements */}
//             <div className="absolute top-0 left-0 w-24 h-24 bg-orange-200 rounded-full opacity-30 -translate-x-12 -translate-y-12"></div>
//             <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-200 rounded-full opacity-30 translate-x-16 translate-y-16"></div>

//             {/* Sanskrit Symbol (Om) as decorative element */}

//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl font-serif text-orange-800 mb-3">Ashram Gallery</h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-300 mx-auto"></div>
//                 </div>

//                 {/* Main Slider Container */}
//                 <div className="relative">
//                     {/* Custom Navigation - Styled as decorative elements */}
//                     <button
//                         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 hover:bg-orange-800 focus:outline-none"
//                         onClick={() => swiperRef.current?.swiper.slidePrev()}
//                         aria-label="Previous slide"
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M15 18l-6-6 6-6" />
//                         </svg>
//                     </button>

//                     <button
//                         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 hover:bg-orange-800 focus:outline-none"
//                         onClick={() => swiperRef.current?.swiper.slideNext()}
//                         aria-label="Next slide"
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M9 18l6-6-6-6" />
//                         </svg>
//                     </button>

//                     {/* Swiper with Coverflow Effect */}
//                     <Swiper
//                         ref={swiperRef}
//                         modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
//                         effect="coverflow"
//                         grabCursor={true}
//                         centeredSlides={true}
//                         loop={true}
//                         speed={800}
//                         slidesPerView="auto"
//                         coverflowEffect={{
//                             rotate: 10,
//                             stretch: 50,
//                             depth: 200,
//                             modifier: 1,
//                             slideShadows: true,
//                         }}
//                         autoplay={{
//                             delay: 3000,
//                             disableOnInteraction: false,
//                             pauseOnMouseEnter: true,
//                         }}
//                         breakpoints={{
//                             320: { slidesPerView: 1 },
//                             640: { slidesPerView: 2 },
//                             1024: { slidesPerView: 3 },
//                         }}
//                         pagination={false}
//                         onSlideChange={() => setActiveIndex(swiperRef.current?.swiper.realIndex || 0)}
//                         className="py-10"
//                     >
//                         {images.map((src, index) => (
//                             <SwiperSlide key={index} className="transition-transform">
//                                 <div className="bg-white p-2 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
//                                     <div className="relative overflow-hidden rounded-md">
//                                         <Image
//                                             src={src}
//                                             alt={`Ashram Image ${index + 1}`}
//                                             width={500}
//                                             height={300}
//                                             className="w-full h-72 object-cover transition-transform duration-700 hover:scale-110"
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
//                                             <span className="text-white p-4 font-serif">Image {index + 1}</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Custom Decorative Pagination */}
//                     <div className="flex justify-center mt-8">
//                         {images.map((_, index) => (
//                             <button
//                                 key={index}
//                                 aria-label={`Go to slide ${index + 1}`}
//                                 className={`relative mx-1 transition-all duration-300 focus:outline-none group`}
//                                 onClick={() => handlePaginationClick(index)}
//                             >
//                                 <span className={`block w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 
//                                     ${activeIndex === index
//                                         ? 'bg-orange-600 scale-100'
//                                         : 'bg-orange-300 scale-75 hover:bg-orange-400'}`}>
//                                 </span>
//                                 <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap`}>
//                                     {index + 1}
//                                 </span>
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Decorative Footer Quote */}
//                 <div className="text-center mt-12 px-4 text-orange-900 font-serif italic opacity-75 max-w-2xl mx-auto">
//                     "A place of peace, meditation, and spiritual growth"
//                 </div>
//             </div>
//         </div>
//     );
// }

// 'use client';
// import { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
// import Image from 'next/image';
// import { FaPlay, FaPause } from "react-icons/fa";


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import "swiper/css/pagination";
// import 'swiper/css/navigation';

// const images = [
//     '/assets/image/ganga-arti.jpg',
//     '/assets/image/food-place.jpg',
//     '/assets/image/letter.jpg',
//     '/assets/image/whitemen.jpg',
//     '/assets/image/swami.jpg',
//     '/assets/image/arti.jpg',
//     '/assets/image/redroom.jpg',
//     '/assets/image/lobby.jpg',
//     '/assets/image/quote.jpg',
//     '/assets/image/shavrav.jpg',
//     '/assets/image/floor.jpg',
//     '/assets/image/rooms.jpg',
//     '/assets/image/gallery.jpg',
//     '/assets/image/river.jpg',
// ];

// export default function UserFriendlyAshramSlider() {
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(true);
//     const [thumbnailsSwiper, setThumbnailsSwiper] = useState(null);
//     const mainSwiperRef = useRef(null);

//     // Handle autoplay toggle
//     const toggleAutoplay = () => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             if (isPlaying) {
//                 swiperRef.current.swiper.autoplay.stop();
//             } else {
//                 swiperRef.current.swiper.autoplay.start();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     // Handle fullscreen view
//     const openFullscreen = (index) => {
//         if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
//             mainSwiperRef.current.swiper.slideToLoop(index);
//             document.getElementById('fullscreenView').classList.remove('hidden');
//         }
//     };

//     // Close fullscreen view
//     const closeFullscreen = () => {
//         document.getElementById('fullscreenView').classList.add('hidden');
//     };

//     useEffect(() => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.on('slideChange', () => {
//                 setActiveIndex(swiperRef.current.swiper.realIndex);
//                 // Sync the thumbnail swiper
//                 if (thumbnailsSwiper) {
//                     thumbnailsSwiper.slideTo(swiperRef.current.swiper.realIndex);
//                 }
//             });
//         }
//     }, [swiperRef, thumbnailsSwiper]);

//     return (
//         <div className="bg-gray-50 py-10">
//             <div className="container mx-auto px-4">
//                 <div className="max-w-5xl mx-auto">
//                     <div className='flex justify-center'>
//                         <h2 className="text-4xl md:text-3xl font-medium text-black">Ashram <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
//                             Gallery
//                         </span> </h2>
//                     </div>
//                     <div className="flex items-center justify-end mb-6">
//                         <div className="flex items-center space-x-4">
//                             {/* Slide Counter */}
//                             <div className="text-sm font-medium bg-white rounded-full px-3 py-1">
//                                 <span className="text-orange-600">{activeIndex + 1}</span>
//                                 <span className="text-gray-400"> / {images.length}</span>
//                             </div>

//                             {/* Play/Pause Button */}
//                             <button
//                                 onClick={toggleAutoplay}
//                                 className="bg-white rounded-full p-2 text-main border border-orange-300 transition-colors cursor-pointer"
//                                 aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
//                             >
//                                 {isPlaying ? (
//                                     <FaPause className='size-4' />
//                                 ) : (
//                                     <FaPlay className='size-4' />
//                                 )}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Main Slider */}
//                     <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4">
//                         <Swiper
//                             ref={swiperRef}
//                             modules={[Navigation, Autoplay, Pagination, EffectFade]}
//                             effect="fade"
//                             loop={true}
//                             speed={700}
//                             autoplay={{ delay: 1500, disableOnInteraction: false }}
//                             pagination={{
//                                 type: 'progressbar',
//                                 el: '.swiper-pagination',
//                                 progressbarFillClass: 'swiper-pagination-progressbar-fill',
//                             }}
//                             navigation={{
//                                 prevEl: '.slider-prev-btn',
//                                 nextEl: '.slider-next-btn',
//                             }}
//                             onSlideChange={() => setActiveIndex(swiperRef.current?.swiper.realIndex || 0)}
//                         >
//                             {images.map((src, index) => (
//                                 <SwiperSlide key={index}>
//                                     <div className="relative aspect-[16/2]">
//                                         <Image
//                                             src={src}
//                                             alt={`Ashram image ${index + 1}`}
//                                             width={700}
//                                             height={500}
//                                             className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
//                                             priority={index < 3}
//                                         />

//                                         {/* Gradient overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

//                                         {/* Fullscreen button */}
//                                         <button
//                                             onClick={() => openFullscreen(index)}
//                                             className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
//                                             aria-label="View fullscreen"
//                                         >
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                                 <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}

//                             {/* Custom progress bar */}
//                             <div className="swiper-pagination absolute top-0 left-0 right-0 h-1.5 bg-gray-300">
//                                 <div className="swiper-pagination-progressbar-fill bg-orange-500 h-full"></div>
//                             </div>
//                         </Swiper>

//                         {/* Custom navigation buttons */}
//                         <button className="slider-prev-btn absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M15 18l-6-6 6-6" />
//                             </svg>
//                         </button>
//                         <button className="slider-next-btn absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M9 18l6-6-6-6" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Thumbnails Bar */}
//                     <div className="rounded-lg bg-white p-2 shadow-md">
//                         <Swiper
//                             onSwiper={setThumbnailsSwiper}
//                             slidesPerView="auto"
//                             spaceBetween={10}
//                             centeredSlides={true}
//                             slideToClickedSlide={true}
//                             watchSlidesProgress={true}
//                             initialSlide={0}
//                             className="thumbnails-swiper"
//                         >
//                             {images.map((src, index) => (
//                                 <SwiperSlide
//                                     key={index}
//                                     className="max-w-[70px] cursor-pointer"
//                                     onClick={() => {
//                                         if (swiperRef.current && swiperRef.current.swiper) {
//                                             swiperRef.current.swiper.slideToLoop(index);
//                                         }
//                                     }}
//                                 >
//                                     <div className={`relative aspect-square overflow-hidden rounded-lg ${activeIndex === index ? 'ring-2 ring-orange-500' : 'ring-1 ring-gray-200'}`}>
//                                         <Image
//                                             src={src}
//                                             alt={`Thumbnail ${index + 1}`}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>

//             {/* Fullscreen View (Initially Hidden) */}
//             <div id="fullscreenView" className="fixed inset-0 bg-black/90 z-50 hidden">
//                 <button
//                     onClick={closeFullscreen}
//                     className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 z-10"
//                     aria-label="Close fullscreen view"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <line x1="18" y1="6" x2="6" y2="18"></line>
//                         <line x1="6" y1="6" x2="18" y2="18"></line>
//                     </svg>
//                 </button>

//                 <Swiper
//                     ref={mainSwiperRef}
//                     modules={[Navigation, Pagination]}
//                     loop={true}
//                     navigation={true}
//                     pagination={{
//                         type: 'fraction',
//                         el: '.fullscreen-pagination',
//                     }}
//                     className="h-full"
//                 >
//                     {images.map((src, index) => (
//                         <SwiperSlide key={index} className="flex items-center justify-center">
//                             <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-auto">
//                                 <Image
//                                     src={src}
//                                     alt={`Fullscreen image ${index + 1}`}
//                                     fill
//                                     className="object-contain"
//                                 />
//                             </div>
//                         </SwiperSlide>
//                     ))}

//                     <div className="fullscreen-pagination absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white rounded-full px-4 py-2 text-sm"></div>
//                 </Swiper>
//             </div>
//         </div>
//     );
// }

'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { FaPlay, FaPause } from "react-icons/fa";
import { BsFullscreenExit } from "react-icons/bs";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import 'swiper/css/navigation';

const images = [
    '/assets/image/ganga-arti.jpg',
    '/assets/image/food-place.jpg',
    '/assets/image/letter.jpg',
    '/assets/image/whitemen.jpg',
    '/assets/image/swami.jpg',
    '/assets/image/arti.jpg',
    '/assets/image/redroom.jpg',
    '/assets/image/lobby.jpg',
    '/assets/image/quote.jpg',
    '/assets/image/shavrav.jpg',
    '/assets/image/floor.jpg',
    '/assets/image/rooms.jpg',
    '/assets/image/gallery.jpg',
    '/assets/image/river.jpg',
];

export default function UserFriendlyAshramSlider() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [thumbnailsSwiper, setThumbnailsSwiper] = useState(null);
    const mainSwiperRef = useRef(null);

    // Handle autoplay toggle
    const toggleAutoplay = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            if (isPlaying) {
                swiperRef.current.swiper.autoplay.stop();
            } else {
                swiperRef.current.swiper.autoplay.start();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle fullscreen view
    const openFullscreen = (index) => {
        if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
            mainSwiperRef.current.swiper.slideToLoop(index);
            document.getElementById('fullscreenView').classList.remove('hidden');
        }
    };

    // Close fullscreen view
    const closeFullscreen = () => {
        document.getElementById('fullscreenView').classList.add('hidden');
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.on('slideChange', () => {
                setActiveIndex(swiperRef.current.swiper.realIndex);
                // Sync the thumbnail swiper
                if (thumbnailsSwiper) {
                    thumbnailsSwiper.slideTo(swiperRef.current.swiper.realIndex);
                }
            });
        }
    }, [swiperRef, thumbnailsSwiper]);

    return (
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className='flex justify-center'>
                        <h2 className="text-3xl md:text-4xl font-medium text-black">Ashram <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
                            Gallery
                        </span> </h2>
                    </div>
                    <div className="flex items-center justify-end mb-6">
                        <div className="flex items-center space-x-4">
                            {/* Slide Counter */}
                            <div className="text-sm font-medium bg-white rounded-full px-3 py-1">
                                <span className="text-orange-600">{activeIndex + 1}</span>
                                <span className="text-gray-400"> / {images.length}</span>
                            </div>

                            {/* Play/Pause Button */}
                            <button
                                onClick={toggleAutoplay}
                                className="bg-white rounded-full p-2 text-main border border-orange-300 transition-colors cursor-pointer"
                                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                            >
                                {isPlaying ? (
                                    <FaPause className='size-4' />
                                ) : (
                                    <FaPlay className='size-4' />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Main Slider */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Autoplay, Pagination, EffectFade]}
                            effect="fade"
                            loop={true}
                            speed={700}
                            autoplay={{ delay: 1500, disableOnInteraction: false }}
                            pagination={{
                                type: 'progressbar',
                                el: '.swiper-pagination',
                                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                            }}
                            navigation={{
                                prevEl: '.slider-prev-btn',
                                nextEl: '.slider-next-btn',
                            }}
                            onSlideChange={() => setActiveIndex(swiperRef.current?.swiper.realIndex || 0)}
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative aspect-[16/9]"> {/* Changed aspect ratio here */}
                                        <Image
                                            src={src}
                                            alt={`Ashram image ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}  // Enforce cover
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                            priority={index < 3}
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                        {/* Fullscreen button */}
                                        <button
                                            onClick={() => openFullscreen(index)}
                                            className="absolute bottom-4 right-4 bg-white/80 hover:bg-white lg:p-2 p-1 rounded-full shadow-lg transition-all"
                                            aria-label="View fullscreen"
                                        >
                                            <BsFullscreenExit className='' />
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Custom progress bar */}
                            <div className="swiper-pagination absolute top-0 left-0 right-0 h-1">
                                <div className="swiper-pagination-progressbar-fill bg-orange-500 h-full"></div>
                            </div>
                        </Swiper>

                        {/* Custom navigation buttons */}
                        <button className="slider-prev-btn absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 lg:size-10 size-6 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="slider-next-btn absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 lg:size-10 size-6 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    {/* Thumbnails Bar */}
                    <div className="rounded-lg bg-white p-2 shadow-md">
                        <Swiper
                            onSwiper={setThumbnailsSwiper}
                            slidesPerView="auto"
                            spaceBetween={10}
                            centeredSlides={true}
                            slideToClickedSlide={true}
                            watchSlidesProgress={true}
                            initialSlide={0}
                            className="thumbnails-swiper"
                        >
                            {images.map((src, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="max-w-[70px] cursor-pointer"
                                    onClick={() => {
                                        if (swiperRef.current && swiperRef.current.swiper) {
                                            swiperRef.current.swiper.slideToLoop(index);
                                        }
                                    }}
                                >
                                    <div className={`relative aspect-square overflow-hidden rounded-lg ${activeIndex === index ? 'ring-2 ring-orange-500' : 'ring-1 ring-gray-200'}`}>
                                        <Image
                                            src={src}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Fullscreen View (Initially Hidden) */}
            <div id="fullscreenView" className="fixed inset-0 bg-black/90 backdrop-blur-xs z-50 hidden">
                <button
                    onClick={closeFullscreen}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 z-10"
                    aria-label="Close fullscreen view"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <Swiper
                    ref={mainSwiperRef}
                    modules={[Navigation, Pagination]}
                    loop={true}
                    navigation={true}
                    pagination={{
                        type: 'fraction',
                        el: '.fullscreen-pagination',
                    }}
                    className="h-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center py-10">
                            <div className="relative w-full h-full max-w-4xl max-h-[100vh] mx-auto">
                                <Image
                                    src={src}
                                    alt={`Fullscreen image ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="fullscreen-pagination absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white rounded-full px-4 py-2 text-sm"></div>
                </Swiper>
            </div>
        </div>
    );
}   