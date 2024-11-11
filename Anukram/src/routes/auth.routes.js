const express = require("express");
const AuthenticationControllerInstance = require("../controllers/auth/auth.controller.js");
const { Auth } = require("./paths.js");

const authRouter = express.Router();
authRouter.post(Auth.LOGIN, AuthenticationControllerInstance.doLogin);

module.exports = { authRouter };
