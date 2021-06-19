import React from "react";
import { VariableWeather } from "..";
import "./cardWeather.scss";

export const CardWeather = () => {
  return (
    <div className="o-card">
      <div className="o-info-city">
        <div className="o-city-background">
          <h2>SANTIAGO DE CALI</h2>
          <p>16 Abril 2021</p>
          <h1>31°</h1>
        </div>
      </div>
      <div className="o-variables-city">
        <div className="o-table">
          <VariableWeather title={"temp"} />
          <VariableWeather title={"humidity"} />
          <VariableWeather title={"wind"} />
        </div>
      </div>
    </div>
  );
};
