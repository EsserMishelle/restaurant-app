import sendRequest from "./send-request";

const BASE_URL = "/api/items";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  console.log(id);
  return sendRequest(`${BASE_URL}/${id}`);
}
