import React from "react";
import Logo from "../images/logo512.png";
import "./LogoStyle.css";

function ReactLogo() {
	return (
		<div className="logo__container">
			<img className="image" src={Logo} alt="React Logo" />
			<h1 className="title">REACT CALCULATOR</h1>
		</div>
	);
}

export default ReactLogo;
