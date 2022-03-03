import axios from "axios";
import { Logindata } from "../components/pages/Registration/login/data";
import { ErrorMessage } from "../constants/message";

export const getjson = () => {
  const response = Logindata;

  if (response) {
    return response;
  }
  
  return (response = ErrorMessage);
};

export const postData = async (url, config = {}, headers = {}) => {
  const response = await axios.post(url, config, { headers: headers });
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response.data = ErrorMessage;
    }
    return response.data;
  }
  return response;
};

export const getData = async (url, config = {}, headers = {}) => {
  const response = await axios.get(url, config, { headers: headers });
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response.data = ErrorMessage;
    }
    return response.data;
  }
  return response;
};

export const patchData = async (url, config = {}, headers = {}) => {
  const response = await axios.patch(url, config, { headers: headers });
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response.data = ErrorMessage;
    }
    return response.data;
  }
  return response;
};

export const deleteData = async (url, config = {}, headers = {}) => {
  const response = await axios.delete(url, config, { headers: headers });
  if (response && response.data) {
    if (response.status === 500 && response.data) {
      response.data = ErrorMessage;
    }
    return response.data;
  }
  return response;
};
