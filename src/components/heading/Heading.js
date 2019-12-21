import React from "react";
import Clock from "../clock/Clock.js";
import "./Heading.css";

const Heading = () => {
	return (
		<>
			<header className="App-header">
				<img
					src="https://image.flaticon.com/icons/svg/139/139899.svg"
					className="header-img"
				/>
				<h1>CYF Hotel</h1>
				<Clock />
			</header>
		</>
	);
};

export default Heading;
