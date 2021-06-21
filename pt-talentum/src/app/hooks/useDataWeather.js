import { useState, useEffect } from "react";

const useDataWeather = () => {
  const [dataWeather, setDataWeather] = useState(null);

  useEffect(() => {
    async function getDataWeather() {
      const data = await fetch("http://localhost:8080/api/weather/key/1");
      const values = await data.json();
      convertTemp(values);
    }
    getDataWeather();
  }, []);

  const convertTemp = (values) => {
    const {
      main: { temp },
    } = values;
    const celsius = temp - 273.15;

    const dataConverted = {
      ...values,
      main: { ...values.main, temp: celsius },
    };
    setDataWeather(dataConverted);
  };

  return dataWeather;
};

export default useDataWeather;
