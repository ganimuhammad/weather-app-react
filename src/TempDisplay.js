import React from "react";
import "./TempDisplay.css";
import Forecast from "./Forecast";
import Moment from "react-moment";

function TempDisplay({ city, forecastData }) {
  return (
    <>
      <div className="tempDisplay">
        <div className="tempDisplay__today">
          <div className="tempDisplay__inlineDate">
            <p>
              <Moment format="MMMM Do[,] YYYY">
                {forecastData[0] && forecastData[0].date}
              </Moment>
            </p>
            <h2>{city}</h2>
          </div>
          <div className="tempDisplay__todayDescribe">
            <h1>{forecastData[0] && forecastData[0].temperatureNow}</h1>
            <div className="tempDisplay__tempDescription">
              <h2>{forecastData[0] && forecastData[0].description}</h2>
              <p>
                The high today will be{" "}
                {forecastData[0] && forecastData[0].temperatureNowHigh} with
                winds speed {forecastData[0] && forecastData[0].windSpeed} mph.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tempDisplay__future">
        {forecastData.map((forecast) => (
          <Forecast
            id={forecast.id}
            icon={forecast.dailyIcon}
            temp={forecast.temperatureNow}
          />
        ))}
      </div>
    </>
  );
}

export default TempDisplay;
