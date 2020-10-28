import React, { useEffect, useState } from "react";
import "./App.css";
import { sanitizeData } from "./util";
import Search from "./components/search/Search";
import TempDisplay from "./components/tempDisplay/TempDisplay";

function App() {
  const apiKey = "b33e76bb3e09f87c85b71c157f5d9463";
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState("");

  const [inputCity, setInputCity] = useState("Kerala");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&units=metric&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          const forecasts = sanitizeData(data);
          setForecastData(forecasts);
          setCity(data.city.name);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getCountriesData();
  }, [inputCity]);

  const onCitySearch = (input) => {
    setInputCity(input);
  };

  return (
    <div className="app">
      <Search searchCity={onCitySearch} />
      <TempDisplay city={city} forecastData={forecastData} />
    </div>
  );
}

export default App;
