import React from "react";
import { Link } from "react-router-dom";
import List from './List'

export default class Library extends React.Component {
	render () {
		console.log(this.props.libraryStore)
		return (
			<div>
				<p>PLAAAAAAAANTS 🌿🌴🍃🥺</p>
				<List />
				<Link to="/edit">Add a new plant!</Link>
			</div>
		);
	}
}
