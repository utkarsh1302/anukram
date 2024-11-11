import { Flex, Table } from "antd";
import { ITask } from "./types";

interface IProjectTasks {
  taskLists: ITask[];
}

const columns = [
  // {
  //   title: "Project ID",
  //   dataIndex: "projectId",
  //   key: "projectId",
  // },
  {
    title: "Task ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    ellipsis: true,
  },
  {
    title: "Project Name",
    dataIndex: "projectName",
    key: "projectName",
  },
  // {
  //   title: "Status ID",
  //   dataIndex: "statusId",
  //   key: "statusId",
  // },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  // {
  //   title: "Description",
  //   dataIndex: "description",
  //   key: "description",
  //   ellipsis: true,
  // },
  {
    title: "Certification Required",
    dataIndex: "certificationRequired",
    key: "certificationRequired",
    render: (certificationRequired: boolean) =>
      certificationRequired ? "Yes" : "No",
  },
  {
    title: "Label",
    dataIndex: "label",
    key: "label",
    ellipsis: true,
  },
  // {
  //   title: "Reporter",
  //   dataIndex: "reporter",
  //   key: "reporter",
  // },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
  },
  // {
  //   title: "Team ID",
  //   dataIndex: "teamId",
  //   key: "teamId",
  // },
  {
    title: "Creation Date",
    dataIndex: "creationDate",
    key: "creationDate",
    render: (date: Date) => new Date(date).toLocaleDateString(),
    ellipsis: true,
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    render: (date: Date) => new Date(date).toLocaleDateString(),
    ellipsis: true,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];

const ProjectTasks = ({ taskLists }: IProjectTasks) => {
  return (
    <Flex>
      <Table
        dataSource={taskLists}
        columns={columns}
        size="small"
        // scroll={{ scrollToFirstRowOnChange: false, x: "auto", y: "auto" }}
      />
    </Flex>
  );
};

export default ProjectTasks;
