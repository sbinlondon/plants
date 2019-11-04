import React from "react";
import { inject, observer } from "mobx-react";

class Edit extends React.Component {
	render() {
		console.log(this.props.editStore)
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Here will be editing!
  					</p>
				</header>
			</div>
		);
	}
}

export default inject("editStore")(
	observer(Edit)
  );