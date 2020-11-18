import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Detailed = (props) => {
  const [text, setText] = useState([]);

  useEffect(() => {
    if (props) {
      setText(props.detailled);
    }
  }, [props]);

  return (
    <div className="main-cont">
      {text &&
        text.map((items, i) => (
          <div className="details">
            <img src={items.image} />
            <h1>{items.ship_name}</h1>
            <p>{items.ship_id}</p>
          </div>
        ))}
    </div>
  );
};
export default Detailed;
