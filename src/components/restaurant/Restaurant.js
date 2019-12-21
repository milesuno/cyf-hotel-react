import React, { Component } from "react";
import Orders from "../orders/orders";
import "./Restaurant.css";

class Restaurant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orderType: [
				{ id: 1, name: "Pizza", orders: 0 },
				{ id: 2, name: "Salad", orders: 0 },
				{ id: 3, name: "Ramen", orders: 0 }
			]
		};
	}


	handleIncrement = foodId => {
		this.state.orderType.forEach(food => {
			if (food.id === foodId) {
				let orders = food.orders++;
				this.setState({ orders });
			}
		});
	};

	handleDecrement = foodId => {
		this.state.orderType.forEach(food => {
			if (food.id === foodId) {
				if (food.orders > 0) {
					const orders = food.orders--;
					this.setState({ orders });
				}
			}
		});
	};

	
	render() {
		const { orderType } = this.state;
		return (
			<section className="restaurant-orders container">
				<h4>Restaurant Orders</h4>
				<Orders
					orderType={orderType}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
				/>
			</section>
		);
	}
}

export default Restaurant;
