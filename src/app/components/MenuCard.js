// // components/MenuCard.jsx
// "use client";
// import Image from 'next/image';

// export default function MenuCard({ imageUrl, title, description }) {
//     return (
//         <div className="relative w-full md:min-h-screen h-[440px] overflow-hidden">

//             <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}

//             {/* Title at the Top */}
//             <div className="absolute top-1/3 left-0 right-0 flex items-center z-10 justify-center text-white lg:text-6xl md:text-5xl text-4xl font-medium">
//                 {title}
//             </div>

//             {/* Description Below the Title */}
//             <div className="absolute top-1/2 left-0 right-0 flex items-center z-10 justify-center px-4 text-white">
//                 <p className="text-base md:text-2xl max-w-3xl text-center -mt-3">
//                     {description}
//                 </p>
//             </div>

//             <Image
//                 src={imageUrl}
//                 alt={title}
//                 fill
//                 className="object-cover transition-transform duration-500"
//             />

//         </div>
//     );
// }


// components/AshramHeader.jsx
// "use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function AshramHeader({ imageUrl, title, description }) {
//     const [scrollY, setScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="relative w-full h-screen overflow-hidden">
//             {/* Background Image with Parallax Effect */}
//             <div className="absolute inset-0 z-0">
//                 <Image
//                     src={imageUrl}
//                     alt="Ashram retreat"
//                     fill
//                     priority
//                     className="object-cover"
//                     style={{ transform: `translateY(${scrollY * 0.5}px)` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
//             </div>

//             {/* Content Container */}
//             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
//                 <div className="max-w-4xl mx-auto text-center">

//                     {/* Dynamic Title with Animated Underline */}
//                     <h1 className="text-5xl font-medium text-white mb-6 tracking-wider">
//                         {title}
//                         {/* border */}
//                         <span className="block h-1 w-24 bg-main mx-auto mt-4"></span>
//                     </h1>

//                     {/* Dynamic Description */}
//                     <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
//                         {description}
//                     </p>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//                 <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
//                     <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// "use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function AshramHeader({ imageUrl, title, description }) {
//     const [scrollY, setScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const expandLeftAnimation = `
//     @keyframes expand-left {
//         0% {
//             width: 0;
//             left: 50%;
//         }
//         100% {
//             width: 50%;
//             left: 0;
//         }
//     }
//     `;
//     const expandRightAnimation = `
//     @keyframes expand-right {
//         0% {
//             width: 0;
//             right: 50%;
//         }
//         100% {
//             width: 50%;
//             right: 0;
//         }
//     }
//     `;

//     const animationUnderlineLeft = {
//         position: 'absolute',
//         left: '0',
//         bottom: '-10px',
//         height: '3px',
//         backgroundColor: '#FF5700', // Replace with your main color
//         animation: 'expand-left 1.5s ease-in-out forwards',
//         animationName: 'expand-left',

//     };
//     const animationUnderlineRight = {
//         position: 'absolute',
//         right: '0',
//         bottom: '-10px',
//         height: '3px',
//         backgroundColor: '#FF5700', // Replace with your main color
//         animation: 'expand-right 1.5s ease-in-out forwards',
//         animationName: 'expand-right'
//     };


//     return (
//         <div className="relative w-full h-screen overflow-hidden">
//             {/* Background Image with Parallax Effect */}
//             <style>{expandLeftAnimation}</style>
//             <style>{expandRightAnimation}</style>
//             <div className="absolute inset-0 z-0">
//                 <Image
//                     src={imageUrl}
//                     alt="Ashram retreat"
//                     fill
//                     priority
//                     className="object-cover"
//                     style={{ transform: `translateY(${scrollY * 0.5}px)` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
//             </div>

//             {/* Content Container */}
//             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
//                 <div className="max-w-4xl mx-auto text-center">

//                     {/* Dynamic Title with Animated Underline */}
//                     <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium text-white mb-8 tracking-wider relative inline-block">
//                         <span style={animationUnderlineLeft}></span>
//                         {title}
//                         <span style={animationUnderlineRight}></span>
//                     </h1>

//                     {/* Dynamic Description */}
//                     <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
//                         {description}
//                     </p>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//                 <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
//                     <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AshramHeader({ imageUrl, title, description }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const expandAnimation = `
    @keyframes expand {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
    `;

    const animationUnderline = {
        position: 'absolute',
        left: '50%',  // Center the starting point
        transform: 'translateX(-50%)', // Adjust for the 50% translation
        bottom: '-10px',
        height: '3px',
        backgroundColor: '#FF5700', // Replace with your main color
        animation: 'expand 1s ease-in-out forwards',
        animationName: 'expand',
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <style>{expandAnimation}</style>
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageUrl}
                    alt="Ashram retreat"
                    fill
                    priority
                    className="object-cover"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Dynamic Title with Animated Underline */}
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium text-white mb-10 tracking-wider relative inline-block">
                        {title}
                        <span style={animationUnderline}></span>
                    </h1>

                    {/* Dynamic Description */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}