import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from './api';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};

function Main() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const response = submitAPI(formData);
    if (response === true) {
      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      const updatedBookings = [...existingBookings, formData];

      localStorage.setItem('bookings', JSON.stringify(updatedBookings));

      navigate('/confirmed');
    }
  };

  return (
    <main>
      <BookingPage
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;
