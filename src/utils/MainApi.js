export const BASE_URL = "https://api.movies.daria.nomoredomainsrocks.ru";
// export const BASE_URL = "http://localhost:3000";

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`${res.status} - ${res.statusText}`);
  }
  return res.json();
}

export const registration = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => getResponseData(res));
};
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => getResponseData(res));
};
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getResponseData(res));
};
export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getResponseData(res));
};
export const setUserInfo = (info, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: info.name,
      email: info.email,
    }),
  }).then((res) => getResponseData(res));
};

export function getMovies(token) {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getResponseData(res));
}
export const addMovie = (info, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: info.country,
      director: info.director,
      duration: info.duration,
      year: info.year,
      description: info.description,
      image: `https://api.nomoreparties.co${info.image.url}`,
      trailerLink: info.trailerLink,
      thumbnail: `https://api.nomoreparties.co${info.image.formats.thumbnail.url}`,
      movieId: info.id,
      nameRU: info.nameRU,
      nameEN: info.nameEN,
    }),
  }).then((res) => getResponseData(res));
};
export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getResponseData(res));
};

