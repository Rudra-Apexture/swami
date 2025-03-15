// DateInfoCard.jsx (Reusable Component)
import React from 'react';
import { FaArrowRightToBracket, FaCalendar } from 'react-icons/fa';
import { IoIosMan } from 'react-icons/io';

const DateInfoCard = ({ formattedCheckInDate, formattedCheckOutDate, bookingData, onEditDates }) => {
    return (
        <div className="bg-white flex lg:justify-between items-center p-4 mt-14 rounded-lg border border-gray-100 shadow-md">
            <div className="md:flex gap-8 grid grid-cols-2">
                <div>
                    <p className="text-sm text-prime font-medium">Check-in</p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
                        {formattedCheckInDate}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-prime font-medium">Check-out</p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaArrowRightToBracket className='lg:size-5 size-4 text-main' />
                        {formattedCheckOutDate}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-prime font-medium">Nights</p>
                    <p className="flex items-center gap-2 mt-2">
                        <FaCalendar className='lg:size-5 size-4 text-main' />
                        {bookingData.numberOfNights}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-prime font-medium">Adults</p>
                    <p className="flex items-center gap-2 mt-2">
                        <IoIosMan className='lg:size-5 size-4 text-main' />
                        {bookingData.totalAdults}
                    </p>
                </div>
            </div>
            <button
                className="px-4 py-2 hidden md:block bg-orange-500 text-white rounded-md cursor-pointer"
                onClick={onEditDates}
            >
                Change Dates
            </button>
        </div>
    );
};

export default DateInfoCard;

