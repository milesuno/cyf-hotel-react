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
					<label>Customer ID
					<div className="search-row">
						<input
							type="text"
							className="form-control"
							placeholder="Enter Room"
							value={this.state.searchInput}
							onChange={e => {
								this.setState({
									searchInput: e.target.value
								});
							}}
						/>
						<button className="btn btn-primary">Search ID</button>
					</div>
					</label>
				</form>
			</>
		);
	}
}

export default SearchCustomerID;
