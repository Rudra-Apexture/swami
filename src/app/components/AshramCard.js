import Image from 'next/image';
import { motion } from 'framer-motion';

const AshramCard = ({ imageUrl, title, description, imageLeft, index }) => {
    const animationVariants = {
        hiddenLeft: {
            x: -100,
            opacity: 0,
        },
        hiddenRight: {
            x: 100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: index * 0.5, // Stagger the animation
            },
        },
    };

    return (
        <div className='container mx-auto px-4'>
            <motion.div
                className="bg-gray-50 rounded-xl border shadow-lg flex items-center max-w-5xl mx-auto my-8 overflow-hidden"
                variants={animationVariants}
                initial={imageLeft ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true }} // Only animate once when in view
            >
                {imageLeft ? (
                    <>
                        <div className='flex lg:flex-row flex-col'>
                            <div className="lg:w-1/2 w-full">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    width={600}
                                    height={500}
                                    className="object-cover w-full rounded-none"
                                    priority
                                />
                            </div>
                            <div className="lg:w-1/2 w-full md:p-8 p-4">
                                <h2 className="md:text-2xl text-xl font-medium text-main mb-2">
                                    {title}
                                </h2>
                                <p className="text-gray-700 text-lg">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex lg:flex-row flex-col'>
                            <div className="lg:w-1/2 w-full md:p-8 p-4">
                                <h2 className="md:text-2xl text-xl font-medium text-main mb-2">
                                    {title}
                                </h2>
                                <p className="text-gray-700 text-lg">
                                    {description}
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    width={600}
                                    height={400}
                                    className="object-cover rounded-none"
                                    priority
                                />
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default AshramCard;