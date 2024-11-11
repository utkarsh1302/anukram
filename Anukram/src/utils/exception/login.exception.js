function LoginException(message, errorCode) {
  const error = new Error(message);
  error.name = "LoginException";
  error.errorCode = errorCode;
  return error;
}

const handleErrors = (err, res) => {
  console.error(err);
  let errorRes = {
    errorMsg: err.message,
    errorCode: err.errorCode || "UNKNOWN_ERROR",
  };

  switch (err.errorCode) {
    case 11111:
      res.status(500).json(errorRes);
      break;
    case 12222:
      res.status(404).json(errorRes);
      break;
    case 13333:
      res.status(401).json(errorRes);
      break;
    case "08P01":
      errorRes.errorMsg = "Internal Server Error";
      res.status(500).json(errorRes);
      break;
    default:
      res.status(500).json(errorRes);
  }
};

module.exports = {
  LoginException,
  handleErrors,
};
