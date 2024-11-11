/* eslint-disable react-refresh/only-export-components */
import { Button, Card, Flex, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { IProjectsCard } from "./types";
import React from "react";
import { format } from "date-fns";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ProjectsCard = (props: IProjectsCard) => {
  const history = useNavigate();

  const handleCardClick = () => {
    history(`/projects/${props.projectId}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      title={props.projectTitle}
      actions={[
        <Button
          icon={<EditOutlined />}
          shape="round"
          onClick={(e) => {
            e.stopPropagation();
            props;
          }}
        />,
        <Button
          icon={<DeleteOutlined />}
          shape="round"
          onClick={(e) => {
            e.stopPropagation();
            props.onProjectDelete(props.projectId);
          }}
          danger
        />,
      ]}
      className={`max-w-64 min-w-64 max-h-96 shadow-md text-start break-all ml-3 mr-3 mb-4 cursor-pointer hover:shadow-projectCardBoxShadow`}
    >
      <Flex className="h-32" vertical>
        <p>
          {`Started Date: ${
            props.started
              ? format(new Date(props.startDate), "dd/MM/yyyy")
              : "Not Started"
          }`}{" "}
        </p>
        <p>
          {`End Date: ${props.isInprogress ? props.endDate : "In Progress"}`}{" "}
        </p>
        <Tooltip placement="bottom" title={props.teams.toString()} arrow={true}>
          <p className="line-clamp-2 text-ellipsis">{`Teams : ${props.teams.toString()}`}</p>
        </Tooltip>
        <Tooltip placement="bottom" title={props.description} arrow={true}>
          <p className="line-clamp-2 text-ellipsis">{`Description : ${props.description}`}</p>
        </Tooltip>
      </Flex>
    </Card>
  );
};

export default React.memo(ProjectsCard);
