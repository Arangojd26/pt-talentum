export const BASE_URL = "http://localhost:8080/api/weather";

const createUrl = (base, path) => `${base}${path}`;

export const getDataWeather = () => [createUrl(BASE_URL, `/key/${0}`)];
