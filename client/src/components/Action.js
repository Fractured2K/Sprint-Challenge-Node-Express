import React from "react";

const Action = props => {
	return (
		<div>
			<h2>action desc: {props.description}</h2>
			<p>action notes: {props.notes}</p>
		</div>
	);
};

export default Action;
