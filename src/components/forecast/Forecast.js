import React from "react";
import "./Forecast.css";
import { getDayByIndex } from "./../../util";

function Forecast({ id, icon, temp }) {
  return (
    <div className="forecast">
      <p>{id && getDayByIndex(id)}</p>
      <div
        className="forecast_weatherIcon"
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <div className="forecast__futureTemp">{temp}</div>
    </div>
  );
}

export default Forecast;
