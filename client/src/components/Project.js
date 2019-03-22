import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<p>{this.props.description}</p>
				<Link to={`/projects/${this.props.id}`}>
					<button>View Project</button>
				</Link>
			</div>
		);
	}
}

export default Project;
