import React from "react";
import { VariableWeather } from "..";
import { TEMP, HUMIDITY, WIND } from "../../consts";
import "./cardWeather.scss";

const CardWeather = ({ city, date, dataWeather, status }) => {
  const { temp, humidity, wind } = dataWeather;

  const tempInCelsius = () => temp - 273.15;

  return (
    <div className="o-card">
      <div className="o-info-city">
        <div className="o-city-background">
          <h2>{city}</h2>
          <p>{date}</p>
          <h1>{tempInCelsius()}°</h1>
          <div className="o-container-status">
            <h3>Clima /</h3>
            <div>{status}</div>
          </div>
        </div>
      </div>
      <div className="o-variables-city">
        <div className="o-table">
          <VariableWeather title={TEMP} result={tempInCelsius()} />
          <VariableWeather title={HUMIDITY} result={humidity} />
          <VariableWeather title={WIND} result={wind} />
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
