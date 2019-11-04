import React from "react";
import List from './List'

export default class Library extends React.Component {
	render () {
		console.log(this.props.libraryStore)
		return (
			<div>
				<p>PLAAAAAAAANTS 🌿🌴🍃🥺</p>
				<List />
			</div>
		);
	}
}
