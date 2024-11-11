const express = require("express");
const { Team } = require("./paths.js");
const { TeamController } = require("../controllers/team/team.controller.js");

const teamRouter = express.Router();

teamRouter.get(Team.GET_TEAMS, TeamController.getAllTeams);

module.exports = {
  teamRouter,
};
