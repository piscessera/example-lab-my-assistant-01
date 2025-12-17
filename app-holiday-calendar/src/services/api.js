const BASE_URL = 'https://date.nager.at/api/v3/PublicHolidays';

/**
 * Fetches public holidays for a given year and country.
 * @param {number} year 
 * @param {string} countryCode 
 * @returns {Promise<Array>} List of holidays
 */
export const fetchHolidays = async (year = 2026, countryCode = 'US') => {
    try {
        const response = await fetch(`${BASE_URL}/${year}/${countryCode}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch holidays: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
};
