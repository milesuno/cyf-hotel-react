import React, { Component } from "react";

class SearchCustomerID extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		};
	}
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
					<label htmlFor="customerID">Customer ID</label>
					<div className="search-row">
						<input
							type="text"
							id="customerID"
							className="form-control"
							placeholder="Customer ID"
							value={this.state.searchInput}
							onChange={e => {
								this.setState({
									searchInput: e.target.value
								});
							}}
						/>
						<button className="btn btn-primary">Search ID</button>
					</div>
				</form>
			</>
		);
	}
}

export default SearchCustomerID;
