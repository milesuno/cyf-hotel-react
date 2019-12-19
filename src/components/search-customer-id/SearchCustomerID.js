import React from 'react';

const SearchCustomerID = () => {
    return (
		<>
			<form className="form-group search-box">
				<label htmlFor="customerID">Customer ID</label>
				<div className="search-row">
					<input
						type="text"
						id="customerID"
						className="form-control"
						placeholder="Customer ID"
					/>
					<button className="btn btn-primary">Search ID</button>
				</div>
			</form>
		</>
	);
}
 
export default SearchCustomerID;