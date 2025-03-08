// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const AshramCard = ({ imageUrl, title, description, imageLeft, index }) => {
//     const { ref, inView } = useInView({
//         triggerOnce: true, // Only trigger once when in view
//         threshold: 0.5, // Adjust as needed (e.g., 0.2 means 20% of the element is visible)
//     });

//     const animationVariants = {
//         hiddenLeft: {
//             x: -100,
//             opacity: 0,
//         },
//         hiddenRight: {
//             x: 100,
//             opacity: 0,
//         },
//         visible: {
//             x: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: 'easeInOut',
//                 delay: index * 0.2, // Stagger the animation
//             },
//         },
//     };

//     const initialVariant = imageLeft ? "hiddenLeft" : "hiddenRight";

//     return (
//         <div className='container mx-auto px-4' ref={ref}>
//             <motion.div
//                 className="bg-gray-50 rounded-xl border shadow-lg flex items-center max-w-5xl mx-auto my-8 overflow-hidden"
//                 variants={animationVariants}
//                 initial={initialVariant}
//                 animate={inView ? "visible" : initialVariant} // Trigger animation based on inView
//             >
//                 {imageLeft ? (
//                     <>
//                         <div className='flex lg:flex-row flex-col'>
//                             <div className="lg:w-1/2 w-full">
//                                 <Image
//                                     src={imageUrl}
//                                     alt={title}
//                                     width={600}
//                                     height={500}
//                                     className="object-cover w-full rounded-none"
//                                     priority
//                                 />
//                             </div>
//                             <div className="lg:w-1/2 w-full md:p-8 p-4">
//                                 <h2 className="md:text-2xl text-xl font-medium text-main mb-2">
//                                     {title}
//                                 </h2>
//                                 <p className="text-gray-700 text-lg">
//                                     {description}
//                                 </p>
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         <div className='flex lg:flex-row flex-col'>
//                             <div className="lg:w-1/2 w-full md:p-8 p-4">
//                                 <h2 className="md:text-2xl text-xl font-medium text-main mb-2">
//                                     {title}
//                                 </h2>
//                                 <p className="text-gray-700 text-lg">
//                                     {description}
//                                 </p>
//                             </div>
//                             <div className="lg:w-1/2 w-full">
//                                 <Image
//                                     src={imageUrl}
//                                     alt={title}
//                                     width={600}
//                                     height={400}
//                                     className="object-cover rounded-none"
//                                     priority
//                                 />
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </motion.div>
//         </div>
//     );
// };

// export default AshramCard;

// 09:27

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AshramCard = ({ imageUrl, title, description, imageLeft, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Enhanced animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1 + 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: imageLeft ? 20 : -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1 + 0.3,
            },
        },
    };

    return (
        <div className="container mx-auto p-5" ref={ref}>
            <motion.div
                className="bg-white rounded-2xl border shadow-md overflow-hidden transform transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <div className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image section with zoom effect on hover */}
                    <motion.div
                        className="lg:w-1/2 w-full relative overflow-hidden h-64 lg:h-auto"
                        variants={imageVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                        <div className="w-full h-full overflow-hidden group">
                            <Image
                                src={imageUrl}
                                alt={title}
                                width={600}
                                height={500}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content section */}
                    <motion.div
                        className="lg:w-1/2 w-full p-4 lg:p-8 flex flex-col justify-center"
                        variants={textVariants}
                    >
                        <div className="border-l-4 border-main pl-3 mb-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-main">
                                {title}
                            </h2>
                        </div>

                        <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                            {description}
                        </p>


                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AshramCard;

