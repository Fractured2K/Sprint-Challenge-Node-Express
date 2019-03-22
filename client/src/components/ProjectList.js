import React, { Component } from "react";
import axios from "axios";

// components
import Project from "./Project";
class ProjectList extends Component {
	state = {
		projects: []
	};
	componentDidMount = () => {
		axios
			.get("http://localhost:3001/api/projects")
			.then(res =>
				this.setState({
					projects: res.data
				})
			)
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<h1>hello</h1>
				{this.state.projects.map(project => (
					<Project {...project} key={project.id} />
				))}
			</div>
		);
	}
}

export default ProjectList;
