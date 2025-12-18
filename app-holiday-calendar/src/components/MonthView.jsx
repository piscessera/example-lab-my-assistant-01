import React from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay
} from 'date-fns';
import PropTypes from 'prop-types';
import '../styles/MonthView.css';

const MonthView = ({ year, month, holidays }) => {
    const date = new Date(year, month);
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = eachDayOfInterval({
        start: startDate,
        end: endDate
    });

    const getHoliday = (day) => {
        // Note: timezone issues can be tricky. API returns YYYY-MM-DD.
        // We format local date to string to compare string-to-string.
        return holidays.find(h => h.date === format(day, 'yyyy-MM-dd'));
    };

    return (
        <div className="month-view">
            <h3 className="month-title">{format(date, 'MMMM')}</h3>
            <div className="days-grid">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <div key={d} className="day-header">{d}</div>
                ))}
                {days.map(day => {
                    const holiday = getHoliday(day);
                    const isCurrentMonth = isSameMonth(day, monthStart);
                    const isToday = isSameDay(day, new Date()); // Won't happen for 2026 usually

                    return (
                        <div
                            key={day.toString()}
                            className={`day-cell ${!isCurrentMonth ? 'other-month' : ''} ${holiday ? 'has-holiday' : ''}`}
                            title={holiday ? holiday.name : ''} // Use name not localName for US English
                        >
                            <div className="day-content">
                                <span className="day-number">{format(day, 'd')}</span>
                                {holiday && <div className="holiday-indicator" />}
                            </div>
                            {holiday && (
                                <div className="tooltip">
                                    <div className="tooltip-name">{holiday.name}</div>
                                    <div className="tooltip-type">{holiday.types.join(', ')}</div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

MonthView.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    holidays: PropTypes.array
};

MonthView.defaultProps = {
    holidays: []
};

export default MonthView;
