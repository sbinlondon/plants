import React from "react";

const Select = ({
	name,
	className = "",
	id = `${name}`,
	label = "",
	options = [],
	...others
  }) => {
	const ref = React.useRef(null);
	return (
	  <label htmlFor={name}>
		{label}
		<div>
		  <select
			id={id}
			ref={ref}
			{...others}
		  >
			<option key="blank" value="">
			  Please select
			</option>
			{options.map((option, i) => (
			  <option key={i} value={option.value}>
				{option.label || option.value}
			  </option>
			))}
		  </select>
		</div>
	  </label>
	);
  };
  
  const TextField = ({
	name,
	className = "",
	id = `${name}`,
	label = "",
	type = "text",
	...others
  }) => {
	const ref = React.useRef(null);
	return (
	  <label htmlFor={name}>
		{label}
		<input
		  type={type}
		  name={name}
		  id={id}
		  ref={ref}
		  {...others}
		/>
	  </label>
	);
  };
  
  export { Select, TextField };