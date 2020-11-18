import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Display2 from "./Display2";
const Weather2 = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});
  const [click, setClick] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${click.citii},${click.cantri}&appid=720bcfbe0096d6d844b068bfb2fa8190`
    ).then((resp) => {
      setWeather(resp.data);
    });
  }, [click]);

  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleClick = () => {
    const me = {};
    me.citii = city;
    me.cantri = country;
    setClick(me);
    setShow(true);
  };
  return (
    <div>
      {!show ? (
        <div>
          <h1>Get Weather Data</h1>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCity}
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <button onClick={handleClick}>Weather</button>
        </div>
      ) : (
        <div>
          <Display2 displays={weather} />
        </div>
      )}
    </div>
  );
};
export default Weather2;
