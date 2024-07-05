import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePicker = ({
    initialDate = new Date(),
    onChange,
    disablePastDates = false,
    tileDisabledFunc
}) => {
    const [value, setValue] = useState(initialDate);

    const handleDateChange = (newValue) => {
        console.log('Selected date:', newValue);
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const defaultTileDisabled = ({ date, view }) => {
        if (disablePastDates && view === 'month') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return date < today;
        }
        return false;
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month' && value && date.toDateString() === value.toDateString()) {
            return 'selected-date';
        }
        return null;
    };

    return (
        <Calendar
            onChange={handleDateChange}
            value={value}
            tileDisabled={tileDisabledFunc || defaultTileDisabled}
            tileClassName={tileClassName}
        />
    );
};

export default DatePicker;
