import axios from "axios";

const axiosInstance = (() => {
  console.log("Inside axiosInstance");
  const instance = axios.create({
    baseURL: "http://localhost:8888",
    withCredentials: true,
    // timeout: 1000,
    // headers: { "X-Custom-Header": "foobar" },
  });

  Object.freeze(instance);

  return instance;
})();

export const APIPath = {
  LOGIN: "/auth/login",
  TEAMS: "/teams",
  GET_TEAMS: "/teams/getTeams",
  CREATE_PROJECT: "/projects/createProject",
  GET_ALL_PROJECTS: "/projects/getAllProjects",
  DELETE_PROJECTS: "/projects/deleteProject",
};

export const ApiUtils = {
  axiosInstance,
};
