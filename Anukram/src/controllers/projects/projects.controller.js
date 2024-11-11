const { Projects } = require("../../models/repositories/Projects");

const ProjectController = {
  async createNewProject(req, res) {
    try {
      if (null != req.body) {
        const projectInfo = { ...req.body };
        const newProject = {
          projectName: projectInfo.projectName,
          description: projectInfo.description,
          startDate: projectInfo.isStarted ? new Date() : null,
          endDate: null,
          teams: [...projectInfo.teams],
          status: projectInfo.isStarted ? "statusId6" : "statusId7",
          userId: projectInfo.userId,
        };
        const response = await Projects.createProject(newProject);
        if (response.rowCount > 0) {
          return res.status(201).json(newProject);
        } else {
          return res.status(500).json({ message: "Failed to create project." });
        }
      } else {
        return res.status(400).json({ message: "Invalid request" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllProjects(req, res) {
    try {
      if (null != req.query) {
        const userId = req.query.userId;
        if (null != userId) {
          const response = await Projects.getAllProjects(userId);
          if (response.rowCount === 0) {
            return res.status(200).json([]);
          } else {
            return res.status(200).json(response.rows);
          }
        } else {
          return res.status(500).json({ message: "Invalid userId" });
        }
      } else {
        return res.status(400).json({ message: "Invalid request" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteProject(req, res) {
    try {
      if (req?.query?.id) {
        const response = await Projects.deleteProject(req.query.id);
        if (response?.rowCount > 0) {
          return res
            .status(200)
            .json({ message: "Project deleted successfully" });
        } else {
          return res.status(404).json({ message: "Project not found" });
        }
      } else {
        return res.status(400).json({ message: "Invalid request" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = {
  ProjectController,
};
