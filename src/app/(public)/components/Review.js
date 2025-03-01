// 'use client';
// import { useState, useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const reviews = [
//   {
//     id: 1,
//     quote: "I have traveled all over the world and stayed in amazing places, but this is indeed in a category of its own.",
//     rating: 5,
//     author: "John Doe",
//     image: "/assets/image/whitemen.jpg", // Replace with actual path
//   },
//   {
//     id: 2,
//     quote: "An absolutely incredible experience! The service was impeccable and the surroundings breathtaking.",
//     rating: 4,
//     author: "Jane Smith",
//     image: "/assets/image/swami.jpg",// Replace with actual path
//   },
//   {
//     id: 3,
//     quote: "A truly spiritual place that exceeded all expectations. I highly recommend this ashram to anyone seeking peace.",
//     rating: 5,
//     author: "Peter Jones",
//     image: "/assets/image/shavrav.jpg", // Replace with actual path
//   },
//   // Add more reviews here
// ];

// const ReviewCard = ({ review }) => {
//   return (
//     <div className='flex justify-center'>
//       <div className="bg-gradient-to-b max-w-3xl from-main to-orange-100 rounded-2xl p-8 text-center shadow-lg">
//         <div className="text-white text-xl italic mb-4 leading-relaxed">
//           "{review.quote}"
//         </div>
//         <div className="flex justify-center mb-4 space-x-1">
//           {[...Array(review.rating)].map((_, index) => (
//             <FaStar key={index} className="text-white " />
//           ))}
//         </div>
//         <div className="flex justify-center">
//           <div className="relative size-20 rounded-full overflow-hidden">
//             <Image
//               src={review.image}
//               alt={review.author}
//               fill
//               style={{ objectFit: 'cover' }}
//               className="object-cover "
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TestimonialSlider = () => {
//   const navigationPrevRef = useRef(null);
//   const navigationNextRef = useRef(null);

//   return (
//     <div className="py-10 bg-gray-50">
//       <div className="container mx-auto">
//         <h1 className='md:text-4xl text-3xl/10 font-bold text-gray-900 mb-8 text-center'>
//           Guest <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
//             Reviews
//           </span>
//         </h1>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={50}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             prevEl: navigationPrevRef.current,
//             nextEl: navigationNextRef.current,
//           }}
//           pagination={{ clickable: true }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = navigationPrevRef.current;
//             swiper.params.navigation.nextEl = navigationNextRef.current;
//           }}
//           breakpoints={{
//             1024: { slidesPerView: 1 },
//           }}
//           className="relative"
//         >
//           {reviews.map((review) => (
//             <SwiperSlide key={review.id}>
//               <ReviewCard review={review} />
//             </SwiperSlide>
//           ))}

//           {/* Custom Navigation Buttons */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
//             <button ref={navigationPrevRef} className="bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-500 rounded-full p-2 shadow-md">
//               <FaArrowRightLong />
//             </button>
//           </div>
//           <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
//             <button ref={navigationNextRef} className="bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-500 rounded-full p-2 shadow-md">
//               <FaArrowLeftLong />
//             </button>
//           </div>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export defaul  t TestimonialSlider;


// 'use client';
// import { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import { FaStar } from 'react-icons/fa';
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const reviews = [
//   {
//     id: 1,
//     quote: "I have traveled all over the world and stayed in amazing places, but this is indeed in a category of its own.",
//     rating: 5,
//     author: "John Doe",
//     image: "/assets/image/whitemen.jpg", // Replace with actual path
//   },
//   {
//     id: 2,
//     quote: "An absolutely incredible experience! The service was impeccable and the surroundings breathtaking.",
//     rating: 4,
//     author: "Jane Smith",
//     image: "/assets/image/swami.jpg",// Replace with actual path
//   },
//   {
//     id: 3,
//     quote: "A truly spiritual place that exceeded all expectations. I highly recommend this ashram to anyone seeking peace.",
//     rating: 5,
//     author: "Peter Jones",
//     image: "/assets/image/shavrav.jpg", // Replace with actual path
//   },
// ];

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 mx-auto max-w-xl">
//       <div className="flex items-center justify-center mb-4">
//         <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-400">
//           <Image
//             src={review.image}
//             alt={review.author}
//             fill
//             style={{ objectFit: 'cover' }}
//           />
//         </div>
//       </div>

//       <div className="flex justify-center mb-4">
//         {[...Array(5)].map((_, i) => (
//           <FaStar
//             key={i}
//             className={i < review.rating ? "text-orange-400" : "text-gray-200"}
//             size={20}
//           />
//         ))}
//       </div>

//       <p className="text-gray-700 text-center italic mb-4">"{review.quote}"</p>

//       <p className="text-center font-medium text-gray-800">{review.author}</p>
//     </div>
//   );
// };

// const SimpleReviewsPage = () => {
//   const navigationPrevRef = useRef(null);
//   const navigationNextRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h1 className="text-center text-3xl font-bold mb-10">
//           Guest <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Reviews</span>
//         </h1>

//         <div className="relative max-w-4xl mx-auto">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{
//               delay: 1500,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             onBeforeInit={(swiper) => {
//               swiper.params.navigation.prevEl = navigationPrevRef.current;
//               swiper.params.navigation.nextEl = navigationNextRef.current;
//             }}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//             className="pb-12"
//           >
//             {reviews.map((review) => (
//               <SwiperSlide key={review.id}>
//                 <ReviewCard review={review} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Buttons */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
//             <button
//               ref={navigationPrevRef}
//               className="bg-white hover:bg-gray-300 text-orange-500 rounded-full p-3 shadow-md focus:outline-none"
//               aria-label="Previous review"
//             >
//               <FaArrowLeftLong />
//             </button>
//           </div>

//           <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
//             <button
//               ref={navigationNextRef}
//               className="bg-white hover:bg-gray-300 text-orange-500 rounded-full p-3 shadow-md focus:outline-none"
//               aria-label="Next review"
//             >
//               <FaArrowRightLong />
//             </button>
//           </div>
//         </div>

//         {/* Simple Counter */}
//         <div className="text-center mt-4">
//           <span className="inline-block px-4 py-2 bg-white rounded-full shadow-sm">
//             <span className="font-medium text-orange-500">{activeIndex + 1}</span>
//             <span className="text-gray-400"> / </span>
//             <span className="text-gray-700">{reviews.length}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimpleReviewsPage;


// 'use client';
// import { useState, useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// import Image from 'next/image';
// import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// const reviews = [
//   {
//     id: 1,
//     quote: "I have traveled all over the world and stayed in amazing places, but this is indeed in a category of its own.",
//     rating: 5,
//     author: "John Doe",
//     location: "New York, USA",
//     image: "/assets/image/whitemen.jpg",
//     date: "February 2025"
//   },
//   {
//     id: 2,
//     quote: "An absolutely incredible experience! The service was impeccable and the surroundings breathtaking.",
//     rating: 4,
//     author: "Jane Smith",
//     location: "London, UK",
//     image: "/assets/image/swami.jpg",
//     date: "January 2025"
//   },
//   {
//     id: 3,
//     quote: "A truly spiritual place that exceeded all expectations. I highly recommend this ashram to anyone seeking peace.",
//     rating: 5,
//     author: "Peter Jones",
//     location: "Sydney, Australia",
//     image: "/assets/image/shavrav.jpg",
//     date: "December 2024"
//   },
//   // Add more reviews here
// ];

// const ReviewCard = ({ review, isActive }) => {
//   return (
//     <div className={`transition-all duration-500 transform ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'}`}>
//       <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl mx-4 md:mx-8 my-6">
//         {/* Top decorative gradient bar */}
//         <div className="h-3 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600"></div>

//         <div className="p-8 md:p-10">
//           {/* Quote icon */}
//           <div className="absolute top-8 left-8 text-orange-200 opacity-30">
//             <FaQuoteLeft size={40} />
//           </div>

//           {/* Review content */}
//           <div className="mt-6 mb-8 text-gray-700 text-lg md:text-xl italic font-light leading-relaxed px-6 text-center">
//             {review.quote}
//           </div>

//           {/* Bottom quote icon */}
//           <div className="absolute bottom-24 right-8 text-orange-200 opacity-30">
//             <FaQuoteRight size={40} />
//           </div>

//           {/* Stars */}
//           <div className="flex justify-center mb-6 space-x-2">
//             {[...Array(5)].map((_, index) => (
//               <FaStar 
//                 key={index} 
//                 className={index < review.rating ? "text-amber-500" : "text-gray-300"} 
//                 size={24}
//               />
//             ))}
//           </div>

//           {/* Divider */}
//           <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>

//           {/* Author info */}
//           <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6">
//             <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-orange-100 shadow-md mb-4 md:mb-0">
//               <Image
//                 src={review.image}
//                 alt={review.author}
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 className="object-cover"
//               />
//             </div>
//             <div className="text-center md:text-left">
//               <h3 className="text-xl font-bold text-gray-800">{review.author}</h3>
//               <p className="text-gray-500">{review.location}</p>
//               <p className="text-orange-500 text-sm">{review.date}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TestimonialSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const navigationPrevRef = useRef(null);
//   const navigationNextRef = useRef(null);
//   const swiperRef = useRef(null);

//   return (
//     <div className="py-16 bg-gradient-to-b from-gray-50 to-orange-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             What Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Guests</span> Say
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">Discover authentic experiences shared by visitors who have embraced the transformative journey at our ashram.</p>
//         </div>

//         <div className="relative max-w-5xl mx-auto">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//             effect="coverflow"
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: false,
//             }}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             centeredSlides={true}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             pagination={{ 
//               clickable: true,
//               dynamicBullets: true,
//               renderBullet: function (index, className) {
//                 return `<span class="${className} bg-orange-500"></span>`;
//               },
//             }}
//             onBeforeInit={(swiper) => {
//               swiper.params.navigation.prevEl = navigationPrevRef.current;
//               swiper.params.navigation.nextEl = navigationNextRef.current;
//               swiperRef.current = swiper;
//             }}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           >
//             {reviews.map((review, index) => (
//               <SwiperSlide key={review.id}>
//                 <ReviewCard review={review} isActive={index === activeIndex} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:left-4 z-10">
//             <button 
//               ref={navigationPrevRef} 
//               className="bg-white hover:bg-orange-50 text-orange-500 hover:text-orange-600 rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
//             >
//               <FaArrowLeftLong size={20} />
//             </button>
//           </div>
//           <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:right-4 z-10">
//             <button 
//               ref={navigationNextRef} 
//               className="bg-white hover:bg-orange-50 text-orange-500 hover:text-orange-600 rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
//             >
//               <FaArrowRightLong size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;


// 'use client';
// import { useState, useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const reviews = [
//   {
//     id: 1,
//     quote: "I have traveled all over the world and stayed in amazing places, but this is indeed in a category of its own. The tranquility and spiritual atmosphere are unmatched.",
//     rating: 5,
//     author: "John Doe",
//     image: "/assets/image/whitemen.jpg", // Replace with actual path
//   },
//   {
//     id: 2,
//     quote: "An absolutely incredible experience! The service was impeccable and the surroundings breathtaking.  I felt a sense of peace I've never experienced before.",
//     rating: 4,
//     author: "Jane Smith",
//     image: "/assets/image/swami.jpg",// Replace with actual path
//   },
//   {
//     id: 3,
//     quote: "A truly spiritual place that exceeded all expectations. I highly recommend this ashram to anyone seeking peace and rejuvenation.  The food was also amazing!",
//     rating: 5,
//     author: "Peter Jones",
//     image: "/assets/image/shavrav.jpg", // Replace with actual path
//   },
//   // Add more reviews here
// ];

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="relative p-6 rounded-lg shadow-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:scale-105">
//       {/* Quote Icons */}
//       <div className="absolute top-4 left-4 text-gray-400 dark:text-gray-600">
//         <FaQuoteLeft size={20} />
//       </div>
//       <div className="absolute bottom-4 right-4 text-gray-400 dark:text-gray-600">
//         <FaQuoteRight size={20} />
//       </div>

//       {/* Quote Text */}
//       <p className="text-lg italic leading-relaxed mb-4">
//         {review.quote}
//       </p>

//       {/* Author Info & Rating */}
//       <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700">
//         <div className="flex items-center space-x-4">
//           <div className="relative w-12 h-12 rounded-full overflow-hidden">
//             <Image
//               src={review.image}
//               alt={review.author}
//               fill
//               style={{ objectFit: 'cover' }}
//               className="object-cover"
//             />
//           </div>
//           <div>
//             <p className="font-semibold">{review.author}</p>
//             <div className="flex space-x-1 text-sm text-yellow-500">
//               {[...Array(review.rating)].map((_, index) => (
//                 <FaStar key={index} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TestimonialSlider = () => {
//   const navigationPrevRef = useRef(null);
//   const navigationNextRef = useRef(null);

//   return (
//     <div className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       <div className="container mx-auto px-4">
//         <h1 className="md:text-5xl text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           Guest <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
//             Reviews
//           </span>
//         </h1>

//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{
//               delay: 6000,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             pagination={{ clickable: true }}
//             onBeforeInit={(swiper) => {
//               swiper.params.navigation.prevEl = navigationPrevRef.current;
//               swiper.params.navigation.nextEl = navigationNextRef.current;
//             }}
//             breakpoints={{
//               1024: { slidesPerView: 3 },
//             }}
//             className="testimonial-swiper"
//           >
//             {reviews.map((review) => (
//               <SwiperSlide key={review.id}>
//                 <ReviewCard review={review} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10">
//             <button ref={navigationPrevRef} className="bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-500 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110">
//               <FaArrowLeftLong />
//             </button>
//           </div>
//           <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10">
//             <button ref={navigationNextRef} className="bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-500 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110">
//               <FaArrowRightLong />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

'use client';
import Image from 'next/image';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    quote: "I have traveled all over the world and stayed in amazing places, but this is indeed in a category of its own. The tranquility and spiritual atmosphere are unmatched.",
    rating: 5,
    author: "Saurav Ranakoti",
    image: "/assets/image/whitemen.jpg", // Replace with actual path
  },
  {
    id: 2,
    quote: "An absolutely incredible experience! The service was impeccable and the surroundings breathtaking.  I felt a sense of peace I've never experienced before.",
    rating: 4,
    author: "Padmanabha Swamy",
    image: "/assets/image/swami.jpg",// Replace with actual path
  },
  {
    id: 3,
    quote: "A truly spiritual place that exceeded all expectations. I highly recommend this ashram to anyone seeking peace and rejuvenation.  The food was also amazing!",
    rating: 5,
    author: "Saurav Ranakoti",
    image: "/assets/image/shavrav.jpg", // Replace with actual path
  },
  // Add more reviews here
];

const ReviewCard = ({ review }) => {
  return (
    <div className="relative lg:p-8 p-6 rounded-xl shadow-md border border-gray-300 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
      {/* Quote Icons */}
      <div className="absolute top-4 lg:left-4 left-2 text-main/50">
        <FaQuoteLeft size={12} />
      </div>
      <div className="absolute lg:top-34 bottom-22 lg:right-10 right-8 text-main/50">
        <FaQuoteRight size={12} />
      </div>

      {/* Quote Text */}
      <p className="text-lg italic leading-6 lg:mb-8 mb-4 p-2 md:p-0">
        {review.quote}
      </p>

      {/* Author Info & Rating */}
      <div className="flex items-center justify-between lg:pt-5 pt-2.5 border-t border-gray-300 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="relative lg:size-14 size-10 rounded-full overflow-hidden">
            <Image
              src={review.image}
              alt={review.author}
              width={150}
              height={100}
              style={{ objectFit: 'cover' }}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="font-medium text-prime">{review.author}</p>
            <div className="flex space-x-0.5 text-sm text-yellow-500">
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialList = () => {

  return (
    <div className="pb-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="md:text-4xl text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Guest <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
            Reviews
          </span>
        </h1>

        <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
