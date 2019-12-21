import React, { Component } from "react";
import RestaurantButton from "../restaurant-button/RestaurantButton";
import "./Orders.css";

class Orders extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { orderType, onIncrement, onDecrement } = this.props;

		return (
			<div >
				<ul className="order-wrapper">
					{orderType.map(food => {
						return (
							<li>
								{food.name}: {food.orders}
								<RestaurantButton
									food={food}
									onIncrement={onIncrement}
									onDecrement={onDecrement}
								/>
							</li>
						);
					})}
					<button className="btn btn-primary">Place Order</button>
				</ul>
			</div>
		);
	}
}

export default Orders;
