/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import {
  ICreateProjectRequestData,
  ICreateProjectResponseData,
  IGetProjectsResponseBean,
  IProjectsCard,
} from "../pages/Projects/types";
import { APIPath, ApiUtils } from "../utils/ApiUtils";
import { Callback } from "./types";

export const ProjectService = {
  async createProject(
    requestData: ICreateProjectRequestData,
    callback: Callback<ICreateProjectResponseData>
  ) {
    await ApiUtils.axiosInstance
      .post(APIPath.CREATE_PROJECT, requestData)
      .then(function (value: AxiosResponse<any, any>) {
        callback.onSuccess(value.data);
      })
      .catch(function (error) {
        callback.onFailure(error);
      });
  },
  async getAllProjects(userId: string, callback: Callback<IProjectsCard[]>) {
    await ApiUtils.axiosInstance
      .get(`${APIPath.GET_ALL_PROJECTS}?userId=${encodeURIComponent(userId)}`)
      .then(function (value: AxiosResponse<any, any>) {
        const { data } = value;
        const result = data.map(
          (project: IGetProjectsResponseBean) =>
            ({
              projectTitle: project.projectname,
              startDate: project.startdate || "--",
              endDate: project.enddate || "--",
              description: project.description,
              teams: project.teamnames,
              isInprogress: project.statusname.toUpperCase() === "STARTED",
              started: project.statusname.toUpperCase() === "STARTED",
              projectId: project.projectid.toString(),
            } as IProjectsCard)
        );
        callback.onSuccess(result);
      })
      .catch(function (error) {
        callback.onFailure(error);
      });
  },
  async deleteProject(projectId: string, callback: Callback<void>) {
    await ApiUtils.axiosInstance
      .delete(`${APIPath.DELETE_PROJECTS}?id=${projectId}`)
      .then(function () {
        callback.onSuccess();
      })
      .catch(function (error) {
        callback.onFailure(error);
      });
  },
};
