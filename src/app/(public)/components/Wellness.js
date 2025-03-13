// app/components/WellnessCards.jsx

// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { FaHeart, FaUtensils, FaPrayingHands } from "react-icons/fa";

// const WellnessCards = () => {
//     const [activeCard, setActiveCard] = useState(null);

//     const cardData = [
//         {
//             title: 'Wellness',
//             imageSrc: '/assets/image/wellness.jpg',
//             description: 'The ability to be in the present moment is a major component of mental wellness. "Take care of your body, it\'s the only place you have to live." "You can\'t stop the waves, but you can learn to surf." "Wellness is a connection of paths: knowledge and action."',
//             icon: <FaHeart className='text-white size-4' />,
//         },
//         {
//             title: 'Food Place',
//             imageSrc: '/assets/image/food-place.jpg',
//             description: 'The Sahajanand Wellness provide a pure vegetarian food because good food make your health fit and fine. this food was very healthy and pure for provide Sahajanand Wellness.A crust eaten in peace is better than a banquet partaken in anxiety.',
//             icon: <FaUtensils className='text-white size-4' />,
//         },
//         {
//             title: 'Ganga Arti',
//             imageSrc: '/assets/image/ganga-arti.jpg',
//             description: 'By this you will get the same result as taking a bath in the Ganges. Om Namo Gangayai Vishwarupini Narayani Namo Namah. Om Jai Gange Mata. Mother Jai Gange Mata. Om Jai Gange Mata. Mother Jai Gange Mata. Mother Jai Gange Mata.',
//             icon: <FaPrayingHands className='text-white size-4' />,
//         },
//     ];

//     return (
//         <section className="relative py-16 overflow-hidden bg-gradient-to-b from-orange-50 to-amber-50 mt-10">
//             {/* Decorative Elements */}
//             <div className="container mx-auto px-4 relative z-10">
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <div className="inline-block p-2 rounded-full mb-4 transform hover:scale-105 transition-transform duration-350">
//                         <Image
//                             src="/assets/image/logo1.png"
//                             alt="The Sahajanand Wellness Logo"
//                             width={60}
//                             height={60}
//                             className="object-cover w-12"
//                         />
//                     </div>

//                     <h1 className="md:text-4xl text-3xl/10 font-bold text-gray-900 mb-4">
//                         The Sahajanand <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Wellness</span>
//                     </h1>

//                     <div className="max-w-4xl mx-auto relative">
//                         <p className="text-gray-700 lg:text-xl text-md leading-relaxed relative z-10">
//                             Purani Shree Vishnu Prakash Das Ji Swami and Rishiraj Sunil Bhagat Ji
//                             conducts short term Saptah frequently on Shrimad Bhagwat, Satsang Jivan, Ramayana and Vachanamrat.
//                             Disciples of Swami Ji hailing from different parts of India participate during the occasion.
//                         </p>
//                         <div className="absolute md:-left-6 -top-10 md:-top-6 text-6xl text-main opacity-50 z-0">"</div>
//                         <div className="absolute md:right-30 right-10 -bottom-10 text-6xl text-main opacity-50 z-0">"</div>
//                     </div>
//                 </div>

//                 {/* Cards Section */}
//                 <div className="grid md:grid-cols-3 lg:gap-8 gap-4 max-w-5xl mx-auto">
//                     {cardData.map((card, index) => (
//                         <div
//                             key={index}
//                             className={`group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl `}
//                             onMouseEnter={() => setActiveCard(index)}
//                             onMouseLeave={() => setActiveCard(null)}
//                         >
//                             {/* Card Icon */}
//                             <div className="absolute top-3 right-3 size-8 flex items-center justify-center bg-main rounded-full text-2xl z-10">
//                                 {card.icon}
//                             </div>

//                             {/* Image Container */}
//                             <div className="relative h-52 overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
//                                 <Image
//                                     src={card.imageSrc}
//                                     alt={card.title}
//                                     width={500}
//                                     height={300}
//                                     className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                                 />
//                                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-20">
//                                     {card.title}
//                                 </h3>
//                             </div>

//                             {/* Content Container */}
//                             <div className="lg:p-6 p-4">
//                                 <div className="w-18 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mb-4"></div>
//                                 <p className="text-gray-700 leading-relaxed">{card.description}</p>

//                                 <button className="mt-6 inline-flex items-center text-orange-600 font-medium group-hover:text-amber-600 transition-colors">
//                                     Learn more
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WellnessCards;


// import React from 'react';
// import Image from 'next/image';

// const WellnessCards = () => {
//     const cardData = [
//         {
//             title: 'Wellness',
//             imageSrc: '/assets/image/wellness.jpg', // Replace with your actual image path
//             description: 'The ability to be in the present moment is a major component of mental wellness. "Take care of your body, it\'s the only place you have to live." "You can\'t stop the waves, but you can learn to surf." "Wellness is a connection of paths: knowledge and action."',
//         },
//         {
//             title: 'Food Place',
//             imageSrc: '/assets/image/food-place.jpg', // Replace with your actual image path
//             description: 'The Sahajanand Wellness provide a pure vegetarian food because good food make your health fit and fine. A crust eaten in peace is better than a banquet partaken in anxiety.',
//         },
//         {
//             title: 'Ganga Arti',
//             imageSrc: '/assets/image/ganga-arti.jpg', // Replace with your actual image path
//             description: 'By this you will get the same result as taking a bath in the Ganges. Om Namo Gangayai Vishwarupini Narayani Namo Namah. Om Jai Gange Mata. Mother Jai Gange Mata. Om Jai Gange Mata. Mother Jai Gange Mata.',
//         },
//     ];

//     return (
//         <>
//             <div className="bg-orange-100/50 py-12 text-center my-10">
//                 {/* Logo */}
//                 <div className="flex justify-center mb-4">
//                     <Image
//                         src="/assets/image/logo1.png" // Replace with the actual path to your logo
//                         alt="The Sahajanand Wellness Logo"
//                         width={50}  // Adjust as needed
//                         height={50} // Adjust as needed
//                         className="object-cover"
//                     />
//                 </div>

//                 {/* Title */}
//                 <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium text-prime">
//                     The Sahajanand <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Wellness</span>
//                 </h1>

//                 {/* Description */}
//                 <div className='flex justify-center'>
//                     <p className='text-gray-700 text-xl mt-5 max-w-4xl'>
//                         Purani Shree Vishnu Prakash Das Ji Swami and Rishiraj Sunil Bhagat Ji
//                         conducts short term Saptah frequently on Shrimad Bhagwat, Satsang Jivan, Ramayana and Vachanamrat.
//                         Disciples of Swami Ji hailing from different parts of India participate during the occasion.
//                     </p>
//                 </div>

//                 <div className="flex justify-center gap-4 mt-10">
//                     {cardData.map((card, index) => (
//                         <div key={index} className="rounded-lg shadow-sm w-72 border border-gray-300/50">
//                             <div className="relative h-48 overflow-hidden">
//                                 <Image
//                                     src={card.imageSrc}
//                                     alt={card.title}
//                                     width={350}
//                                     height={250} // Adjust as needed
//                                     className="object-cover w-full h-full"
//                                 />
//                             </div>
//                             <div className="p-4">
//                                 <h3 className="text-xl font-medium text-orange-600 mb-2">{card.title}</h3>
//                                 <p className="text-gray-700 text-sm">{card.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default WellnessCards;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { PiStarFourFill } from "react-icons/pi";

// const cardData = [
//     {
//         title: "Wellness",
//         imageSrc: "/assets/image/wellness.jpg",
//         description:
//             "The ability to be in the present moment is a major component of mental wellness.” “Take care of your body, it’s the only place you have to live.” “You can’t stop the waves, but you can learn to surf.” “Wellness is a connection of paths: knowledge and action.",
//     },
//     {
//         title: "Food Place",
//         imageSrc: "/assets/image/food-place.jpg",
//         description:
//             "The Sahajanand Wellness provide a pure vegetarian food because good food make your health fit and fine . A crust eaten in peace is better than a banquet partaken in anxiety.",
//     },
//     {
//         title: "Ganga Aarti",
//         imageSrc: "/assets/image/ganga-arti.jpg",
//         description:
//             "By this you will get the same result as taking a bath in the Ganges. Om Namo Gangayai Vishwarupini Narayani Namo Namah. Om Jai Gange Mata, Mother Jai Gange Mata. Om Jai Gange Mata, Mother Jai Gange Mata.",
//     },
// ];

// const WellnessCards = () => {
//     return (
//         <section className="py-10 bg-gradient-to-b from-orange-50 to-orange-100 my-10">
//             {/* Logo Section */}
//             <div className="flex justify-center mb-4">
//                 <Image
//                     src="/assets/image/logo1.png" // Replace with the actual path to your logo
//                     alt="The Sahajanand Wellness Logo"
//                     width={50}  // Adjust as needed
//                     height={50} // Adjust as needed
//                     className="object-cover"
//                 />
//             </div>

//             {/* Title */}
//             <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium text-prime text-center">
//                 The Sahajanand <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Wellness</span>
//             </h1>

//             {/* Description */}
//             <div className='flex justify-center text-center'>
//                 <p className='text-gray-700 text-xl mt-5 max-w-4xl'>
//                     Purani Shree Vishnu Prakash Das Ji Swami and Rishiraj Sunil Bhagat Ji
//                     conducts short term Saptah frequently on Shrimad Bhagwat, Satsang Jivan, Ramayana and Vachanamrat.
//                     Disciples of Swami Ji hailing from different parts of India participate during the occasion.
//                 </p>
//             </div>

//             {/* Card Container */}
//             <div className="mt-10 flex flex-col space-y-8 px-6 lg:px-20">
//                 {cardData.map((card, index) => (
//                     <div
//                         key={index}
//                         className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
//                     >
//                         {/* Image */}
//                         <div className="relative w-full md:w-1/2 h-72">
//                             <Image
//                                 src={card.imageSrc}
//                                 alt={card.title}
//                                 layout="fill"
//                                 className="object-cover"
//                             />
//                         </div>

//                         {/* Content */}
//                         <div className="w-full md:w-1/2 p-6 text-center md:text-left">
//                             <h3 className="text-xl font-semibold capitalize text-main flex items-center gap-1.5">
//                                 <PiStarFourFill className="size-7 text-main" />
//                                 {card.title}
//                             </h3>
//                             <p className="text-gray-700 text-lg mt-3 leading-relaxed">
//                                 {card.description}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default WellnessCards;

// "use client";

import React from "react";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

const cardData = [
    {
        title: "Wellness",
        imageSrc: "/assets/image/wellness.jpg",
        description:
            "The ability to be in the present moment is a major component of mental wellness.” “Take care of your body, it’s the only place you have to live.” “You can’t stop the waves, but you can learn to surf.” “Wellness is a connection of paths: knowledge and action. “Wellness is a connection of paths: knowledge and action.",
    },
    {
        title: "Food Place",
        imageSrc: "/assets/image/food-place.jpg",
        description:
            "The Sahajanand Wellness provide a pure vegetarian food because good food make your health fit and fine . A crust eaten in peace is better than a banquet partaken in anxiety. because good food make your health fit and fine from the rooms",
    },
    {
        title: "Ganga Aarti",
        imageSrc: "/assets/image/ganga-arti.jpg",
        description:
            "By this you will get the same result as taking a bath in the Ganges. Om Namo Gangayai Vishwarupini Narayani Namo Namah. Om Jai Gange Mata, Mother Jai Gange Mata. Om Jai Gange Mata, Mother Jai Gange Mata . Om Namo Gangayai Vishwarupini Narayani Namo Namah",
    },
];

const WellnessCards = () => {
    return (
        <section
            className="py-10 bg-gradient-to-b from-orange-50 to-orange-100 my-10 relative overflow-hidden"
        >
            <div className="relative z-10 container mx-auto px-4">
                {/* Logo Section */}
                <div className="flex justify-center mb-4">
                    <Image
                        src="/assets/image/logo1.png"
                        alt="The Sahajanand Wellness Logo"
                        width={50}
                        height={50}
                        className="object-cover"
                    />
                </div>

                {/* Title */}
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium text-prime text-center">
                    The Sahajanand <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Wellness</span>
                </h1>

                {/* Description */}
                <div className='flex justify-center text-center'>
                    <p className='text-gray-700 md:text-xl text-lg mt-5 max-w-4xl'>
                        Purani Shree Vishnu Prakash Das Ji Swami and Rishiraj Sunil Bhagat Ji
                        conducts short term Saptah frequently on Shrimad Bhagwat, Satsang Jivan, Ramayana and Vachanamrat.
                        Disciples of Swami Ji hailing from different parts of India participate during the occasion.
                    </p>
                </div>

                {/* Card Container */}
                <div className="mt-10 flex flex-col space-y-8 lg:px-24">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-2/5 h-72
                             overflow-hidden">
                                <Image
                                    src={card.imageSrc}
                                    alt={card.title}
                                    layout="fill"
                                    className="object-cover hover:scale-110 transition-transform duration-300 ease-in"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-3/5 md:p-6 p-4 text-justify">
                                <h3 className="text-xl font-semibold capitalize text-main flex items-center gap-1.5">
                                    <PiStarFourFill className="size-7 text-main" />
                                    {card.title}
                                </h3>
                                <p className="text-gray-700 text-lg mt-3 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WellnessCards;


