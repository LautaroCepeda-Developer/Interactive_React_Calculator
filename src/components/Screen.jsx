import React from "react";
import "./ScreenStyle.css";

function Screen({ text }) {
	return (
		<div className="calculator__screen">
			<div className="screen__text">{text}</div>
		</div>
	);
}

export default Screen;
