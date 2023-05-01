import React from "react";
import "./ButtonStyle.css";

function ButtonClear({ handleClick, children }) {
	return (
		<div
			className="calculator__button button__operator button__clear"
			onClick={handleClick}
		>
			{children}
		</div>
	);
}

export default ButtonClear;
