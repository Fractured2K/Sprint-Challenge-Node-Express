const projectCheck = async (req, res, next) => {
	const { name, description } = req.body;

	if (!name || !description) {
		return res
			.status(400)
			.json({ message: "Make sure all fields aren't empty" });
	}

	next();
};

module.exports = {
	projectCheck
};
