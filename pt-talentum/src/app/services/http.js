export function get(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
