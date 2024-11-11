import { Flex, Modal } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Status, useToastNotification } from "../../hooks/useToastNotification";
import { ProjectService } from "../../services/ProjectService";
import { useSelector } from "../../store/store";
import { getUserId } from "../../store/userDetails";
import CreateProjectButton from "./CreateProjectButton/CreateProjectButton";
import ProjectModal from "./ProjectModal/ProjectModal";
import ProjectsCard from "./ProjectsCard";
import {
  ICreateProjectRequestData,
  ICreateProjectResponseData,
  IProjectsCard,
} from "./types";

const Projects = () => {
  const userId = useSelector(getUserId);
  const { showToastNotification, contextHolder } = useToastNotification();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newProjectData, setNewProjectData] =
    useState<ICreateProjectRequestData>({
      projectName: "",
      description: "",
      isStarted: false,
      teams: [],
      userId: userId,
    });
  const [projectList, setProjectList] = useState<IProjectsCard[]>([]);

  const getProjectList = useCallback(() => {
    ProjectService.getAllProjects(userId, {
      onSuccess(response: IProjectsCard[]) {
        setProjectList(response);
      },
      onFailure(error) {
        console.error(error);
      },
    });
  }, [userId]);

  useEffect(() => {
    getProjectList();
  }, [getProjectList]);

  const handleOpenProjectModal = useCallback(() => {
    setIsModalOpen((prevValue) => !prevValue);
  }, []);

  const handleProjectModalClose = useCallback(() => {
    setNewProjectData({
      projectName: "",
      description: "",
      isStarted: false,
      teams: [],
      userId: userId,
    });
    setIsModalOpen(false);
  }, [userId]);

  const handleSetNewProjectData = useCallback(
    (data: ICreateProjectRequestData) => {
      setNewProjectData(data);
    },
    []
  );

  const handleCreateProject = useCallback(() => {
    ProjectService.createProject(newProjectData, {
      onSuccess: (response: ICreateProjectResponseData) => {
        getProjectList();
        showToastNotification(
          Status.Success,
          `Project ${response.projectName} created successfully!`,
          ""
        );
        handleProjectModalClose();
      },
      onFailure: (error) => {
        console.error(error);
        showToastNotification(
          Status.Error,
          `Project creation failed. Please try again.`,
          ""
        );
      },
    });
  }, [
    getProjectList,
    handleProjectModalClose,
    newProjectData,
    showToastNotification,
  ]);

  const handleDeleteProject = useCallback(
    (projectId: string) => {
      ProjectService.deleteProject(projectId, {
        onSuccess: () => {
          getProjectList();
          showToastNotification(
            Status.Success,
            `Project deleted successfully!`,
            ""
          );
        },
        onFailure: (error) => {
          console.error(error);
          showToastNotification(Status.Error, "Unable to delete project!!", "");
        },
      });
    },
    [getProjectList, showToastNotification]
  );
  return (
    <Flex wrap="wrap">
      {contextHolder}
      {projectList.map((project: IProjectsCard) => (
        <ProjectsCard
          key={project.projectId}
          projectTitle={project.projectTitle}
          startDate={project.startDate}
          endDate={project.endDate}
          description={project.description}
          teams={project.teams}
          isInprogress={project.isInprogress}
          started={project.started}
          projectId={project.projectId}
          onProjectDelete={handleDeleteProject}
        />
      ))}
      <CreateProjectButton onClick={handleOpenProjectModal} />
      <Modal
        title="Create Project"
        open={isModalOpen}
        onOk={handleCreateProject}
        onCancel={handleProjectModalClose}
        okText="Create"
      >
        <ProjectModal
          setNewProjectData={handleSetNewProjectData}
          newProjectData={newProjectData}
        />
      </Modal>
    </Flex>
  );
};

export default Projects;
