import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Details1 = (props) => {
  const [detail, setDetails] = useState([]);

  useEffect(() => {
    setDetails(props.detailsd);
  }, [props]);
  return (
    <div>
      {detail && (
        <div>
          <h1>{detail.ship_type}</h1>
        </div>
      )}
    </div>
  );
};
export default Details1;
