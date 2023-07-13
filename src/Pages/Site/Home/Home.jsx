import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div classNameName="container">
      <div classNameName="row">
        {data.map((country, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={country.coatOfArms.png}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">{country.swe}</p>
                <Link to="/detail">Detail</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
