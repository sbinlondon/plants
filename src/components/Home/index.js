import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	render() {
		return (
			<div>
					<p>
						Here will be plants! 🌿
  					</p>
					<Link to="/edit">EDIT SOME PLANTS!</Link>
			</div>
		);
	}
}
