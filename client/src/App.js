import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import ProjectList from "./components/ProjectList";
import Project from "./components/Project";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route exact path="/" component={ProjectList} />
				<Route exact path="/projects/4" component={Project} />
			</div>
		);
	}
}

export default App;
