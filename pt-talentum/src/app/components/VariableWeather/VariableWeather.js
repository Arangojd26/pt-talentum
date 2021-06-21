import React from "react";
import "./variableWeather.scss";
import iconTemp from "../../../assets/icons/temp.png";
import iconHum from "../../../assets/icons/humidity.png";
import iconWind from "../../../assets/icons/wind.png";
import { TEMP, HUMIDITY, WIND } from "../../consts";

const VariableWeather = ({ title, result }) => {
  const renderVariable = () => {
    let classname;
    let icon;
    let alt;
    let value;

    switch (title) {
      case TEMP:
        classname = "o-row";
        icon = iconTemp;
        alt = "temp";
        value = result;
        break;
      case HUMIDITY:
        classname = "o-row";
        icon = iconHum;
        alt = "humidity";
        value = result + "%";
        break;
      case WIND:
        classname = "o-row o-last";
        icon = iconWind;
        alt = "wind";
        value = result + " m/s";
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

export default VariableWeather;
