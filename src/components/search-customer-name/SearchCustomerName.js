import React, { Component } from "react";

class SearchCustomerName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		};
	}
	state = {};
	render() {
		return (
			<>
				<form
					className="form-group search-box"
					onSubmit={e => {
						e.preventDefault();
						this.props.search(this.state.searchInput);
					}}
				>
					<label htmlFor="customerName">Customer name</label>
					<div className="search-row">
						<input
							type="text"
							id="customerName"
							className="form-control"
							placeholder="Customer Name"
							value={this.state.searchInput}
							onChange={e => {
								this.setState({
									searchInput: e.target.value
								});
							}}
						/>
						<button className="btn btn-primary">Search Name</button>
					</div>
				</form>
			</>
		);
	}
}

export default SearchCustomerName;
