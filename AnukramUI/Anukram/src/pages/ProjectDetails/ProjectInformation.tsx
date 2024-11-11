import { Flex } from "antd";
import DemoPie from "../../components/PieChart";
import DemoFunnel from "../../components/FunnelChart";
import { ITask } from "./types";

interface IProjectInformation {
  taskLists: ITask[];
}
const ProjectInformation = ({ taskLists }: IProjectInformation) => {
  return (
    <Flex>
      <Flex className="justify-center">
        <DemoPie fieldName={"type"} dataArray={taskLists} />
      </Flex>
      <Flex className="justify-center">
        <DemoFunnel fieldName={"status"} dataArray={taskLists} />
      </Flex>
    </Flex>
  );
};

export default ProjectInformation;
