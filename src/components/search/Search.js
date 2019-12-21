import React, { Component } from "react";
import "./Search.css";
import SearchCustomerName from "../search-customer-name/SearchCustomerName";
import SearchCustomerID from "../search-customer-id/SearchCustomerID";

class Search extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { search } = this.props;
		return (
			<div className="search">
				<h4>Search Bookings</h4>
				<div className="row search-wrapper">
					<SearchCustomerID search={search} />
					<SearchCustomerName search={search} />
				</div>
			</div>
		);
	}
}

export default Search;
