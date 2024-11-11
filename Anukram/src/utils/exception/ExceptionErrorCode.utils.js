const LOGIN_EXCEPTION_CODE = {
  JWT_TOKEN_ISSUE: 11111,
  USER_NOT_FOUND: 12222,
  UNAUTHORIZED_USER: 13333,
};

const TEAMS_EXCEPTION_CODE = {
  EMPTY_RECORD: { code: 21111, description: "Teams record is empty" },
};

const PROJECTS_EXCEPTION_CODE = {
  EMPTY_TEAMS_RECORD: { code: 31111, description: "Teams record is empty" },
};

module.exports = {
  LOGIN_EXCEPTION_CODE,
  TEAMS_EXCEPTION_CODE,
  PROJECTS_EXCEPTION_CODE,
};
