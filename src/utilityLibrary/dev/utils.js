import decode from "jwt-decode";
import moment from "moment";

const Utils = {
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = Utils.getToken(); // Getting token from localstorage

    return !!token && !Utils.isTokenExpired(token); // handwaiving here
  },
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(`admin`);
  },
  formatDateToText(date){
    return moment(date).format('LLLL');
  },
  formatDate(time) {
    return moment(time)
      .utc()
      .format("DD-MM-YYYY");
  },
  handleResponse(response) {
    //console.log(response);
    return response.text().then((text) => {
      let data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          Utils.logout();
        }

        data.status = response.status;
        const error = (data && data) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  },
  formatCurrency(amount, divider = ",") {
    if (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, divider);
    } else {
      return amount;
    }
  },
  getUser() {
    let user = JSON.parse(localStorage.getItem(`admin`));
    return Utils.loggedIn ? user : {};
  },
  getToken() {
    // Retrieves the user token from localStorage
    let user = JSON.parse(localStorage.getItem(`admin`));

    return user ? user._token : user;
  },
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  },
  buildQuery(data) {
    // If the data is already a string, return it as-is
    if (typeof data === "string") return data;

    // Create a query array to hold the key/value pairs
    var query = [];

    // Loop through the data object
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] !== undefined && data[key] !== "" && data[key] !== null) {
          // Encode each key and value, concatenate them into a string, and push them to the array
          query.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          );
        }
      }
    }

    // Join each item in the array with a `&` and return the resulting string
    return query.join("&");
  },
};
export default Utils;
