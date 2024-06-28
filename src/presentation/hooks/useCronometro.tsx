import { useState, useRef } from 'react';

const useCronometro = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    if (running) {
      setRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const resetStopwatch = () => {
    setRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTime(0);
    setLaps([]);
  };

  const lapStopwatch = () => {
    if (running) {
      setLaps((prevLaps) => [...prevLaps, time]);
    }
  };

  return {
    time,
    running,
    laps,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
    lapStopwatch,
  };
};

export default useCronometro;


