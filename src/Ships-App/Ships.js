import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Style.css";
import axios from "axios";
import Details1 from "./Details";
const Ships = (props) => {
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/ships").then((resp) => {
      setDetails(resp.data);
    });
  }, []);
  const handleDetails = () => {
    setShow(true);
  };
  return (
    <div>
      {!show ? (
        <div>
          {details &&
            details.map((items, i) => (
              <div className="card">
                <img
                  src={
                    items.image
                      ? items.image
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCBcbPvO_e_QcqH5xrQrg47I6cwIlJGNgtLQ&usqp=CAU"
                  }
                  onClick={() => handleDetails()}
                />
                <h1>{items.ship_name}</h1>
                <p>{items.ship_id}</p>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <Details1 detailsd={details} />
        </div>
      )}
    </div>
  );
};
export default Ships;
