import BookingForm from './components/BookingForm';

function BookingPage({ availableTimes, dispatchTimes, submitForm }) {
  return (
    <section className="booking-page">
      <h1 className="booking-title">Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm} 
      />
    </section>
  );
}

export default BookingPage;
