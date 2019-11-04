import React from "react";
import { inject, observer } from "mobx-react";

class Library extends React.Component {
	render () {
		console.log(this.props.libraryStore)
		return (
			<ul>
				{this.props.libraryStore.plants.map((plants, i) => 
					<li key={i}>{plants.name} is a {plants.type} and needs to be watered every {plants.frequency} days.</li>
				)}
			</ul>
		);
	}
}

export default inject("libraryStore")(
	observer(Library)
  );