import React from "react";
import { CardWeather } from "../components";
import useDataWeather from "../hooks/useDataWeather";
import "./wheather.view.scss";

const Weather = () => {
  const dataWeather = useDataWeather();

  // const [valueVariables, setValueVariables] = React.useState({});

  React.useEffect(() => {
    console.log(dataWeather);
  }, [dataWeather]);

  // const getDataWeather = async () => {
  //   const data = await fetch("http://localhost:8080/api/weather/key/1");
  //   const values = await data.json();
  //   setDataWeather(values);
  // };

  // // const {
  // //   name,
  // //   date,
  // //   main: { temp, humidity },
  // //   wind: { speed },
  // //   weather: [{main}]
  // // } = dataWeather;

  // const convertData = () => {

  // }

  return (
    <div className="o-gradient">
      {dataWeather && (
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
      )}
    </div>
  );
};

export default Weather;
