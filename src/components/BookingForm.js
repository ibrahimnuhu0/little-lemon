import { useState } from 'react';
import '../styles/BookingForm.css';

function BookingForm({ availableTimes, dispatchTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatchTimes({ date: selectedDate });
    setTime('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { date, time, guests, occasion };
    submitForm(bookingData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking Form">
      <fieldset className="form-grid">
        <legend>Booking Information</legend>

        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-required="true"
          >
            <option value="">-- Select Time --</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            min="1"
            max="10"
            required
            aria-required="true"
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
            aria-required="true"
          >
            <option value="">-- Select Occasion --</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div className="form-group full-width">
          <button type="submit" aria-label="On Click">Make Your Reservation</button>
        </div>
      </fieldset>
    </form>
  );
}

export default BookingForm;
