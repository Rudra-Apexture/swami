
// ConformBooking.js
"use client";
import React, { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import BillingInformation from '../components/BillingInformation';
import { FaArrowRightToBracket, FaCalendar } from 'react-icons/fa6';
import { IoIosMan } from 'react-icons/io';

const ConformBooking = () => {
    const router = useRouter();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [progressWidth, setProgressWidth] = useState(0);
    const [bookingDetails, setBookingDetails] = useState({
        nights: 2,
        adults: 2,
        checkInDate: new Date('2025-03-14T12:00:00'),
        checkOutDate: new Date('2025-03-16T10:00:00'),
    });

    useEffect(() => {
        const storedRoom = localStorage.getItem('selectedRoom');
        if (storedRoom) {
            setSelectedRoom(JSON.parse(storedRoom));
        }

        const animationDuration = 1000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);
            setProgressWidth(progress * 100);

            if (elapsedTime < animationDuration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    const totalPrice = selectedRoom ? selectedRoom.price * bookingDetails.nights : 0;

    return (
        <div className="container mx-auto p-4">
            <h1 className="lg:text-3xl text-2xl text-center font-medium mb-10">Your Booking <span className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'>
                Book
            </span> </h1>


            <ProgressBar progressWidth={progressWidth} currentCheckpoint={3} />

            {selectedRoom ? (
                <>
                    <div className="bg-white rounded-lg mt-20">
                        {/* <div className="flex justify-between items-center mb-3 border border-gray-200 p-4 rounded-md">
                            <div className="flex items-center gap-3">
                                <FaCalendarAlt className="text-orange-500" />
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Nights</p>
                                    <p className="font-semibold">{bookingDetails.nights}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaUsers className="text-orange-500" />
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Adults</p>
                                    <p className="font-semibold">{bookingDetails.adults}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPlaneDeparture className="text-orange-500" />
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Check-in</p>
                                    <p className="font-semibold">
                                        {format(bookingDetails.checkInDate, 'EEEE, dd/MM/yyyy HH:mm')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPlaneDeparture className="text-orange-500" />
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Check-out</p>
                                    <p className="font-semibold">
                                        {format(bookingDetails.checkOutDate, 'EEEE, dd/MM/yyyy HH:mm')}
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
                            <div className="md:flex gap-8 grid grid-cols-2">
                                <div>
                                    <p className="text-sm text-prime font-medium">Check-in</p>
                                    <p className="flex items-center gap-2 mt-2">
                                        <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
                                        {format(bookingDetails.checkInDate, 'dd/MM/yyyy')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-prime font-medium">Check-out</p>
                                    <p className="flex items-center gap-2 mt-2">
                                        <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
                                        {format(bookingDetails.checkOutDate, 'dd/MM/yyyy')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-prime font-medium">Nights</p>
                                    <p className="flex items-center gap-2 mt-2">
                                        <FaCalendar className='lg:size-5 size-4 text-main' />
                                        {bookingDetails.nights}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-prime font-medium">Adults</p>
                                    <p className="flex items-center gap-2 mt-2">
                                        <IoIosMan className='lg:size-5 size-4 text-main' />
                                        {bookingDetails.adults}</p>
                                </div>
                            </div>
                            <button
                                className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md"
                                onClick={() => router.back()}
                            >
                                Change Dates
                            </button>
                        </div>


                        {/* Start Table  */}
                        <div className="overflow-x-auto mt-10">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-base text-nowrap font-medium text-gray-500 tracking-wider">
                                            {selectedRoom.name}
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Guests
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Nights
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-sm text-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                            Total Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap"></td>
                                        <td className="px-6 py-2 whitespace-nowrap">
                                            {bookingDetails.adults} Adults
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap">{bookingDetails.nights}</td>
                                        <td className="px-6 py-2 text-right whitespace-nowrap">₹{totalPrice.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* End Table  */}

                        {/* Total  */}
                        <div className="mt-5 py-6 flex items-center justify-between border-t border-gray-300">
                            <span className="text-lg font-semibold text-gray-900">TOTAL :</span>
                            <span className="lg:text-2xl text-base font-bold text-orange-500">₹{totalPrice.toLocaleString()}</span>
                        </div>
                        {/* Total */}
                    </div>

                    <div>
                        <BillingInformation />
                    </div>
                </>
            ) : (
                <p className="text-gray-500">No room selected.</p>
            )}
        </div>
    );
};

export default ConformBooking;
