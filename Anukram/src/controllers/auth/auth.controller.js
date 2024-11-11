const jwt = require("jsonwebtoken");
const LoginException = require("../../utils/exception/login.exception.js");
const LOGIN_EXCEPTION_CODE = require("../../utils/exception/ExceptionErrorCode.utils.js");
const { Users } = require("../../models/repositories/Users.js");

class AuthenticationController {
  async doLogin(req, res) {
    try {
      const requestData = req.body;
      if (requestData?.email) {
        const result = await Users.getUserByEmail(requestData.email);
        if (result.rowCount == 0) {
          throw new LoginException(
            `No user found with email id : ${requestData.email}`,
            LOGIN_EXCEPTION_CODE.USER_NOT_FOUND
          );
        } else if (result.rowCount > 0) {
          const userDetails = result.rows[0];
          if (
            userDetails.password === requestData.password &&
            process.env.ACCESS_SECRET_TOKEN
          ) {
            const jwtToken = jwt.sign(
              { userDetails, date: new Date() },
              process.env.ACCESS_SECRET_TOKEN
            );
            res.cookie("token", jwtToken, {
              httpOnly: true,
              secure: false,
            });
            res.json({
              userId: userDetails.userid,
              email: userDetails.email,
              firstName: userDetails.firstname,
              lastName: userDetails.lastname,
            });
          } else {
            throw new LoginException(
              "Unauthorized User",
              LOGIN_EXCEPTION_CODE.UNAUTHORIZED_USER
            );
          }
        }
      } else {
        console.log("Invalid API parameters!! Email is mandatory!!");
      }
    } catch (e) {
      handleErrors(e, res);
    }
  }
}

const AuthenticationControllerInstance = new AuthenticationController();
module.exports = AuthenticationControllerInstance;
