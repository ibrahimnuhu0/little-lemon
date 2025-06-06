import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the "Choose date" label', () => {
  render(
    <BookingForm
      availableTimes={['17:00', '18:00']}
      dispatchTimes={() => {}}
    />
  );

  const labelElement = screen.getByText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});
