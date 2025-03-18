// components/AvailabilityCalendar.js

import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isBefore, isAfter, getDay } from 'date-fns';

const AvailabilityCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedRange, setSelectedRange] = useState({ start: null, end: null });
    const [isSelecting, setIsSelecting] = useState(false);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth),
    });

    const isDateAvailable = (date) => {
        // Replace this with your actual availability check logic
        // This is just a placeholder.
        const today = new Date();
        return !isBefore(date, today); // Disable past dates.  Example: only available dates in the future.
    };

    const handleDateClick = (day) => {
        if (!isDateAvailable(day)) return; // Don't allow selection of unavailable dates.

        if (!selectedRange.start) {
            setSelectedRange({ start: day, end: null });
            setIsSelecting(true);
        } else if (isSelecting && isAfter(day, selectedRange.start)) {
            setSelectedRange({ ...selectedRange, end: day });
            setIsSelecting(false);
        } else {
            setSelectedRange({ start: day, end: null }); // Reset if clicking before start date.
            setIsSelecting(true);
        }
    };

    const isDateInSelectedRange = (date) => {
        return selectedRange.start && selectedRange.end &&
            (isAfter(date, selectedRange.start) && isBefore(date, selectedRange.end) ||
                isSameDay(date, selectedRange.start) ||
                isSameDay(date, selectedRange.end));
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const renderMonth = (month) => {
        const days = eachDayOfInterval({
            start: startOfMonth(month),
            end: endOfMonth(month),
        });

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return (
            <div className="calendar-month">
                <h3>{format(month, 'MMMM yyyy')}</h3>
                <div className="calendar-grid">
                    {weekdays.map((weekday, index) => (
                        <div key={index} className="calendar-header">
                            {weekday}
                        </div>
                    ))}
                    {days.map((day) => (
                        <div
                            key={day}
                            className={`calendar-day
                                ${!isDateAvailable(day) ? 'unavailable' : ''}
                                ${isSameDay(day, selectedRange.start) ? 'selected-start' : ''}
                                ${isSameDay(day, selectedRange.end) ? 'selected-end' : ''}
                                ${isDateInSelectedRange(day) ? 'selected-range' : ''}
                            `}
                            onClick={() => handleDateClick(day)}
                        >
                            {format(day, 'd')}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const today = new Date();
    const nextMonth = addMonths(today, 1);
    const nextTwoMonth = addMonths(today, 2);

    return (
        <div className="availability-calendar">
            <div className="calendar-header">
                <button onClick={goToPreviousMonth}>Previous</button>
                <button onClick={goToNextMonth}>Next</button>
            </div>

            <div className='flex gap-4'>
                {renderMonth(currentMonth)}
                {renderMonth(addMonths(currentMonth, 1))}
                {renderMonth(addMonths(currentMonth, 2))}
            </div>

            {selectedRange.start && selectedRange.end && (
                <p>
                    Selected Range: {format(selectedRange.start, 'MM/dd/yyyy')} - {format(selectedRange.end, 'MM/dd/yyyy')}
                </p>
            )}
        </div>
    );
};

export default AvailabilityCalendar;

