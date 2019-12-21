import React, { Component } from "react";

class SearchCustomerName extends Component {
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
					<label>
						Customer name
						<div className="search-row">
							<input
								type="text"
								className="form-control"
								placeholder="Enter your name"
								value={this.state.searchInput}
							/>
							<button className="btn btn-primary">
								Search Name
							</button>
						</div>
					</label>
				</form>
			</>
		);
	}
}

export default SearchCustomerName;
