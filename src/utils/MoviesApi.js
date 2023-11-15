export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";
export function getMoviesAll() {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}
