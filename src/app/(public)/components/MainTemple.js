import React from 'react';
import Image from 'next/image';

const MainTemple = () => {
    return (
        <div className="relative py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Title with decorative elements */}
                    <div className="relative text-center">
                        <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-medium relative z-10 capitalize">
                            Main  <span className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Temple's </span> of Rishikesh
                        </h2>
                    </div>

                    <div className='flex justify-center'>
                        <p className='text-center md:text-lg leading-relaxed text-gray-700 mt-5 max-w-4xl'>
                            Rishikesh, known as the <span className='text-main font-medium'>"Yoga Capital of the World"</span> in Uttarakhand, India, is home to several revered temples, with Neelkanth Mahadev Temple being the most prominent. Dedicated to Lord Shiva, it is nestled in lush forests 32 km from Rishikesh at 1,330 meters elevation.
                        </p>
                    </div>

                    {/* Content section with asymmetrical layout */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                        {/* Image with decorative border */}
                        <div className="lg:w-1/2 w-full relative">
                            <div className="absolute inset-0 border-4 border-main rounded-lg transform translate-x-2.5 translate-y-2.5"></div>
                            <div className="relative z-20 rounded-sm overflow-hidden">
                                <Image
                                    src="/assets/image/Rishikeshtemple.jpg"
                                    alt="Rishikesh Landscape"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 border-10 border-white opacity-30 rounded-sm"></div>

                                {/* Image caption - Inside the Image */}
                                <div className="absolute bottom-0 left-0 bg-main/80 text-white py-1 px-2 z-30">
                                    <p className="font-medium md:text-base text-sm capitalize">Where Spirituality Meets the Himalayan Wilderness                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Text content with decorative elements */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative">
                                <div className="space-y-6 relative z-10">
                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        Rishikesh is home to several main temples that hold great religious and cultural significance.
                                    </p>

                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        Rishikesh is one such destination that not only offers spiritual attractions but also allows travellers to rejuvenate amidst nature. However, make sure you do not miss out on visiting these ancient temples in Rishikesh that form the core of Uttarakhand’s essence.
                                    </p>

                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        These temples attract devotees and tourists from far and wide who come to seek blessings, offer prayers, and experience the spiritual ambiance of Rishikesh.
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

export default MainTemple;




