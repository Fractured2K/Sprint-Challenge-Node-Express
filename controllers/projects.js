const router = require("express").Router();

const Project = require("../data/helpers/projectModel");
const Action = require("../data/helpers/actionModel");

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
		return res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, we couldn't get that project"
		});
	}
});

// Get project acitons
router.get("/actions/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const actions = await Project.getProjectActions(id);
		res.status(200).json(actions);
	} catch (error) {}
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

// Delete project
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const project = await Project.get(id);

		// check to see if project exists
		if (!project)
			return res
				.status(404)
				.json({ message: "Sorry, that project doesn't exist" });

		// Get all project actions
		const projectActions = await Project.getProjectActions(id);

		// Delete each action from project
		projectActions.forEach(async action => {
			await Action.remove(action.id);
		});

		// delete project
		const deletedProject = await Project.remove(id);
		return res.status(200).json(deletedProject);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error trying to delete that project"
		});
	}
});

module.exports = router;
