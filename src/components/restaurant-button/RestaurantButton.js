import React, { Component } from "react";

class RestaurantButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<button
					className="btn btn-primary"
					onClick={() => this.props.onIncrement(this.props.food.id)}
				>
					+
				</button>
				<button
					className="btn btn-primary"
					onClick={() => this.props.onDecrement(this.props.food.id)}
				>
					-
				</button>
			</>
		);
	}
}

export default RestaurantButton;
