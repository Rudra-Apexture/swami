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
                                <GoMail className="text-orange-600 text-xl mt-1 mr-3" />
                                <span>swaminarayantb@gmail.com</span>
                            </div>
                            <div className="flex items-start">
                                <FiPhone className="text-orange-600 text-xl mt-1 mr-3" />
                                <div>
                                    <p>+91 8511151708</p>
                                    <p>+91 1353595424</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <LuMapPin className="text-orange-600 text-xl mt-1 mr-3" />
                                <p className="text-sm">
                                    Street No.13, Shisham Jhadi,<br />
                                    Muni Ki Reti, Near Ganga Kinare,<br />
                                    Rishikesh, Uttarakhand 249201
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Payment Information */}
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
        </footer>
    );
};

export default AshramFooter;

// "use client";
// import React from 'react';
// import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
// import { FiPhone, FiMail } from "react-icons/fi";
// import { LuMapPin } from "react-icons/lu";
// import { FaOm } from "react-icons/fa6";
// import Image from 'next/image';

// const AshramFooter = () => {
//     return (
//         <footer className="bg-cream-50 text-gray-800 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//                 <div className="absolute inset-0" style={{
//                     backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 11.8l7.07 7.414v-.002zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z\' fill=\'%23e67700\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
//                     backgroundSize: '60px 60px'
//                 }}></div>
//             </div>

//             {/* Main Footer Content */}
//             <div className="container mx-auto px-4 pt-12 pb-4 relative z-10">
//                 {/* Om Symbol Centered */}
//                 <div className="flex justify-center mb-10">
//                     <div className="relative">
//                         <div className="h-0.5 w-16 md:w-24 bg-orange-500 absolute top-1/2 -left-20 md:-left-28"></div>
//                         <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-300">
//                             <FaOm className="text-orange-600 text-3xl" />
//                         </div>
//                         <div className="h-0.5 w-16 md:w-24 bg-orange-500 absolute top-1/2 -right-20 md:-right-28"></div>
//                     </div>
//                 </div>

//                 {/* Content Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
//                     {/* Column 1: Logo and Description */}
//                     <div className="flex flex-col items-center md:items-start">
//                         <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
//                             <img src="/assets/image/swami.png" alt="SahajAnand Wellness" className="h-20 object-contain" />
//                         </div>
//                         <p className="text-md text-center md:text-left leading-relaxed">
//                             Sahajanand Wellness Trust, dedicated to promoting spiritual wellness
//                             and holistic health practices in the serene environment of Rishikesh.
//                         </p>

//                         {/* Social Media Icons */}
//                         <div className="flex space-x-4 mt-6">
//                             <a href="#" className="group">
//                                 <div className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-orange-200 hover:shadow-lg flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
//                                     <FaFacebook className="text-orange-600 text-lg" />
//                                 </div>
//                             </a>
//                             <a href="#" className="group">
//                                 <div className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-orange-200 hover:shadow-lg flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
//                                     <FaTwitter className="text-orange-600 text-lg" />
//                                 </div>
//                             </a>
//                             <a href="#" className="group">
//                                 <div className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-orange-200 hover:shadow-lg flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
//                                     <FaYoutube className="text-orange-600 text-lg" />
//                                 </div>
//                             </a>
//                             <a href="#" className="group">
//                                 <div className="h-10 w-10 rounded-full bg-white shadow-md hover:shadow-orange-200 hover:shadow-lg flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
//                                     <FaInstagram className="text-orange-600 text-lg" />
//                                 </div>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Column 2: Explore Links */}
//                     <div className="flex flex-col">
//                         <h3 className="text-xl font-semibold mb-6 text-orange-800 pb-2 border-b-2 border-orange-200 inline-block">
//                             Explore
//                         </h3>
//                         <div className="grid grid-cols-2 gap-y-3">
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 Home
//                             </a>
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 About Us
//                             </a>
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 Ashram
//                             </a>
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 Rooms
//                             </a>
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 Amenities
//                             </a>
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 Contact
//                             </a>
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 Gallery
//                             </a>
//                             <a href="#" className="flex items-center hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform transition-transform">
//                                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
//                                 Events
//                             </a>
//                         </div>
//                     </div>

//                     {/* Column 3: Contact Information */}
//                     <div className="flex flex-col">
//                         <h3 className="text-xl font-semibold mb-6 text-orange-800 pb-2 border-b-2 border-orange-200 inline-block">
//                             Connect With Us
//                         </h3>
//                         <div className="space-y-5">
//                             <a href="mailto:swaminarayantb@gmail.com" className="flex items-start group">
//                                 <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0 group-hover:bg-orange-200 transition-colors duration-200">
//                                     <FiMail className="text-orange-600 text-lg" />
//                                 </div>
//                                 <span className="pt-2 group-hover:text-orange-600 transition-colors duration-200">swaminarayantb@gmail.com</span>
//                             </a>
//                             <a href="tel:+918511151708" className="flex items-start group">
//                                 <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0 group-hover:bg-orange-200 transition-colors duration-200">
//                                     <FiPhone className="text-orange-600 text-lg" />
//                                 </div>
//                                 <div className="pt-1">
//                                     <p className="group-hover:text-orange-600 transition-colors duration-200">+91 8511151708</p>
//                                     <p className="group-hover:text-orange-600 transition-colors duration-200">+91 1353595424</p>
//                                 </div>
//                             </a>
//                             <div className="flex items-start">
//                                 <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0">
//                                     <LuMapPin className="text-orange-600 text-lg" />
//                                 </div>
//                                 <p className="text-sm pt-1 leading-relaxed">
//                                     Street No.13, Shisham Jhadi,<br />
//                                     Muni Ki Reti, Near Ganga Kinare,<br />
//                                     Rishikesh, Uttarakhand 249201
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Column 4: Payment Information */}
//                     <div className="flex flex-col items-center md:items-start">
//                         <h3 className="text-xl font-semibold mb-6 text-orange-800 pb-2 border-b-2 border-orange-200 inline-block">
//                             Payments
//                         </h3>
//                         <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:-translate-y-1 transition-transform">
//                             <img src="/assets/image/payment.jpeg" alt="Payment QR Code" className="w-48 h-auto rounded" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Divider with Pattern */}
//                 <div className="mt-12 mb-4 relative">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-orange-200"></div>
//                     </div>
//                 </div>

//                 {/* Copyright Bar */}
//                 <div className="flex flex-col md:flex-row justify-between items-center pt-4">
//                     <p className="text-sm text-gray-600 mb-2 md:mb-0">
//                         © {new Date().getFullYear()} Sahajanand Wellness Trust. All rights reserved.
//                     </p>
//                     <p className="text-sm font-medium text-orange-600">
//                         Made By Apexture Pvt.Ltd
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default AshramFooter;