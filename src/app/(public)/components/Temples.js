// "use client";
// import React from 'react'

// const Temples = () => {
//     return (
//         <section className='Rishikesh-Temples py-10'>
//             {/* Header with decorative elements */}
//             <div className="relative text-center container mx-auto">
//                 <h2 className="md:text-4xl/12 text-2xl font-bold relative inline-block">
//                     A Spiritual Odyssey from
//                     <span className="block mt-2 bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">
//                         Rishikesh's Temples
//                     </span>
//                 </h2>
//                 <div className="max-w-5xl mx-auto mt-8 relative">
//                     <p className="text-base md:text-xl text-gray-700 leading-relaxed">
//                         Nestled along the Ganges and cradled by the Himalayas, Rishikesh’s temples are portals to divine realms. Begin at <span className='text-main font-medium'> Neelkanth Mahadev </span> , where Shiva’s cosmic sacrifice echoes through misty peaks. Wander to <span className='text-main font-medium'> Triveni Ghat </span> , where the sacred confluence of rivers ignites souls during the hypnotic Ganga Aarti. At <span className='text-main font-medium'>Bharat Mandir</span>  , feel the pulse of ancient Vishnu worship, while <span className='text-main font-medium'>Raghunath Temple</span>  whispers tales of Rama’s penance. Climb to <span className='text-main font-medium'>Kunjapuri Temple</span> , where dawn breaks over Shakti’s abode, or meditate in Vasishtha Cave, where sages once sought truth.
//                     </p>
//                 </div>
//             </div>

//             {/* Gallery of temples */}
//             <div>

//             </div>
//         </section>
//     )
// }

// export default Temples

// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';

// const templesData = [
//     {
//         name: 'Bhootnath Temple',
//         description:
//             'Built in the remembrance of Lord Shiva once again, many people believe that this is the place where Lord Shiva rested during the period of time when he planned to marry his wife Sati. This place will normally be full of silence and seclusion amidst nature as it is yet to explored by the travellers to its fullest potential. An ideal place to be visited with friends and families, it is one of the best temples in Rishikesh to plan a perfect day out.',
//         location: 'Swarg Ashram, Rishikesh, Uttarakhand 249304',
//         image: '/assets/image/Bhootnath-Temple.png',
//     },
//     {
//         name: 'Neelkanth Mahadev Temple',
//         description: 'Dedicated to Lord Shiva, the Neelkanth Mahadev Temple is the most famous temple when compared to the other temples in Rishikesh. Owing much of its popularity to its location, the temple looks small when compared to the other Shiva temples in Rishikesh. Irrespective of the size of the temple, one can feel the positive vibes during their visit. Located inside a dense forest, visiting the temple becomes more fun with friends and family when one has to go through the jungle. Apart from that, one can also visit the waterfalls and nature’s other marvels while visit this temple.',
//         location: 'Kotdwar Pauri Road, Kotdwara, Uttarakhand 246149',
//         image: '/assets/image/Mahadev-Temple.jpg',
//     },
//     {
//         name: 'Shri Bharat Mandir',
//         description: 'Among the many famous temples in Rishikesh, this temple ranks 10th among the many places to visit in Rishikesh. Dedicated to Lord Vishnu, this ancient temple was found by Adi Guru Shankaracharya in the 12th century. The idol present here is shaped out of an individual piece of Saligram. Also, some of the very old pots, coins of old times, and many ancient statues were yielded during the excavation of this site. Striking a perfect blend between the traditional architecture and aesthetical values, one cannot miss out on this temple when in Rishikesh.',
//         location: '9, Ghat Rd, Mayakund, Rishikesh, Uttarakhand 249201',
//         image: '/assets/image/ShriBharat-Temple.png',
//     },
//     {
//         name: 'Parmarth Niketan',
//         description: 'This too is one of the prominent temples in Rishikesh, India. You’ll even find a great religious school inside this temple that focuses on imparting valuable teachings of Hinduism. It also renowned as the Yoga school in the city of Rishikesh. During the evening, people gather here to be a part of the pious Ganga Aart which is held at the Parmarth Ghat.',
//         location: 'Near Main Market Road, Ram Jhula, Swarg Ashram, Rishikesh, Uttarakhand 249304',
//         image: '/assets/image/ParmarthNiketan-Temple.png',
//     },
//     {
//         name: 'Gita Bhawan',
//         description: 'This site is considered to be one of the oldest temples to visit in Rishikesh. The walls of this temple is embellished with the beautiful depiction of the famous epics, Ramayana and Mahabharata. People flock here to experience the exuberance of the famous Ganga Aarti.',
//         location: 'Gangapar, P.O, Swarg Ashram, Rishikesh, Uttarakhand 249304',
//         image: '/assets/image/GitaBhawan-Temple.png',
//     },
//     {
//         name: 'Trayambakeshwar Temple',
//         description: 'This temple is one of the famous holy shrines in Rishikesh. Also known as the Tera Manzil Temple, the temple was constructed as an abode of Lord Shiva, and this particular Rishikesh Shiva temple is considered to be the one of the many Jyotirlingas of Lord Shiva. Once can witness the intricate designs and architectural brilliance on the walls and idols inside this 13-storied Trayambakeshwar temple. Considered to be more than 400 years old, it is one of the must-visit temples in Rishikesh.',
//         location: 'Laxman Jhoola, Laxman Jhula, Rishikesh, Uttarakhand 249302',
//         image: '/assets/image/Trayambakeshwar-Temple.png',
//     },
// ];

// const Temples = () => {
//     const [activeTemple, setActiveTemple] = useState(templesData[0].name); // Default to Bhootnath
//     const currentTempleData = templesData.find((temple) => temple.name === activeTemple);

//     const handleTempleClick = (name) => {
//         setActiveTemple(name);
//     };

//     return (
//         <section className="py-10 Rishikesh-Temples">
//             {/* Header */}
//             <div className="container mx-auto text-center">
//                 <h2 className="text-2xl md:text-4xl/12 font-bold relative inline-block">
//                     A Spiritual Odyssey from
//                     <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                         Rishikesh's Temples
//                     </span>
//                 </h2>
//                 <div className="max-w-5xl mx-auto mt-8 relative">
//                     <p className="text-base md:text-xl text-gray-700 leading-relaxed">
//                         Nestled along the Ganges and cradled by the Himalayas, Rishikesh’s temples are portals to divine realms. Begin at{' '}
//                         <span className="text-orange-500 font-medium">Neelkanth Mahadev</span>, where Shiva’s cosmic sacrifice echoes through misty peaks. Wander to{' '}
//                         <span className="text-orange-500 font-medium">Triveni Ghat</span>, where the sacred confluence of rivers ignites souls during the hypnotic Ganga Aarti.
//                         At <span className="text-orange-500 font-medium">Bharat Mandir</span>, feel the pulse of ancient Vishnu worship, while{' '}
//                         <span className="text-orange-500 font-medium">Raghunath Temple</span> whispers tales of Rama’s penance. Climb to{' '}
//                         <span className="text-orange-500 font-medium">Kunjapuri Temple</span>, where dawn breaks over Shakti’s abode, or meditate in Vasishtha Cave, where
//                         sages once sought truth.
//                     </p>
//                 </div>
//             </div>

//             {/* Gallery */}
//             <div className="container mx-auto mt-12 flex flex-col md:flex-row gap-6">
//                 {/* Temple List Tabing */}
//                 <div className="w-full md:w-1/4 space-y-4">
//                     {templesData.map((temple) => (
//                         <button
//                             key={temple.name}
//                             onClick={() => handleTempleClick(temple.name)}
//                             className={`w-full text-left py-2 px-4 border rounded-md
//                          ${activeTemple === temple.name ? 'border-2 border-main text-main' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
//                         >
//                             {temple.name}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Temple Details */}
//                 <div className="w-full md:w-2/4 p-4 rounded-md shadow-md border">
//                     <h3 className="text-2xl font-medium mb-4 text-main">{currentTempleData.name}</h3>
//                     <p className="text-gray-700 mb-4 text-lg">{currentTempleData.description}</p>
//                     <p className="text-gray-600 text-lg">
//                         <b className='text-main'>Location:</b> {currentTempleData.location}
//                     </p>
//                 </div>

//                 {/* Temple Image */}
//                 <div className="w-full md:w-1/4 rounded-md overflow-hidden shadow-md transition-opacity duration-500">
//                     <Image
//                         src={currentTempleData.image}
//                         alt={currentTempleData.name}
//                         width={500} // Adjust as needed
//                         height={300} // Adjust as needed
//                         className="object-cover w-full h-full"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Temples;

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";


const templesData = [
    {
        name: 'Bhootnath Temple',
        description:
            'Built in the remembrance of Lord Shiva once again, many people believe that this is the place where Lord Shiva rested during the period of time when he planned to marry his wife Sati. This place will normally be full of silence and seclusion amidst nature as it is yet to explored by the travellers to its fullest potential. An ideal place to be visited with friends and families, it is one of the best temples in Rishikesh to plan a perfect day out.',
        location: 'Swarg Ashram, Rishikesh, Uttarakhand 249304',
        image: '/assets/image/Bhootnath-Temple.png',
    },
    {
        name: 'Neelkanth Mahadev Temple',
        description: 'Dedicated to Lord Shiva, the Neelkanth Mahadev Temple is the most famous temple when compared to the other temples in Rishikesh. Owing much of its popularity to its location, the temple looks small when compared to the other Shiva temples in Rishikesh. Irrespective of the size of the temple, one can feel the positive vibes during their visit. Located inside a dense forest, visiting the temple becomes more fun with friends and family when one has to go through the jungle. Apart from that, one can also visit the waterfalls and nature\'s for temple.',
        location: 'Kotdwar Pauri Road, Kotdwara, Uttarakhand 246149',
        image: '/assets/image/Mahadev-Temple.jpg',
    },
    {
        name: 'Shri Bharat Mandir',
        description: 'Among the many famous temples in Rishikesh, this temple ranks 10th among the many places to visit in Rishikesh. Dedicated to Lord Vishnu, this ancient temple was found by Adi Guru Shankaracharya in the 12th century. The idol present here is shaped out of an individual piece of Saligram. Also, some of the very old pots, coins of old times, and many ancient statues were yielded during the excavation of this site. Striking a perfect blend between the traditional architecture and aesthetical values, one cannot miss out on this temple when in Rishikesh.',
        location: '9, Ghat Rd, Mayakund, Rishikesh, Uttarakhand 249201',
        image: '/assets/image/ShriBharat-Temple.png',
    },
    {
        name: 'Parmarth Niketan',
        description: 'This too is one of the prominent temples in Rishikesh, India. You\'ll even find a great religious school inside this temple that focuses on imparting valuable teachings of Hinduism.It also renowned as the Yoga school in the city of Rishikesh.During the evening, people gather here to be a part of the pious Ganga Aart which is held at the Parmarth Ghat.',
        location: 'Near Main Market Road, Ram Jhula, Swarg Ashram, Rishikesh, Uttarakhand 249304',
        image: '/assets/image/ParmarthNiketan-Temple.png',
    },
    {
        name: 'Gita Bhawan',
        description: 'This site is considered to be one of the oldest temples to visit in Rishikesh. The walls of this temple is embellished with the beautiful depiction of the famous epics, Ramayana and Mahabharata. People flock here to experience the exuberance of the famous Ganga Aarti.',
        location: 'Gangapar, P.O, Swarg Ashram, Rishikesh, Uttarakhand 249304',
        image: '/assets/image/GitaBhawan-Temple.png',
    },
    {
        name: 'Trayambakeshwar Temple',
        description: 'This temple is one of the famous holy shrines in Rishikesh. Also known as the Tera Manzil Temple, the temple was constructed as an abode of Lord Shiva, and this particular Rishikesh Shiva temple is considered to be the one of the many Jyotirlingas of Lord Shiva. Once can witness the intricate designs and architectural brilliance on the walls and idols inside this 13-storied Trayambakeshwar temple. Considered to be more than 400 years old, it is one of the must-visit temples in Rishikesh.',
        location: 'Laxman Jhoola, Laxman Jhula, Rishikesh, Uttarakhand 249302',
        image: '/assets/image/Trayambakeshwar-Temple.png',
    },
];

const Temples = () => {
    const [activeTemple, setActiveTemple] = useState(templesData[0].name);
    const [isLoaded, setIsLoaded] = useState(false);
    const currentTempleData = templesData.find((temple) => temple.name === activeTemple);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleTempleClick = (name) => {
        setActiveTemple(name);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
            {/* Header with Animation */}
            <div
                className="container mx-auto text-center lg:mb-14 mb-10 px-4"
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 relative">
                    <span className="relative inline-block">
                        A Spiritual Odyssey from
                        <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Rishikesh's Temples
                        </span>
                    </span>
                </h2>
                <div className="max-w-4xl mx-auto mt-10">
                    <p
                        className="text-base md:text-xl text-gray-700 leading-relaxed"
                    >
                        Nestled along the Ganges and cradled by the Himalayas, Rishikesh's temples are portals to divine realms. Begin at{' '}
                        <span className="text-orange-500 font-medium">Neelkanth Mahadev</span>, where Shiva's cosmic sacrifice echoes through misty peaks. Wander to{' '}
                        <span className="text-orange-500 font-medium">Triveni Ghat</span>, where the sacred confluence of rivers ignites souls during the hypnotic Ganga Aarti.
                        At <span className="text-orange-500 font-medium">Bharat Mandir</span>, feel the pulse of ancient Vishnu worship, while{' '}
                        <span className="text-orange-500 font-medium">Raghunath Temple</span> whispers tales of Rama's penance.
                    </p>
                </div>
            </div>

            {/* Redesigned Temple Gallery */}
            <div className="container mx-auto">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Side - Temple Selection */}
                        <div className="w-full lg:w-1/4 bg-gradient-to-b from-orange-100 to-amber-50 p-6">
                            <h3 className="text-xl font-semibold text-orange-800 mb-8 border-b border-orange-300 pb-3">
                                Sacred Destinations
                            </h3>
                            <div className="space-y-2">
                                {templesData.map((temple, index) => (
                                    <motion.button
                                        key={temple.name}
                                        initial={{ x: -30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        onClick={() => handleTempleClick(temple.name)}
                                        className={`w-full text-left py-3 px-4 rounded-sm transition-all duration-300 flex items-center ${activeTemple === temple.name
                                            ? 'bg-gradient-to-r from-main to-amber-300/50 text-white'
                                            : 'hover:bg-orange-100 text-gray-700'
                                            }`}
                                    >
                                        {temple.name}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Center - Temple Image with Parallax Effect */}
                        <div className="w-full lg:w-1/3 relative h-80 lg:h-auto overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTemple}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentTempleData.image}
                                        alt={currentTempleData.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h4 className="text-2xl font-bold">{currentTempleData.name}</h4>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Side - Temple Description */}
                        <div className="w-full lg:w-5/12 lg:p-8 p-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTemple}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="flex items-center lg:mb-6 mb-0">
                                        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-3" />
                                        <h3 className="text-2xl font-bold text-prime">{currentTempleData.name}</h3>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">{currentTempleData.description}</p>
                                    <div className="bg-amber-50 p-2 rounded-md border border-amber-100">
                                        <h4 className="text-main font-medium mb-2 gap-2 flex items-center">
                                            <FaMapMarkerAlt />
                                            Sacred Location
                                        </h4>
                                        <p className="text-gray-700 text-sm lg:text-base">{currentTempleData.location}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Temples;