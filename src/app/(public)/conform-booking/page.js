
// ConformBooking.js
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProgressBar from '../../components/ProgressBar';
import { format } from 'date-fns';
import { FaPlaneDeparture, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import BillingInformation from '../components/BillingInformation';

const ConformBooking = () => {
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
            <h1 className="text-2xl font-semibold mb-4 text-center">Confirm Your Booking</h1>
            <ProgressBar progressWidth={progressWidth} currentCheckpoint={3} />

            {selectedRoom ? (
                <>
                    <div className="bg-white rounded-lg mt-20">
                        <h2 className="text-xl font-semibold mb-3">Booking Summary</h2>

                        {/* Booking Details Summary  */}
                        <div className="flex justify-between items-center mb-3 border border-gray-200 p-4 rounded-md">
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
                        </div>
                        {/* Booking Details Summary end  */}

                        {/* Start Table  */}
                        <div className="overflow-x-auto mt-10">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {selectedRoom.name}
                                            <br />
                                            Standard Rate
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Guests
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nights
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {bookingDetails.adults} Adults
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{bookingDetails.nights}</td>
                                        <td className="px-6 py-4 text-right whitespace-nowrap">₹{totalPrice.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* End Table  */}

                        {/* Total  */}
                        <div className="mt-5 py-6 flex items-center justify-between border-t border-gray-300">
                            <span className="text-lg font-semibold text-gray-700">TOTAL</span>
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
