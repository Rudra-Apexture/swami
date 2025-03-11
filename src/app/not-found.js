// // app/not-found.js
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';  // Import Link for navigation
// import { ArrowLeft } from 'lucide-react';

// export default function NotFound() {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen">  {/* Added Tailwind classes */}
//             <Image
//                 src="/assets/image/404-error-removebg-preview.png"  // Replace with the correct path to your 404 image
//                 alt="Page Not Found"
//                 width={500}
//                 height={300}
//                 className="mb-8"
//                 priority
//             />
//             <h1 className="text-3xl font-medium text-gray-700 mb-4">Page Not Found</h1>
//             <p className="text-gray-700 text-lg mb-8 max-w-xl text-center">
//                 The page you’re looking for has gone missing. Let’s get you back on track!
//                 Are you sure the website URL is correct?
//             </p>
//             <Link href="/" className="bg-orange-500 flex items-center gap-2 text-white font-medium py-2 px-4 rounded-md focus:outline-none">  {/* Added Link */}
//                 <ArrowLeft className='size-5' />
//                 Go Back Home
//             </Link>
//         </div>
//     );
// }

// "use client";  // Needed for animations in Next.js App Router

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function NotFound() {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="flex flex-col items-center justify-center h-screen"
//         >
//             {/* Animated Image with Bounce Effect */}
//             <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, type: "spring", stiffness: 100 }}
//             >
//                 <Image
//                     src="/assets/image/404-error-removebg-preview.png"
//                     alt="Page Not Found"
//                     width={500}
//                     height={300}
//                     className="mb-8"
//                     priority
//                 />
//             </motion.div>

//             {/* Animated Title */}
//             <motion.h1
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
//                 className="text-4xl font-semibold text-gray-800 mb-4"
//             >
//                 Oops! Page Not Found
//             </motion.h1>

//             {/* Animated Description */}
//             <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
//                 className="text-gray-600 text-lg mb-8 max-w-xl text-center"
//             >
//                 The page you're looking for doesn't exist. It might have been moved or deleted.
//             </motion.p>

//             {/* Animated Button with Hover Effect */}
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
//             >
//                 <Link href="/">
//                     <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="bg-orange-500 flex items-center gap-2 text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-orange-600 transition-all"
//                     >
//                         <ArrowLeft className='size-5' />
//                         Go Back Home
//                     </motion.button>
//                 </Link>
//             </motion.div>
//         </motion.div>
//     );
// }


"use client";  // Needed for animations in Next.js App Router

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center h-screen container mx-auto px-4"
        >
            {/* Animated Image with Bounce Effect */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 200 }}
            >
                <Image
                    src="/assets/image/error-removebg-preview.png"
                    alt="Page Not Found"
                    width={400}
                    height={200}
                    className=""
                    priority
                />
            </motion.div>

            {/* Animated Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="lg:text-4xl text-3xl font-medium text-gray-800 mb-6"
            >
                Oops! Page Not Found
            </motion.h1>

            {/* Animated Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-gray-700 lg:text-lg text-base mb-8 max-w-xl text-center font-medium"
            >
                The page you’re looking for has gone missing. Let’s get you back on track!
                Are you sure the website URL is correct?
            </motion.p>

            {/* Animated Button with Hover Effect */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
                <Link href="/">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="bg-orange-500 flex items-center gap-2 mb-8 text-white font-medium py-2 px-6 rounded-md shadow-md "
                    >
                        <ArrowLeft className='size-5' />
                        Go Back Home
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
}