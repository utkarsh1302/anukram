const DBInstance = require("../../database/db.js");

const Users = {
  async getUserByEmail(email) {
    return await DBInstance.query("select * from users where email=$1", [
      email,
    ]);
  },
};

module.exports = {
  Users,
};
