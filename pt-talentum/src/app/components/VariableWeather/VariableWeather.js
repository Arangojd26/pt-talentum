import React from "react";
import "./variableWeather.scss";
import iconTemp from "../../../assets/icons/temp.png";
import iconHum from "../../../assets/icons/humidity.png";
import iconWind from "../../../assets/icons/wind.png";

export const VariableWeather = ({ title }) => {
  const renderVariable = () => {
    let classname;
    let icon;
    let alt;
    let value;

    switch (title) {
      case "temp":
        classname = "o-row";
        icon = iconTemp;
        alt = "temp";
        value = 31;
        break;
      case "humidity":
        classname = "o-row";
        icon = iconHum;
        alt = "humidity";
        value = 80 + "%";
        break;
      case "wind":
        classname = "o-row o-last";
        icon = iconWind;
        alt = "wind";
        value = 1.0 + " m/s";
        break;

      default:
        break;
    }

    return (
      <div className={classname}>
        <img className="o-icon" src={icon} alt={alt} />
        <div>{title}</div>
        <div id="value">{value}</div>
      </div>
    );
  };

  return renderVariable();
};
