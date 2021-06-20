import React from "react";
import { CardWeather } from "../components";
import "./wheather.view.scss";

const Weather = () => {
  return (
    <div className="o-gradient">
      <CardWeather
        city={"SANTIAGO DE CALI"}
        date={"16 Abril 2021"}
        temp={"31°"}
        status={"Soleado"}
      />
    </div>
  );
};

export default Weather;
