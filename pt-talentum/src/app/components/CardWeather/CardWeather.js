import React from "react";
import { VariableWeather } from "..";
import { TEMP, HUMIDITY, WIND } from "../../consts";
import "./cardWeather.scss";

export const CardWeather = ({ city, date, temp, status }) => {
  return (
    <div className="o-card">
      <div className="o-info-city">
        <div className="o-city-background">
          <h2>{city}</h2>
          <p>{date}</p>
          <h1>{temp}</h1>
          <div className="o-container-status">
            <h3>Clima /</h3>
            <div>{status}</div>
          </div>
        </div>
      </div>
      <div className="o-variables-city">
        <div className="o-table">
          <VariableWeather title={TEMP} />
          <VariableWeather title={HUMIDITY} />
          <VariableWeather title={WIND} />
        </div>
      </div>
    </div>
  );
};
