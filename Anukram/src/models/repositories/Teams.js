const DBInstance = require("../../database/db.js");

const Teams = {
  async getAllTeams() {
    return await DBInstance.query("select teamid,teamname from teams;");
  },
};

module.exports = {
  Teams,
};
