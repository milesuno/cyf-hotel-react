import React, { Component } from "react";
import RestaurantButton from "../restaurant-button/RestaurantButton";

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = { orders: 0 };
	}

	addOrder = () => {
		let orders = this.state.orders;
		orders++;
		this.setState({ orders });
	};

	render() {
		const { orders } = this.state;
		const { orderType } = this.props;

		return (
			<ul>
				{orderType.map(order => {
					return (
						<li>
							{order}: {orders}
							<RestaurantButton addOrder={this.addOrder} />
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Orders;
