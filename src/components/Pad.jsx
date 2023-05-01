import React from "react";
import Button from "./Button";
import ButtonClear from "./ButtonClear";
import "./PadStyle.css";
import { evaluate } from "mathjs";

function Pad({ setInput, input }) {
	const updateInput = (value) => {
		setInput((prevInput) => prevInput + value);
	};

	function clearInput() {
		setInput("");
	}

	function calculateResult() {
		const screenText = document.querySelector(".screen__text");
		try {
			const result = evaluate(input);
			setInput(result.toString());
		} catch (error) {
			screenText.style.color = "#ff0000";
			setInput("ERROR");
			setTimeout(() => {
				setInput("");
			}, 500);
			setTimeout(() => {
				screenText.style.color = "#ffffff";
			}, 520);
		}
	}

	function toggleSign() {
		input.charAt(0) === "-"
			? setInput(input.substr(1))
			: setInput("-" + input);
	}

	return (
		<div className="calculator__pad">
			<div className="pad__row">
				<Button handleClick={() => updateInput("1")}>1</Button>
				<Button handleClick={() => updateInput("2")}>2</Button>
				<Button handleClick={() => updateInput("3")}>3</Button>
				<Button handleClick={() => updateInput("+")}>+</Button>
			</div>
			<div className="pad__row">
				<Button handleClick={() => updateInput("4")}>4</Button>
				<Button handleClick={() => updateInput("5")}>5</Button>
				<Button handleClick={() => updateInput("6")}>6</Button>
				<Button handleClick={() => updateInput("-")}>-</Button>
			</div>
			<div className="pad__row">
				<Button handleClick={() => updateInput("7")}>7</Button>
				<Button handleClick={() => updateInput("8")}>8</Button>
				<Button handleClick={() => updateInput("9")}>9</Button>
				<Button handleClick={() => updateInput("*")}>*</Button>
			</div>
			<div className="pad__row">
				<Button handleClick={toggleSign}>+/-</Button>
				<Button handleClick={() => updateInput("0")}>0</Button>
				<Button handleClick={() => updateInput(".")}>.</Button>
				<Button handleClick={() => updateInput("/")}>/</Button>
			</div>
			<div className="pad__row pad__row--fill">
				<ButtonClear handleClick={clearInput}>CLR</ButtonClear>
				<Button handleClick={calculateResult}>=</Button>
			</div>
		</div>
	);
}

export default Pad;
