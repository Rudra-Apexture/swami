
// "use client";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { FiMenu, FiX } from "react-icons/fi";
// import { GoDash } from "react-icons/go";
// const aboutUsLinks = [
//     { href: "/about/overview", label: "About Ashram" },
//     { href: "/about/mission", label: "Rishikesh City" },
//     { href: "/about/mission", label: "Main Temples" },
//     { href: "/about/mission", label: "Place To Visit" },
// ];

// export default function Header() {
//     const pathname = usePathname();
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//     const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
//     const mobileMenuRef = useRef(null);
//     const dropdownRef = useRef(null);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsAboutUsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     const toggleAboutUs = () => setIsAboutUsOpen(!isAboutUsOpen);


//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//                 setIsMobileMenuOpen(false);
//                 setIsMobileDropdownOpen(false);
//             }
//         }

//         if (isMobileMenuOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//         } else {
//             document.removeEventListener("mousedown", handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isMobileMenuOpen]);

//     return (
//         <header className="bg-white shadow-md">
//             <div className="container mx-auto">
//                 <div className="flex items-center justify-between py-2 px-4 lg:px-0">
//                     <Link href="/">
//                         <Image src="/assets/image/swami.png"
//                             width={500}
//                             height={500}
//                             alt="Logo"
//                             priority={false}
//                             className="lg:w-40 w-28" />

//                     </Link>

//                     <nav className="hidden lg:flex items-center gap-6 z-20 color stic   ky">
//                         <ul className="flex space-x-6 items-center">
//                             <li>
//                                 <Link href="/" className={`text-lg hover:text-[#FF7600] ${pathname === '/' ? 'text-[#FF7600]' : ''}`}>
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/rooms" className={`text-lg hover:text-[#FF7600] ${pathname === '/rooms' ? 'text-[#FF7600]' : ''}`}>
//                                     Rooms
//                                 </Link>
//                             </li>

//                             <li className="relative" ref={dropdownRef}>
//                                 <button
//                                     onClick={toggleAboutUs}
//                                     className={`flex items-center cursor-pointer text-lg hover:text-[#FF7600] ${pathname.startsWith('/about') ? 'text-[#FF7600] ' : ''}`}
//                                 >
//                                     About Us
//                                     {/* <FaAngleDown className={`size-5 ml-2 transition-transform  ${isAboutUsOpen ? 'rotate-180' : ''}`} /> */}
//                                     <Image src="/assets/icons/down.png"
//                                         width={500}
//                                         height={500}
//                                         alt="Logo"
//                                         priority={false}
//                                         className={`size-5 ml-2 transition-transform duration-300 ease-in  ${isAboutUsOpen ? 'rotate-180' : ''}`} />
//                                 </button>

//                                 {isAboutUsOpen && (
//                                     <ul
//                                         className={`absolute text-center left-0 mt-7 py-1 w-40 bg-white border border-slate-300/50 rounded-md  origin-top transition-all duration-500 ease-in-out transform opacity-100 visible`}
//                                     >
//                                         {aboutUsLinks.map((link, index) => (
//                                             <li key={index} className={`transition-all duration-300 ease-out`}>
//                                                 <Link
//                                                     href={link.href}
//                                                     className="flex items-center gap-1 px-4 py-2 text-lg hover:bg-[#FF7600] hover:text-white"
//                                                 >
//                                                     {link.label}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </li>

//                             <li>
//                                 <Link href="/amenities" className="text-lg hover:text-[#FF7600]">Amenities</Link>
//                             </li>
//                             <li>
//                                 <Link href="/gallery" className="text-lg hover:text-[#FF7600]">Gallery</Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className="text-lg hover:text-[#FF7600]">Contact Us</Link>
//                             </li>
//                         </ul>
//                         <Link href="/send-inquiry" className="bg-[#FF7600] uppercase text-white px-6 py-2 text-lg rounded">
//                             Send Inquiry
//                         </Link>
//                     </nav>

//                     <button
//                         className="lg:hidden p-1 rounded text-white bg-[#FF7600]"
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     >
//                         {isMobileMenuOpen ? <FiX size={24} className='p-0.5' /> : <FiMenu size={24} className='p-0.5' />}
//                     </button>
//                 </div>
//             </div>

//             {isMobileMenuOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/50 bg-opacity-40 backdrop-blur-[2px]"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 ></div>
//             )}

//             <div
//                 ref={mobileMenuRef}
//                 className={`fixed top-0 left-0 h-full w-64 bg-white z-20 shadow-md border-r border-gray-300 transition-transform duration-300 transform 
//                 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
//             >

//                 <div className="p-3 flex justify-end items-center border-b border-gray-300">
//                     <button onClick={toggleMobileMenu} className="text-[#FF7600] rounded p-1">
//                         <FiX size={26} className='size-6' />
//                     </button>
//                 </div>

//                 <ul className="p-5 space-y-4">
//                     <li>
//                         <Link href="/" className="text-lg hover:text-[#FF7600]">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/rooms" className="text-lg hover:text-[#FF7600]">Rooms</Link>
//                     </li>

//                     <li>
//                         <button
//                             onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//                             className="text-lg hover:text-[#FF7600] w-full flex justify-between"
//                         >
//                             About Us
//                             <svg
//                                 className={`w-4 h-4 ml-1 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </button>

//                         {isMobileDropdownOpen && (
//                             <ul className={`space-y-2.5 overflow-hidden transition-all duration-500 ease-in-out opacity-100 mt-2`}>
//                                 {aboutUsLinks.map((link, index) => (
//                                     <li key={index} className={`transition-color bg-gray-50 hover:bg-[#FF7600] hover:text-white p-1.5 duration-300 ease-out`}>
//                                         <Link href={link.href} className='flex items-center gap-1 pl-2'>
//                                             <GoDash className='size-6' />
//                                             {link.label}
//                                         </Link>
//                                     </li>
//                                 ))}

//                             </ul>
//                         )}
//                     </li>


//                     <li>
//                         <Link href="/amenities" className="text-lg hover:text-[#FF7600]">Amenities</Link>
//                     </li>
//                     <li>
//                         <Link href="/gallery" className="text-lg hover:text-[#FF7600]">Gallery</Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" className="text-lg hover:text-[#FF7600]">Contact Us</Link>
//                     </li>
//                 </ul>
//                 <Link href="/send-inquiry" className="bg-[#FF7600]  text-center absolute left-0 bottom-0 uppercase text-white w-full py-2 text-lg">
//                     Send Inquiry
//                 </Link>
//             </div>
//         </header>
//     );
// }


"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from "react-icons/fi";
import { GoDash } from "react-icons/go";

const aboutUsLinks = [
    { href: "/about-ashram", label: "About Ashram" },
    { href: "/rishikesh-city", label: "Rishikesh City" },
    { href: "/main-temple", label: "Main Temples" },
    { href: "/place-to-visit", label: "Place To Visit" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false); // New state for sticky header

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsAboutUsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleAboutUs = () => setIsAboutUsOpen(!isAboutUsOpen);


    useEffect(() => {
        function handleClickOutside(event) {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setIsMobileDropdownOpen(false);
            }
        }

        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Sticky Header Logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`bg-white shadow-md ${isSticky ? 'fixed top-0 left-0 w-full z-50' : ''} transition-all duration-300`}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-2 px-4 lg:px-0">
                    <Link href="/">
                        <Image src="/assets/image/swami.png"
                            width={500}
                            height={500}
                            alt="Logo"
                            priority={false}
                            className="lg:w-40 w-28" />

                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 z-20 color stic   ky">
                        <ul className="flex space-x-6 items-center">
                            <li>
                                <Link href="/" className={`text-lg hover:text-[#FF7600] ${pathname === '/' ? 'text-[#FF7600]' : ''}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/rooms" className={`text-lg hover:text-[#FF7600] ${pathname === '/rooms' ? 'text-[#FF7600]' : ''}`}>
                                    Rooms
                                </Link>
                            </li>

                            <li className="relative" ref={dropdownRef}>
                                <button
                                    onClick={toggleAboutUs}
                                    className={`flex items-center cursor-pointer text-lg hover:text-[#FF7600] ${pathname.startsWith('/about') ? 'text-[#FF7600] ' : ''}`}
                                >
                                    <Link href="/about-us" >
                                        About Us
                                    </Link>

                                    {/* <FaAngleDown className={`size-5 ml-2 transition-transform  ${isAboutUsOpen ? 'rotate-180' : ''}`} /> */}
                                    <Image src="/assets/icons/down.png"
                                        width={500}
                                        height={500}
                                        alt="Logo"
                                        priority={false}
                                        className={`size-5 ml-2 transition-transform duration-300 ease-in  ${isAboutUsOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isAboutUsOpen && (
                                    <ul
                                        className={`absolute text-center left-0 mt-7 py-1 w-40 bg-white border border-slate-300/50 rounded-md  origin-top transition-all duration-500 ease-in-out transform opacity-100 visible`}
                                    >
                                        {aboutUsLinks.map((link, index) => (
                                            <li key={index} className={`transition-all duration-300 ease-out`}>
                                                <Link
                                                    href={link.href}
                                                    className="flex items-center gap-1 px-4 py-2 text-lg hover:bg-[#FF7600] hover:text-white"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link href="/amenities" className="text-lg hover:text-[#FF7600]">Amenities</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-lg hover:text-[#FF7600]">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/contac-us" className="text-lg hover:text-[#FF7600]">Contact Us</Link>
                            </li>
                        </ul>
                        <Link href="/send-inquiry" className="bg-[#FF7600] uppercase text-white px-6 py-2 text-lg rounded">
                            Send Inquiry
                        </Link>
                    </nav>

                    <button
                        className="lg:hidden p-1 rounded text-white bg-[#FF7600]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FiX size={24} className='p-0.5' /> : <FiMenu size={24} className='p-0.5' />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 bg-opacity-40 backdrop-blur-[2px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            <div
                ref={mobileMenuRef}
                className={`fixed top-0 left-0 h-full w-64 bg-white z-20 shadow-lg border border-gray-300 transition-transform duration-300 transform 
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >

                <div className="p-3 flex justify-end items-center border-b border-gray-300">
                    <button onClick={toggleMobileMenu} className="text-[#FF7600] rounded p-1">
                        <FiX size={26} className='size-6' />
                    </button>
                </div>

                <ul className="p-5 space-y-4">
                    <li>
                        <Link href="/" className="text-lg hover:text-[#FF7600]">Home</Link>
                    </li>
                    <li>
                        <Link href="/rooms" className="text-lg hover:text-[#FF7600]">Rooms</Link>
                    </li>

                    <li>
                        <button
                            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                            className="text-lg hover:text-[#FF7600] w-full flex justify-between"
                        >
                            About Us
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {isMobileDropdownOpen && (
                            <ul className={`space-y-2.5 overflow-hidden transition-all duration-500 ease-in-out opacity-100 mt-2`}>
                                {aboutUsLinks.map((link, index) => (
                                    <li key={index} className={`transition-color bg-gray-50 hover:bg-[#FF7600] hover:text-white p-1.5 duration-300 ease-out`}>
                                        <Link href={link.href} className='flex items-center gap-1 pl-2'>
                                            <GoDash className='size-6' />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        )}
                    </li>


                    <li>
                        <Link href="/amenities" className="text-lg hover:text-[#FF7600]">Amenities</Link>
                    </li>
                    <li>
                        <Link href="/gallery" className="text-lg hover:text-[#FF7600]">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-lg hover:text-[#FF7600]">Contact Us</Link>
                    </li>
                </ul>
                <Link href="/send-inquiry" className="bg-main  text-center absolute left-0 bottom-0 uppercase text-white w-full py-2 text-lg">
                    Send Inquiry
                </Link>
            </div>
        </header>
    );
}

