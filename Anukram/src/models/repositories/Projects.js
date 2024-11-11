const DBInstance = require("../../database/db.js");

const Projects = {
  async createProject(newProject) {
    try {
      return DBInstance.query(
        "INSERT INTO projects (projectname, description, startdate, enddate, teamids, statusid, userid) VALUES ($1,$2,$3,$4,$5,$6,$7);",
        [
          newProject.projectName,
          newProject.description,
          newProject.startDate,
          newProject.endDate,
          newProject.teams,
          newProject.status,
          newProject.userId,
        ]
      );
    } catch (error) {
      console.error("DB error: ", error);
    }
  },

  async getAllProjects(userId) {
    try {
      return DBInstance.query(
        `SELECT
          p.description,
          p.enddate,
          p.projectid,
          p.projectname,
          p.startdate,
          s.statusname,
          ARRAY(
            SELECT teamname
            FROM teams
            WHERE teamid = ANY(p.teamids)
          ) AS teamnames,
          p.userid
        FROM projects p
        LEFT JOIN status s ON p.statusid = s.statusid
        WHERE p.userid = $1;
        `,
        [userId]
      );
    } catch (error) {
      console.error("DB error: ", error);
    }
  },
  async deleteProject(projectId) {
    try {
      const result = await DBInstance.query(
        "delete from projects where projectid=$1;",
        [projectId]
      );
      return result;
    } catch (error) {
      console.error("DB error: ", error);
    }
  },
};

module.exports = {
  Projects,
};
