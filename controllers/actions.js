const router = require("express").Router();

const Action = require("../data/helpers/actionModel");

// Create action
router.post("/", async (req, res) => {
	try {
		const action = req.body;

		const newAction = await Action.insert(action);
		res.status(201).json(newAction);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error creating that action"
		});
	}
});

// Get all actions
router.get("/", async (req, res) => {
	try {
		const actions = await Action.get();

		if (!actions)
			return res
				.status(404)
				.json({ message: "Sorry, no actions were found" });

		return res.status(200).json(actions);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, we counldn't get any actions"
		});
	}
});

module.exports = router;
