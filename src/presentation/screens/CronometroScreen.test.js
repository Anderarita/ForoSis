import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import CronometroScreen from '../screens/CronometroScreen';
import useCronometro from '../hooks/useCronometro';

jest.mock('../hooks/useCronometro');

describe('CronometroScreen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    useCronometro.mockReturnValue({
      time: 0,
      running: false,
      laps: [],
      startStopwatch: jest.fn(),
      stopStopwatch: jest.fn(),
      resetStopwatch: jest.fn(),
      lapStopwatch: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('should render the cronometro screen', () => {
    const { getByText } = render(<CronometroScreen />);

    expect(getByText('00:00:00')).toBeTruthy();
    expect(getByText('Start')).toBeTruthy();
    expect(getByText('Stop')).toBeTruthy();
    expect(getByText('Reset')).toBeTruthy();
    expect(getByText('Lap')).toBeTruthy();
    expect(getByText('Vueltas')).toBeTruthy();
  }, 10000); // Aumenta el timeout a 10 segundos

  test('should start the stopwatch when Start button is pressed', () => {
    const { getByText } = render(<CronometroScreen />);
    const startButton = getByText('Start');

    fireEvent.press(startButton);
    expect(useCronometro().startStopwatch).toHaveBeenCalled();
  }, 10000); // Aumenta el timeout a 10 segundos

  test('should stop the stopwatch when Stop button is pressed', () => {
    useCronometro.mockReturnValue({
      time: 0,
      running: true,
      laps: [],
      startStopwatch: jest.fn(),
      stopStopwatch: jest.fn(),
      resetStopwatch: jest.fn(),
      lapStopwatch: jest.fn(),
    });

    const { getByText } = render(<CronometroScreen />);
    const stopButton = getByText('Stop');

    fireEvent.press(stopButton);
    expect(useCronometro().stopStopwatch).toHaveBeenCalled();
  }, 10000); // Aumenta el timeout a 10 segundos

  test('should reset the stopwatch when Reset button is pressed', () => {
    const { getByText } = render(<CronometroScreen />);
    const resetButton = getByText('Reset');

    fireEvent.press(resetButton);
    expect(useCronometro().resetStopwatch).toHaveBeenCalled();
  }, 10000); // Aumenta el timeout a 10 segundos

  test('should record a lap when Lap button is pressed', () => {
    useCronometro.mockReturnValue({
      time: 0,
      running: true,
      laps: [],
      startStopwatch: jest.fn(),
      stopStopwatch: jest.fn(),
      resetStopwatch: jest.fn(),
      lapStopwatch: jest.fn(),
    });

    const { getByText } = render(<CronometroScreen />);
    const lapButton = getByText('Lap');

    fireEvent.press(lapButton);
    expect(useCronometro().lapStopwatch).toHaveBeenCalled();
  }, 10000); // Aumenta el timeout a 10 segundos

  test('should display laps in the list', () => {
    useCronometro.mockReturnValue({
      time: 0,
      running: true,
      laps: [30, 60],
      startStopwatch: jest.fn(),
      stopStopwatch: jest.fn(),
      resetStopwatch: jest.fn(),
      lapStopwatch: jest.fn(),
    });

    const { getByText } = render(<CronometroScreen />);

    expect(getByText('Vuelta 1')).toBeTruthy();
    expect(getByText('00:00:30')).toBeTruthy();
    expect(getByText('Vuelta 2')).toBeTruthy();
    expect(getByText('00:01:00')).toBeTruthy();
  }, 10000); // Aumenta el timeout a 10 segundos
});


