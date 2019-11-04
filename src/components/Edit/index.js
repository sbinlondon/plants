import React from "react";
import { inject, observer } from "mobx-react";
import { Select, TextField } from '../Forms/index'
import List from '../Library/List'

class Edit extends React.Component {

	handleStoreChange = (key, event) => {
		console.log(event.target.value)
		console.log(key)
		this.props.editStore.update(key, event.target.value);
	}

	handleSubmit = () => {
		this.props.editStore.addPlant()
	}

	render() {
		console.log(this.props.editStore)
		return (
			<div>
					<p>
						Here will be editing!
  					</p>
					  <div className="formElement">
					<Select
						label="Watering frequency"
						options={
							[
								{label: "Every day", value: 1},
								{label: "Every other day", value: 2},
								{label: "Every third day", value: 3},
								{label: "Every fourth day", value: 4},
								{label: "Every fifth day", value: 5}
							]
						}
						value={this.props.editStore.frequency}
						onChange={this.handleStoreChange.bind(this, "frequency")}
					 />
					 </div>
					 <div className="formElement">
					 <TextField 
						 label="Plant name"
						 value={this.props.editStore.name}
						 onChange={this.handleStoreChange.bind(this, "name")}
					/>
					</div>
					<div className="formElement">
					<Select
						label="Type of plant"
						options={
							[
								{label: "Cheese plant", value: "Cheese plant"},
								{label: "Monstera", value: "Monstera"},
								{label: "Areca palm", value: "Areca palm"},
								{label: "Tiny cactus", value: "Tiny cactus"},
								{label: "Succulent", value: "Succulent"}
							]
						}
						value={this.props.editStore.type}
						onChange={this.handleStoreChange.bind(this, "type")}
					 />
					 </div>
					 <div>
						 <button onClick={this.handleSubmit}>Submit</button>
					 </div>
					 <div>
						 <List />
					 </div>
			</div>
		);
	}
}

export default inject("editStore")(
	observer(Edit)
  );