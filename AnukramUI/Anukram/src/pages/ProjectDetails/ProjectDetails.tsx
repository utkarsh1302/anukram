import { Flex, Tabs } from "antd";
import Title from "antd/es/typography/Title";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Projects, tasksList } from "../../SampleDATA";
import { IProjectsCard } from "../Projects/types";
import ProjectInformation from "./ProjectInformation";
import ProjectTasks from "./ProjectTasks";
import { ITask } from "./types";
import "./ProjectDetails.css";

const componentClassName: string = "ProjectDetails";
const ProjectDetails = () => {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState<IProjectsCard>();
  const [taskLists, setTaskLists] = useState<ITask[]>([]);

  useEffect(() => {
    if (!isEmpty(projectId)) {
      setProjectDetails(
        Projects.find((project) => project.projectId === projectId)
      );
      setTaskLists(
        tasksList.filter((task: ITask) => task.projectId === projectId)
      );
    }
  }, [projectId]);
  return (
    <Flex vertical={true} className="h-full">
      <Title>{projectDetails?.projectTitle}</Title>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="middle"
        className={`${componentClassName}_tabs overflow-y-auto`}
        items={[
          {
            label: `Details`,
            key: "1",
            children: <ProjectInformation taskLists={taskLists} />,
          },
          {
            label: `Tasks`,
            key: "2",
            children: <ProjectTasks taskLists={taskLists} />,
          },
        ]}
      />
    </Flex>
  );
};

export default ProjectDetails;
