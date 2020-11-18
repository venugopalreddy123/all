import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Styled.css";
import axios from "axios";
import Detailed from "./Detailed";
const Filter = (props) => {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState({});
  const [show, setShow] = useState(null);
  useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/ships").then((resp) => {
      setDetails(resp.data);
    });
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    const data = details.filter((items, i) =>
      items.ship_name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setShow(data);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Your's Ship Here"
        value={search}
        onChange={handleSearch}
        onKeyPress={handleEnter}
      />
      <button onClick={handleClick}>Search</button>
      <div>
        <Detailed detailled={show} />
      </div>
    </div>
  );
};
export default Filter;
