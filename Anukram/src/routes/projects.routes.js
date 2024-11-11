const express = require("express");
const { Project } = require("./paths.js");
const {
  ProjectController,
} = require("../controllers/projects/projects.controller.js");

const projectsRouter = express.Router();

projectsRouter.post(Project.CREATE_PROJECT, ProjectController.createNewProject);
projectsRouter.get(Project.GET_ALL_PROJECTS, ProjectController.getAllProjects);
projectsRouter.delete(Project.DELETE_PROJECT, ProjectController.deleteProject);

module.exports = { projectsRouter };
