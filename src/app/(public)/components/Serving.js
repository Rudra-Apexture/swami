// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';


// const Serving = () => {
//     const [isVideoOpen, setVideoOpen] = useState(false);

//     const videoUrl = "https://www.youtube.com/embed/KU45jWBn57Y?feature=oembed?playlist=KU45jWBn57Y&mute=0&autoplay=1&loop=0&controls=1&start=0&end=";

//     const toggleVideo = () => {
//         setVideoOpen(!isVideoOpen);
//     };

//     return (
//         <section className='Serving-Posts py-10'>
//             <div className='container mx-auto'>
//                 <h1 className='text-center font-semibold text-4xl text-prime'>Welcome to <span className='text-transparent bg-clip-text bg-linear-to-r from-[#FF5700]  to-[#ffb087]'> Sahajanand Wellness </span> </h1>
//                 <div className='flex justify-center item-center'>
//                     <p className='text-lg font-medium mt-5 text-gray-800 text-center max-w-6xl item-center'>
//                         Sahajanand Wellness Trust is a religious trust registered in Uttarakhand. This trust is mainly dedicated to religious, educational, and health related activities in and around Rishikesh. Trust maintains dharmshala, gaushala, Veda-pathshala, yogshala, yagyashala, annakshetra (free food for saints and needy), health center, and conducts daily Ganga Arti. All the activities of the trust are run by donations.
//                     </p>
//                 </div>

//                 {/* Main */}
//                 <div className="flex gap-8 mt-10">
//                     {/* Image and Button */}
//                     <div className="relative rounded-3xl overflow-hidden">
//                         <Image
//                             src="/assets/image/aarti.webp" // Replace with your actual image path
//                             alt="Serving Devotees"
//                             width={600}  // Adjust width as needed
//                             height={400} // Adjust height as needed
//                             className="object-cover"
//                         />
//                         <button
//                             onClick={toggleVideo}
//                             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center hover:bg-orange-700 transition-colors"
//                         >
//                             {/* Play Icon (Replace with your preferred icon) */}
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="white"
//                                 className="w-8 h-8"
//                             >
//                                 <path d="M8 5v14l11-7z" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Text Content */}
//                     <div className="flex-1">
//                         <h2 className="text-4xl/11 font-semibold mb-4 text-primary">Serving Devotees and <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF5700]  to-[#ffb087]">Communities in Rishikesh</span></h2>
//                         <p className="text-gray-700 font-medium text-xl">
//                             Sahajanand Wellness Trust, a registered religious trust in Uttarakhand,
//                             is dedicated to religious, educational, and health-related activities in
//                             Rishikesh.
//                         </p>
//                     </div>

//                     {/* Video Modal */}
//                     {isVideoOpen && (
//                         <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
//                             <div className="relative w-4/5 max-w-3xl">
//                                 <button
//                                     onClick={toggleVideo}
//                                     className="absolute top-2 right-2 text-white hover:text-gray-300"
//                                 >
//                                     {/* Close Icon (Replace with your preferred icon) */}
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 24 24"
//                                         fill="currentColor"
//                                         className="w-8 h-8"
//                                     >
//                                         <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
//                                     </svg>
//                                 </button>
//                                 {/* Replace with your actual video player component/code */}
//                                 <iframe
//                                     width="100%"
//                                     height="500"  // Adjust the height as needed
//                                     src={videoUrl}
//                                     title="YouTube video player"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                 ></iframe>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Serving

// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { FaPlay } from "react-icons/fa";
// const Serving = () => {
//     const [isVideoOpen, setVideoOpen] = useState(false);
//     const videoModalRef = useRef(null);  // Ref for the modal container

//     const videoUrl = "https://www.youtube.com/embed/KU45jWBn57Y?feature=oembed?playlist=KU45jWBn57Y&mute=0&autoplay=1&loop=0&controls=1&start=0&end=";

//     const toggleVideo = () => {
//         setVideoOpen(!isVideoOpen);
//     };

//     // Close the modal when clicking outside
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (videoModalRef.current && !videoModalRef.current.contains(event.target)) {
//                 setVideoOpen(false);
//             }
//         }

//         if (isVideoOpen) {
//             document.addEventListener("mousedown", handleClickOutside); // Use mousedown for more responsive click detection
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isVideoOpen]);


//     return (
//         <section className='Serving-Posts py-10'>
//             <div className='container mx-auto'>
//                 <h1 className='text-center font-semibold text-4xl text-prime '>Welcome to <span className='text-transparent bg-clip-text bg-linear-to-r from-main to-[#ffb087]'> Sahajanand Wellness </span> </h1>
//                 <div className='flex justify-center item-center'>
//                     <p className='text-lg font-medium mt-5 text-gray-800 text-center max-w-6xl item-center'>
//                         Sahajanand Wellness Trust is a religious trust registered in Uttarakhand. This trust is mainly dedicated to religious, educational, and health related activities in and around Rishikesh. Trust maintains dharmshala, gaushala, Veda-pathshala, yogshala, yagyashala, annakshetra (free food for saints and needy), health center, and conducts daily Ganga Arti. All the activities of the trust are run by donations.
//                     </p>
//                 </div>

//                 {/* Main Part */}
//                 <div className="flex gap-8 mt-10">
//                     {/* Image and Button */}
//                     <div className="relative rounded-3xl overflow-hidden">
//                         <Image
//                             src="/assets/image/aarti.webp" // Replace with your actual image path
//                             alt="Serving Devotees"
//                             width={600}
//                             height={400}
//                             className="object-cover"
//                         />
//                         <button
//                             onClick={toggleVideo}
//                             className="absolute button cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center hover:bg-orange-700 duration-300 transition-colors"
//                         >
//                             <FaPlay className='size-6 text-white' />
//                         </button>

//                     </div>

//                     {/* Text Content */}
//                     <div className="flex-1">
//                         <h2 className="text-4xl/10 font-semibold mb-4 text-prime">Serving Devotees and <span className="text-transparent bg-clip-text bg-linear-to-r from-main to-[#ffb087]">Communities in Rishikesh</span></h2>
//                         <p className="text-gray-700 font-medium text-xl">
//                             Sahajanand Wellness Trust, a registered religious trust in Uttarakhand,
//                             is dedicated to religious, educational, and health-related activities in
//                             Rishikesh.
//                         </p>
//                     </div>

//                     {/* Video Modal */}
//                     {isVideoOpen && (
//                         <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//                             <div className="relative w-full max-w-3xl" ref={videoModalRef}>
//                                 <iframe
//                                     width="100%"
//                                     height="500"  // Adjust the height as needed
//                                     src={videoUrl}
//                                     title="YouTube video player"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                     className='rounded-md'
//                                 ></iframe>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Serving

// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { FaPlay } from "react-icons/fa";

// const Serving = () => {
//     const [isVideoOpen, setVideoOpen] = useState(false);
//     const [activeTab, setActiveTab] = useState('about');
//     const videoModalRef = useRef(null);
//     const videoUrl1 = "https://www.youtube.com/embed/KU45jWBn57Y?feature=oembed?playlist=KU45jWBn57Y&mute=0&autoplay=0&loop=no&controls=0&start=0&end="; // Corrected URL
//     const videoUrl2 = "https://www.youtube.com/embed/V2CrSWlqkgA?autoplay=0&mute=0&loop=0&controls=1"; // Corrected URL
//     const [currentVideoUrl, setCurrentVideoUrl] = useState(''); // To store the currently active video URL


//     const openVideoModal = (url) => {
//         setCurrentVideoUrl(url);
//         setVideoOpen(true);
//     };

//     const closeVideoModal = () => {
//         setVideoOpen(false);
//         setCurrentVideoUrl(''); // Reset the URL when closing
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (videoModalRef.current && !videoModalRef.current.contains(event.target)) {
//                 closeVideoModal();
//             }
//         }

//         if (isVideoOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//             document.body.style.overflow = 'auto';
//         };
//     }, [isVideoOpen]);

//     return (
//         <>
//             <section className="md:py-14 py-10 relative overflow-hiddenc bg-white">
//                 <div className="container mx-auto relative px-4">
//                     {/* Header */}
//                     <div className="text-center max-w-6xl mx-auto mb-10 relative z-0">
//                         <h1 className="text-3xl lg:text-4xl font-bold mb-6">
//                             <span className="text-prime">Welcome to </span>
//                             <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                                 Sahajanand Wellness
//                             </span>
//                         </h1>
//                         <p className="md:text-lg text-md text-gray-700 font-medium">
//                             Sahajanand Wellness Trust is a religious trust registered in Uttarakhand.This trust is mainly dedicated to religious, educational, and health related activities in and around Rishikesh. Trust maintains dharmshala, gaushala, Veda-pathshala, yogshala, yagyashala, annakshetra (free food for saints and needy), health center, and conducts daily Ganga Arti. All the activities of the trust are run by donations.
//                         </p>
//                     </div>

//                     {/* Main Content */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-6 items-center">
//                         {/* Left Side - Media */}
//                         <div className="relative z-10">
//                             <div className="relative group">
//                                 {/* BeHind Image */}
//                                 <div className="absolute inset-0 bg-linear-to-b from-main via-white to-white rounded-2xl transform rotate-6 transition-all duration-300"></div>
//                                 <div className="relative overflow-hidden rounded-2xl">
//                                     <Image
//                                         src="/assets/image/aarti.webp"
//                                         alt="Ganga Arti at Sahajanand Wellness Trust"
//                                         width={600}
//                                         height={450}
//                                         className="object-cover w-full h-[450px]"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                                     <button
//                                         onClick={() => openVideoModal(videoUrl1)}
//                                         className="absolute bottom-8 cursor-pointer left-8 flex items-center gap-3 bg-white/90 backdrop-blur-sm text-main md:py-3 px-4 py-2 md:px-6 rounded-full group"
//                                     >
//                                         <FaPlay className="lg:size-5 size-4" />
//                                         <span className="font-medium text-sm md:text-base">Watch Ganga Arti</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Side - Content */}
//                         <div className="relative z-10">
//                             <div className="bg-white/80 backdrop-blur-sm lg:p-6">
//                                 <h2 className="lg:text-4xl/10 text-2xl font-bold md:mb-4 mb-2">
//                                     <span className="text-prime">Serving Devotees and </span>
//                                     <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                                         Communities in Rishikesh
//                                     </span>
//                                 </h2>

//                                 {/* Tab Content */}
//                                 <p className='md:text-lg text-md text-gray-700 font-medium'>
//                                     Sahajanand Wellness Trust, a registered religious trust in Uttarakhand, this place is so beautifull then another is dedicated to religious, educational, and health-related activities in Rishikesh.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Video Modal */}
//                 {isVideoOpen && (
//                     <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//                         <div className="relative w-3/5 max-w-4xl" ref={videoModalRef}>
//                             <iframe
//                                 width="100%"
//                                 height="500"
//                                 src={currentVideoUrl}
//                                 title="Video"
//                                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                                 className="rounded-lg"
//                             ></iframe>
//                         </div>
//                     </div>
//                 )}
//             </section>

//             <section className="md:py-14 py-10 relative overflow-hidden bg-white">
//                 <div className="container mx-auto relative px-4">
//                     {/* Main Content */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 items-center">
//                         {/* Left Side - Media */}
//                         <div className="relative z-10 order-2">
//                             <div className="relative group">
//                                 {/* BeHind Image */}
//                                 <div className="absolute inset-0 bg-linear-to-b from-main via-white to-white rounded-2xl transform -rotate-6 transition-all duration-300"></div>
//                                 <div className="relative overflow-hidden rounded-2xl">
//                                     <Image
//                                         src="/assets/image/banner-video-1.jpg"
//                                         alt="Ganga Arti at Sahajanand Wellness Trust"
//                                         width={600}
//                                         height={450}
//                                         className="object-cover w-full h-[450px]"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                                     <button
//                                         onClick={() => openVideoModal(videoUrl2)}
//                                         className="absolute bottom-8 cursor-pointer right-4 flex items-center gap-3 bg-white/90 backdrop-blur-sm text-main md:py-3 px-4 py-2 md:px-6 rounded-full group"
//                                     >
//                                         <FaPlay className="lg:size-5 size-4" />
//                                         <span className="font-medium text-sm md:text-base">Watch Best Gift</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Side - Content */}
//                         <div className="relative z-10 order-1">
//                             <div className="bg-white/80 backdrop-blur-sm lg:p-6">
//                                 <h2 className="lg:text-4xl/10 text-2xl font-bold md:mb-4 mb-2">
//                                     <span className="text-prime">Enhancing Serenity and  </span>
//                                     <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                                         Charity Work
//                                     </span>
//                                 </h2>

//                                 {/* Tab Content */}
//                                 <p className='md:text-lg text-md text-gray-700 font-medium'>
//                                     At our ashram, we regretfully cannot offer room service. Meals are exclusively provided in the langar hall for breakfast, lunch, and dinner. We kindly request visitors to help maintain the tranquil environment of the ashram.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };
// export default Serving;

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const Serving = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const videoModalRef = useRef(null);
    const videoUrl1 = "https://www.youtube.com/embed/KU45jWBn57Y?feature=oembed?playlist=KU45jWBn57Y&mute=0&autoplay=0&loop=no&controls=0&start=0&end="; // Corrected URL
    const videoUrl2 = "https://www.youtube.com/embed/V2CrSWlqkgA?autoplay=0&mute=0&loop=0&controls=1"; // Corrected URL
    const [currentVideoUrl, setCurrentVideoUrl] = useState(''); // To store the currently active video URL


    const openVideoModal = (url) => {
        setCurrentVideoUrl(url);
        setVideoOpen(true);
    };

    const closeVideoModal = () => {
        setVideoOpen(false);
        setCurrentVideoUrl(''); // Reset the URL when closing
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (videoModalRef.current && !videoModalRef.current.contains(event.target)) {
                closeVideoModal();
            }
        }

        if (isVideoOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isVideoOpen]);

    const modalVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const videoVariants = {
        initial: { scale: 0, rotate: 30, opacity: 0 },
        animate: { scale: 1, rotate: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
        exit: { scale: 0.5, rotate: -15, opacity: 0, transition: { duration: 0.2 } }
    };


    return (
        <>
            <section className="md:py-14 py-10 relative overflow-hiddenc bg-white">
                <div className="container mx-auto relative px-4">
                    {/* Header */}
                    <div className="text-center max-w-6xl mx-auto mb-10 relative z-0">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                            <span className="text-prime">Welcome to </span>
                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                Sahajanand Wellness
                            </span>
                        </h1>
                        <p className="md:text-lg text-md text-gray-700 font-medium">
                            Sahajanand Wellness Trust is a religious trust registered in Uttarakhand.This trust is mainly dedicated to religious, educational, and health related activities in and around Rishikesh. Trust maintains dharmshala, gaushala, Veda-pathshala, yogshala, yagyashala, annakshetra (free food for saints and needy), health center, and conducts daily Ganga Arti. All the activities of the trust are run by donations.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-6 items-center">
                        {/* Left Side - Media */}
                        <div className="relative z-10">
                            <div className="relative group">
                                {/* BeHind Image */}
                                <div className="absolute inset-0 bg-linear-to-b from-main via-white to-white rounded-2xl transform md:rotate-6 rotate-4 transition-all duration-300"></div>
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        src="/assets/image/aarti.webp"
                                        alt="Ganga Arti at Sahajanand Wellness Trust"
                                        width={600}
                                        height={450}
                                        className="object-cover w-full h-[450px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <button
                                        onClick={() => openVideoModal(videoUrl1)}
                                        className="absolute bottom-8 cursor-pointer left-8 flex items-center gap-3 bg-white/90 backdrop-blur-sm text-main md:py-3 px-4 py-2 md:px-6 rounded-full group"
                                    >
                                        <FaPlay className="lg:size-5 size-4" />
                                        <span className="font-medium text-sm md:text-base">Watch Ganga Arti</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="relative z-10">
                            <div className="bg-white/80 backdrop-blur-sm lg:p-6">
                                <h2 className="lg:text-4xl/10 text-2xl font-bold md:mb-4 mb-2">
                                    <span className="text-prime">Serving Devotees and </span>
                                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                        Communities in Rishikesh
                                    </span>
                                </h2>

                                {/* Tab Content */}
                                <p className='md:text-lg text-md text-gray-700 font-medium'>
                                    Sahajanand Wellness Trust, a registered religious trust in Uttarakhand, this place is so beautifull then another is dedicated to religious, educational, and health-related activities in Rishikesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {isVideoOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                            variants={modalVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <motion.div
                                className="relative md:w-3/5 w-full max-w-4xl"
                                ref={videoModalRef}
                                variants={videoVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <iframe
                                    width="100%"
                                    height="500"
                                    src={currentVideoUrl}
                                    title="Video"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            <section className="md:py-14 py-10 relative overflow-hidden bg-white">
                <div className="container mx-auto relative px-4">
                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 items-center">
                        {/* Left Side - Media */}
                        <div className="relative z-10 lg:order-2 order-1">
                            <div className="relative group">
                                {/* BeHind Image */}
                                <div className="absolute inset-0 bg-linear-to-b from-main via-white to-white rounded-2xl transform md:-rotate-6 -rotate-4 transition-all duration-300"></div>
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        src="/assets/image/banner-video-1.jpg"
                                        alt="Ganga Arti at Sahajanand Wellness Trust"
                                        width={600}
                                        height={450}
                                        className="object-cover w-full h-[450px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <button
                                        onClick={() => openVideoModal(videoUrl2)}
                                        className="absolute bottom-8 cursor-pointer right-4 flex items-center gap-3 bg-white/90 backdrop-blur-sm text-main md:py-3 px-4 py-2 md:px-6 rounded-full group"
                                    >
                                        <FaPlay className="lg:size-5 size-4" />
                                        <span className="font-medium text-sm md:text-base">Watch Best Gift</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="relative z-10 lg:order-1 order-2">
                            <div className="bg-white/80 backdrop-blur-sm lg:p-6">
                                <h2 className="lg:text-4xl/10 text-2xl font-bold md:mb-4 mb-2">
                                    <span className="text-prime">Enhancing Serenity and  </span>
                                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                        Charity Work
                                    </span>
                                </h2>

                                {/* Tab Content */}
                                <p className='md:text-lg text-md text-gray-700 font-medium'>
                                    At our ashram, we regretfully cannot offer room service. Meals are exclusively provided in the langar hall for breakfast, lunch, and dinner. We kindly request visitors to help maintain the tranquil environment of the ashram.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Serving;


