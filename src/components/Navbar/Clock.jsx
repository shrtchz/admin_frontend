import React, { useState, useEffect } from "react";
import '../../styles/clock.css'
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: false,
  });

  return <div className="clock col-md-5 col-1 d-flex justify-content-center px-sm-0 px-3" style={{color:'#fff'}}>{formatter.format(time)}</div>;
}

export default Clock;
