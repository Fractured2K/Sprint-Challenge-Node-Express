const actionCheck = async (req, res, next) => {
	const { notes, description } = req.body;

	if (!notes || !description) {
		return res
			.status(400)
			.json({ message: "Make sure all fields aren't empty" });
	}

	next();
};

module.exports = {
	actionCheck
};
