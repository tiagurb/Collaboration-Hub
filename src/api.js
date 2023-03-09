import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_PROJECTS_API}`;

export const getAllProjects = () => {
  return axios.get(`${BASE_URL}/project`);
};

export const getProject = (id) => {
  return axios.get(`${BASE_URL}/project/${id}`);
};

export const deleteProject = (id) => {
  return axios.delete(`${BASE_URL}/project/${id}`);
};

export const createProject = (project) => {
  return axios.post(`${BASE_URL}/project`, project, {
    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
  });
};

export const getAllTasks = () => {
  return axios.get(`${BASE_URL}/tasks`);
};

export const getTask = (id) => {
  return axios.get(`${BASE_URL}/tasks/${id}`);
};

export const updateTask = (id, task) => {
  return axios.put(`${BASE_URL}/tasks/update/${id}`, task);
};

export const updateTaskStatus = (id, task) => {
  return axios.put(`${BASE_URL}/tasks/status/${id}`, task);
};

export const createTask = (task, projectId) => {
  return axios.post(`${BASE_URL}/tasks/create/${projectId}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${BASE_URL}/tasks/${id}`);
};

export const uploadImage = (uploadData) => {
  return uploadData ? axios.post(`${BASE_URL}/upload`, uploadData) : null;
};

export const login = (user) => {
  return axios.post(`${BASE_URL}/login`, user);
};

export const signup = (user) => {
  return axios.post(`${BASE_URL}/signup`, user);
};

export const verify = (token = `${localStorage.getItem("authToken")}`) => {
  return axios.get(`${BASE_URL}/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
