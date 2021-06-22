import { useMemo } from "react";
import useApiResult from "./useApiResult";
import { getDataWeather } from "../consts/request";

const useDataWeather = () => {
  const request = useMemo(() => getDataWeather(), []);
  return useApiResult(request);
};

export default useDataWeather;
