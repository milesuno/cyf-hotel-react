import React, { Component } from "react";
import "./MakeBooking.css";

class MakeBooking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			firstName: "",
			lastName: "",
			email: "",
			checkIn: "",
			checkOut: ""
		};
    }
    
    //FIX: RoomId will be assigned and Stay duration will be calculated and assigned by server
    //FIX: Implement form validation 
    
	render() {
        return (
            <div className="make-booking">
				<h4>Make Booking</h4>
				<form
					className="form-group search-box"
					onSubmit={e => {
                        e.preventDefault();
                        console.log("MakeBooking state", this.state);
					}}
				>
					<div className="search-row booking-form">
						<label>
							Title:
							<select
								onChange={e => {
									this.setState({ title: e.target.value });
								}}
							>
								<option selected disabled>
									Select title
								</option>
								<option value="Mr">Mr</option>
								<option value="Ms">Ms</option>
								<option value="Mrs">Mrs</option>
								<option value="Dr">Dr</option>
								<option value="Sir">Sir</option>
								<option value="Lady">Lady</option>
								<option value="Other">Other</option>
							</select>
						</label>
						<label>
							First Name:
							<input
								type="text"
								className="form-control"
								placeholder="First Name"
								onChange={e => {
									this.setState({
										firstName: e.target.value
									});
								}}
							/>
						</label>
						<label>
							Last Name:
							<input
								type="text"
								className="form-control"
								placeholder="Last Name"
								onChange={e => {
									this.setState({ lastName: e.target.value });
								}}
							/>
						</label>
						<label>
							Email:
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								onChange={e => {
									this.setState({ email: e.target.value });
								}}
							/>
						</label>
						<label>
							Check In:
							<input
								type="date"
								className="form-control"
								placeholder="Check In"
								onChange={e => {
									this.setState({ checkIn: e.target.value });
								}}
							/>
						</label>
						<label>
							Check Out:
							<input
								type="date"
								className="form-control"
								placeholder="Check Out"
								onChange={e => {
									this.setState({ checkOut: e.target.value });
								}}
							/>
						</label>
						<button className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default MakeBooking;
