const BASE_URL = "https://coding-challenge-api.aerolab.co/";
const PERSONAL_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMwMzYzNjdlNzE4NzAwMjBlMzhlZmIiLCJpYXQiOjE2MTM3NzIzNDJ9.qBWzR8anJgSzSk2qjE4lxBp1pwrSG9ddnVdNcUf1gS8";

const HEADER = {
  "Content-Type": "application/json",
  Accept: "appliaction/json",
  Authorization: `Bearer ${PERSONAL_TOKEN}`,
};

export const api = {
  getUser: async () => {
    return fetch(BASE_URL + "user/me", {
      method: "GET",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
  getProducts: async () => {
    return fetch(BASE_URL + "products", {
      method: "GET",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
};
