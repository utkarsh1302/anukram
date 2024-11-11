export interface IProjectsCard {
  projectTitle: string;
  startDate: string;
  endDate: string;
  description: string;
  teams: string[];
  isInprogress: boolean;
  started: boolean;
  projectId: string;
  onProjectDelete: (projectId: string) => void;
}

export interface IProjectModal {
  setNewProjectData: (data: ICreateProjectRequestData) => void;
  newProjectData: ICreateProjectRequestData;
}

export interface ICreateProjectRequestData {
  projectName: string;
  description: string;
  isStarted: boolean;
  teams: string[];
  userId?: string;
}

export interface ICreateProjectResponseData {
  projectName: string;
}

export interface ICreateProjectButton {
  onClick: () => void;
}

export interface IGetProjectsResponseBean {
  description: string;
  enddate: string;
  projectid: number;
  projectname: string;
  startdate: string;
  statusname: string;
  teamnames: string[];
  userid: string;
}
