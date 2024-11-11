const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
require("reflect-metadata");
const DBInstance = require("./database/db.js");
const { authRouter } = require("./routes/auth.routes.js");
const { projectsRouter } = require("./routes/projects.routes.js");
const { teamRouter } = require("./routes/team.routes.js");

const _filename = __filename || module.filename;
const _dirname = path.dirname(_filename);

dotenv.config({ path: _dirname + "/.env" });
const app = express();
const port = 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

DBInstance.connect();
DBInstance.on("error", (err) => {
  console.error("[ERROR] : Postgres database error", err.stack);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/auth", authRouter);
app.use("/projects", projectsRouter);
app.use("/teams", teamRouter);
