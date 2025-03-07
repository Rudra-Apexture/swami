
import React from 'react';
import Image from 'next/image';

const RishikeshInfo = () => {
    return (
        <div className="relative py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Title with decorative elements */}
                    <div className="relative text-center">
                        <h2 className="inline-block lg:text-4xl md:text-3xl text-2xl font-bold relative z-10 capitalize">
                            The <span className="bg-gradient-to-r from-main to-amber-500 bg-clip-text text-transparent">Sacred History</span> of Rishikesh
                        </h2>
                    </div>

                    <div className='flex justify-center'>
                        <p className='text-center md:text-lg leading-relaxed text-gray-700 mt-5 max-w-4xl'>
                            Rishikesh, nestled in the Himalayan foothills along the Ganges River, holds profound spiritual significance in Hindu mythology. Its name derives from <span className='text-main font-medium'>"Hrishikesh"</span>  (Lord of the Senses), an epithet of Lord Vishnu, who is said to have appeared here to bless the sage Raibhya Rishi after his intense penance.
                        </p>
                    </div>

                    {/* Content section with asymmetrical layout */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                        {/* Image with decorative border */}
                        <div className="lg:w-1/2 w-full relative">
                            <div className="absolute inset-0 border-4 border-main rounded-lg transform translate-x-2.5 translate-y-2.5"></div>
                            <div className="relative z-20 rounded-sm overflow-hidden">
                                <Image
                                    src="/assets/image/rivers.jpg"
                                    alt="Rishikesh Landscape"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 border-10 border-white opacity-30 rounded-sm"></div>

                                {/* Image caption - Inside the Image */}
                                <div className="absolute bottom-0 left-0 bg-main/80 text-white py-1 px-2 z-30">
                                    <p className="font-medium md:text-base text-sm capitalize">The sacred Ganges River at Rishikesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Text content with decorative elements */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative">
                                <div className="space-y-6 relative z-10">
                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        Rishikesh, also spelt as Hrishikesh, located in <span className="font-medium text-main">Uttarakhand</span>, rests serenely on the right bank of the sacred <span className="font-medium text-main">Ganges</span> River. For millennia, it has been a pilgrimage town for <span className="font-medium text-main">Hindus</span>, where ancient sages and saints meditated in search of higher knowledge.
                                    </p>

                                    <p className="md:text-lg text-base leading-normal text-gray-700">
                                        Whether you're a solo traveler meditating by the Ganges, a family exploring wildlife, or an adrenaline junkie conquering rapids, Rishikesh offers transformative experiences. Its unique fusion of ancient traditions and modern thrills ensures every visit leaves you renewed and inspired , a family exploring wildlife.
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

export default RishikeshInfo;



