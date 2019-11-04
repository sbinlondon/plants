import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	render() {
		return (
			<div>
					<p>
						Here will be plants! 🌿
  					</p>
					  <div><Link to="/edit">EDIT SOME PLANTS!</Link></div>
					  <div><Link to="/library">LOOK AT MY PLANTS!</Link></div>
			</div>
		);
	}
}
