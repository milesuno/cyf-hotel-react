import React, { Component } from "react";
import "./Search.css";
import SearchCustomerName from "../search-customer-name/SearchCustomerName";
import SearchCustomerID from "../search-customer-id/SearchCustomerID";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		};
	}

	render() {
		console.log("Search state", this.state);
		return (
			<div className="search">
				<div className="page-header">
					<h4 className="text-left">Search Bookings</h4>
				</div>
				<div className="row search-wrapper">
					<form
						className="form-group search-box"
						onSubmit={() => {
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
									e.preventDefault();
									this.setState({
										searchInput: e.target.value
									});
								}}
							/>
							<button className="btn btn-primary">
								Search Name
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Search;
