import axios from "axios";
import { BASE_URL } from "../constants";

export const register = (params) =>
  axios.post(`${BASE_URL}/api/auth/register`, { params });

export const auth = (params) =>
  axios.post(`${BASE_URL}/api/auth/login`, { params });

export const createGroup = (params) =>
  axios.post(`${BASE_URL}/api/group/creategroup`, { params });

export const updateUser = (params) =>
  axios.post(`${BASE_URL}/api/group/${params.groupId}`, { params });

export const getResult = (params) =>
  axios.get(`${BASE_URL}/api/group/${params.groupId}`, { params });

export default {
  register,
  auth,
  createGroup,
  updateUser,
  getResult,
};
