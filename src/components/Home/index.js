import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Here will be plants! 🌿
  					</p>
					<Link to="/edit">EDIT SOME PLANTS!</Link>
				</header>
			</div>
		);
	}
}
