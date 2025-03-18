// "use client";

// import React from 'react';
// import { FaFacebook } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";
// import { CiMail } from "react-icons/ci";
// import { FiPhone } from "react-icons/fi";
// import { LuMapPin } from "react-icons/lu";

// const AshramFooter = () => {
//     return (
//         <footer className="bg-gray-50 text-prime py-8">
//             <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Column 1: Logo and Contact */}
//                 <div>
//                     <div className="mb-6">
//                         <img src="/assets/image/swami.png" alt="SahajAnand Wellness" className="h-14 object-contain" />  {/* Replace with your actual logo path */}
//                     </div>
//                     <p className="text-md mb-4">Sahajanand Wellness Trust, a registered religious trust in Uttarakhand, is dedicated to religious, educational, and health-related activities in Rishikesh.</p>
//                     <div className="space-y-2">
//                         <p className="flex items-center text-md">
//                             <CiMail className='size-6 mr-2' />
//                             swaminarayantb@gmail.com
//                         </p>
//                         <p className="flex items-center text-md">
//                             <FiPhone className='size-5 mr-2' />
//                             +91 8511151708
//                         </p>
//                         <p className="flex items-center text-md">
//                             <FiPhone className='size-5 mr-2' />
//                             +91 1353595424
//                         </p>
//                         <p className="flex items-center text-md">
//                             <LuMapPin className='size-8 mr-2' />
//                             Street No.13, Shisham Jhadi, Muni Ki Reti, Near Ganga Kinare, Rishikesh U.K. Pin Code: 249201
//                         </p>
//                     </div>
//                 </div>

//                 {/* Column 2: Pages */}
//                 <div>
//                     <h3 className="text-lg font-medium mb-4">Pages</h3>
//                     <ul className="space-y-2 text-lg">
//                         <li><a href="#" className="hover:text-main ">Home</a></li>
//                         <li><a href="#" className="hover:text-main ">About Us</a></li>
//                         <li><a href="#" className="hover:text-main ">About Ashram</a></li>
//                         <li><a href="#" className="hover:text-main ">Rooms</a></li>
//                         <li><a href="#" className="hover:text-main ">Amenities</a></li>
//                         <li><a href="#" className="hover:text-main ">Contact</a></li>
//                         <li><a href="#" className="hover:text-main ">Gallery</a></li>
//                     </ul>
//                 </div>

//                 {/* Column 3: Payment Info */}
//                 <div className="flex flex-col items-end">
//                     <h3 className="text-lg font-semibold mb-4 text-left">Payment Options</h3>
//                     <img src="/assets/image/payment.jpeg" alt="Payment QR Code" className="w-48 h-auto rounded-md mb-4" />
//                 </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="bg-black py-2 text-center text-xs">
//                 <div className="container mx-auto px-4 flex items-center justify-between">
//                     <p className='text-lg font-medium text-white'>Made By Apexture Pvt.Ltd</p>
//                     <div className="flex space-x-4">
//                         <a href="#" className="hover:opacity-75 size-8 rounded-md bg-[#3b5998] flex items-center justify-center">
//                             <FaFacebook className='text-white size-5' />
//                         </a>
//                         <a href="#" className="hover:opacity-75 size-8 rounded-md bg-[#1da1f2] flex items-center justify-center">
//                             <FaTwitter className='text-white size-5' />
//                         </a>
//                         <a href="#" className="hover:opacity-75 size-8 rounded-md bg-[#cd201f] flex items-center justify-center">
//                             <FaYoutube className='text-white size-5' />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default AshramFooter;

// import React from 'react';
// import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
// import { FiPhone } from "react-icons/fi";
// import { LuMapPin } from "react-icons/lu";
// import Link from 'next/link';

// const AshramFooter = () => {
//     return (
//         <footer className="bg-gray-100 text-gray-700 py-16">
//             <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-12">

//                 {/* Column 1: About Ashram */}
//                 <div>
//                     <div className="mb-6">
//                         <img src="/assets/image/swami.png" alt="SahajAnand Wellness" className="h-16 object-contain" />
//                     </div>
//                     <p className="text-md mb-4">Discover inner peace and holistic wellness at Sahajanand Ashram. We offer a sanctuary for spiritual growth, yoga retreats, and Ayurvedic treatments in the serene surroundings of Rishikesh.</p>
//                     <div className="flex space-x-4 mt-6">
//                         <a href="#" className="hover:text-indigo-600">
//                             <FaFacebook className='size-6' />
//                         </a>
//                         <a href="#" className="hover:text-indigo-600">
//                             <FaTwitter className='size-6' />
//                         </a>
//                         <a href="#" className="hover:text-indigo-600">
//                             <FaInstagram className='size-6' />
//                         </a>
//                         <a href="#" className="hover:text-indigo-600">
//                             <FaYoutube className='size-6' />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Column 2: Quick Links */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
//                     <ul className="space-y-3">
//                         <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
//                         <li><Link href="/about" className="hover:text-indigo-600">About Us</Link></li>
//                         <li><Link href="/retreats" className="hover:text-indigo-600">Retreats</Link></li>
//                         <li><Link href="/yoga" className="hover:text-indigo-600">Yoga & Meditation</Link></li>
//                         <li><Link href="/ayurveda" className="hover:text-indigo-600">Ayurveda</Link></li>
//                         <li><Link href="/gallery" className="hover:text-indigo-600">Gallery</Link></li>
//                         <li><Link href="/contact" className="hover:text-indigo-600">Contact</Link></li>
//                     </ul>
//                 </div>

//                 {/* Column 3: Programs & Services */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-4 text-gray-800">Programs & Services</h3>
//                     <ul className="space-y-3">
//                         <li><a href="#" className="hover:text-indigo-600">Yoga Teacher Training</a></li>
//                         <li><a href="#" className="hover:text-indigo-600">Meditation Workshops</a></li>
//                         <li><a href="#" className="hover:text-indigo-600">Ayurvedic Consultations</a></li>
//                         <li><a href="#" className="hover:text-indigo-600">Panchakarma Therapy</a></li>
//                         <li><a href="#" className="hover:text-indigo-600">Wellness Packages</a></li>
//                     </ul>
//                 </div>

//                 {/* Column 4: Contact Information */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
//                     <div className="space-y-3">
//                         <p className="flex items-center">
//                             <LuMapPin className='size-5 mr-2 text-gray-500' />
//                             Street No.13, Shisham Jhadi, Muni Ki Reti, Rishikesh, UK - 249201
//                         </p>
//                         <p className="flex items-center">
//                             <CiMail className='size-5 mr-2 text-gray-500' />
//                             swaminarayantb@gmail.com
//                         </p>
//                         <p className="flex items-center">
//                             <FiPhone className='size-5 mr-2 text-gray-500' />
//                             +91 8511151708
//                         </p>
//                         <p className="flex items-center">
//                             <FiPhone className='size-5 mr-2 text-gray-500' />
//                             +91 1353595424
//                         </p>
//                     </div>
//                     <p className="mt-6 text-sm">Subscribe to our newsletter for updates and special offers:</p>
//                     <div className="mt-2">
//                         <input type="email" placeholder="Your Email" className="border rounded px-3 py-2 w-full text-gray-800" />
//                         <button className="bg-indigo-500 text-white px-4 py-2 rounded mt-2 hover:bg-indigo-600 w-full">Subscribe</button>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="bg-gray-200 py-4 text-center text-sm">
//                 <div className="container mx-auto px-4 flex items-center justify-between">
//                     <p className="text-gray-600">© {new Date().getFullYear()} Sahajanand Ashram. All rights reserved.</p>
//                     <p className="text-gray-600">Made by <a href="#" className="hover:text-indigo-600">Apexture Pvt.Ltd</a></p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default AshramFooter;

"use client";

import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaOm } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image'

const AshramFooter = () => {
    return (
        <footer className="bg-gradient-to-r from-amber-50 to-orange-50 text-gray-800">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-10">
                {/* Top Section with Decorative Element */}
                <div className="flex justify-center mb-8">
                    <div className="h-0.5 w-24 bg-orange-400"></div>
                    <div className="mx-4 -mt-6">
                        <Image
                            src="/assets/image/logo1.png"
                            width={500}
                            height={100}
                            alt="Picture of the author"
                            className='w-10'
                        />
                    </div>
                    <div className="h-0.5 w-24 bg-orange-400"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Column 1: Logo and Brief Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="/assets/image/swami.png" alt="SahajAnand Wellness" className="h-16 object-contain mb-4" />
                        <p className="text-md mb-6 text-center md:text-left">
                            Sahajanand Wellness Trust, dedicated to promoting spiritual wellness
                            and holistic health practices in the serene environment of Rishikesh.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3 mt-2">
                            <a href="#" className="h-10 w-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors duration-300">
                                <FaFacebook className="text-orange-700 text-lg" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors duration-300">
                                <FaTwitter className="text-orange-700 text-lg" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors duration-300">
                                <FaYoutube className="text-orange-700 text-lg" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition-colors duration-300">
                                <FaInstagram className="text-orange-700 text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-orange-800 relative">
                            <span className="relative z-10 ">Explore</span>
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-100 -z-1"></span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-prime">
                            <Link href="/" className="hover:text-orange-700 transition-all duration-200 hover:translate-x-2">Home</Link>
                            <Link href="/about-us" className="hover:text-orange-700 transition-all duration-200 hover:translate-x-2">About Us</Link>
                            <Link href="/about-ashram" className="hover:text-orange-700 transition-all duration-200 hover:translate-x-2">About Ashram</Link>
                            <Link href="/rooms" className="hover:text-orange-700 transition-all duration-200 hover:translate-x-2">Rooms</Link>
                            <Link href="/amenities" className="hover:text-orange-700 transition-all duration-200 hover:translate-x-2">Amenities</Link>
                            <Link href="/contac-us" className="hover:text-orange-700 transition-all duration-200 hover:translate-x-2">Contact</Link>
                            <Link href="/gallery" className="hover:text-orange-700 transition-all duration-200 hover:translate-x-2">Gallery</Link>
                        </div>
                    </div>

                    {/* Column 3: Contact Information */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-orange-800 relative">
                            <span className="relative z-10">Connect With Us</span>
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-100 -z-1"></span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <a
                                    href="mailto:swaminarayantb@gmail.com"
                                    className="flex text-lg"
                                >
                                    <GoMail className="text-orange-600 text-xl mt-1 mr-3" />
                                    swaminarayantb@gmail.com
                                </a>
                            </div>

                            <div className="flex flex-col gap-2 items-start text-base">
                                <a href='tel:+918511151708' className='flex'>
                                    <FiPhone className="text-orange-600 text-xl mt-1 mr-3" />
                                    <p>+91 8511151708</p>
                                </a>
                                <a href='tel:+911353595424' className='flex'>
                                    <FiPhone className="text-orange-600 text-xl mt-1 mr-3" />
                                    <p>+91 1353595424</p>
                                </a>
                            </div>

                            <div className="flex items-start">
                                <LuMapPin className="text-orange-600 text-xl mt-1 mr-3" />
                                <p className="text-base">
                                    Street No.13, Shisham Jhadi,<br />
                                    Muni Ki Reti, Near Ganga Kinare,<br />
                                    Rishikesh, Uttarakhand 249201
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Payment Information */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-4 text-orange-800">
                            <span>Payments </span>
                        </h3>
                        <img src="/assets/image/payment.jpeg" alt="Payment QR Code" className="w-44 h-auto rounded-md" />
                    </div>

                </div>
            </div>

            {/* Bottom Bar with QR Code */}
            <div className="border-t border-orange-200">
                <div className="container mx-auto py-3 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-prime font-medium text-center md:text-right">
                        © {new Date().getFullYear()} Sahajanand Wellness Trust. All rights reserved.<br />
                    </p>
                    <h1>
                        <span className="text-orange-600 font-medium">Made By Apexture Pvt.Ltd</span>
                    </h1>
                </div>
            </div>
        </footer >
    );
};

export default AshramFooter;