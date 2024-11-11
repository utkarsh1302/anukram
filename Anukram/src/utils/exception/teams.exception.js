function TeamsException(message, errorCode) {
  const error = new Error(message);
  error.name = "TeamsException";
  error.errorCode = errorCode;
  return error;
}

module.exports = {
  TeamsException,
};
