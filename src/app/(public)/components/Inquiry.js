// import React from 'react'

// const Inquiry = () => {
//     return (
//         <div className='my-10'>
//             this is my new id
//         </div>
//     )
// }

// export default Inquiry


// import React from 'react';
// const BookingForm = () => {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             {/* tabing  */}
//             <div className="flex justify-center space-x-4 mb-8">
//                 <button color="primary" textColor="secondary" className="px-6 bg-main py-3 rounded-md font-semibold">
//                     Send Inquiry
//                 </button>

//                 <button color="secondary" textColor="primary" className="px-6 py-3 rounded-md font-semibold">
//                     Book Now
//                 </button>
//             </div>

//             {/* Send Inquery Data */}
//             <div className="bg-white shadow-md rounded-lg p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                     <div>
//                         <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in date</label>
//                         <div className="relative">
//                             <input type="date" id="checkInDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out date</label>
//                         <div className="relative">
//                             <input type="date" id="checkOutDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
//                         <div className="relative">
//                             <select id="guests" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
//                                 <option>1 Adult</option>
//                                 <option>2 Adults</option>
//                                 <option>3 Adults</option>
//                                 <option>4 Adults</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Name and Contact Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Name</label>
//                         <input type="text" id="firstName" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                     <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//                         <input type="text" id="lastName" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">e-Mail</label>
//                         <input type="email" id="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//                         <input type="tel" id="phone" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                 </div>

//                 {/* Country and City */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
//                         <select id="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
//                             <option>India</option>
//                             {/* Add more countries here */}
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//                         <input type="text" id="city" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                 </div>

//                 {/* Notes/Special Requests */}
//                 <div>
//                     <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes/Special requests</label>
//                     <textarea id="notes" rows="4" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="flex items-center mt-4">
//                     <input type="checkbox" id="terms" className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
//                     <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
//                         I agree to the terms and conditions
//                     </label>
//                 </div>

//                 {/* Send Request Button */}
//                 <div className="mt-6">
//                     <button color="primary" textColor="secondary" className="w-full px-6 py-3 rounded-md font-semibold">
//                         Send Request
//                     </button>
//                 </div>
//             </div>

//             {/* Book now data */}
//         </div>
//     );
// };

// export default BookingForm;


// "use client";
// import React, { useState } from 'react';

// const BookingForm = () => {
//     const [activeTab, setActiveTab] = useState('inquiry'); // 'inquiry' or 'bookNow'

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="container mx-auto px-4 py-8">
//             {/* tabing  */}
//             <div className="flex justify-center space-x-4 mb-8">
//                 <button
//                     className={`px-6 py-3 rounded-md font-semibold ${activeTab === 'inquiry'
//                         ? 'bg-main text-secondary'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('inquiry')}
//                 >
//                     Send Inquiry
//                 </button>

//                 <button
//                     className={`px-6 py-3 rounded-md font-semibold ${activeTab === 'bookNow'
//                         ? 'bg-main text-secondary'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('bookNow')}
//                 >
//                     Book Now
//                 </button>
//             </div>

//             {/* Conditional Rendering based on activeTab */}
//             {activeTab === 'inquiry' && (
//                 <InquiryForm />
//             )}

//             {activeTab === 'bookNow' && (
//                 <BookNowForm />
//             )}

//         </div>
//     );
// };

// const InquiryForm = () => {
//     return (
//         <div className="bg-white shadow-md rounded-lg p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                     <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in date</label>
//                     <div className="relative">
//                         <input type="date" id="checkInDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                 </div>
//                 <div>
//                     <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out date</label>
//                     <div className="relative">
//                         <input type="date" id="checkOutDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                 </div>
//                 <div>
//                     <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
//                     <div className="relative">
//                         <select id="guests" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
//                             <option>1 Adult</option>
//                             <option>2 Adults</option>
//                             <option>3 Adults</option>
//                             <option>4 Adults</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             {/* Name and Contact Information */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Name</label>
//                     <input type="text" id="firstName" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                 </div>
//                 <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//                     <input type="text" id="lastName" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">e-Mail</label>
//                     <input type="email" id="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                 </div>
//                 <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//                     <input type="tel" id="phone" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                 </div>
//             </div>

//             {/* Country and City */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                     <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
//                     <select id="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
//                         <option>India</option>
//                         {/* Add more countries here */}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//                     <input type="text" id="city" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                 </div>
//             </div>

//             {/* Notes/Special Requests */}
//             <div>
//                 <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes/Special requests</label>
//                 <textarea id="notes" rows="4" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
//             </div>

//             {/* Terms and Conditions */}
//             <div className="flex items-center mt-4">
//                 <input type="checkbox" id="terms" className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
//                 <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
//                     I agree to the terms and conditions
//                 </label>
//             </div>

//             {/* Send Request Button */}
//             <div className="mt-6">
//                 <button color="primary" className="px-6 bg-main text-white py-3 rounded-md font-semibold">
//                     Send Request
//                 </button>
//             </div>
//         </div>
//     );
// };

// const BookNowForm = () => {
//     return (
//         <div className="bg-white shadow-md rounded-lg p-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                 <div>
//                     <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in date</label>
//                     <div className="relative">
//                         <input type="date" id="checkInDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                 </div>
//                 <div>
//                     <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out date</label>
//                     <div className="relative">
//                         <input type="date" id="checkOutDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
//                     </div>
//                 </div>
//                 <div>
//                     <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
//                     <div className="relative">
//                         <select id="guests" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
//                             <option>1 Rooms</option>
//                             <option>2 Adults</option>
//                             <option>0 Children</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="mt-6">
//                     <button color="primary" textColor="secondary" className="w-full px-6 py-3 rounded-md font-semibold">
//                         Book Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingForm;

// "use client";
// import React, { useState } from 'react';
// import { CalendarDays, User, Users } from 'lucide-react';
// import { FiMail } from "react-icons/fi";
// import { FiPhone } from "react-icons/fi";
// import { FaCity } from "react-icons/fa";
// const BookingForm = () => {
//     const [activeTab, setActiveTab] = useState('inquiry'); // 'inquiry' or 'bookNow'

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="container mx-auto px-4 py-12">
//             {/* Tab Navigation */}
//             <div className="flex justify-center space-x-4 mb-8">
//                 <button
//                     className={`px-6 py-3 rounded-full font-medium text-lg transition-colors duration-300  ${activeTab === 'inquiry'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('inquiry')}
//                     aria-label="Send Inquiry"
//                 >
//                     Send Inquiry
//                 </button>

//                 <button
//                     className={`px-6 py-3 rounded-full font-medium text-lg transition-colors duration-300 ${activeTab === 'bookNow'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('bookNow')}
//                     aria-label="Book Now"
//                 >
//                     Book Now
//                 </button>
//             </div>

//             {/* Conditional Rendering based on activeTab */}
//             {activeTab === 'inquiry' && (
//                 <InquiryForm />
//             )}

//             {activeTab === 'bookNow' && (
//                 <BookNowForm />
//             )}

//         </div>
//     );
// };

// const InquiryForm = () => {
//     const countries = [
//         "India",
//         "United States",
//         "Canada",
//         "United Kingdom",
//         "Germany",
//         "France",
//         "Australia",
//         "Japan",
//         "China",
//         "Brazil",
//         "Spain",
//         "Italy",
//         "Netherlands",
//         "Switzerland"
//     ];

//     return (
//         <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold lg:mb-6 mb-4 text-gray-800">Send Your Inquiry</h2>
//             <form>
//                 {/* Date Selection */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                     <div className="relative">
//                         <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div className="relative">
//                         <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Guest Selection */}
//                     <div>
//                         <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <Users className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <select id="guests" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm">
//                                 <option>1 Adult</option>
//                                 <option>2 Adults</option>
//                                 <option>3 Adults</option>
//                                 <option>4 Adults</option>
//                                 <option>1 Adult, 1 Child</option>
//                                 <option>2 Adults, 1 Child</option>
//                                 <option>2 Adults, 2 Children</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>


//                 {/* Name and Contact Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="firstName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="lastName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">e-Mail</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiMail className='size-5 text-gray-400' />
//                             </div>
//                             <input type="email" id="email" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiPhone className='size-5 text-gray-400' />
//                             </div>
//                             <input type="tel" id="phone" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Country and City */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                         <div className="relative">

//                             <select id="country" className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm">
//                                 {countries.map(country => (
//                                     <option key={country} value={country}>{country}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FaCity className='size-5 text-gray-400' />
//                             </div>
//                             <input type="text" id="city" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Notes/Special Requests */}
//                 <div className="mb-6">
//                     <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Notes/Special requests</label>
//                     <textarea id="notes" rows="4" className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="flex items-start mb-6">
//                     <div className="flex items-center h-5">
//                         <input id="terms" aria-describedby="terms-description" type="checkbox" className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
//                     </div>
//                     <div className="ml-3 text-sm">
//                         <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions</label>
//                         <p id="terms-description" className="text-gray-500">
//                             Please read and accept our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Send Request Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Send Request
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const BookNowForm = () => {
//     // Dummy Data for Rooms (replace with actual API call)
//     const rooms = [
//         { id: 1, name: "Standard Room", price: 100 },
//         { id: 2, name: "Deluxe Room", price: 150 },
//         { id: 3, name: "Suite", price: 250 },
//     ];

//     const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
//     const [numRooms, setNumRooms] = useState(1);
//     const [numAdults, setNumAdults] = useState(2);
//     const [numChildren, setNumChildren] = useState(0);

//     return (
//         <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Book Your Stay</h2>
//             <form>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                     {/* Check-in Date */}
//                     <div>
//                         <label htmlFor="checkInDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Check-out Date */}
//                     <div>
//                         <label htmlFor="checkOutDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Room Type */}
//                     <div>
//                         <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
//                         <div className="relative">

//                             <select
//                                 id="roomType"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={selectedRoom}
//                                 onChange={(e) => setSelectedRoom(parseInt(e.target.value))}
//                             >
//                                 {rooms.map(room => (
//                                     <option key={room.id} value={room.id}>{room.name} (${room.price})</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Number of Rooms */}
//                     <div>
//                         <label htmlFor="numRooms" className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
//                         <div className="relative">

//                             <select
//                                 id="numRooms"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={numRooms}
//                                 onChange={(e) => setNumRooms(parseInt(e.target.value))}
//                             >
//                                 {[1, 2, 3, 4, 5].map(num => (
//                                     <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Number of Adults */}
//                     <div>
//                         <label htmlFor="numAdults" className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
//                         <div className="relative">

//                             <select
//                                 id="numAdults"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={numAdults}
//                                 onChange={(e) => setNumAdults(parseInt(e.target.value))}
//                             >
//                                 {[1, 2, 3, 4].map(num => (
//                                     <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Number of Children */}
//                     <div>
//                         <label htmlFor="numChildren" className="block text-sm font-medium text-gray-700 mb-2">Children</label>
//                         <div className="relative">

//                             <select
//                                 id="numChildren"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={numChildren}
//                                 onChange={(e) => setNumChildren(parseInt(e.target.value))}
//                             >
//                                 {[0, 1, 2, 3].map(num => (
//                                     <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Booking Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Book Now
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default BookingForm;

// "use client";
// import React, { useState, useRef, useEffect } from 'react';
// import { CalendarDays, User, Users } from 'lucide-react';
// import { FiMail } from "react-icons/fi";
// import { FiPhone } from "react-icons/fi";
// import { FaCity } from "react-icons/fa";

// const BookingForm = () => {
//     const [activeTab, setActiveTab] = useState('inquiry'); // 'inquiry' or 'bookNow'

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="container mx-auto px-4 py-12">
//             {/* Tab Navigation */}
//             <div className="flex justify-center space-x-4 mb-8">
//                 <button
//                     className={`px-6 py-3 rounded-full font-medium text-lg transition-colors duration-300  ${activeTab === 'inquiry'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('inquiry')}
//                     aria-label="Send Inquiry"
//                 >
//                     Send Inquiry
//                 </button>

//                 <button
//                     className={`px-6 py-3 rounded-full font-medium text-lg transition-colors duration-300 ${activeTab === 'bookNow'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('bookNow')}
//                     aria-label="Book Now"
//                 >
//                     Book Now
//                 </button>
//             </div>

//             {/* Conditional Rendering based on activeTab */}
//             {activeTab === 'inquiry' && (
//                 <InquiryForm />
//             )}

//             {activeTab === 'bookNow' && (
//                 <BookNowForm />
//             )}

//         </div>
//     );
// };

// const InquiryForm = () => {
//     const [selectedGuests, setSelectedGuests] = useState('1 Adult');
//     const [selectedCountry, setSelectedCountry] = useState('India');
//     const [city, setCity] = useState('');

//     const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '1 Adult, 1 Child', '2 Adults, 1 Child', '2 Adults, 2 Children'];
//     const countries = [
//         "India",
//         "United States",
//         "Canada",
//         "United Kingdom",
//         "Germany",
//         "France",
//         "Australia",
//         "Japan",
//         "China",
//         "Brazil",
//         "Spain",
//         "Italy",
//         "Netherlands",
//         "Switzerland"
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //  Handle your form submission here, using the state values.
//         console.log({ selectedGuests, selectedCountry, city });
//         alert("Form submitted (check console for data)"); // Replace with actual submission logic
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Your Inquiry</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Date Selection */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                     <div className="relative">
//                         <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div className="relative">
//                         <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Guest Selection */}
//                     <div>
//                         <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
//                         <CustomDropdown
//                             id="guests"
//                             options={guestOptions}
//                             selectedValue={selectedGuests}
//                             onSelect={setSelectedGuests}
//                             icon={<Users className="h-5 w-5 text-gray-400" />}
//                         />
//                     </div>
//                 </div>


//                 {/* Name and Contact Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="firstName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="lastName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">e-Mail</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiMail className='size-5 text-gray-400' />
//                             </div>
//                             <input type="email" id="email" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiPhone className='size-5 text-gray-400' />
//                             </div>
//                             <input type="tel" id="phone" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Country and City */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                         <CustomDropdown
//                             id="country"
//                             options={countries}
//                             selectedValue={selectedCountry}
//                             onSelect={setSelectedCountry}

//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FaCity className='size-5 text-gray-400' />
//                             </div>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={city}
//                                 onChange={(e) => setCity(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Notes/Special Requests */}
//                 <div className="mb-6">
//                     <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Notes/Special requests</label>
//                     <textarea id="notes" rows="4" className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="flex items-start mb-6">
//                     <div className="flex items-center h-5">
//                         <input id="terms" aria-describedby="terms-description" type="checkbox" className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
//                     </div>
//                     <div className="ml-3 text-sm">
//                         <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions</label>
//                         <p id="terms-description" className="text-gray-500">
//                             Please read and accept our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Send Request Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Send Request
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const BookNowForm = () => {
//     // Dummy Data for Rooms (replace with actual API call)
//     const rooms = [
//         { id: 1, name: "Standard Room", price: 100 },
//         { id: 2, name: "Deluxe Room", price: 150 },
//         { id: 3, name: "Suite", price: 250 },
//     ];

//     const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
//     const [numRooms, setNumRooms] = useState(1);
//     const [numAdults, setNumAdults] = useState(2);
//     const [numChildren, setNumChildren] = useState(0);

//     return (
//         <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Book Your Stay</h2>
//             <form>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                     {/* Check-in Date */}
//                     <div>
//                         <label htmlFor="checkInDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Check-out Date */}
//                     <div>
//                         <label htmlFor="checkOutDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Room Type */}
//                     <div>
//                         <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
//                         <div className="relative">

//                             <select
//                                 id="roomType"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={selectedRoom}
//                                 onChange={(e) => setSelectedRoom(parseInt(e.target.value))}
//                             >
//                                 {rooms.map(room => (
//                                     <option key={room.id} value={room.id}>{room.name} (${room.price})</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Number of Rooms */}
//                     <div>
//                         <label htmlFor="numRooms" className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
//                         <div className="relative">

//                             <select
//                                 id="numRooms"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={numRooms}
//                                 onChange={(e) => setNumRooms(parseInt(e.target.value))}
//                             >
//                                 {[1, 2, 3, 4, 5].map(num => (
//                                     <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Number of Adults */}
//                     <div>
//                         <label htmlFor="numAdults" className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
//                         <div className="relative">

//                             <select
//                                 id="numAdults"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={numAdults}
//                                 onChange={(e) => setNumAdults(parseInt(e.target.value))}
//                             >
//                                 {[1, 2, 3, 4].map(num => (
//                                     <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Number of Children */}
//                     <div>
//                         <label htmlFor="numChildren" className="block text-sm font-medium text-gray-700 mb-2">Children</label>
//                         <div className="relative">

//                             <select
//                                 id="numChildren"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={numChildren}
//                                 onChange={(e) => setNumChildren(parseInt(e.target.value))}
//                             >
//                                 {[0, 1, 2, 3].map(num => (
//                                     <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Booking Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Book Now
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const CustomDropdown = ({ id, options, selectedValue, onSelect, icon }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionSelect = (value) => {
//         onSelect(value);
//         setIsOpen(false);
//     };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button
//                 type="button"
//                 className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm text-left relative"
//                 onClick={toggleDropdown}
//                 aria-haspopup="true"
//                 aria-expanded={isOpen}
//             >
//                 {icon && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{icon}</div>}
//                 {selectedValue}
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                         <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                     </svg>
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-300 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby={id}>
//                     <div className="py-1" role="none">
//                         {options.map((option) => (
//                             <button
//                                 key={option}
//                                 onClick={() => handleOptionSelect(option)}
//                                 className="text-gray-700 text-left block w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
//                                 role="menuitem"
//                             >
//                                 {option}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookingForm;

// "use client";
// import React, { useState, useRef, useEffect } from 'react';
// import { CalendarDays, Flag, User, Users } from 'lucide-react';
// import { FiMail } from "react-icons/fi";
// import { FiPhone } from "react-icons/fi";
// import { FaCity } from "react-icons/fa";
// import { TfiWorld } from "react-icons/tfi";

// const BookingForm = () => {
//     const [activeTab, setActiveTab] = useState('inquiry'); // 'inquiry' or 'bookNow'

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="container mx-auto px-4 py-12">
//             {/* Tab Navigation */}
//             <div className="flex justify-center space-x-4 mb-8">
//                 <button
//                     className={`px-6 py-3 rounded-full font-medium text-lg transition-colors duration-300  ${activeTab === 'inquiry'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('inquiry')}
//                     aria-label="Send Inquiry"
//                 >
//                     Send Inquiry
//                 </button>

//                 <button
//                     className={`px-6 py-3 rounded-full font-medium text-lg transition-colors duration-300 ${activeTab === 'bookNow'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('bookNow')}
//                     aria-label="Book Now"
//                 >
//                     Book Now
//                 </button>
//             </div>

//             {/* Conditional Rendering based on activeTab */}
//             {activeTab === 'inquiry' && (
//                 <InquiryForm />
//             )}

//             {activeTab === 'bookNow' && (
//                 <BookNowForm />
//             )}

//         </div>
//     );
// };

// const InquiryForm = () => {
//     const [selectedGuests, setSelectedGuests] = useState('1 Adult');
//     const [selectedCountry, setSelectedCountry] = useState('India');
//     const [city, setCity] = useState('');

//     const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '1 Adult, 1 Child', '2 Adults, 1 Child', '2 Adults, 2 Children'];
//     const countries = [
//         "India",
//         "United States",
//         "Canada",
//         "United Kingdom",
//         "Germany",
//         "France",
//         "Australia",
//         "Japan",
//         "China",
//         "Brazil",
//         "Spain",
//         "Italy",
//         "Netherlands",
//         "Switzerland"
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //  Handle your form submission here, using the state values.
//         console.log({ selectedGuests, selectedCountry, city });
//         alert("Form submitted (check console for data)"); // Replace with actual submission logic
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Your Inquiry</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Date Selection */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                     <div className="relative">
//                         <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div className="relative">
//                         <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Guest Selection */}
//                     <div>
//                         <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
//                         <CustomDropdown
//                             id="guests"
//                             options={guestOptions}
//                             selectedValue={selectedGuests}
//                             onSelect={setSelectedGuests}
//                             icon={<Users className="h-5 w-5 text-gray-400" />}
//                         />
//                     </div>
//                 </div>


//                 {/* Name and Contact Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="firstName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="lastName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">e-Mail</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiMail className='size-5 text-gray-400' />
//                             </div>
//                             <input type="email" id="email" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiPhone className='size-5 text-gray-400' />
//                             </div>
//                             <input type="tel" id="phone" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Country and City */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                         <div className='relative'>
//                             <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3 pointer-events-none">
//                                 <TfiWorld className='size-5 text-gray-400'/>
//                             </div>
//                             <div>
//                                 <CustomDropdown
//                                     id="country"
//                                     options={countries}
//                                     selectedValue={selectedCountry}
//                                     onSelect={setSelectedCountry}

//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FaCity className='size-5 text-gray-400' />
//                             </div>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={city}
//                                 onChange={(e) => setCity(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Notes/Special Requests */}
//                 <div className="mb-6">
//                     <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Notes/Special requests</label>
//                     <textarea id="notes" rows="4" className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="flex items-start mb-6">
//                     <div className="flex items-center h-5">
//                         <input id="terms" aria-describedby="terms-description" type="checkbox" className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
//                     </div>
//                     <div className="ml-3 text-sm">
//                         <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions</label>
//                         <p id="terms-description" className="text-gray-500">
//                             Please read and accept our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Send Request Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Send Request
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const BookNowForm = () => {
//     // Dummy Data for Rooms (replace with actual API call)
//     const rooms = [
//         { id: 1, name: "Standard Room", price: 100 },
//         { id: 2, name: "Deluxe Room", price: 150 },
//         { id: 3, name: "Suite", price: 250 },
//     ];

//     const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
//     const [numRooms, setNumRooms] = useState(1);
//     const [numAdults, setNumAdults] = useState(2);
//     const [numChildren, setNumChildren] = useState(0);

//     return (
//         <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Book Your Stay</h2>
//             <form>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                     {/* Check-in Date */}
//                     <div>
//                         <label htmlFor="checkInDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Check-out Date */}
//                     <div>
//                         <label htmlFor="checkOutDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Room Type */}
//                     <div>
//                         <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
//                         <div className="relative">

//                             <select
//                                 id="roomType"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={selectedRoom}
//                                 onChange={(e) => setSelectedRoom(parseInt(e.target.value))}
//                             >
//                                 {rooms.map(room => (
//                                     <option key={room.id} value={room.id}>{room.name} (${room.price})</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* Number of Rooms */}
//                     <div>
//                         <label htmlFor="numRooms" className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
//                         <div className="relative">

//                             <select
//                                 id="numRooms"
//                                 className="block w-full py-3 pl-3 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={numRooms}
//                                 onChange={(e) => setNumRooms(parseInt(e.target.value))}
//                             >
//                                 {[1, 2, 3, 4, 5].map(num => (
//                                     <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Booking Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Book Now
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const CustomDropdown = ({ id, options, selectedValue, onSelect, icon }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionSelect = (value) => {
//         onSelect(value);
//         setIsOpen(false);
//     };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button
//                 type="button"
//                 className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm text-left relative"
//                 onClick={toggleDropdown}
//                 aria-haspopup="true"
//                 aria-expanded={isOpen}
//             >
//                 {icon && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{icon}</div>}
//                 {selectedValue}
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                         <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                     </svg>
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-300 focus:outline-none max-h-[200px] overflow-y-auto" role="menu" aria-orientation="vertical" aria-labelledby={id}>
//                     <div className="py-1" role="none">
//                         {options.map((option) => (
//                             <button
//                                 key={option}
//                                 onClick={() => handleOptionSelect(option)}
//                                 className="text-gray-700 text-left block w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
//                                 role="menuitem"
//                             >
//                                 {option}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookingForm;

// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { CalendarDays, Flag, User, Users } from 'lucide-react';
// import { FiMail } from "react-icons/fi";
// import { FiPhone } from "react-icons/fi";
// import { FaCity } from "react-icons/fa";
// import { TfiWorld } from "react-icons/tfi";
// import { FaHouse } from "react-icons/fa6";

// const BookingForm = () => {
//     const [activeTab, setActiveTab] = useState('inquiry'); // 'inquiry' or 'bookNow'

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="container mx-auto px-4 py-12">
//             {/* Tab Navigation */}
//             <div className="flex justify-center space-x-4 mb-8">
//                 <button
//                     className={`px-6 lg:py-3 py-1.5 rounded-full font-medium text-lg transition-colors duration-300  ${activeTab === 'inquiry'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('inquiry')}
//                     aria-label="Send Inquiry"
//                 >
//                     Send Inquiry
//                 </button>

//                 <button
//                     className={`px-6 lg:py-3 py-1.5 rounded-full font-medium text-lg transition-colors duration-300 ${activeTab === 'bookNow'
//                         ? 'bg-primary text-white shadow-md hover:bg-primary/80'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     onClick={() => handleTabChange('bookNow')}
//                     aria-label="Book Now"
//                 >
//                     Book Now
//                 </button>
//             </div>

//             {/* Conditional Rendering based on activeTab */}
//             {activeTab === 'inquiry' && (
//                 <InquiryForm />
//             )}

//             {activeTab === 'bookNow' && (
//                 <BookNowForm />
//             )}

//         </div>
//     );
// };

// const InquiryForm = () => {
//     const [selectedGuests, setSelectedGuests] = useState('1 Adult');
//     const [selectedCountry, setSelectedCountry] = useState('India');
//     const [city, setCity] = useState('');

//     const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '1 Adult, 1 Child', '2 Adults, 1 Child', '2 Adults, 2 Children'];
//     const countries = [
//         "India",
//         "United States",
//         "Canada",
//         "United Kingdom",
//         "Germany",
//         "France",
//         "Australia",
//         "Japan",
//         "China",
//         "Brazil",
//         "Spain",
//         "Italy",
//         "Netherlands",
//         "Switzerland"
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //  Handle your form submission here, using the state values.
//         console.log({ selectedGuests, selectedCountry, city });
//         alert("Form submitted (check console for data)"); // Replace with actual submission logic
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-2xl">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Your Inquiry</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Date Selection */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                     <div className="relative">
//                         <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div className="relative">
//                         <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDate" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Guest Selection */}
//                     <div>
//                         <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
//                         <CustomDropdown
//                             id="guests"
//                             options={guestOptions}
//                             selectedValue={selectedGuests}
//                             onSelect={setSelectedGuests}
//                             icon={<Users className="h-5 w-5 text-gray-400" />}
//                         />
//                     </div>
//                 </div>


//                 {/* Name and Contact Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="firstName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="text" id="lastName" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">e-Mail</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiMail className='size-5 text-gray-400' />
//                             </div>
//                             <input type="email" id="email" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FiPhone className='size-5 text-gray-400' />
//                             </div>
//                             <input type="tel" id="phone" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Country and City */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                         <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
//                         <div className='relative'>
//                             <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3 pointer-events-none">
//                                 <TfiWorld className='size-5 text-gray-400' />
//                             </div>
//                             <div>
//                                 <CustomDropdown
//                                     id="country"
//                                     options={countries}
//                                     selectedValue={selectedCountry}
//                                     onSelect={setSelectedCountry}

//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FaCity className='size-5 text-gray-400' />
//                             </div>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm"
//                                 value={city}
//                                 onChange={(e) => setCity(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Notes/Special Requests */}
//                 <div className="mb-6">
//                     <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Notes/Special requests</label>
//                     <textarea id="notes" rows="4" className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="flex items-start mb-6">
//                     <div className="flex items-center h-5">
//                         <input id="terms" aria-describedby="terms-description" type="checkbox" className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" />
//                     </div>
//                     <div className="ml-3 text-sm">
//                         <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions</label>
//                         <p id="terms-description" className="text-gray-500">
//                             Please read and accept our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Send Request Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Send Request
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const BookNowForm = () => {
//     // Dummy Data for Rooms (replace with actual API call)
//     const rooms = [
//         { id: 1, name: "Standard Room", price: 100 },
//         { id: 2, name: "Deluxe Room", price: 150 },
//         { id: 3, name: "Suite", price: 250 },
//     ];
//     const numRoomsOptions = [1, 2, 3, 4, 5];

//     const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
//     const [numRooms, setNumRooms] = useState(1);
//     const [numAdults, setNumAdults] = useState(2);
//     const [numChildren, setNumChildren] = useState(0);

//     return (
//         <div className="bg-white shadow-lg rounded-2xl">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Book Your Stay</h2>
//             <form>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                     {/* Check-in Date */}
//                     <div>
//                         <label htmlFor="checkInDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-in date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkInDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Check-out Date */}
//                     <div>
//                         <label htmlFor="checkOutDateBookNow" className="block text-sm font-medium text-gray-700 mb-2">Check-out date</label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                 <CalendarDays className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input type="date" id="checkOutDateBookNow" className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm" />
//                         </div>
//                     </div>

//                     {/* Room Type */}
//                     <div>
//                         <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
//                         <div className='relative'>
//                             <div className="absolute inset-y-5 z-10 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FaHouse className='size-5 text-gray-400' />
//                             </div>
//                         </div>

//                         <CustomDropdown
//                             id="roomType"
//                             options={rooms.map(room => `${room.name} ($${room.price})`)}
//                             selectedValue={rooms.find(room => room.id === selectedRoom)?.name + ` ($${rooms.find(room => room.id === selectedRoom)?.price})` || ''}
//                             onSelect={(selected) => {
//                                 const foundRoom = rooms.find(room => `${room.name} ($${room.price})` === selected);
//                                 if (foundRoom) {
//                                     setSelectedRoom(foundRoom.id);
//                                 }
//                             }}
//                         />
//                     </div>

//                     {/* Number of Rooms */}
//                     <div>
//                         <label htmlFor="numRooms" className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
//                         <div className='relative'>
//                             <div className="absolute inset-y-5 z-10 left-0 flex items-center pl-3 pointer-events-none">
//                                 <FaHouse className='size-5 text-gray-400' />
//                             </div>
//                         </div>

//                         <CustomDropdown
//                             id="numRooms"
//                             options={numRoomsOptions.map(num => `${num} Room${num > 1 ? 's' : ''}`)}
//                             selectedValue={`${numRooms} Room${numRooms > 1 ? 's' : ''}`}
//                             onSelect={(selected) => {
//                                 const foundNum = numRoomsOptions.find(num => `${num} Room${num > 1 ? 's' : ''}` === selected);
//                                 if (foundNum) {
//                                     setNumRooms(foundNum);
//                                 }
//                             }}
//                         />
//                     </div>
//                 </div>

//                 {/* Booking Button */}
//                 <div>
//                     <button type="submit" className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
//                         Book Now
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const CustomDropdown = ({ id, options, selectedValue, onSelect, icon }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionSelect = (value) => {
//         onSelect(value);
//         setIsOpen(false);
//     };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button
//                 type="button"
//                 className="block w-full py-3 pl-10 pr-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none sm:text-sm text-left relative"
//                 onClick={toggleDropdown}
//                 aria-haspopup="true"
//                 aria-expanded={isOpen}
//             >
//                 {icon && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{icon}</div>}
//                 {selectedValue}
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                         <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                     </svg>
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-300 focus:outline-none max-h-[200px] overflow-y-auto" role="menu" aria-orientation="vertical" aria-labelledby={id}>
//                     <div className="py-1" role="none">
//                         {options.map((option) => (
//                             <button
//                                 key={option}
//                                 onClick={() => handleOptionSelect(option)}
//                                 className="text-gray-700 text-left block w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
//                                 role="menuitem"
//                             >
//                                 {option}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookingForm;

// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { CalendarDays, User, Users, ChevronDown, Send, Building, CreditCard } from 'lucide-react';

// const BookingForm = () => {
//     const [activeTab, setActiveTab] = useState('inquiry');

//     return (
//         <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden my-10">
//             {/* Tab Navigation - Pill Style */}
//             <div className="flex p-2 bg-gray-50 rounded-t-3xl">
//                 <TabButton
//                     active={activeTab === 'inquiry'}
//                     onClick={() => setActiveTab('inquiry')}
//                     label="Send Inquiry"
//                     icon={<Send size={18} />}
//                 />
//                 <TabButton
//                     active={activeTab === 'bookNow'}
//                     onClick={() => setActiveTab('bookNow')}
//                     label="Book Now"
//                     icon={<CreditCard size={18} />}
//                 />
//             </div>

//             <div className="p-8">
//                 {activeTab === 'inquiry' ? <InquiryForm /> : <BookNowForm />}
//             </div>
//         </div>
//     );
// };

// const TabButton = ({ active, onClick, label, icon }) => (
//     <button
//         onClick={onClick}
//         className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${active
//             ? 'bg-main text-white shadow-md'
//             : 'bg-transparent text-gray-600 hover:bg-gray-200'
//             }`}
//     >
//         {icon}
//         <span>{label}</span>
//     </button>
// );

// const InquiryForm = () => {
//     const [selectedGuests, setSelectedGuests] = useState('1 Adult');
//     const [selectedCountry, setSelectedCountry] = useState('India');
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         city: '',
//         notes: '',
//         termsAccepted: false
//     });

//     const handleChange = (e) => {
//         const { id, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [id]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//             ...formData,
//             selectedGuests,
//             selectedCountry,
//             checkInDate: document.getElementById('checkInDate').value,
//             checkOutDate: document.getElementById('checkOutDate').value
//         });
//         alert("Form submitted (check console for data)");
//     };

//     const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '1 Adult, 1 Child', '2 Adults, 1 Child', '2 Adults, 2 Children'];
//     const countries = [
//         "India", "United States", "Canada", "United Kingdom", "Germany",
//         "France", "Australia", "Japan", "China", "Brazil",
//         "Spain", "Italy", "Netherlands", "Switzerland"
//     ];

//     return (
//         <form onSubmit={handleSubmit} className="space-y-6">
//             <h2 className="text-2xl font-medium text-prime mb-6">Tell us about your stay</h2>

//             {/* Date Selection & Guests - 3 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <FormField
//                     label="Check-in date"
//                     id="checkInDate"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />

//                 <FormField
//                     label="Check-out date"
//                     id="checkOutDate"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />

//                 <div>
//                     <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
//                         Guests
//                     </label>
//                     <CustomDropdown
//                         id="guests"
//                         options={guestOptions}
//                         selectedValue={selectedGuests}
//                         onSelect={setSelectedGuests}
//                         icon={<Users className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>
//             </div>

//             {/* Name Information - 2 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <FormField
//                     label="First Name"
//                     id="firstName"
//                     type="text"
//                     icon={<User className="h-5 w-5 text-gray-400" />}
//                     value={formData.firstName}
//                     onChange={handleChange}
//                 />

//                 <FormField
//                     label="Last Name"
//                     id="lastName"
//                     type="text"
//                     icon={<User className="h-5 w-5 text-gray-400" />}
//                     value={formData.lastName}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Contact Information - 2 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <FormField
//                     label="Email"
//                     id="email"
//                     type="email"
//                     icon={<EmailIcon className="h-5 w-5 text-gray-400" />}
//                     value={formData.email}
//                     onChange={handleChange}
//                 />

//                 <FormField
//                     label="Phone"
//                     id="phone"
//                     type="tel"
//                     icon={<PhoneIcon className="h-5 w-5 text-gray-400" />}
//                     value={formData.phone}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Location Information - 2 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                     <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
//                         Country
//                     </label>
//                     <CustomDropdown
//                         id="country"
//                         options={countries}
//                         selectedValue={selectedCountry}
//                         onSelect={setSelectedCountry}
//                         icon={<GlobeIcon className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>

//                 <FormField
//                     label="City"
//                     id="city"
//                     type="text"
//                     icon={<Building className="h-5 w-5 text-gray-400" />}
//                     value={formData.city}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Special Requests */}
//             <div>
//                 <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
//                     Special Requests
//                 </label>
//                 <textarea
//                     id="notes"
//                     rows="3"
//                     className="block w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                     value={formData.notes}
//                     onChange={handleChange}
//                     placeholder="Tell us about any special needs or preferences..."
//                 />
//             </div>

//             {/* Terms and Conditions */}
//             <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                     <input
//                         id="termsAccepted"
//                         type="checkbox"
//                         className="focus:ring-blue-500 h-4 w-4 text-main border-gray-300 rounded"
//                         checked={formData.termsAccepted}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="ml-3 text-sm">
//                     <label htmlFor="termsAccepted" className="font-medium text-gray-700">
//                         I agree to the terms and conditions
//                     </label>
//                     <p className="text-gray-500">
//                         By checking this box, you accept our <a href="#" className="text-main hover:underline">Terms of Service</a> and <a href="#" className="text-main hover:underline">Privacy Policy</a>.
//                     </p>
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit"
//                 className="w-full bg-main text-white font-medium py-3 px-4 rounded-xl shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
//                 disabled={!formData.termsAccepted}
//             >
//                 <Send size={18} />
//                 Send Inquiry
//             </button>
//         </form>
//     );
// };

// const BookNowForm = () => {
//     const [selectedRoom, setSelectedRoom] = useState("Standard Room ($100)");
//     const [numRooms, setNumRooms] = useState("1 Room");
//     const [paymentMethod, setPaymentMethod] = useState("Credit Card");

//     const roomOptions = ["Standard Room ($100)", "Deluxe Room ($150)", "Suite ($250)"];
//     const numRoomsOptions = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms", "5 Rooms"];
//     const paymentOptions = ["Credit Card", "PayPal", "Bank Transfer", "Pay at Property"];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//             checkInDate: document.getElementById('checkInDateBookNow').value,
//             checkOutDate: document.getElementById('checkOutDateBookNow').value,
//             selectedRoom,
//             numRooms,
//             paymentMethod
//         });
//         alert("Booking submitted (check console for data)");
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-6">
//             <h2 className="text-2xl font-medium text-prime mb-6">Complete your booking</h2>

//             {/* Date Selection */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <FormField
//                     label="Check-in date"
//                     id="checkInDateBookNow"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />

//                 <FormField
//                     label="Check-out date"
//                     id="checkOutDateBookNow"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />
//             </div>

//             {/* Room Selection */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                     <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
//                         Room Type
//                     </label>
//                     <CustomDropdown
//                         id="roomType"
//                         options={roomOptions}
//                         selectedValue={selectedRoom}
//                         onSelect={setSelectedRoom}
//                         icon={<HouseIcon className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="numRooms" className="block text-sm font-medium text-gray-700 mb-1">
//                         Number of Rooms
//                     </label>
//                     <CustomDropdown
//                         id="numRooms"
//                         options={numRoomsOptions}
//                         selectedValue={numRooms}
//                         onSelect={setNumRooms}
//                         icon={<HouseIcon className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>
//             </div>

//             {/* Payment Method */}
//             <div>
//                 <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
//                     Payment Method
//                 </label>
//                 <CustomDropdown
//                     id="paymentMethod"
//                     options={paymentOptions}
//                     selectedValue={paymentMethod}
//                     onSelect={setPaymentMethod}
//                     icon={<CreditCard className="h-5 w-5 text-gray-400" />}
//                 />
//             </div>

//             {/* Booking Summary Card */}
//             <div className="bg-gray-50 p-4 rounded-xl">
//                 <h3 className="font-medium text-gray-800 mb-2">Booking Summary</h3>
//                 <div className="space-y-1 text-sm">
//                     <div className="flex justify-between">
//                         <span className="text-gray-600">Room:</span>
//                         <span className="font-medium">{selectedRoom}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-600">Rooms:</span>
//                         <span className="font-medium">{numRooms}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-600">Payment:</span>
//                         <span className="font-medium">{paymentMethod}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
//             >
//                 <CreditCard size={18} />
//                 Confirm Booking
//             </button>
//         </form>
//     );
// };

// // Form field component for consistent styling
// const FormField = ({ label, id, type, icon, value, onChange }) => (
//     <div>
//         <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
//             {label}
//         </label>
//         <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 {icon}
//             </div>
//             <input
//                 type={type}
//                 id={id}
//                 className="block w-full border border-gray-300 rounded-xl pl-10 pr-3 py-3 hover:border-black transition-colors ease-in-out duration-300 focus:outline-none shadow-sm"
//                 value={value}
//                 onChange={onChange}
//             />
//         </div>
//     </div>
// );

// // Custom dropdown component
// const CustomDropdown = ({ id, options, selectedValue, onSelect, icon }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button
//                 type="button"
//                 className="flex items-center w-full border border-gray-300 hover:border-black transition-colors ease-in-out duration-300 rounded-xl pl-10 pr-3 py-3 bg-white text-left shadow-sm focus:outline-none"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     {icon}
//                 </div>
//                 <span className="block truncate">{selectedValue}</span>
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                     <ChevronDown className="h-5 w-5 text-gray-400" />
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
//                     <ul className="py-1">
//                         {options.map((option) => (
//                             <li
//                                 key={option}
//                                 className="cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-blue-50 text-gray-700"
//                                 onClick={() => {
//                                     onSelect(option);
//                                     setIsOpen(false);
//                                 }}
//                             >
//                                 <span className={`block truncate ${selectedValue === option ? 'font-medium text-main' : 'font-normal'}`}>
//                                     {option}
//                                 </span>
//                                 {selectedValue === option && (
//                                     <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-main">
//                                         <CheckIcon className="h-5 w-5" />
//                                     </span>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// // Icons for the custom form fields
// const EmailIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//     </svg>
// );

// const PhoneIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//     </svg>
// );

// const GlobeIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
// );

// const HouseIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//     </svg>
// );

// const CheckIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//     </svg>
// );

// export default BookingForm;


// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { CalendarDays, User, Users, ChevronDown, Send, Building, CreditCard } from 'lucide-react';
// import { motion } from 'framer-motion'; // Import motion from framer-motion


// const BookingForm = () => {
//     const [activeTab, setActiveTab] = useState('inquiry');

//     // Animation variants for tab content
//     const tabContentVariants = {
//         initial: { opacity: 0, x: -20 },
//         animate: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeInOut" } },
//         exit: { opacity: 0, x: 20, transition: { duration: 0.2, ease: "easeInOut" } }
//     };


//     return (
//         <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden my-10 px-4">
//             {/* Tab Navigation - Pill Style */}
//             <div className="flex bg-gray-50 rounded-t-3xl">
//                 <TabButton
//                     active={activeTab === 'inquiry'}
//                     onClick={() => setActiveTab('inquiry')}
//                     label="Send Inquiry"
//                     icon={<Send size={18} />}
//                 />
//                 <TabButton
//                     active={activeTab === 'bookNow'}
//                     onClick={() => setActiveTab('bookNow')}
//                     label="Book Now"
//                     icon={<CreditCard size={18} />}
//                 />
//             </div>

//             <motion.div
//                 key={activeTab}  // Key to trigger animation on tab change
//                 variants={tabContentVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="mt-5"
//             >
//                 {activeTab === 'inquiry' ? <InquiryForm /> : <BookNowForm />}
//             </motion.div>
//         </div>
//     );
// };

// const TabButton = ({ active, onClick, label, icon }) => (
//     <button
//         onClick={onClick}
//         className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${active
//             ? 'bg-main text-white shadow-md'
//             : 'bg-transparent text-gray-600 hover:bg-gray-200'
//             }`}
//     >
//         {icon}
//         <span>{label}</span>
//     </button>
// );

// const InquiryForm = () => {
//     const [selectedGuests, setSelectedGuests] = useState('1 Adult');
//     const [selectedCountry, setSelectedCountry] = useState('India');
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         city: '',
//         notes: '',
//         termsAccepted: false
//     });

//     const handleChange = (e) => {
//         const { id, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [id]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//             ...formData,
//             selectedGuests,
//             selectedCountry,
//             checkInDate: document.getElementById('checkInDate').value,
//             checkOutDate: document.getElementById('checkOutDate').value
//         });
//         alert("Form submitted (check console for data)");
//     };

//     const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '1 Adult, 1 Child', '2 Adults, 1 Child', '2 Adults, 2 Children'];
//     const countries = [
//         "India", "United States", "Canada", "United Kingdom", "Germany",
//         "France", "Australia", "Japan", "China", "Brazil",
//         "Spain", "Italy", "Netherlands", "Switzerland"
//     ];

//     return (
//         <form onSubmit={handleSubmit} className="space-y-6">
//             <h2 className="lg:text-2xl text-xl font-medium text-prime mb-6">Tell us about your stay</h2>

//             {/* Date Selection & Guests - 3 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <FormField
//                     label="Check-in date"
//                     id="checkInDate"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />

//                 <FormField
//                     label="Check-out date"
//                     id="checkOutDate"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />

//                 <div>
//                     <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
//                         Guests
//                     </label>
//                     <CustomDropdown
//                         id="guests"
//                         options={guestOptions}
//                         selectedValue={selectedGuests}
//                         onSelect={setSelectedGuests}
//                         icon={<Users className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>
//             </div>

//             {/* Name Information - 2 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <FormField
//                     label="First Name"
//                     id="firstName"
//                     type="text"
//                     icon={<User className="h-5 w-5 text-gray-400" />}
//                     value={formData.firstName}
//                     onChange={handleChange}
//                 />

//                 <FormField
//                     label="Last Name"
//                     id="lastName"
//                     type="text"
//                     icon={<User className="h-5 w-5 text-gray-400" />}
//                     value={formData.lastName}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Contact Information - 2 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <FormField
//                     label="Email"
//                     id="email"
//                     type="email"
//                     icon={<EmailIcon className="h-5 w-5 text-gray-400" />}
//                     value={formData.email}
//                     onChange={handleChange}
//                 />

//                 <FormField
//                     label="Phone"
//                     id="phone"
//                     type="tel"
//                     icon={<PhoneIcon className="h-5 w-5 text-gray-400" />}
//                     value={formData.phone}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Location Information - 2 column grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                     <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
//                         Country
//                     </label>
//                     <CustomDropdown
//                         id="country"
//                         options={countries}
//                         selectedValue={selectedCountry}
//                         onSelect={setSelectedCountry}
//                         icon={<GlobeIcon className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>

//                 <FormField
//                     label="City"
//                     id="city"
//                     type="text"
//                     icon={<Building className="h-5 w-5 text-gray-400" />}
//                     value={formData.city}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Special Requests */}
//             <div>
//                 <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
//                     Special Requests
//                 </label>
//                 <textarea
//                     id="notes"
//                     rows="3"
//                     className="block w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none shadow-sm"
//                     value={formData.notes}
//                     onChange={handleChange}
//                     placeholder="Tell us about any special needs or preferences..."
//                 />
//             </div>

//             {/* Terms and Conditions */}
//             <div className="flex items-center">
//                 <div className="flex items-center h-5">
//                     <input
//                         id="termsAccepted"
//                         type="checkbox"
//                         className="size-4 accent-main text-main border-gray-300 rounded"
//                         checked={formData.termsAccepted}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="ml-2 text-sm text-justify">
//                     <label htmlFor="termsAccepted" className="text-gray-700">
//                         I agree to the terms and conditions
//                     </label>
//                     <p className="text-gray-500">
//                         By checking this box, you accept our <a href="#" className="text-main hover:underline">Terms of Service</a> and <a href="#" className="text-main hover:underline">Privacy Policy</a>.
//                     </p>
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit"
//                 className="w-full bg-main text-white font-medium py-3 px-4 rounded-xl shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
//                 disabled={!formData.termsAccepted}
//             >
//                 <Send size={18} />
//                 Send Inquiry
//             </button>
//         </form>
//     );
// };

// const BookNowForm = () => {
//     const [selectedRoom, setSelectedRoom] = useState("Standard Room ($100)");
//     const [numRooms, setNumRooms] = useState("1 Room");
//     const [paymentMethod, setPaymentMethod] = useState("Credit Card");

//     const roomOptions = ["Standard Room ($100)", "Deluxe Room ($150)", "Suite ($250)"];
//     const numRoomsOptions = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms", "5 Rooms"];
//     const paymentOptions = ["Credit Card", "PayPal", "Bank Transfer", "Pay at Property"];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//             checkInDate: document.getElementById('checkInDateBookNow').value,
//             checkOutDate: document.getElementById('checkOutDateBookNow').value,
//             selectedRoom,
//             numRooms,
//             paymentMethod
//         });
//         alert("Booking submitted (check console for data)");
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-6">
//             <h2 className="lg:text-2xl text-xl font-medium text-prime mb-6">Complete your booking</h2>

//             {/* Date Selection */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <FormField
//                     label="Check-in date"
//                     id="checkInDateBookNow"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />

//                 <FormField
//                     label="Check-out date"
//                     id="checkOutDateBookNow"
//                     type="date"
//                     icon={<CalendarDays className="h-5 w-5 text-gray-400" />}
//                 />
//             </div>

//             {/* Room Selection */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                     <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
//                         Room Type
//                     </label>
//                     <CustomDropdown
//                         id="roomType"
//                         options={roomOptions}
//                         selectedValue={selectedRoom}
//                         onSelect={setSelectedRoom}
//                         icon={<HouseIcon className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="numRooms" className="block text-sm font-medium text-gray-700 mb-1">
//                         Number of Rooms
//                     </label>
//                     <CustomDropdown
//                         id="numRooms"
//                         options={numRoomsOptions}
//                         selectedValue={numRooms}
//                         onSelect={setNumRooms}
//                         icon={<HouseIcon className="h-5 w-5 text-gray-400" />}
//                     />
//                 </div>
//             </div>

//             {/* Payment Method */}
//             <div>
//                 <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
//                     Payment Method
//                 </label>
//                 <CustomDropdown
//                     id="paymentMethod"
//                     options={paymentOptions}
//                     selectedValue={paymentMethod}
//                     onSelect={setPaymentMethod}
//                     icon={<CreditCard className="h-5 w-5 text-gray-400" />}
//                 />
//             </div>

//             {/* Booking Summary Card */}
//             <div className="bg-gray-50 lg:p-4 p-0 rounded-xl">
//                 <h3 className="font-medium text-gray-800 mb-2">Booking Summary</h3>
//                 <div className="space-y-1 text-sm">
//                     <div className="flex justify-between">
//                         <span className="text-gray-600">Room:</span>
//                         <span className="font-medium">{selectedRoom}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-600">Rooms:</span>
//                         <span className="font-medium">{numRooms}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className="text-gray-600">Payment:</span>
//                         <span className="font-medium">{paymentMethod}</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit"
//                 className="w-full bg-main text-white font-medium py-3 px-4 rounded-xl shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
//             >
//                 <CreditCard size={18} />
//                 Confirm Booking
//             </button>
//         </form>
//     );
// };

// // Form field component for consistent styling
// const FormField = ({ label, id, type, icon, value, onChange }) => (
//     <div>
//         <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
//             {label}
//         </label>
//         <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 {icon}
//             </div>
//             <input
//                 type={type}
//                 id={id}
//                 className="block w-full border border-gray-300 rounded-xl pl-10 pr-3 py-3 hover:border-black transition-colors ease-in-out duration-300 focus:outline-none shadow-sm"
//                 value={value}
//                 onChange={onChange}
//             />
//         </div>
//     </div>
// );

// // Custom dropdown component
// const CustomDropdown = ({ id, options, selectedValue, onSelect, icon }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button
//                 type="button"
//                 className="flex items-center w-full border border-gray-300 hover:border-black transition-colors ease-in-out duration-300 rounded-xl pl-10 pr-3 py-3 bg-white text-left shadow-sm focus:outline-none"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     {icon}
//                 </div>
//                 <span className="block truncate">{selectedValue}</span>
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                     <ChevronDown className="h-5 w-5 text-gray-400" />
//                 </span>
//             </button>

//             {isOpen && (
//                 <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
//                     <ul className="py-1">
//                         {options.map((option) => (
//                             <li
//                                 key={option}
//                                 className="cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-blue-50 text-gray-700"
//                                 onClick={() => {
//                                     onSelect(option);
//                                     setIsOpen(false);
//                                 }}
//                             >
//                                 <span className={`block truncate ${selectedValue === option ? 'font-medium text-main' : 'font-normal'}`}>
//                                     {option}
//                                 </span>
//                                 {selectedValue === option && (
//                                     <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-main">
//                                         <CheckIcon className="h-5 w-5" />
//                                     </span>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// // Icons for the custom form fields
// const EmailIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//     </svg>
// );

// const PhoneIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//     </svg>
// );

// const GlobeIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
// );

// const HouseIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//     </svg>
// );

// const CheckIcon = ({ className }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//     </svg>
// );

// export default BookingForm;
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { CalendarDays, User, Users, ChevronDown, Send, Building, CreditCard, Mail, Phone, Globe, MapPin, Heart } from 'lucide-react';
import { FaHeart } from "react-icons/fa";

// Theme Color
const themeColor = '#ff5700';

const BookingForm = () => {
    const [activeTab, setActiveTab] = useState('inquiry');

    // Animation variants using CSS transitions instead of framer-motion
    return (
        <div className='container mx-auto px-4'>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-orange-50 rounded-lg shadow-xl overflow-hidden my-10 lg:p-4 p-2 lg:pt-10  border" style={{ borderColor: themeColor }}>
                {/* Custom Header with Hotel Icon */}
                <div className="flex items-center justify-center mb-8">
                    <div className="lg:p-2.5 p-2 rounded-full shadow-lg" style={{ backgroundColor: themeColor }}>
                        <FaHeart className="text-white size-4" />
                    </div>
                    <h1 className="lg:text-2xl text-prime text-xl font-medium ml-3">Dream Ashram Inquiry</h1>
                </div>

                <div className="relative flex justify-center bg-gray-100 rounded-lg w-fit mx-auto p-2 mb-5">
                    <div className="relative flex justify-center items-center bg-gray-100 overflow-hidden text-nowrap">
                        <div
                            className={`absolute left-0 top-0 h-full transition-all duration-200 ease-in-out bg-orange-500 rounded-lg
            ${activeTab === "inquiry"
                                    ? "w-1/2 translate-x-0" // Corrected translate for inquiry
                                    : "w-0 translate-x-[100%]" // Move offscreen when not active
                                }
          `}
                            style={{ width: "50%" }}
                        ></div>
                        <div
                            className={`absolute left-0 top-0 h-full transition-all duration-200 ease-in-out bg-orange-500 rounded-lg
            ${activeTab === "bookNow"
                                    ? "w-1/2 translate-x-full" // Corrected translate for bookNow
                                    : "w-0 translate-x-0" // Retract when not active
                                }
          `}
                            style={{ width: "50%" }}
                        ></div>
                        {/* inquiry Tab */}

                        <button
                            className={`relative cursor-pointer flex items-center justify-center flex-row font-medium lg:px-6 px-4 py-3 focus:outline-none transition-colors duration-300 w-1/2 ${activeTab === "inquiry" ? "text-white z-10" : ""
                                }`}
                            onClick={() => setActiveTab('inquiry')}
                        >
                            <span className="mr-2">
                                <Send className="lg:size-6 size-4" />
                            </span>
                            <span className="uppercase">send inquiry</span>
                        </button>

                        {/* bookNow Tab */}
                        <button
                            className={`relative cursor-pointer flex items-center justify-center flex-row font-medium lg:px-6 px-4 py-3  focus:outline-none transition-colors duration-300 w-1/2 ${activeTab === "bookNow" ? "text-white" : ""
                                }`}
                            onClick={() => setActiveTab('bookNow')}
                        >
                            <span className="mr-2">
                                <CreditCard className="lg:size-6 size-4" />
                            </span>
                            <span className="uppercase">book now</span>
                        </button>
                    </div>
                </div>

                <div className="transition-all duration-300 ease-in-out">
                    {activeTab === 'inquiry' ? <InquiryForm /> : <BookNowForm />}
                </div>

            </div>
        </div>
    );
};

const InquiryForm = () => {
    const [selectedGuests, setSelectedGuests] = useState('1 Adult');
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        notes: '',
        termsAccepted: false,
        checkInDate: '', // Add checkInDate and checkOutDate to formData
        checkOutDate: '',
    });
    const [step, setStep] = useState(1);
    const totalSteps = 2;

    // Validation state and function
    const [step1Errors, setStep1Errors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);  // Add loading state

    const validateStep1 = () => {
        const errors = {};
        if (!formData.checkInDate) {  // Use formData instead of document.getElementById
            errors.checkInDate = 'Check-in date is required';
        }
        if (!formData.checkOutDate) {  // Use formData instead of document.getElementById
            errors.checkOutDate = 'Check-out date is required';
        }
        setStep1Errors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert("Please accept the terms and conditions.");
            return;
        }

        setIsSubmitting(true);  // Start submitting state

        try {
            // Simulate a successful API call (replace with your actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));  // 2-second delay

            console.log({
                ...formData,
                selectedGuests,
                selectedCountry,
            });
            alert("Inquiry sent successfully! We'll get back to you shortly.");
        } catch (error) {
            console.error("Error sending inquiry:", error);
            alert("Failed to send inquiry. Please try again later.");
        } finally {
            setIsSubmitting(false);  // End submitting state, regardless of success
        }
    };

    const nextStep = () => {
        if (validateStep1()) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
        setStep1Errors({}); // Clear errors when going back
    };

    const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '1 Adult, 1 Child', '2 Adults, 1 Child', '2 Adults, 2 Children'];
    const countries = [
        "India", "United States", "Canada", "United Kingdom", "Germany",
        "France", "Australia", "Japan", "China", "Brazil",
        "Spain", "Italy", "Netherlands", "Switzerland"
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 lg:mb-6 mb-4">
                <div
                    className="h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${(step / totalSteps) * 100}%`, backgroundColor: themeColor }}
                ></div>
            </div>

            <h2 className="lg:text-2xl text-xl font-medium lg:mb-6 mb-4 flex items-center text-prime">
                {step === 1 ? (
                    <>
                        <CalendarDays className="mr-2" />
                        Tell us about your stay
                    </>
                ) : (
                    <>
                        <User className="mr-2" />
                        Your contact information
                    </>
                )}
            </h2>

            {step === 1 && (
                <>
                    {/* Date Selection & Guests - Modern Card Layout */}
                    <div className="bg-white rounded-2xl lg:p-6 p-4 shadow-md border" style={{ borderColor: themeColor }}>
                        <h3 className="text-lg font-medium mb-4" style={{ color: themeColor }}>Stay Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormField
                                label="Check-in date"
                                id="checkInDate"
                                type="date"
                                icon={<CalendarDays className="h-5 w-5" style={{ color: themeColor }} />}
                                value={formData.checkInDate}
                                onChange={handleChange}
                            />

                            <FormField
                                label="Check-out date"
                                id="checkOutDate"
                                type="date"
                                icon={<CalendarDays className="h-5 w-5" style={{ color: themeColor }} />}
                                value={formData.checkOutDate}
                                onChange={handleChange}
                            />

                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                                    Guests
                                </label>
                                <CustomDropdown
                                    id="guests"
                                    options={guestOptions}
                                    selectedValue={selectedGuests}
                                    onSelect={setSelectedGuests}
                                    icon={<Users className="h-5 w-5" style={{ color: themeColor }} />}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div className="bg-white rounded-2xl lg:p-6 p-4 shadow-md border" style={{ borderColor: themeColor }}>
                        <h3 className="text-lg font-medium mb-4" style={{ color: themeColor }}>Special Requests</h3>

                        <div>
                            <textarea
                                id="notes"
                                rows="3"
                                className="block w-full border border-gray-300 rounded-xl hover:border-orange-500 font-medium  px-4 py-3 text-gray-700 focus:outline-none shadow-sm"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Tell us about any special needs or preferences..."
                            />
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        type="button"
                        onClick={nextStep}
                        className="w-full text-white font-medium py-4 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        style={{ backgroundColor: themeColor }}
                    >
                        Continue
                        <ChevronDown className="transform rotate-270" />
                    </button>
                </>
            )}

            {step === 2 && (
                <>
                    {/* Personal Information */}
                    <div className="bg-white rounded-2xl lg:p-6 p-4 shadow-md border" style={{ borderColor: themeColor }}>
                        <h3 className="text-lg font-medium mb-4" style={{ color: themeColor }}>Personal Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <FormField
                                label="First Name"
                                id="firstName"
                                type="text"
                                icon={<User className="h-5 w-5" style={{ color: themeColor }} />}
                                value={formData.firstName}
                                onChange={handleChange}
                            />

                            <FormField
                                label="Last Name"
                                id="lastName"
                                type="text"
                                icon={<User className="h-5 w-5" style={{ color: themeColor }} />}
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                label="Email"
                                id="email"
                                type="email"
                                icon={<Mail className="h-5 w-5" style={{ color: themeColor }} />}
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <FormField
                                label="Phone"
                                id="phone"
                                type="tel"
                                icon={<Phone className="h-5 w-5" style={{ color: themeColor }} />}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Location Information */}
                    <div className="bg-white rounded-2xl lg:p-6 p-4 shadow-md border" style={{ borderColor: themeColor }}>
                        <h3 className="text-lg font-medium mb-4" style={{ color: themeColor }}>Your Location</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                    Country
                                </label>
                                <CustomDropdown
                                    id="country"
                                    options={countries}
                                    selectedValue={selectedCountry}
                                    onSelect={setSelectedCountry}
                                    icon={<Globe className="h-5 w-5" style={{ color: themeColor }} />}
                                />
                            </div>

                            <FormField
                                label="City"
                                id="city"
                                type="text"
                                icon={<MapPin className="h-5 w-5" style={{ color: themeColor }} />}
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-white rounded-2xl lg:p-6 p-4 shadow-md border" style={{ borderColor: themeColor }}>
                        <div className="flex items-center">
                            <div className="flex items-center h-5">
                                <input
                                    id="termsAccepted"
                                    type="checkbox"
                                    className="size-5"
                                    style={{ accentColor: themeColor }}
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="termsAccepted" className="font-medium text-gray-700">
                                    I agree to the terms and conditions
                                </label>
                                <p className="text-gray-500 mt-1">
                                    By checking this box, you accept our <a href="#" style={{ color: themeColor }} className="hover:underline font-medium">Terms of Service</a> and <a href="#" style={{ color: themeColor }} className="hover:underline font-medium">Privacy Policy</a>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="w-1/3 bg-gray-300/50 text-gray-700 font-medium py-4 px-6 rounded-xl shadow-md hover:bg-gray-200 transition-all duration-300"
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            className="w-2/3 text-white font-medium py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            disabled={!formData.termsAccepted || isSubmitting}  // Added isSubmitting
                            style={{ backgroundColor: themeColor }}
                        >
                            <Send size={18} />
                            {isSubmitting ? "Sending..." : "Send Inquiry"}  {/* Show "Sending..." while submitting */}
                        </button>
                    </div>
                </>
            )}
        </form>
    );
};

const BookNowForm = () => {
    const [selectedRoom, setSelectedRoom] = useState("Standard Room ($100)");
    const [numRooms, setNumRooms] = useState("1 Room");
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");

    const roomOptions = ["Standard Room ($100)", "Deluxe Room ($150)", "Suite ($250)"];
    const numRoomsOptions = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms", "5 Rooms"];
    const paymentOptions = ["Credit Card", "PayPal", "Bank Transfer", "Pay at Property"];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            checkInDate: document.getElementById('checkInDateBookNow').value,
            checkOutDate: document.getElementById('checkOutDateBookNow').value,
            selectedRoom,
            numRooms,
            paymentMethod
        });
        alert("Booking confirmed! Check your email for details.");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="lg:text-2xl text-xl font-medium lg:mb-6 mb-4 flex items-center" style={{ color: themeColor }}>
                <CreditCard className="mr-2" style={{ color: themeColor }} />
                Complete your booking
            </h2>

            {/* Room Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-md border" style={{ borderColor: themeColor }}>
                <h3 className="text-lg font-medium mb-4" style={{ color: themeColor }}>Room Selection</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FormField
                        label="Check-in date"
                        id="checkInDateBookNow"
                        type="date"
                        icon={<CalendarDays className="h-5 w-5" style={{ color: themeColor }} />}
                    />

                    <FormField
                        label="Check-out date"
                        id="checkOutDateBookNow"
                        type="date"
                        icon={<CalendarDays className="h-5 w-5" style={{ color: themeColor }} />}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                            Room Type
                        </label>
                        <CustomDropdown
                            id="roomType"
                            options={roomOptions}
                            selectedValue={selectedRoom}
                            onSelect={setSelectedRoom}
                            icon={<Building className="h-5 w-5" style={{ color: themeColor }} />}
                        />
                    </div>

                    <div>
                        <label htmlFor="numRooms" className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Rooms
                        </label>
                        <CustomDropdown
                            id="numRooms"
                            options={numRoomsOptions}
                            selectedValue={numRooms}
                            onSelect={setNumRooms}
                            icon={<Building className="h-5 w-5" style={{ color: themeColor }} />}
                        />
                    </div>
                </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-2xl p-6 shadow-md border" style={{ borderColor: themeColor }}>
                <h3 className="text-lg font-medium mb-4" style={{ color: themeColor }}>Payment Details</h3>

                <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Method
                    </label>
                    <CustomDropdown
                        id="paymentMethod"
                        options={paymentOptions}
                        selectedValue={paymentMethod}
                        onSelect={setPaymentMethod}
                        icon={<CreditCard className="h-5 w-5" style={{ color: themeColor }} />}
                    />
                </div>
            </div>

            {/* Booking Summary Card */}
            <div className="p-6 rounded-2xl shadow-md border" style={{ backgroundColor: '#fff7f2', borderColor: themeColor }}>
                <h3 className="font-bold mb-4 flex items-center" style={{ color: themeColor }}>
                    <FaHeart className="mr-2" style={{ color: themeColor }} />
                    Booking Summary
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 rounded-lg border bg-white shadow-sm">
                        <span className="text-gray-700 font-medium">Room:</span>
                        <span className="font-bold" style={{ color: themeColor }}>{selectedRoom}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg border bg-white shadow-sm">
                        <span className="text-gray-700 font-medium">Rooms:</span>
                        <span className="font-bold" style={{ color: themeColor }}>{numRooms}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg border bg-white shadow-sm">
                        <span className="text-gray-700 font-medium">Payment:</span>
                        <span className="font-bold" style={{ color: themeColor }}>{paymentMethod}</span>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{ backgroundColor: themeColor }}
            >
                <CreditCard size={18} />
                Confirm Booking
            </button>
        </form>
    );
};

// Form field component with enhanced styling
const FormField = ({ label, id, type, icon, value, onChange }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>

        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {icon}
            </div>
            <input
                type={type}
                id={id}
                className="block w-full border border-gray-300 rounded-xl pl-10 pr-3 py-3 hover:border-orange-500 transition-colors ease-in-out duration-300 focus:outline-none shadow-sm"
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

// Enhanced dropdown component
const CustomDropdown = ({ id, options, selectedValue, onSelect, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                className="flex items-center w-full border border-gray-300 hover:border-orange-500 transition-colors ease-in-out duration-300 rounded-xl pl-10 pr-3 py-3 bg-white text-left shadow-sm focus:outline-none "
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {icon}
                </div>
                <span className="block truncate">{selectedValue}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} style={{ color: themeColor }} />
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                    <ul className="py-1">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-orange-50 transition-colors duration-200"
                                onClick={() => {
                                    onSelect(option);
                                    setIsOpen(false);
                                }}
                            >
                                <span className={`block truncate ${selectedValue === option ? 'font-medium' : 'font-normal text-gray-700'}`} style={{ color: selectedValue === option ? themeColor : 'inherit' }}>
                                    {option}
                                </span>
                                {selectedValue === option && (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ color: themeColor }}>
                                        <CheckIcon className="h-5 w-5" />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Check icon component
const CheckIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default BookingForm;




