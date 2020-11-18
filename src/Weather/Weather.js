import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Display from "./Display";
const Weather = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState([]);
  const [click, setClick] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${click.citi},${click.countri}&appid=720bcfbe0096d6d844b068bfb2fa8190`
      )
      .then((resp) => setWeather(resp.data));
  }, [click]);

  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleWeather = () => {
    const me = {};
    me.citi = city;
    me.countri = country;
    setClick(me);
  };

  return (
    <div>
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
      <button onClick={handleWeather}>Weather</button>
      <div>
        <Display display={weather} />
      </div>
    </div>
  );
};
export default Weather;
