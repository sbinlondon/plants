import React from "react";
import { inject, observer } from "mobx-react";

class Library extends React.Component {
	render () {
		console.log(this.props.libraryStore)
		return (
			<div>
				<p>Plants</p>
				{this.props.libraryStore.plants.map((plants, i) => 
					<li key={i}>{plants.name} is a {plants.type} and needs to be watered every {plants.frequency} days.</li>
				)}
			</div>
		);
	}
}

export default inject("libraryStore")(
	observer(Library)
  );