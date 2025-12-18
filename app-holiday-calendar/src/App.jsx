import React, { useState, useEffect } from 'react';
import { fetchHolidays } from './services/api';
import Calendar from './components/Calendar';
import './styles/main.css';

function App() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(2026);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchHolidays(year)
      .then(data => {
        setHolidays(data);
        setError(null);
      })
      .catch(err => setError('Failed to load holidays'))
      .finally(() => setLoading(false));
  }, [year]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          <span className="title-accent">US Public Holidays</span> {year}
        </h1>
        <p className="subtitle">Official public holidays sourced from Nager.Date API</p>
      </header>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading Holidays...</p>
        </div>
      ) : (
        <Calendar year={year} holidays={holidays} />
      )}
    </div>
  );
}

export default App;
