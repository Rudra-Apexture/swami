// "use client";

// const { FaRegShareFromSquare } = require("react-icons/fa6");?

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const AshramGallery = () => {
//     const [activeTab, setActiveTab] = useState('shri');  // 'shri', 'ganga', 'room'
//     const [images, setImages] = useState([]);

//     const imageData = {
//         shri: [
//             '/assets/image/gallery-room-01.png',
//             '/assets/image/river.png',
//             '/assets/image/gallery-room-02.png',
//             '/assets/image/gallery-room-06.png',
//             '/assets/image/gallery-room-04.png',
//             '/assets/image/gallery-room-05.png',
//             '/assets/image/gallery-hotel.png',
//             '/assets/image/gallery-hotel-lobby-07.png',
//             '/assets/image/gallery-hotel-lobby-07.png',
//         ],
//         ganga: [
//             '/assets/image/GangaGhat.png',
//             '/assets/image/ghat-lend.png',
//             '/assets/image/ghat-river.png',
//             '/assets/image/swamiharidas.png',
//             '/assets/image/ganga-aarti.png',
//             '/assets/image/river-ghat.jpg',
//             '/assets/image/gallery-ghatriver.png',
//             '/assets/image/acharya-swami.png',
//             '/assets/image/ashram-team.png',
//         ],
//         room: [
//             '/assets/image/room1.jpg',
//             '/assets/image/room2.jpg',
//             '/assets/image/room3.jpg',
//             '/assets/image/room4.jpg',
//             '/assets/image/room5.jpg',
//             '/assets/image/room6.jpg',
//             '/assets/image/room7.jpg',
//             '/assets/image/room8.jpg',
//         ],
//     };

//     useEffect(() => {
//         // Load images based on the active tab
//         setImages(imageData[activeTab] || []);
//     }, [activeTab]);

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="bg-gray-50 py-12">
//             <div className="container mx-auto px-4">
//                 {/* Title */}
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
//                     Ashram Gallery
//                 </h2>

//                 {/* Tab Navigation */}
//                 <div className="flex justify-center space-x-5 mb-6">
//                     <button
//                         className={`px-3.5 py-2 rounded-md font-medium ${activeTab === 'shri'
//                             ? 'border border-main text-main'
//                             : 'bg-white text-gray-700 hover:bg-orange-50'
//                             }`}
//                         onClick={() => handleTabClick('shri')}
//                     >
//                         Shri Swaminarayan Ashram
//                     </button>
//                     <button
//                         className={`px-3.5 py-2 rounded-md font-medium ${activeTab === 'ganga'
//                             ? 'border border-main text-main'
//                             : 'bg-white text-gray-700 hover:bg-orange-50'
//                             }`}
//                         onClick={() => handleTabClick('ganga')}
//                     >
//                         Ganga River
//                     </button>
//                     <button
//                         className={`px-3.5 py-2 rounded-md font-medium ${activeTab === 'room'
//                             ? 'border border-main text-main'
//                             : 'bg-white text-gray-700 hover:bg-orange-50'
//                             }`}
//                         onClick={() => handleTabClick('room')}
//                     >
//                         Room
//                     </button>
//                 </div>

//                 {/* Image Gallery */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {images.map((image, index) => (
//                         <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
//                             <Image
//                                 src={image}
//                                 alt={`Gallery Image ${index + 1}`}
//                                 width={350}
//                                 height={450}
//                                 className="object-cover w-full h-4"
//                                 layout="responsive"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AshramGallery;

// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const AshramGallery = () => {
//     const [activeTab, setActiveTab] = useState('shri');
//     const [images, setImages] = useState([]);
//     const [lightboxOpen, setLightboxOpen] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);

//     // Enhanced image data with titles and descriptions
//     const imageData = {
//         shri: [
//             {
//                 src: '/assets/image/gallery-room-01.png',
//                 title: 'Ashram Entrance',
//                 description: 'The sacred entrance to Shri Swaminarayan Ashram'
//             },
//             {
//                 src: '/assets/image/river.png',
//                 title: 'River View',
//                 description: 'Peaceful view of the river from the ashram grounds'
//             },
//             {
//                 src: '/assets/image/gallery-room-02.png',
//                 title: 'Main Hall',
//                 description: 'The spiritual center for meditation and gatherings'
//             },
//             {
//                 src: '/assets/image/gallery-room-06.png',
//                 title: 'Prayer Space',
//                 description: 'A quiet corner for personal reflection'
//             },
//             {
//                 src: '/assets/image/gallery-room-04.png',
//                 title: 'Temple Grounds',
//                 description: 'The beautiful surroundings of the ashram'
//             },
//             {
//                 src: '/assets/image/gallery-room-05.png',
//                 title: 'Meditation Hall',
//                 description: 'Where devotees gather for group meditation'
//             },
//             {
//                 src: '/assets/image/gallery-hotel.png',
//                 title: 'Guest House',
//                 description: 'Comfortable accommodations for visitors'
//             },
//             {
//                 src: '/assets/image/gallery-hotel-lobby-07.png',
//                 title: 'Lobby Area',
//                 description: 'Welcome area for pilgrims and guests'
//             }
//         ],
//         ganga: [
//             {
//                 src: '/assets/image/GangaGhat.png',
//                 title: 'Ganga Ghat',
//                 description: 'The sacred steps leading to Mother Ganga'
//             },
//             {
//                 src: '/assets/image/ghat-lend.png',
//                 title: 'Ghat Panorama',
//                 description: 'A beautiful view of the ghats along the river'
//             },
//             {
//                 src: '/assets/image/ghat-river.png',
//                 title: 'Riverside View',
//                 description: 'The holy Ganga flowing past the ashram'
//             },
//             {
//                 src: '/assets/image/swamiharidas.png',
//                 title: 'Swami Haridas',
//                 description: 'Spiritual leader guiding devotees'
//             },
//             {
//                 src: '/assets/image/ganga-aarti.png',
//                 title: 'Ganga Aarti',
//                 description: 'The evening ritual honoring the sacred river'
//             },
//             {
//                 src: '/assets/image/river-ghat.jpg',
//                 title: 'Morning at the Ghat',
//                 description: 'The peaceful early hours by the river'
//             },
//             {
//                 src: '/assets/image/gallery-ghatriver.png',
//                 title: 'River Panorama',
//                 description: 'The majestic flow of the Ganga'
//             },
//             {
//                 src: '/assets/image/acharya-swami.png',
//                 title: 'Acharya Swami',
//                 description: 'A revered spiritual guide'
//             },
//             {
//                 src: '/assets/image/ashram-team.png',
//                 title: 'Ashram Community',
//                 description: 'The dedicated team serving at the ashram'
//             }
//         ],
//         room: [
//             {
//                 src: '/assets/image/room1.jpg',
//                 title: 'Standard Room',
//                 description: 'Simple, comfortable accommodation for pilgrims'
//             },
//             {
//                 src: '/assets/image/room2.jpg',
//                 title: 'Twin Room',
//                 description: 'Shared accommodation for spiritual seekers'
//             },
//             {
//                 src: '/assets/image/room3.jpg',
//                 title: 'Deluxe Room',
//                 description: 'Enhanced comfort for extended stays'
//             },
//             {
//                 src: '/assets/image/room4.jpg',
//                 title: 'Family Room',
//                 description: 'Spacious rooms for family groups'
//             },
//             {
//                 src: '/assets/image/room5.jpg',
//                 title: 'Suite',
//                 description: 'Premium accommodation with additional amenities'
//             },
//             {
//                 src: '/assets/image/room6.jpg',
//                 title: 'Meditation Room',
//                 description: 'Private space for personal spiritual practice'
//             },
//             {
//                 src: '/assets/image/room7.jpg',
//                 title: 'River View Room',
//                 description: 'Rooms with a beautiful view of the Ganga'
//             },
//             {
//                 src: '/assets/image/room8.jpg',
//                 title: 'Guest Room',
//                 description: 'Comfortable stay for visitors'
//             }
//         ]
//     };

//     useEffect(() => {
//         // Set loading state when tab changes
//         setIsLoading(true);

//         // Load images based on the active tab
//         const newImages = imageData[activeTab] || [];
//         setImages(newImages);

//         // Simulate loading delay for smooth transitions
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 600);

//         return () => clearTimeout(timer);
//     }, [activeTab]);

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     const openLightbox = (index) => {
//         setCurrentImageIndex(index);
//         setLightboxOpen(true);
//         // Prevent scrolling when lightbox is open
//         document.body.style.overflow = 'hidden';
//     };

//     const closeLightbox = () => {
//         setLightboxOpen(false);
//         // Restore scrolling
//         document.body.style.overflow = 'auto';
//     };

//     const navigateImage = (direction) => {
//         const newIndex = (currentImageIndex + direction + images.length) % images.length;
//         setCurrentImageIndex(newIndex);
//     };

//     // Handle keyboard navigation
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (!lightboxOpen) return;

//             switch (e.key) {
//                 case 'Escape':
//                     closeLightbox();
//                     break;
//                 case 'ArrowLeft':
//                     navigateImage(-1);
//                     break;
//                 case 'ArrowRight':
//                     navigateImage(1);
//                     break;
//                 default:
//                     break;
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [lightboxOpen, currentImageIndex, images.length]);

//     // Determine responsive column count based on screen size
//     const getColumnClass = () => {
//         return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4";
//     };

//     return (
//         <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
//             <div className="container mx-auto px-4">
//                 {/* Header with ornamental divider */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                         Explore Our Sacred Spaces
//                     </h2>
//                     <div className="flex items-center justify-center">
//                         <div className="h-0.5 w-16 bg-orange-300"></div>
//                         <div className="mx-4 text-orange-500">✦</div>
//                         <div className="h-0.5 w-16 bg-orange-300"></div>
//                     </div>
//                     <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//                         Journey through the spiritual beauty of our ashram, the sacred Ganga river,
//                         and our peaceful accommodations through these carefully curated images.
//                     </p>
//                 </div>

//                 {/* Tab Navigation - Redesigned with pill style */}
//                 <div className="flex flex-wrap justify-center mb-10">
//                     <div className="bg-white p-1.5 rounded-full shadow-md flex space-x-1">
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'shri'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('shri')}
//                         >
//                             Ashram
//                         </button>
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'ganga'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('ganga')}
//                         >
//                             Ganga River
//                         </button>
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'room'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('room')}
//                         >
//                             Accommodations
//                         </button>
//                     </div>
//                 </div>

//                 {/* Loading indicator */}
//                 <AnimatePresence>
//                     {isLoading && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex justify-center items-center py-20"
//                         >
//                             <div className="loader h-12 w-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>

//                 {/* Masonry Image Gallery */}
//                 <AnimatePresence>
//                     {!isLoading && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className={getColumnClass()}
//                         >
//                             {images.map((image, index) => {
//                                 // Randomly assign different heights to create masonry effect
//                                 const heightClasses = ['h-64', 'h-80', 'h-72', 'h-96'];
//                                 const randomHeight = heightClasses[index % heightClasses.length];

//                                 return (
//                                     <motion.div
//                                         key={index}
//                                         initial={{ opacity: 0, scale: 0.9 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ duration: 0.3, delay: index * 0.05 }}
//                                         className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
//                                         onClick={() => openLightbox(index)}
//                                     >
//                                         <div className={`relative ${randomHeight} w-full overflow-hidden bg-gray-100`}>
//                                             <Image
//                                                 src={image.src}
//                                                 alt={image.title}
//                                                 fill
//                                                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                             />
//                                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                             <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                                                 <h3 className="text-white font-semibold">{image.title}</h3>
//                                                 <p className="text-gray-200 text-sm mt-1">{image.description}</p>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 );
//                             })}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>

//             {/* Lightbox */}
//             <AnimatePresence>
//                 {lightboxOpen && images[currentImageIndex] && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//                         onClick={closeLightbox}
//                     >
//                         <button
//                             className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                             onClick={closeLightbox}
//                         >
//                             <X size={24} />
//                         </button>

//                         <button
//                             className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 navigateImage(-1);
//                             }}
//                         >
//                             <ChevronLeft size={30} />
//                         </button>

//                         <button
//                             className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 navigateImage(1);
//                             }}
//                         >
//                             <ChevronRight size={30} />
//                         </button>

//                         <div
//                             className="relative max-w-5xl max-h-[80vh] w-full h-full"
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <div className="relative w-full h-full flex items-center justify-center">
//                                 <Image
//                                     src={images[currentImageIndex].src}
//                                     alt={images[currentImageIndex].title}
//                                     fill
//                                     className="object-contain"
//                                     sizes="100vw"
//                                 />
//                             </div>

//                             <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
//                                 <h3 className="text-xl font-semibold">{images[currentImageIndex].title}</h3>
//                                 <p className="text-gray-300 mt-1">{images[currentImageIndex].description}</p>
//                                 <div className="text-gray-400 text-sm mt-2">
//                                     Image {currentImageIndex + 1} of {images.length}
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default AshramGallery;

// "use client";

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const AshramGallery = () => {
//     const [activeTab, setActiveTab] = useState('ashram');
//     const [images, setImages] = useState([]);
//     const [lightboxOpen, setLightboxOpen] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);

//     // Enhanced image data with aspect ratios for proper rendering
//     const imageData = {
//         ashram: [
//             {
//                 src: '/assets/image/gallery-room-01.png',
//                 title: 'Ashram Entrance',
//                 description: 'The sacred entrance to Shri Swaminarayan Ashram',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/river.png',
//                 title: 'River View',
//                 description: 'Peaceful view of the river from the ashram grounds',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/gallery-room-02.png',
//                 title: 'Main Hall',
//                 description: 'The spiritual center for meditation and gatherings',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/gallery-room-06.png',
//                 title: 'Prayer Space',
//                 description: 'A quiet corner for personal reflection',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/gallery-room-04.png',
//                 title: 'Temple Grounds',
//                 description: 'The beautiful surroundings of the ashram',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/gallery-room-05.png',
//                 title: 'Meditation Hall',
//                 description: 'Where devotees gather for group meditation',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/gallery-hotel.png',
//                 title: 'Guest House',
//                 description: 'Comfortable accommodations for visitors',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/gallery-hotel-lobby-07.png',
//                 title: 'Lobby Area',
//                 description: 'Welcome area for pilgrims and guests',
//                 aspectRatio: '4/3'
//             }
//         ],
//         ganga: [
//             {
//                 src: '/assets/image/GangaGhat.png',
//                 title: 'Ganga Ghat',
//                 description: 'The sacred steps leading to Mother Ganga',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/ghat-lend.png',
//                 title: 'Ghat Panorama',
//                 description: 'A beautiful view of the ghats along the river',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/ghat-river.png',
//                 title: 'Riverside View',
//                 description: 'The holy Ganga flowing past the ashram',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/swamiharidas.png',
//                 title: 'Swami Haridas',
//                 description: 'Spiritual leader guiding devotees',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/ganga-aarti.png',
//                 title: 'Ganga Aarti',
//                 description: 'The evening ritual honoring the sacred river',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/river-ghat.jpg',
//                 title: 'Morning at the Ghat',
//                 description: 'The peaceful early hours by the river',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/gallery-ghatriver.png',
//                 title: 'River Panorama',
//                 description: 'The majestic flow of the Ganga',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/acharya-swami.png',
//                 title: 'Acharya Swami',
//                 description: 'A revered spiritual guide',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/ashram-team.png',
//                 title: 'Ashram Community',
//                 description: 'The dedicated team serving at the ashram',
//                 aspectRatio: '3/2'
//             }
//         ],
//         accommodations: [
//             {
//                 src: '/assets/image/room1.jpg',
//                 title: 'Standard Room',
//                 description: 'Simple, comfortable accommodation for pilgrims',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/room2.jpg',
//                 title: 'Twin Room',
//                 description: 'Shared accommodation for spiritual seekers',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/room3.jpg',
//                 title: 'Deluxe Room',
//                 description: 'Enhanced comfort for extended stays',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/room4.jpg',
//                 title: 'Family Room',
//                 description: 'Spacious rooms for family groups',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/room5.jpg',
//                 title: 'Suite',
//                 description: 'Premium accommodation with additional amenities',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/room6.jpg',
//                 title: 'Meditation Room',
//                 description: 'Private space for personal spiritual practice',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/room7.jpg',
//                 title: 'River View Room',
//                 description: 'Rooms with a beautiful view of the Ganga',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/room8.jpg',
//                 title: 'Guest Room',
//                 description: 'Comfortable stay for visitors',
//                 aspectRatio: '3/2'
//             }
//         ]
//     };

//     useEffect(() => {
//         // Set loading state when tab changes
//         setIsLoading(true);

//         // Load images based on the active tab
//         const newImages = imageData[activeTab] || [];
//         setImages(newImages);

//         // Simulate loading delay for smooth transitions
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 400);

//         return () => clearTimeout(timer);
//     }, [activeTab]);

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     const openLightbox = (index) => {
//         setCurrentImageIndex(index);
//         setLightboxOpen(true);
//         // Prevent scrolling when lightbox is open
//         document.body.style.overflow = 'hidden';
//     };

//     const closeLightbox = () => {
//         setLightboxOpen(false);
//         // Restore scrolling
//         document.body.style.overflow = 'auto';
//     };

//     const navigateImage = (direction) => {
//         const newIndex = (currentImageIndex + direction + images.length) % images.length;
//         setCurrentImageIndex(newIndex);
//     };

//     // Handle keyboard navigation
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (!lightboxOpen) return;

//             switch (e.key) {
//                 case 'Escape':
//                     closeLightbox();
//                     break;
//                 case 'ArrowLeft':
//                     navigateImage(-1);
//                     break;
//                 case 'ArrowRight':
//                     navigateImage(1);
//                     break;
//                 default:
//                     break;
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [lightboxOpen, currentImageIndex, images.length]);

//     return (
//         <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
//             <div className="container mx-auto px-4">
//                 {/* Tab Navigation - Centered tabs with highlight effect */}
//                 <div className="flex justify-center mb-10">
//                     <div className="bg-white rounded-full shadow-md flex flex-wrap justify-center p-1">
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'ashram'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('ashram')}
//                         >
//                             Ashram
//                         </button>
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'ganga'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('ganga')}
//                         >
//                             Ganga River
//                         </button>
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'accommodations'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('accommodations')}
//                         >
//                             Accommodations
//                         </button>
//                     </div>
//                 </div>

//                 {/* Loading indicator */}
//                 <AnimatePresence>
//                     {isLoading && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex justify-center items-center py-20"
//                         >
//                             <div className="loader h-12 w-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>

//                 {/* Image Gallery - Fixed height and proper aspect ratios */}
//                 <AnimatePresence>
//                     {!isLoading && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//                         >
//                             {images.map((image, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{
//                                         opacity: 1,
//                                         y: 0,
//                                         transition: {
//                                             duration: 0.4,
//                                             delay: index * 0.1
//                                         }
//                                     }}
//                                     whileHover={{
//                                         y: -5,
//                                         boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//                                         transition: { duration: 0.2 }
//                                     }}
//                                     className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
//                                     onClick={() => openLightbox(index)}
//                                 >
//                                     {/* Fixed height container with proper aspect ratio */}
//                                     <div className="relative h-64 w-full overflow-hidden">
//                                         <Image
//                                             src={image.src}
//                                             alt={image.title}
//                                             fill
//                                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                             className="object-cover transition-transform duration-500 group-hover:scale-110"
//                                             style={{ objectFit: 'cover' }}
//                                         />
//                                         {/* Gradient overlay for text readability */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                     </div>

//                                     {/* Image caption */}
//                                     <div className="p-3 bg-white border-t border-gray-100">
//                                         <h3 className="text-gray-800 font-medium truncate">{image.title}</h3>
//                                         <p className="text-gray-500 text-sm mt-1 line-clamp-2">{image.description}</p>
//                                     </div>

//                                     {/* Hover overlay with animation */}
//                                     <div className="absolute inset-0 flex items-center justify-center bg-orange-500/0 group-hover:bg-orange-500/20 transition-all duration-300">
//                                         <span className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                             </svg>
//                                         </span>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>

//             {/* Lightbox */}
//             <AnimatePresence>
//                 {lightboxOpen && images[currentImageIndex] && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//                         onClick={closeLightbox}
//                     >
//                         <motion.button
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.2 }}
//                             className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                             onClick={closeLightbox}
//                         >
//                             <X size={24} />
//                         </motion.button>

//                         <motion.button
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.2 }}
//                             className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 navigateImage(-1);
//                             }}
//                         >
//                             <ChevronLeft size={30} />
//                         </motion.button>

//                         <motion.button
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.2 }}
//                             className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 navigateImage(1);
//                             }}
//                         >
//                             <ChevronRight size={30} />
//                         </motion.button>

//                         <motion.div
//                             className="relative w-full max-w-4xl max-h-[80vh]"
//                             initial={{ scale: 0.9, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             transition={{ type: "spring", damping: 25 }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <div className="relative h-full">
//                                 <Image
//                                     src={images[currentImageIndex].src}
//                                     alt={images[currentImageIndex].title}
//                                     width={1200}
//                                     height={800}
//                                     className="max-h-[70vh] mx-auto object-contain rounded-lg"
//                                 />
//                             </div>

//                             <motion.div
//                                 initial={{ y: 20, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.2 }}
//                                 className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white rounded-b-lg"
//                             >
//                                 <h3 className="text-xl font-semibold">{images[currentImageIndex].title}</h3>
//                                 <p className="text-gray-300 mt-1">{images[currentImageIndex].description}</p>
//                                 <div className="text-gray-400 text-sm mt-2">
//                                     Image {currentImageIndex + 1} of {images.length}
//                                 </div>
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default AshramGallery;


// "use client";

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight, Info, XCircle, Heart, Download, Share, Maximize } from 'lucide-react';

// const AshramGallery = () => {
//     const [activeTab, setActiveTab] = useState('ashram');
//     const [images, setImages] = useState([]);
//     const [lightboxOpen, setLightboxOpen] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);
//     const [showThumbnails, setShowThumbnails] = useState(true);
//     const [infoVisible, setInfoVisible] = useState(true);
//     const [isFullscreen, setIsFullscreen] = useState(false);

//     // Enhanced image   data with aspect ratios for proper rendering
//     const imageData = {
//         ashram: [
//             {
//                 src: '/assets/image/gallery-room-01.png',
//                 title: 'Ashram Entrance',
//                 description: 'The sacred entrance to Shri Swaminarayan Ashram',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/river.png',
//                 title: 'River View',
//                 description: 'Peaceful view of the river from the ashram grounds',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/gallery-room-02.png',
//                 title: 'Main Hall',
//                 description: 'The spiritual center for meditation and gatherings',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/gallery-room-06.png',
//                 title: 'Prayer Space',
//                 description: 'A quiet corner for personal reflection',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/gallery-room-04.png',
//                 title: 'Temple Grounds',
//                 description: 'The beautiful surroundings of the ashram',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/gallery-room-05.png',
//                 title: 'Meditation Hall',
//                 description: 'Where devotees gather for group meditation',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/gallery-hotel.png',
//                 title: 'Guest House',
//                 description: 'Comfortable accommodations for visitors',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/gallery-hotel-lobby-07.png',
//                 title: 'Lobby Area',
//                 description: 'Welcome area for pilgrims and guests',
//                 aspectRatio: '4/3'
//             }
//         ],
//         ganga: [
//             {
//                 src: '/assets/image/GangaGhat.png',
//                 title: 'Ganga Ghat',
//                 description: 'The sacred steps leading to Mother Ganga',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/ghat-lend.png',
//                 title: 'Ghat Panorama',
//                 description: 'A beautiful view of the ghats along the river',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/ghat-river.png',
//                 title: 'Riverside View',
//                 description: 'The holy Ganga flowing past the ashram',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/swamiharidas.png',
//                 title: 'Swami Haridas',
//                 description: 'Spiritual leader guiding devotees',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/ganga-aarti.png',
//                 title: 'Ganga Aarti',
//                 description: 'The evening ritual honoring the sacred river',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/river-ghat.jpg',
//                 title: 'Morning at the Ghat',
//                 description: 'The peaceful early hours by the river',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/gallery-ghatriver.png',
//                 title: 'River Panorama',
//                 description: 'The majestic flow of the Ganga',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/acharya-swami.png',
//                 title: 'Acharya Swami',
//                 description: 'A revered spiritual guide',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/ashram-team.png',
//                 title: 'Ashram Community',
//                 description: 'The dedicated team serving at the ashram',
//                 aspectRatio: '3/2'
//             }
//         ],
//         accommodations: [
//             {
//                 src: '/assets/image/room1.jpg',
//                 title: 'Standard Room',
//                 description: 'Simple, comfortable accommodation for pilgrims',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/room2.jpg',
//                 title: 'Twin Room',
//                 description: 'Shared accommodation for spiritual seekers',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/room3.jpg',
//                 title: 'Deluxe Room',
//                 description: 'Enhanced comfort for extended stays',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/room4.jpg',
//                 title: 'Family Room',
//                 description: 'Spacious rooms for family groups',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/room5.jpg',
//                 title: 'Suite',
//                 description: 'Premium accommodation with additional amenities',
//                 aspectRatio: '3/2'
//             },
//             {
//                 src: '/assets/image/room6.jpg',
//                 title: 'Meditation Room',
//                 description: 'Private space for personal spiritual practice',
//                 aspectRatio: '4/3'
//             },
//             {
//                 src: '/assets/image/room7.jpg',
//                 title: 'River View Room',
//                 description: 'Rooms with a beautiful view of the Ganga',
//                 aspectRatio: '16/9'
//             },
//             {
//                 src: '/assets/image/room8.jpg',
//                 title: 'Guest Room',
//                 description: 'Comfortable stay for visitors',
//                 aspectRatio: '3/2'
//             }
//         ]
//     };

//     useEffect(() => {
//         // Set loading state when tab changes
//         setIsLoading(true);

//         // Load images based on the active tab
//         const newImages = imageData[activeTab] || [];
//         setImages(newImages);

//         // Simulate loading delay for smooth transitions
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 1000);

//         return () => clearTimeout(timer);
//     }, [activeTab]);

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     const openLightbox = (index) => {
//         setCurrentImageIndex(index);
//         setLightboxOpen(true);
//         // Prevent scrolling when lightbox is open
//         document.body.style.overflow = 'hidden';
//     };

//     const closeLightbox = () => {
//         setLightboxOpen(false);
//         // Restore scrolling
//         document.body.style.overflow = 'auto';
//         // Reset fullscreen state when closing
//         setIsFullscreen(false);
//     };

//     const navigateImage = (direction) => {
//         const newIndex = (currentImageIndex + direction + images.length) % images.length;
//         setCurrentImageIndex(newIndex);
//     };

//     const handleThumbnailClick = (index) => {
//         setCurrentImageIndex(index);
//     };

//     const toggleInfo = () => {
//         setInfoVisible(!infoVisible);
//     };

//     const toggleFullscreen = () => {
//         setIsFullscreen(!isFullscreen);
//     };

//     const toggleThumbnails = () => {
//         setShowThumbnails(!showThumbnails);
//     };

//     // Handle keyboard navigation
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (!lightboxOpen) return;

//             switch (e.key) {
//                 case 'Escape':
//                     closeLightbox();
//                     break;
//                 case 'ArrowLeft':
//                     navigateImage(-1);
//                     break;
//                 case 'ArrowRight':
//                     navigateImage(1);
//                     break;
//                 case 'i':
//                     toggleInfo();
//                     break;
//                 case 'f':
//                     toggleFullscreen();
//                     break;
//                 case 't':
//                     toggleThumbnails();
//                     break;
//                 default:
//                     break;
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [lightboxOpen, currentImageIndex, images.length, infoVisible, isFullscreen, showThumbnails]);

//     return (
//         <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
//             <div className="container mx-auto px-4">
//                 {/* Tab Navigation - Centered tabs with highlight effect */}
//                 <div className="flex justify-center mb-10">
//                     <div className="bg-white rounded-full shadow-md flex flex-wrap justify-center p-1 space-x-1">
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'ashram'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('ashram')}
//                         >
//                             Ashram
//                         </button>
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'ganga'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('ganga')}
//                         >
//                             Ganga River
//                         </button>
//                         <button
//                             className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'accommodations'
//                                 ? 'bg-orange-500 text-white shadow-md'
//                                 : 'text-gray-700 hover:bg-orange-100'
//                                 }`}
//                             onClick={() => handleTabClick('accommodations')}
//                         >
//                             Accommodations
//                         </button>
//                     </div>
//                 </div>

//                 {/* Loading indicator */}
//                 <AnimatePresence>
//                     {isLoading && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex justify-center items-center py-20"
//                         >
//                             <div className="loader size-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>

//                 {/* Image Gallery - Fixed height and proper aspect ratios */}
//                 <AnimatePresence>
//                     {!isLoading && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//                         >
//                             {images.map((image, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{
//                                         opacity: 1,
//                                         y: 0,
//                                         transition: {
//                                             duration: 0.4,
//                                             delay: index * 0.1
//                                         }
//                                     }}
//                                     whileHover={{
//                                         y: -5,
//                                         boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//                                         transition: { duration: 0.2 }
//                                     }}
//                                     className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
//                                     onClick={() => openLightbox(index)}
//                                 >
//                                     {/* Fixed height container with proper aspect ratio */}
//                                     <div className="relative h-64 w-full overflow-hidden">
//                                         <Image
//                                             src={image.src}
//                                             alt={image.title}
//                                             fill
//                                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                             className="object-cover transition-transform duration-500 group-hover:scale-110"
//                                             style={{ objectFit: 'cover' }}
//                                         />
//                                         {/* Gradient overlay for text readability */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                     </div>

//                                     {/* Hover overlay with animation */}
//                                     <div className="absolute inset-0 flex items-center justify-center bg-orange-500/0 group-hover:bg-orange-500/40 transition-all duration-300">
//                                         <span className="size-12 rounded-full bg-white/0 group-hover:bg-white/80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                             </svg>
//                                         </span>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>

//             {/* Enhanced Lightbox */}
//             <AnimatePresence>
//                 {lightboxOpen && images[currentImageIndex] && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/95'} flex flex-col items-center justify-center`}
//                         onClick={closeLightbox}
//                     >
//                         {/* Top Toolbar */}
//                         <motion.div
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2 }}
//                             className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent"
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <div className="flex items-center space-x-4">
//                                 <span className="text-white text-lg font-medium">
//                                     {images[currentImageIndex].title}
//                                 </span>
//                             </div>

//                             <div className="flex items-center space-x-4">
//                                 <button
//                                     className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleInfo();
//                                     }}
//                                 >
//                                     <Info size={20} className={infoVisible ? "text-orange-500" : "text-white"} />
//                                 </button>

//                                 <button
//                                     className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleThumbnails();
//                                     }}
//                                 >
//                                     {showThumbnails ?
//                                         <XCircle size={20} className="text-orange-500" /> :
//                                         <Heart size={20} />
//                                     }
//                                 </button>

//                                 <button
//                                     className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleFullscreen();
//                                     }}
//                                 >
//                                     <Maximize size={20} className={isFullscreen ? "text-orange-500" : "text-white"} />
//                                 </button>

//                                 <button
//                                     className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         closeLightbox();
//                                     }}
//                                 >
//                                     <X size={20} />
//                                 </button>
//                             </div>
//                         </motion.div>

//                         {/* Main Content Area */}
//                         <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
//                             {/* Navigation Buttons - Now more visually appealing */}
//                             <motion.button
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.2 }}
//                                 className="absolute left-4 p-4 rounded-full bg-black/30 hover:bg-black/50 text-white border border-white/20 backdrop-blur-sm transition-all transform hover:scale-105 z-20"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     navigateImage(-1);
//                                 }}
//                             >
//                                 <ChevronLeft size={30} />
//                             </motion.button>

//                             <motion.button
//                                 initial={{ opacity: 0, x: 20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.2 }}
//                                 className="absolute right-4 p-4 rounded-full bg-black/30 hover:bg-black/50 text-white border border-white/20 backdrop-blur-sm transition-all transform hover:scale-105 z-20"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     navigateImage(1);
//                                 }}
//                             >
//                                 <ChevronRight size={30} />
//                             </motion.button>

//                             {/* Image Container with Slide Animation */}
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={currentImageIndex}
//                                     initial={{ opacity: 0, x: 50 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     exit={{ opacity: 0, x: -50 }}
//                                     transition={{ type: "spring", damping: 25 }}
//                                     className={`relative ${isFullscreen ? 'w-full h-full' : 'w-4/5 max-w-5xl'} flex items-center justify-center`}
//                                 >
//                                     <div className={`relative ${isFullscreen ? 'w-full h-full' : 'max-h-[75vh]'} overflow-hidden`}>
//                                         <Image
//                                             src={images[currentImageIndex].src}
//                                             alt={images[currentImageIndex].title}
//                                             width={1200}
//                                             height={800}
//                                             className={`${isFullscreen ? 'object-contain w-full h-full' : 'object-contain max-h-[75vh] mx-auto'} rounded-lg shadow-2xl`}
//                                             priority
//                                         />
//                                     </div>
//                                 </motion.div>
//                             </AnimatePresence>

//                             {/* Bottom Info Panel with Animation */}
//                             <AnimatePresence>
//                                 {infoVisible && (
//                                     <motion.div
//                                         initial={{ y: 50, opacity: 0 }}
//                                         animate={{ y: 0, opacity: 1 }}
//                                         exit={{ y: 50, opacity: 0 }}
//                                         transition={{ type: "spring", damping: 25 }}
//                                         className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
//                                     >
//                                         <div className="container mx-auto max-w-4xl">
//                                             <h3 className="text-2xl font-bold text-orange-300">{images[currentImageIndex].title}</h3>
//                                             <p className="text-white/90 mt-2 text-lg">{images[currentImageIndex].description}</p>
//                                             <div className="flex justify-between items-center mt-4">
//                                                 <div className="text-white/70">
//                                                     Image {currentImageIndex + 1} of {images.length}
//                                                 </div>
//                                                 <div className="flex gap-2">
//                                                     <button className="px-3 py-1.5 rounded bg-orange-500/20 hover:bg-orange-500/40 text-orange-200 text-sm font-medium transition-colors flex items-center gap-1">
//                                                         <Share size={16} /> Share
//                                                     </button>
//                                                     <button className="px-3 py-1.5 rounded bg-orange-500/20 hover:bg-orange-500/40 text-orange-200 text-sm font-medium transition-colors flex items-center gap-1">
//                                                         <Download size={16} /> Download
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>

//                         {/* Thumbnail Strip with drag capability */}
//                         <AnimatePresence>
//                             {showThumbnails && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 50 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: 50 }}
//                                     className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 z-30 overflow-hidden border-t border-white/10"
//                                     onClick={(e) => e.stopPropagation()}
//                                 >
//                                     <div className="flex overflow-x-auto gap-2 pb-2 px-4 items-center justify-start no-scrollbar">
//                                         {images.map((image, index) => (
//                                             <motion.div
//                                                 key={index}
//                                                 className={`flex-shrink-0 cursor-pointer p-1 rounded-md transition-all duration-200 ${currentImageIndex === index
//                                                     ? 'border-2 border-orange-500 scale-110 shadow-lg shadow-orange-500/30'
//                                                     : 'border border-white/20 hover:border-white/50'
//                                                     }`}
//                                                 whileHover={{ scale: 1.05 }}
//                                                 whileTap={{ scale: 0.95 }}
//                                                 onClick={() => handleThumbnailClick(index)}
//                                             >
//                                                 <div className="relative h-16 w-24 overflow-hidden rounded-md">
//                                                     <Image
//                                                         src={image.src}
//                                                         alt={image.title}
//                                                         fill
//                                                         className="object-cover"
//                                                     />
//                                                     {currentImageIndex === index && (
//                                                         <div className="absolute inset-0 bg-orange-500/30"></div>
//                                                     )}
//                                                 </div>
//                                             </motion.div>
//                                         ))}
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default AshramGallery;

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Info, XCircle, Heart, Download, Share, Maximize } from 'lucide-react';

const AshramGallery = () => {
    const [activeTab, setActiveTab] = useState('ashram');
    const [images, setImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [infoVisible, setInfoVisible] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Enhanced image data with aspect ratios for proper rendering
    const imageData = {
        ashram: [
            {
                src: '/assets/image/gallery-room-01.png',
                title: 'Ashram Entrance',
                description: 'The sacred entrance to Shri Swaminarayan Ashram',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/river.png',
                title: 'River View',
                description: 'Peaceful view of the river from the ashram grounds',
                aspectRatio: '3/2'
            },
            {
                src: '/assets/image/gallery-room-02.png',
                title: 'Main Hall',
                description: 'The spiritual center for meditation and gatherings',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/gallery-room-06.png',
                title: 'Prayer Space',
                description: 'A quiet corner for personal reflection',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/gallery-room-04.png',
                title: 'Temple Grounds',
                description: 'The beautiful surroundings of the ashram',
                aspectRatio: '16/9'
            },
            {
                src: '/assets/image/gallery-room-05.png',
                title: 'Meditation Hall',
                description: 'Where devotees gather for group meditation',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/gallery-hotel.png',
                title: 'Guest House',
                description: 'Comfortable accommodations for visitors',
                aspectRatio: '3/2'
            },
            {
                src: '/assets/image/gallery-hotel-lobby-07.png',
                title: 'Lobby Area',
                description: 'Welcome area for pilgrims and guests',
                aspectRatio: '4/3'
            }
        ],
        ganga: [
            {
                src: '/assets/image/GangaGhat.png',
                title: 'Ganga Ghat',
                description: 'The sacred steps leading to Mother Ganga',
                aspectRatio: '16/9'
            },
            {
                src: '/assets/image/ghat-lend.png',
                title: 'Ghat Panorama',
                description: 'A beautiful view of the ghats along the river',
                aspectRatio: '16/9'
            },
            {
                src: '/assets/image/ghat-river.png',
                title: 'Riverside View',
                description: 'The holy Ganga flowing past the ashram',
                aspectRatio: '3/2'
            },
            {
                src: '/assets/image/swamiharidas.png',
                title: 'Swami Haridas',
                description: 'Spiritual leader guiding devotees',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/ganga-aarti.png',
                title: 'Ganga Aarti',
                description: 'The evening ritual honoring the sacred river',
                aspectRatio: '16/9'
            },
            {
                src: '/assets/image/river-ghat.jpg',
                title: 'Morning at the Ghat',
                description: 'The peaceful early hours by the river',
                aspectRatio: '16/9'
            },
            {
                src: '/assets/image/gallery-ghatriver.png',
                title: 'River Panorama',
                description: 'The majestic flow of the Ganga',
                aspectRatio: '3/2'
            },
            {
                src: '/assets/image/acharya-swami.png',
                title: 'Acharya Swami',
                description: 'A revered spiritual guide',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/ashram-team.png',
                title: 'Ashram Community',
                description: 'The dedicated team serving at the ashram',
                aspectRatio: '3/2'
            }
        ],
        accommodations: [
            {
                src: '/assets/image/room1.jpg',
                title: 'Standard Room',
                description: 'Simple, comfortable accommodation for pilgrims',
                aspectRatio: '3/2'
            },
            {
                src: '/assets/image/room2.jpg',
                title: 'Twin Room',
                description: 'Shared accommodation for spiritual seekers',
                aspectRatio: '3/2'
            },
            {
                src: '/assets/image/room3.jpg',
                title: 'Deluxe Room',
                description: 'Enhanced comfort for extended stays',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/room4.jpg',
                title: 'Family Room',
                description: 'Spacious rooms for family groups',
                aspectRatio: '16/9'
            },
            {
                src: '/assets/image/room5.jpg',
                title: 'Suite',
                description: 'Premium accommodation with additional amenities',
                aspectRatio: '3/2'
            },
            {
                src: '/assets/image/room6.jpg',
                title: 'Meditation Room',
                description: 'Private space for personal spiritual practice',
                aspectRatio: '4/3'
            },
            {
                src: '/assets/image/room7.jpg',
                title: 'River View Room',
                description: 'Rooms with a beautiful view of the Ganga',
                aspectRatio: '16/9'
            },
            {
                src: '/assets/image/room8.jpg',
                title: 'Guest Room',
                description: 'Comfortable stay for visitors',
                aspectRatio: '3/2'
            }
        ]
    };

    useEffect(() => {
        setIsLoading(true);
        const newImages = imageData[activeTab] || [];
        setImages(newImages);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
        setIsFullscreen(false);
    };

    const navigateImage = (direction) => {
        const newIndex = (currentImageIndex + direction + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const toggleInfo = () => {
        setInfoVisible(!infoVisible);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const toggleThumbnails = () => {
        setShowThumbnails(!showThumbnails);
    };

    // Function to handle sharing
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: images[currentImageIndex].title,
                    text: images[currentImageIndex].description,
                    url: window.location.href, // Or a specific URL for the image
                });
                console.log('Successfully shared!');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Web Share API not supported.  You could implement a fallback here (e.g., copy the link to the clipboard).');
        }
    };

    // Function to handle downloading
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = images[currentImageIndex].src;
        link.download = images[currentImageIndex].title + '.png'; // Or determine the actual extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateImage(-1);
                    break;
                case 'ArrowRight':
                    navigateImage(1);
                    break;
                case 'i':
                    toggleInfo();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 't':
                    toggleThumbnails();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImageIndex, images.length, infoVisible, isFullscreen, showThumbnails]);

    return (
        <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white rounded-full shadow-md flex flex-wrap justify-center p-1 space-x-1">
                        <button
                            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'ashram'
                                ? 'bg-orange-500 text-white shadow-md'
                                : 'text-gray-700 hover:bg-orange-100'
                                }`}
                            onClick={() => handleTabClick('ashram')}
                        >
                            Ashram
                        </button>
                        <button
                            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'ganga'
                                ? 'bg-orange-500 text-white shadow-md'
                                : 'text-gray-700 hover:bg-orange-100'
                                }`}
                            onClick={() => handleTabClick('ganga')}
                        >
                            Ganga River
                        </button>
                        <button
                            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${activeTab === 'accommodations'
                                ? 'bg-orange-500 text-white shadow-md'
                                : 'text-gray-700 hover:bg-orange-100'
                                }`}
                            onClick={() => handleTabClick('accommodations')}
                        >
                            Accommodations
                        </button>
                    </div>
                </div>

                {/* Loading indicator */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-center items-center py-20"
                        >
                            <div className="loader size-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Image Gallery */}
                <AnimatePresence>
                    {!isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.4,
                                            delay: index * 0.1
                                        }
                                    }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center bg-orange-500/0 group-hover:bg-orange-500/40 transition-all duration-300">
                                        <span className="size-12 rounded-full bg-white/0 group-hover:bg-white/80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Enhanced Lightbox */}
            <AnimatePresence>
                {lightboxOpen && images[currentImageIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/95'} flex backdrop-blur-[1px] flex-col items-center justify-center`}
                        onClick={closeLightbox}
                    >
                        {/* Top Toolbar */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center space-x-4">
                                <span className="text-white text-lg font-medium">
                                    {images[currentImageIndex].title}
                                </span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button
                                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleInfo();
                                    }}
                                >
                                    <Info size={20} className={infoVisible ? "text-orange-500" : "text-white"} />
                                </button>

                                <button
                                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleThumbnails();
                                    }}
                                >
                                    {showThumbnails ?
                                        <XCircle size={20} className="text-orange-500" /> :
                                        <Heart size={20} />
                                    }
                                </button>

                                <button
                                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFullscreen();
                                    }}
                                >
                                    <Maximize size={20} className={isFullscreen ? "text-orange-500" : "text-white"} />
                                </button>

                                <button
                                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeLightbox();
                                    }}
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Main Content Area */}
                        <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            {/* Navigation Buttons */}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="absolute left-4 lg:p-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white border border-white/20 backdrop-blur-sm transition-all transform hover:scale-105 z-20"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage(-1);
                                }}
                            >
                                <ChevronLeft />
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="absolute right-4 lg:p-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white border border-white/20 backdrop-blur-sm transition-all transform hover:scale-105 z-20"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage(1);
                                }}
                            >
                                <ChevronRight />
                            </motion.button>

                            {/* Image Container */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ type: "spring", damping: 25 }}
                                    className={`relative ${isFullscreen ? 'w-full h-full' : 'w-4/5 max-w-5xl'} flex items-center justify-center`}
                                >
                                    <div className={`relative ${isFullscreen ? 'w-full h-full' : 'max-h-[75vh]'} overflow-hidden`}>
                                        <Image
                                            src={images[currentImageIndex].src}
                                            alt={images[currentImageIndex].title}
                                            width={1200}
                                            height={800}
                                            className={`${isFullscreen ? 'object-contain w-full h-full' : 'object-contain max-h-[75vh] mx-auto'} rounded-lg shadow-2xl`}
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Bottom Info Panel */}
                            <AnimatePresence>
                                {infoVisible && (
                                    <motion.div
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 50, opacity: 0 }}
                                        transition={{ type: "spring", damping: 25 }}
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
                                    >
                                        <div className="container mx-auto max-w-4xl">
                                            <h3 className="text-2xl font-bold text-orange-300">{images[currentImageIndex].title}</h3>
                                            <p className="text-white/90 mt-2 text-lg">{images[currentImageIndex].description}</p>
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="text-white/70">
                                                    Image {currentImageIndex + 1} of {images.length}
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        className="px-3 py-1.5 rounded bg-orange-500/20 hover:bg-orange-500/40 text-orange-200 text-sm font-medium transition-colors flex items-center gap-1"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleShare();
                                                        }}
                                                    >
                                                        <Share size={16} /> Share 
                                                    </button>
                                                    <button
                                                        className="px-3 py-1.5 rounded bg-orange-500/20 hover:bg-orange-500/40 text-orange-200 text-sm font-medium transition-colors flex items-center gap-1"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDownload();
                                                        }}
                                                    >
                                                        <Download size={16} /> Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Thumbnail Strip */}
                        <AnimatePresence>
                            {showThumbnails && (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 z-30 overflow-hidden border-t border-white/10"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex gap-2 pb-2 px-4 items-center justify-start space-x-1 no-scrollbar">
                                        {images.map((image, index) => (
                                            <motion.div
                                                key={index}
                                                className={`flex-shrink-0 cursor-pointer p-1 rounded-md transition-all duration-200 ${currentImageIndex === index
                                                    ? 'border-2 border-orange-500 scale-110 shadow-lg'
                                                    : 'border border-white/20 hover:border-white/50'
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleThumbnailClick(index)}
                                            >
                                                <div className="relative h-16 w-24 overflow-hidden rounded-md">
                                                    <Image
                                                        src={image.src}
                                                        alt={image.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    {currentImageIndex === index && (
                                                        <div className="absolute inset-0 bg-orange-500/30"></div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};


export default AshramGallery;







