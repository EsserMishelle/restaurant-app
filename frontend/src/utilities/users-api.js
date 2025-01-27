import sendRequest from "./send-request";

// const BASE_URL = "https://restaurant-app-nnv7.onrender.com/api/users";
const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
