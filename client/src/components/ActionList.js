import React from "react";

// components
import Action from "./Action";

const ActionList = props => {
	return (
		<div>
			{props.actions.map(action => (
				<Action {...action} key={action.key} />
			))}
		</div>
	);
};

export default ActionList;
