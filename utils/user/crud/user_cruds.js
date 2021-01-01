// Imports
import axios from "axios";
import Config from "../../config";
import errorHandler from "../../errorhandler";

export async function register(data) {
  return axios
    .post(`${Config.api_url}/register`, data)
    .then((json) => {
      if (json.data.success) {
      } else {
        let error = {
          success: false,
          message: `${json.data.data}. Intenta nuevamente!`,
        };
        return [error];
      }
    })
    .catch((error) => {
      return errorHandler(error);
    });
}

export async function addUserCrud(token, data) {
  return axios
    .post(`${Config.api_url}/user`, data, {
      headers: {
        Authorization: `Token ${auth_token}`,
      },
    })
    .then((json) => {
      if (json.data.success) {
        let response = {
          success: true,
          result: json.data.data,
        };
        return response;
      } else {
        let response = {
          success: false,
          result: json.data.data,
        };
        return response;
      }
    })
    .catch((error) => {
      return errorHandler(error);
    });
}

export async function editUserCrud(token, data) {
  return axios
    .patch(`${Config.api_url}/user`, data, {
      headers: {
        Authorization: `Token ${auth_token}`,
      },
    })
    .then((json) => {
      if (json.data.success) {
        let response = {
          success: true,
          result: json.data.data,
        };
        return response;
      } else {
        let response = {
          success: false,
          result: json.data.data,
        };
        return response;
      }
    })
    .catch((error) => {
      return errorHandler(error);
    });
}

export async function deleteUserCrud(token, data) {
  return axios
    .delete(`${Config.api_url}/user`, data, {
      headers: {
        Authorization: `Token ${auth_token}`,
      },
    })
    .then((json) => {
      if (json.data.success) {
        let response = {
          success: true,
          result: json.data.data,
        };
        return response;
      } else {
        let response = {
          success: false,
          result: json.data.data,
        };
        return response;
      }
    })
    .catch((error) => {
      return errorHandler(error);
    });
}

export async function getUsersCrud(auth_token) {
  return await axios
    .get(`${Config.api_url}/users/list/`, {
      headers: {
        Authorization: `Token ${auth_token}`,
      },
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return errorHandler(error);
    });
}
