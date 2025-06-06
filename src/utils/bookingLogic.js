// src/utils/bookingLogic.js

import { fetchAPI, submitAPI } from '../api';

// Initialize times for today's date
export const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0];
  return fetchAPI(today);
};

// Update times for selected date
export const updateTimes = (date) => {
  return fetchAPI(date);
};

// Handle form submission
export const submitForm = async (formData) => {
  try {
    const response = await submitAPI(formData);
    return response;
  } catch (error) {
    console.error('Form submission failed:', error);
    return false;
  }
};
