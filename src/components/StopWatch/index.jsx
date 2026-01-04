import { useState, useRef, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timerId = useRef(null);
  let startTimerRef = useRef(0);

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    startTimerRef.current = Date.now() - time;
    if (timerId.current) {
      clearInterval(timerId.current);
      startTimerRef.current = null;
    }
    timerId.current = setInterval(() => {
      setTime(Date.now() - startTimerRef.current);
    }, 10);
  };

  const padStart = (val) => {
    const value = String(val);
    if (value.length < 2) {
      return `0${value}`;
    } else {
      return value;
    }
  };
  const stop = () => {
    setIsRunning(false);
    clearInterval(timerId.current);
    timerId.current = null;
    startTimerRef.current = null;
  };
  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);

  //timing: hh:mm:ss:mmm
  // 1 second = 1000 milliseconds
  // 1 minute = 60 seconds -> 60*1000 milliseconds
  // 1 hours = 60 minutes -> 60*60*1000 milliseconds
  const formatTime = (time) => {
    const hours = padStart(Math.floor(time / (60 * 60 * 1000))); // no of hours
    const minutes = padStart(Math.floor((time % (60 * 60 * 1000)) / (60 * 1000))); // no of minutes.
    const seconds = padStart(Math.floor((time % (60 * 1000)) / 1000)); // seconds
    const miliiseconds = padStart(Math.floor((time % 1000) / 10)); //we are takign 2 digits only

    return `${hours}:${minutes}:${seconds}:${miliiseconds}`;
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <p>HH:MM:SS:MMM : {formatTime(time)}</p>
      <button
        onClick={() => {
          if (isRunning) {
            stop();
          } else {
            start();
          }
        }}
      >
        Start/Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StopWatch;
