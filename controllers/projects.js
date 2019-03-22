const router = require("express").Router();

const Project = require("../data/helpers/projectModel");

// Create project
router.post("/", async (req, res) => {});

// Get all projects
router.get("/", async (req, res) => {
	try {
		const projects = await Project.get();

		if (!projects)
			return res
				.status(404)
				.json({ message: "Sorry, no projects were found" });

		return res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, we counldn't get any projects"
		});
	}
});

// Get project by id
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const projects = await Project.get(id);

		if (!projects)
			return res
				.status(404)
				.json({ message: "Sorry, that project doesn't exist" });

		return res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, we counldn't get that project"
		});
	}
});

module.exports = router;
