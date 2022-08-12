import Utils from "../utilityLibrary/dev/utils";
import Config from "../configs/index";

function fetchFrom(url, options, auth, token) {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Device-Id": window.localStorage.getItem("device_id"),
  };

  // Setting Authorization header
  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (auth) {
    headers.Authorization = "Bearer " + Config.ACCESS_TOKEN;
  } else {
    headers["x-access-key"] = `Bearer ${Config.API_KEY}`;

    if (token) {
      headers.Authorization = "Bearer " + token;
    } else if (Utils.loggedIn()) {
      headers.Authorization = "Bearer " + Utils.getToken();
    } else {
      Utils.logout();
    }
  }

  return fetch(url, {
    headers,
    ...options,
  })
    .then((res) => Utils.handleResponse(res))
    .then((response) => {
      return response;
    });
}
export const userService = {
  fetchFrom
};
