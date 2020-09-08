import React, { useState } from "react";
import "./Search.css";

function Search({ searchCity }) {
  const [input, setInput] = useState("");

  const searchForecast = (event) => {
    event.preventDefault();
    setInput("");
    searchCity(input);
  };
  return (
    <div className="search">
      <form>
        <input
          placeholder="Enter City"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="search__input"
        />
        <button
          type="submit"
          onClick={searchForecast}
          className="search__button"
        >
          Get Forecast
        </button>
      </form>
    </div>
  );
}

export default Search;
