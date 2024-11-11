const { Teams } = require("../../models/repositories/Teams");

const TeamController = {
  async getAllTeams(req, res) {
    try {
      const teams = await Teams.getAllTeams();
      res.status(200).json(teams.rows);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = {
  TeamController,
};
