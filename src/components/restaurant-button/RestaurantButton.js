import React, { Component } from "react";

class RestaurantButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button className="btn btn-primary" onClick={this.props.addOrder}>
				Add
			</button>
		);
	}
}

export default RestaurantButton;
