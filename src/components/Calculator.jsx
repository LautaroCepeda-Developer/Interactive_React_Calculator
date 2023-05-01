import React from "react";
import "./CalculatorStyle.css";
import Screen from "./Screen";
import Pad from "./Pad";
import { useState } from "react";

function Calculator() {
	const [input, setInput] = useState("");

	return (
		<div className="calculator__container">
			<Screen text={input} />
			<Pad setInput={setInput} input={input} />
		</div>
	);
}

export default Calculator;
