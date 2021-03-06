import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Display2 = (props) => {
  const [display, setDisplay] = useState({});
  useEffect(() => {
    if (props) {
      setDisplay(props.displays);
    }
  }, [props]);
  return (
    <div>
      <p>{display.name}</p>
      <p>{display.sys && display.sys.country}</p>
      <p>{display.main && display.main.temp}</p>
      <p>{display.weather && display.weather[0].description}</p>
    </div>
  );
};
export default Display2;
