import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer">
				<ul>
					{this.props.address.map(line => {
						return <li>{line}</li>;
					})}
				</ul>
			</footer>
		);
	}
}

export default Footer;
