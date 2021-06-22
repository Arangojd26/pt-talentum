import React from "react";
import { CardWeather } from "../components";
import useDataWeather from "../hooks/useDataWeather";
import "./wheather.view.scss";

const Weather = () => {
  const [dataWeather, error] = useDataWeather();

  return (
    <div className="o-gradient">
      {error === null && dataWeather ? (
        <CardWeather
          city={dataWeather.name}
          date={dataWeather.date}
          dataWeather={{
            temp: dataWeather.main.temp,
            humidity: dataWeather.main.humidity,
            wind: dataWeather.wind.speed,
          }}
          status={dataWeather.weather[0]["main"]}
        />
      ) : (
        <p>Loading fetching: {error}</p>
      )}
    </div>
  );
};

export default Weather;
