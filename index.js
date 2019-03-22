require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// endpoints
const projectController = require("./controllers/projects");
const actionController = require("./controllers/actions");

const server = express();

// middelware
server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

// route handlers
server.use("/api/projects", projectController);
server.use("/api/actions", actionController);

const port = process.env.PORT;

server.listen(port, () => {
	console.log(`Server now running on http://localhost:${port}`);
});
