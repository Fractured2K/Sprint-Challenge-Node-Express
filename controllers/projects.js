const router = require("express").Router();

const Project = require("../data/helpers/projectModel");

// Create project
router.post("/", async (req, res) => {
	try {
		const project = req.body;

		const newProject = await Project.insert(project);
		res.status(201).json(newProject);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error creating that project"
		});
	}
});

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

// Update project
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const project = req.body;

		const updatedProject = await Project.update(id, project);

		if (!updatedProject)
			return res
				.status(404)
				.json({ message: "Sorry, that project doesn't exist" });

		res.status(200).json(updatedProject);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error updating that project"
		});
	}
});

module.exports = router;
