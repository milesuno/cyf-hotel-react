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
			<section className='container'>
				<h4>Restaurant Orders</h4>
				<Orders orderType={orderType}/>
			</section>
		);
	}
}

export default Restaurant;
