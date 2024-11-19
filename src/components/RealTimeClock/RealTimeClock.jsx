import React, { useState, useEffect } from "react";
import moment from "moment";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("LTS"));

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setCurrentTime(moment().format("LTS"));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="   p-2 rounded-lg bg-blue-800 text-white lg:shadow-lg">
      {currentTime}
    </p>
  );
};

export default RealTimeClock;
