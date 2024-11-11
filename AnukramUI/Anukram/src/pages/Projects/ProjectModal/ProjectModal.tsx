/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Flex, Input, Select } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "../../../store/store";
import { fetchTeamsList, ITeam, selectTeamsList } from "../../../store/teams";
import { IProjectModal } from "../types";

const ProjectModal = (props: IProjectModal) => {
  const teamsList: ITeam[] = useSelector(selectTeamsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamsList());
  }, [dispatch]);

  const handleProjectNameTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setNewProjectData({
      ...props.newProjectData,
      projectName: e.target.value,
    });
  };

  const handleSelectChange = (value: string[]) => {
    props.setNewProjectData({
      ...props.newProjectData,
      teams: value,
    });
  };

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    props.setNewProjectData({
      ...props.newProjectData,
      isStarted: e.target.checked,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    props.setNewProjectData({
      ...props.newProjectData,
      description: value,
    });
  };

  return (
    <Flex gap="middle" vertical>
      <Input
        className="w-full mb-3 mt-3"
        placeholder="Project Name"
        value={props.newProjectData.projectName}
        onChange={handleProjectNameTextFieldChange}
      />
      <Flex
        gap="middle"
        className="mb-3"
        align="center"
        justify="space-between"
      >
        <Select
          placeholder="Choose Teams (Multiple)"
          className="w-1/2"
          value={props.newProjectData.teams}
          onChange={handleSelectChange}
          options={[
            ...teamsList.map((team: ITeam) => {
              return {
                value: team.teamid,
                label: team.teamname,
              };
            }),
          ]}
          mode={"tags"}
        />
        <Checkbox
          checked={props.newProjectData.isStarted}
          onChange={handleCheckboxChange}
        >
          Mark as Started
        </Checkbox>
      </Flex>
      <TextArea
        className="mb-3"
        value={props.newProjectData.description}
        onChange={handleTextAreaChange}
        placeholder="Description"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </Flex>
  );
};

export default React.memo(ProjectModal);
