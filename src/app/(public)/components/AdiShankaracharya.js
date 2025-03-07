// 'use client';

// import Image from 'next/image';

// export default function AdiShankaracharya() {
//     return (
//         <section className="bg-gray-50 py-10">
//             <div className="container mx-auto px-4">
//                 {/* Content Grid */}
//                 <div className="flex lg:flex-row flex-col gap-8 items-center">

//                     {/* Text Section */}
//                     <div className="lg:w-3/5 w-full order-1 md:order-2">
//                         <p className="text-gray-700 leading-normal text-sm  md:text-base mb-4">
//                             The timeless journey of Yogis and Sanyasis, traversing ancient paths in pursuit of truth and liberation, is a
//                             testament to human perseverance and spiritual yearning. Amidst the majestic peaks and winding rivers of
//                             the Himalayas lies a valley that stands out for its profound connection with humanity - the Valley of the
//                             mighty Ganges.
//                         </p>
//                         <p className="text-gray-700 leading-normal text-sm md:text-base mb-4">
//                             As the saying goes, pilgrimages are ordained by destiny, granting access only to those deserving and fated.
//                             The Bhagirathi, originating from the Gangotri Glacier, mythically resides in the matted locks of Lord Shiva,
//                             symbolizing Tapovan, a meadow of celestial beauty nestled at the foot of Mount Shivling.
//                         </p>
//                         <p className="text-gray-700 leading-normal text-sm md:text-base mb-4">
//                             The Ganga holds sacred significance for Hindus along its entire course. Pilgrims bathe in its purifying
//                             waters, offering homage to ancestors and gods by cupping water in their hands, adorning it with flowers and
//                             oil lamps, and carrying its sanctified essence home for ritual use. The mere sight, touch, or utterance of
//                             "Ganga-Ganga" is believed to absolve sins and purify the soul.
//                         </p>
//                         <button className="bg-main text-white font-medium py-2 px-4 rounded text-sm">
//                             SHOW MORE
//                         </button>
//                     </div>

//                     {/* Image Section */}
//                     <div className="relative lg:w-2/5 w-full">
//                         <Image
//                             src="/assets/image/adi.jpg" // Replace with your actual image
//                             alt="Adi Shankaracharya"
//                             width={600}  // Adjust as needed
//                             height={700} // Adjust as needed
//                             className="object-cover w-full h-full rounded-xl"
//                             style={{ objectFit: "cover", width: "100%", height: "auto" }}
//                         />
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

'use client';

import Image from 'next/image';

export default function AdiShankaracharya() {
    return (
        <section className="relative bg-gray-50 py-16">
            <div className="text-center mb-8 container mx-auto">
                <h2 className="lg:text-3xl/10 text-xl font-medium text-prime mb-4 capitalize">
                    In a moment of absolute spiritual inspiration, sitting by the banks of the Ganges <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">thus wrote the great sage Adi Shankaracharya in the 8th century AD.
                    </span>
                </h2>
            </div>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                {/* Title Section */}

                {/* Image Section with Overlay */}
                <div className="relative lg:w-1/2 w-full lg:order-2 flex justify-center">
                    <div className="relative overflow-hidden rounded-full shadow-lg size-60 md:size-96 md:-mt-10 mt-0">
                        <Image
                            src="/assets/image/adi.jpg" // Replace with your actual image
                            alt="Adi Shankaracharya"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Text Content with Flowing Layout */}
                <div className="lg:w-1/2 w-full lg:order-1 text-left mt-8 lg:mt-0">
                    <h2 className="text-gray-700 md:text-lg text-base leading-relaxed mb-4">
                        The timeless journey of Yogis and Sanyasis, traversing ancient paths in pursuit of truth and liberation, is a testament to human perseverance and spiritual yearning. Amidst the majestic peaks and winding rivers of the Himalayas lies a valley that stands out for its profound connection with humanity - the Valley of the mighty Ganges. For ages, this pristine river goddess has stirred the souls of countless beings who dwell within the embrace of the Himalayan ranges.
                    </h2>
                    <p className="text-gray-700 md:text-lg text-base leading-relaxed mb-4">
                        The timeless journey of Yogis and Sanyasis, traversing ancient paths in pursuit of truth and liberation, is a
                        testament to human perseverance and spiritual yearning. The majestic peaks and winding rivers of the Himalayas
                        echo this eternal quest.
                    </p>
                    <p className="text-gray-700 md:text-lg text-base leading-relaxed mb-4">
                        The Ganges, emerging from the Gangotri Glacier, is more than a river—it is the lifeline of Hindu spirituality,
                        believed to cleanse sins and elevate the soul. Pilgrims from all over gather to experience its divine purity.
                    </p>
                    <div className='flex lg:justify-start justify-center'>
                        <button className="mt-4 bg-main text-white font-medium py-3 px-6 rounded-sm transition-all">
                            Show More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


// 'use client';

// import Image from 'next/image';
// import { GiLotus } from "react-icons/gi";


// export default function AdiShankaracharya() {
//     return (
//         <section className="relative bg-gradient-to-b from-orange-50 to-white py-16 overflow-hidden">
//             {/* Decorative elements */}
//             <div className="absolute top-0 left-0 w-full opacity-10">
//                 <svg viewBox="0 0 500 200" className="w-full">
//                     <path d="M0 100 Q 250 200 500 100 L 500 0 L 0 0 Z" fill="currentColor" className="text-orange-200" />
//                 </svg>
//             </div>

//             <div className="container mx-auto px-4 max-w-6xl">
//                 {/* Section Title */}
//                 <div className="text-center mb-12 relative z-10">
//                     <div className="flex items-center justify-center gap-4 mb-6">
//                         <GiLotus className="w-8 h-8 text-orange-600 animate-pulse" />
//                         <h2 className="text-4xl font-bold text-gray-800 font-serif capitalize">
//                             <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//                                 Wisdom from the Ganges
//                             </span>
//                         </h2>
//                         <GiLotus className="w-8 h-8 text-orange-600 animate-pulse" />
//                     </div>
//                     <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
//                         "Thus wrote Adi Shankaracharya by the sacred river, 8th century AD"
//                     </p>
//                 </div>

//                 {/* Content Grid */}
//                 <div className="flex flex-col lg:flex-row gap-12 items-stretch">
//                     {/* Image Container */}
//                     <div className="lg:w-1/2 relative group">
//                         <div className="relative rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-500">
//                             <Image
//                                 src="/assets/image/adi.jpg"
//                                 alt="Adi Shankaracharya"
//                                 width={600}
//                                 height={800}
//                                 className="object-cover w-full h-full"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
//                         </div>
//                         <div className="absolute -bottom-4 -right-4 bg-orange-100 w-24 h-24 rounded-full opacity-30" />
//                     </div>

//                     {/* Text Content */}
//                     <div className="lg:w-1/2 relative bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
//                         <div className="space-y-6 text-gray-700">
//                             <div className="relative">
//                                 <p className="text-lg leading-relaxed font-medium">
//                                     The timeless journey of Yogis and Sanyasis traversing ancient paths in pursuit
//                                     of truth and liberation stands as a testament to spiritual perseverance.
//                                     Amidst Himalayan peaks flows the sacred Ganges, humanity's eternal companion.
//                                 </p>
//                             </div>

//                             <div className="relative pl-8 border-l-2 border-orange-100">
//                                 <p className="text-gray-600 mb-4">
//                                     The Bhagirathi, born from Gangotri's glaciers, rests in Shiva's matted locks,
//                                     symbolizing Tapovan's celestial beauty beneath Mount Shivling's watchful gaze.
//                                 </p>
//                                 <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
//                                     <span className="text-sm font-medium text-orange-700">Sacred Waters</span>
//                                 </div>
//                             </div>

//                             <blockquote className="p-6 bg-orange-50 rounded-xl border border-orange-100 italic">
//                                 "Ganga-Ganga" - a chant that purifies, a sight that liberates,
//                                 a touch that transcends mortal sins.
//                             </blockquote>

//                             <button className="mt-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center gap-2 mx-auto lg:mx-0">
//                                 Discover More
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
