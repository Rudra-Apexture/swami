// 'use client';
// import Image from 'next/image';

// export default function OurStory() {
//     return (
//         <section className="relative bg-gray-50 pb-20 pt-10 px-4 flex flex-col items-center text-center my-10">
//             {/* Background Shape */}
//             <div className="absolute inset-0 bg-orange-50 clip-path-custom"></div>

//             {/* Content Container */}
//             <div className="relative z-10 max-w-4xl">
//                 {/* Logo */}
//                 <div className="flex justify-center mb-6">
//                     <Image
//                         src="/assets/image/logo1.png"
//                         width={100}
//                         height={50}
//                         alt="The Sahajanand Wellness Logo"
//                         className="object-cover w-14 h-auto"
//                     />
//                 </div>

//                 {/* Heading */}
//                 <h2 className="lg:text-4xl md:text-3xl text-2xl font-medium text-prime">
//                     Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Story</span>
//                 </h2>

//                 {/* Paragraph */}
//                 <p className="mt-8 text-gray-700 leading-relaxed text-sm md:text-lg">
//                     *Our life would be wholesome only if we do good activities and walk in the spiritual path. * Aim for
//                     something in your life, which you consider it as good, and then workout for its success, and do it till your
//                     death. this is the best method to gain sure success in your life. * Give more attention to own language, and
//                     tell its importance to others. * If you make others happy, then god would give permanent happiness to you. *
//                     The path of Dharma is very bright, and there is no darkness in that. * Because of the excellent powers of the
//                     god, we are able to live in this world without much difficulty. we have to definitely thank for giving this
//                     prosperous life to us. * Those who live a lazy life are not to be considered as humans and Those who live
//                     actively like a busy bee would only be considered as humans.
//                 </p>
//             </div>
//         </section>
//     );
// }

'use client';
import Image from 'next/image';
import { FaScroll } from "react-icons/fa";


export default function OurStory() {
    const storyPoints = [
        "Our life would be wholesome only if we do good activities and walk in the spiritual path.",
        "Aim for something in your life, which you consider it as good, and then workout for its success, and do it till your death. this is the best method to gain sure success in your life.",
        "Give more attention to own language, and tell its importance to others.",
        "If you make others happy, then god would give permanent happiness to you.",
        "The path of Dharma is very bright, and there is no darkness in that.",
        "Because of the excellent powers of the god, we are able to live in this world without much difficulty. we have to definitely thank for giving this prosperous life to us.",
        "Those who live a lazy life are not to be considered as humans and Those who live actively like a busy bee would only be considered as humans."
    ];

    return (
        <section className="relative bg-gray-50 px-4 flex flex-col items-center text-center my-14">
            {/* Content Container */}

            <div className="relative z-10 max-w-7xl">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/assets/image/logo1.png"
                        width={100}
                        height={50}
                        alt="The Sahajanand Wellness Logo"
                        className="object-cover w-14 h-auto"
                    />
                </div>

                {/* Heading */}
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-medium text-prime">
                    Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Story</span>
                </h2>

                {/* Bulleted Points Container */}
                <div className="mt-10 text-gray-700 leading-relaxed text-sm md:text-lg space-y-4">
                    {storyPoints.map((point, index) => (
                        <div key={index} className="flex items-center">
                            <div className="size-6 flex-shrink-0 mr-3 mt-1">
                                <FaScroll className='text-main' />
                            </div>
                            <p className="flex-grow text-left text-base md:text-lg">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
