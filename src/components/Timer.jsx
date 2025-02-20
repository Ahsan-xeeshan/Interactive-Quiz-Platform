import React, { useEffect, useState } from "react";

const Timer = ({ initialTime = 30, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // If time is up, invoke the callback and exit early.
    if (time <= 0) {
      onTimeUp();
      return;
    }

    // Decrement time every 1 second.
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the timer when the component unmounts or time changes.
    return () => clearInterval(timerId);
  }, [time, onTimeUp]);

  return (
    <div className="absolute right-2 bottom-2 w-12 h-12 rounded-full bg-purple-500">
      {/* Border Animation */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(rgb(107, 33, 168) ${
            ((30 - time) / 30) * 360
          }deg, transparent 0deg)`,
        }}
      ></div>

      {/* Inner Content */}
      <div className="w-full h-full flex items-center justify-center rounded-full text-white text-xl font-bold relative">
        {time}
      </div>
    </div>
  );
};

export default Timer;
