import { initializeTimes, updateTimes } from './Main';
import * as api from './api'; 

jest.mock('./api');

describe('Booking Times Logic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('initializeTimes returns mocked available times from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    api.fetchAPI.mockReturnValue(mockTimes); 

    const result = initializeTimes();
    expect(api.fetchAPI).toHaveBeenCalled(); 
    expect(result).toEqual(mockTimes);       
  });

  test('updateTimes returns new times based on date using fetchAPI', () => {
    const mockTimes = ['18:00', '19:00'];
    const action = { type: 'update', date: '2025-06-10' };
    api.fetchAPI.mockReturnValue(mockTimes);

    const result = updateTimes([], action);
    expect(api.fetchAPI).toHaveBeenCalledWith(new Date('2025-06-10')); 
    expect(result).toEqual(mockTimes);
  });
});
