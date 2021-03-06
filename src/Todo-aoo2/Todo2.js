import React from "react";
import { useState } from "react";
const Todo2 = (props) => {
  const [click, setClick] = useState({ value: "" });
  const [store, setStore] = useState([]);

  const handleText = (e) => {
    setClick({ value: e.target.value });
  };
  const handleClick = () => {
    const me = click;
    if (me !== "") {
      const newItems = [...store, me];
      setStore(newItems);
      setClick({
        value: "",
      });
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Text Here"
        value={click.value}
        onChange={handleText}
      />
      <button onClick={handleClick}>ADD</button>
      {store && store.map((items, i) => <p>{items.value}</p>)}
    </div>
  );
};
export default Todo2;
