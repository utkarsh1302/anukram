function ProjectsException(message, errorCode) {
  const error = new Error(message);
  error.name = "ProjectsException";
  error.errorCode = errorCode;
  return error;
}

module.exports = ProjectsException;
