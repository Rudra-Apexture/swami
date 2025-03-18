// import React from 'react'

// const RoomBooking = () => {
//     return (
//         <div className='container mx-auto px-4 my-10'>
//             <h1 className='text-center text-3xl font-medium text-main'>
//                 Search Bookings
//             </h1>
//         </div>
//     )
// }

// export default RoomBooking


// "use client";

// import React, { useState } from 'react';

// const RoomBooking = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]); // Example search results state

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         // Simulate API call or data fetching based on searchQuery
//         // Replace this with your actual search logic
//         const fakeSearchResults = [
//             { id: 1, roomNumber: '101', guestName: 'John Doe', checkIn: '2024-03-15', checkOut: '2024-03-20' },
//             { id: 2, roomNumber: '102', guestName: 'Jane Smith', checkIn: '2024-03-18', checkOut: '2024-03-22' },
//             { id: 3, roomNumber: '103', guestName: 'raju padamani', checkIn: '2024-03-20', checkOut: '2024-03-10' },
//             { id: 4, roomNumber: '104', guestName: 'viru desai', checkIn: '2024-03-12', checkOut: '2024-03-25' },
//         ].filter(result =>
//             result.roomNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             result.guestName.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setSearchResults(fakeSearchResults);
//     };

//     return (
//         <div className="container mx-auto px-4 my-10">
//             <h1 className="text-center text-3xl font-medium text-main mb-6">
//                 Search Bookings
//             </h1>
//             <SearchForm
//                 searchQuery={searchQuery}
//                 onSearchChange={handleSearchChange}
//                 onSearchSubmit={handleSearchSubmit}
//             />
//             <SearchResults results={searchResults} />
//         </div>
//     );
// };

// const SearchForm = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
//     return (
//         <form onSubmit={onSearchSubmit} className="flex items-center justify-center mb-6">
//             <input
//                 type="text"
//                 placeholder="Search by room number or guest name..."
//                 value={searchQuery}
//                 onChange={onSearchChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//             <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
//             >
//                 Search
//             </button>
//         </form>
//     );
// };

// const SearchResults = ({ results }) => {
//     if (results.length === 0) {
//         return <p className="text-center text-gray-500">No bookings found.</p>;
//     }

//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-300">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="py-2 px-4 border-b">Room Number</th>
//                         <th className="py-2 px-4 border-b">Guest Name</th>
//                         <th className="py-2 px-4 border-b">Check-In Date</th>
//                         <th className="py-2 px-4 border-b">Check-Out Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {results.map((result) => (
//                         <tr key={result.id}>
//                             <td className="py-2 px-4 border-b text-center">{result.roomNumber}</td>
//                             <td className="py-2 px-4 border-b text-center">{result.guestName}</td>
//                             <td className="py-2 px-4 border-b text-center">{result.checkIn}</td>
//                             <td className="py-2 px-4 border-b text-center">{result.checkOut}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default RoomBooking;

// "use client";
// import React, { useState } from 'react';

// const RoomBooking = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         const fakeSearchResults = [
//             { id: 1, roomNumber: '101', guestName: 'John Doe', checkIn: '2024-03-15', checkOut: '2024-03-20' },
//             { id: 2, roomNumber: '102', guestName: 'Jane Smith', checkIn: '2024-03-18', checkOut: '2024-03-22' },
//             { id: 3, roomNumber: '103', guestName: 'raju padamani', checkIn: '2024-03-20', checkOut: '2024-03-10' },
//             { id: 4, roomNumber: '104', guestName: 'viru desai', checkIn: '2024-03-12', checkOut: '2024-03-25' },
//         ].filter(result =>
//             result.roomNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             result.guestName.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setSearchResults(fakeSearchResults);
//     };

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
//                 Room Booking Search
//             </h1>
//             <SearchForm
//                 searchQuery={searchQuery}
//                 onSearchChange={handleSearchChange}
//                 onSearchSubmit={handleSearchSubmit}
//             />
//             <SearchResults results={searchResults} />
//         </div>
//     );
// };

// const SearchForm = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
//     return (
//         <form onSubmit={onSearchSubmit} className="flex items-center justify-center mb-4">
//             <div className="relative w-full max-w-md">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                     </svg>
//                 </div>
//                 <input
//                     type="search"
//                     id="default-search"
//                     className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
//                     placeholder="Search Room Number or Guest Name"
//                     value={searchQuery}
//                     onChange={onSearchChange}
//                     required
//                 />
//                 <button type="submit" className="text-white absolute right-2.5 bottom-2 bg-main focus:outline-none font-medium rounded-sm text-sm px-10 py-2.5">Search</button>
//             </div>
//         </form>

//     );
// };

// const SearchResults = ({ results }) => {
//     if (results.length === 0) {
//         return <p className="text-center text-red-500">No bookings found.</p>;
//     }

//     return (
//         <div className="overflow-x-auto rounded-md shadow-md">
//             <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                     <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Room Number
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Guest Name
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Check-In Date
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Check-Out Date
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                     {results.map((result) => (
//                         <tr key={result.id}>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                 {result.roomNumber}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                 {result.guestName}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                 {result.checkIn}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                 {result.checkOut}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default RoomBooking;

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RoomBooking = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);  // State for loading indicator

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading
        // Simulate an API call with a 2-second delay
        setTimeout(() => {
            const fakeSearchResults = [
                { id: 1, roomNumber: '101', guestName: 'John Doe', checkIn: '2024-03-15', checkOut: '2024-03-20' },
                { id: 2, roomNumber: '102', guestName: 'Jane Smith', checkIn: '2024-03-18', checkOut: '2024-03-22' },
                { id: 3, roomNumber: '103', guestName: 'raju padamani', checkIn: '2024-03-20', checkOut: '2024-03-10' },
                { id: 4, roomNumber: '104', guestName: 'viru desai', checkIn: '2024-03-12', checkOut: '2024-03-25' },
                { id: 5, roomNumber: '105', guestName: 'yash sheliya', checkIn: '2024-03-11', checkOut: '2024-03-11' },
                { id: 6, roomNumber: '110', guestName: 'shahil magaroliya', checkIn: '2024-03-18', checkOut: '2024-03-18' },
            ].filter(result =>
                result.roomNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                result.guestName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(fakeSearchResults);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="lg:text-3xl text-2xl font-medium text-prime text-center mb-8">
                Room Booking Search
            </h1>
            <SearchForm
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onSearchSubmit={handleSearchSubmit}
            />
            <SearchResults results={searchResults} loading={loading} />
        </div>
    );
};

const SearchForm = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
    return (
        <form onSubmit={onSearchSubmit} className="flex items-center justify-center mb-4">
            <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
                    placeholder="Search Room Number"
                    value={searchQuery}
                    onChange={onSearchChange}
                    required
                />
                <button type="submit" className="text-white absolute right-2.5 bottom-2 bg-main focus:outline-none font-medium rounded-sm text-sm px-10 py-2.5">Search</button>
            </div>
        </form>

    );
};

const SearchResults = ({ results, loading }) => {
    if (loading) {
        return (
            <div className='flex justify-center'>
                <div className="loader lg:size-12 size-10 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
            </div>

        );
    }


    if (results.length === 0) {
        return (
            <div className="flex justify-center">  {/* Center the image */}
                <Image
                    src="/assets/image/reminders-concept-illustration.png"
                    width={400}
                    height={250}
                    alt="No Bookings Found"
                />
            </div>
        );
    }

    return (
        <div className="shadow-md overflow-x-auto">
            <table className="min-w-full rounded-2xl">
                <thead className="bg-gray-50 border border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs text-nowrap font-medium text-gray-700 uppercase tracking-wider">
                            Room Number
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs text-nowrap font-medium text-gray-700 uppercase tracking-wider">
                            Guest Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs text-nowrap font-medium text-gray-700 uppercase tracking-wider">
                            Check-In Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs text-nowrap font-medium text-gray-700 uppercase tracking-wider">
                            Check-Out Date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white border border-gray-300">
                    {results.map((result) => (
                        <tr key={result.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {result.roomNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {result.guestName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {result.checkIn}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {result.checkOut}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoomBooking;