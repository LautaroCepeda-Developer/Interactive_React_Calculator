import React from "react";
import ReactLogo from "./components/Logo";
import Calculator from "./components/Calculator";

import "./ComponentRendererStyle.css";
function RenderComponents() {
	return (
		<React.Fragment>
			<div className="main__container">
				<ReactLogo />
				<Calculator />
			</div>
		</React.Fragment>
	);
}

export default RenderComponents;
