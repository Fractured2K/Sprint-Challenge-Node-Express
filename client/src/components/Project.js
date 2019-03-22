import React, { Component } from "react";
import axios from "axios";

import ActionList from "./ActionList";

class Project extends Component {
	state = {
		actions: []
	};

	componentDidMount = () => {
		axios
			.get(`http://localhost:3001/api/projects/actions/${this.props.id}`)
			.then(res => this.setState({ actions: res.data }))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
				<h1>name: {this.props.name}</h1>
				<p>description: {this.props.description}</p>

				<ActionList actions={this.state.actions} />
			</div>
		);
	}
}

export default Project;
