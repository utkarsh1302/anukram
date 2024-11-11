export interface ITask {
    projectId: string;
    projectName: string;
    id: string;
    title: string;
    statusId: string;
    status: string;
    description: string;
    certificationRequired: boolean;
    label: string;
    reporter: string;
    team: string;
    teamId: string;
    creationDate: Date;
    endDate: Date;
    type: string;
  }