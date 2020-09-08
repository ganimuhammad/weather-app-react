import cloudy from "./images/cloudy.png";
import partlycloudy from "./images/partlycloudy.png";
import rain from "./images/rain.png";
import snow from "./images/snow.png";
import fog from "./images/fog.png";
import storm from "./images/storms.png";
import sunny from "./images/sunny.png";
import Moment from "react-moment";
import React from "react";

const getDailyForecastIcon = (weatherCondition) => {
  let imageIcon = null;

  switch (weatherCondition) {
    case "Clouds":
      imageIcon = cloudy;
      break;
    case "Rain":
      imageIcon = rain;
      break;
    case "Drizzle":
      imageIcon = rain;
      break;
    case "Thunderstorm":
      imageIcon = storm;
      break;
    case "Snow":
      imageIcon = snow;
      break;
    case "Atmosphere":
      imageIcon = fog;
      break;
    case "Clear":
      imageIcon = sunny;
      break;

    default:
      imageIcon = partlycloudy;
      break;
  }

  return imageIcon;
};

export const sanitizeData = (data) => {
  return data.list
    .filter((item, index) => index % 8 === 0)
    .map((forecast, index) => ({
      id: "day_" + index,
      date: forecast.dt_txt.split(" ")[0],
      dailyIcon: getDailyForecastIcon(forecast.weather[0].main),
      temperatureNow: roundTemperature(forecast.main.temp),
      temperatureNowHigh: roundTemperature(forecast.main.temp_max),
      windSpeed: forecast.wind.speed,
      description: forecast.weather[0].description,
    }));
};

const roundTemperature = (temp) => {
  return Math.round(temp) + "°";
};

export const getDayByIndex = (index) => {
  const dateToday = new Date();
  let dayStr = <Moment></Moment>;

  switch (parseInt(index.split("_")[1])) {
    case 0:
      dayStr = "Today";
      break;
    case 1:
      dayStr = (
        <Moment add={{ days: 1 }} format="ddd">
          {dateToday}
        </Moment>
      );
      break;
    case 2:
      dayStr = (
        <Moment add={{ days: 2 }} format="ddd">
          {dateToday}
        </Moment>
      );
      break;
    case 3:
      dayStr = (
        <Moment add={{ days: 3 }} format="ddd">
          {dateToday}
        </Moment>
      );
      break;
    case 4:
      dayStr = (
        <Moment add={{ days: 4 }} format="ddd">
          {dateToday}
        </Moment>
      );
      break;
  }

  return dayStr;
};
