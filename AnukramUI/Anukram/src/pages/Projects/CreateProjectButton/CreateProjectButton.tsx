import FloatButton from "antd/es/float-button";
import { PlusCircleTwoTone } from "@ant-design/icons";
import "./CreateProjectButton.css";
import { ICreateProjectButton } from "../types";

const componentClassName = "CreateProjectButton";

const CreateProjectButton = (props: ICreateProjectButton) => {
  const { onClick } = props;
  return (
    <FloatButton
      type="primary"
      className={`${componentClassName}_createButton`}
      icon={<PlusCircleTwoTone style={{ fontSize: 48 }} />}
      onClick={onClick}
      tooltip={<div>Create New Project</div>}
      style={{
        insetInlineEnd: 24,
        bottom: 84,
        width: 64,
        height: 64,
      }}
    />
  );
};

export default CreateProjectButton;
