import React, { Component } from "react";
import Orders from "../orders/orders";

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orderType: ["Pizza", "Salad", "Ramen"]
		};
	}

	render() {
		const { orderType } = this.state;
		return (
			<div>
				<h3>Restaurant Orders</h3>
				<Orders orderType={orderType}/>
			</div>
		);
	}
}

export default Restaurant;
