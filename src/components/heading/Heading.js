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
				CYF Hotel
			</header>
			<Clock />
		</>
	);
};

export default Heading;
