import React from "react";
import "./ButtonStyle.css";

function Button(props) {
	const isOperator = (value) => {
		return isNaN(value) && value !== "." && value !== "+/-";
	};

	return (
		<div
			className={`calculator__button ${
				isOperator(props.children)
					? "button__operator"
					: "button__number"
			}`}
			onClick={() => props.handleClick(props.children)}
		>
			{props.children}
		</div>
	);
}

export default Button;
