import React, { Component } from "react";

class SearchCustomerName extends Component {
    constructor(props){
        super(props)
    }
    state = {  }
    render() { 
        {console.log('SCN Props', this.props)}
        return (
			<>
                <form className="form-group search-box" 
                onChange={(e) => {
                    e.preventDefault()
                    console.log('in form', e.target.value)
                    this.props.search(e.target.value)}}>
					<label htmlFor="customerName">Customer name</label>
					<div className="search-row">
						<input
							type="text"
							id="customerName"
							className="form-control"
							placeholder="Customer Name"
						/>
						<button className="btn btn-primary">Search Name</button>
					</div>
				</form>
			</>
		);
    }
}
 
export default SearchCustomerName;