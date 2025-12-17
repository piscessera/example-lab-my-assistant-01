import React from 'react';
import MonthView from './MonthView';
import PropTypes from 'prop-types';
import '../styles/Calendar.css';

const Calendar = ({ year, holidays }) => {
    const months = Array.from({ length: 12 }, (_, i) => i);

    return (
        <div className="calendar">
            {months.map(month => (
                <MonthView
                    key={month}
                    year={year}
                    month={month}
                    holidays={holidays.filter(h => {
                        // Check if holiday date falls in this month
                        // h.date is YYYY-MM-DD
                        const hDate = new Date(h.date);
                        // We must handle timezone offset, but nager dates are simple strings.
                        // Parsing YYYY-MM-DDT00:00:00 might assume local.
                        // Safer to parse parts
                        const parts = h.date.split('-');
                        const hYear = parseInt(parts[0], 10);
                        const hMonth = parseInt(parts[1], 10) - 1; // 0-indexed
                        return hYear === year && hMonth === month;
                    })}
                />
            ))}
        </div>
    );
};
Calendar.propTypes = {
    year: PropTypes.number.isRequired,
    holidays: PropTypes.array.isRequired
};
export default Calendar;
