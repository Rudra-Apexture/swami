// // InspirationComponent.jsx
// import Image from 'next/image';

// const InspirationComponent = () => {
//     return (
//         <div className="flex flex-col md:flex-row w-full max-w-7xl gap-4 mx-auto overflow-hidden md:my-10 my-5 px-4">
//             {/* Left side - Image container */}
//             <div className="w-full md:w-1/2 h-72 md:h-auto relative">
//                 <Image
//                     src="/assets/image/yodha.jpg"
//                     alt="Sacred statue in the ashram"
//                     fill
//                     className="object-cover rounded-xl"
//                     priority
//                 />
//                 <div className="absolute bottom-3 left-3 bg-main/80 text-white py-1 px-3 rounded-full text-sm font-medium">
//                     Sacred Heritage
//                 </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="w-full md:w-1/2 md:p-8 flex flex-col justify-center">
//                 <div className="space-y-5">
//                     <h2 className="md:text-4xl text-3xl font-medium text-prime">
//                         Finding Inspiration <span className="text-amber-600">in Every Step</span>
//                     </h2>
//                     <p className="text-slate-700 text-lg">
//                         Our Ashram carries a sacred energy, a sweet sanctuary where countless Mahatmas have performed Tapasya through the ages, earning it the revered name Tapo Bhoomi.
//                     </p>
//                     <p className="text-slate-700 text-lg">
//                         To this day, seekers journey from across the world to connect with the spiritual legacy where their Gurus and Acharyas once practiced deep meditation and spiritual disciplines.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InspirationComponent;



import React from 'react';
import Image from 'next/image';

const InspirationComponent = () => {
    return (
        <div className="relative py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Title with decorative elements */}
                    <div className="relative text-center">
                        <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-medium relative z-10 capitalize">
                            Finding  <span className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Inspiration</span> in Every Turn
                        </h2>
                    </div>

                    <div className='flex justify-center'>
                        <p className='text-center md:text-lg leading-relaxed text-gray-700 mt-5 max-w-4xl'>
                            Life’s journey is woven with moments that spark creativity, resilience, and growth. Finding Inspiration in Every Turn is about embracing curiosity to uncover motivation in the ordinary—the challenges that test us, the quiet pauses that ground us, and the unexpected connections that ignite fresh ideas.
                        </p>
                    </div>

                    {/* Content section with asymmetrical layout */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                        {/* Image with decorative border */}
                        <div className="lg:w-1/2 w-full relative">
                            <div className="absolute inset-0 border-4 border-main rounded-lg transform translate-x-2.5 translate-y-2.5"></div>
                            <div className="relative z-20 rounded-sm overflow-hidden">
                                <Image
                                    src="/assets/image/yodha.jpg"
                                    alt="Rishikesh Landscape"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 border-10 border-white opacity-30 rounded-sm"></div>

                                {/* Image caption - Inside the Image */}
                                <div className="absolute bottom-0 left-0 bg-main/80 text-white py-1 px-2 z-30">
                                    <p className="font-medium md:text-base text-sm capitalize">Wisdom Beyond Time from the Bhagavad Gita </p>
                                </div>
                            </div>
                        </div>

                        {/* Text content with decorative elements */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative">
                                <div className="space-y-6 relative z-10">
                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        Our Ashram has there Attraction, it is sweet place because on this place so many Mahatmas had performed the Tapasya here so, it is called Tapo Bhoomi..
                                    </p>

                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        the quiet pauses that ground us, and the unexpected connections that ignite fresh ideas. It’s a mindset that transforms setbacks into stepping stones, strangers into mentors, and routines into adventures. By staying open to the world’s rhythm, we discover that inspiration isn’t confined to grand milestones—it thrives in the whispers of daily life, urging us to see possibility where others see pause. Here, every path, whether smooth or winding, becomes a canvas for reinvention.
                                    </p>


                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        Even today people from all over come here and say that their Gurus and Acharyas performed the Tapasya
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InspirationComponent;



