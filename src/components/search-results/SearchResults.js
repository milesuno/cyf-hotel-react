import React, { Component } from "react";
import "./SearchResults.css";
import data from "../../data/fakeBookings.json";

//Get the real input from the user and use that to replace the placeholder data below

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	selected = e => {
		console.log("selected", e);
		let tr = document.getElementsByClassName("tr");
		console.log("tr", tr);
	};

	render() {
		console.log("SR Props", this.props.results);
		return (
			<>
				{this.props.results ? (
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Title</th>
								<th scope="col">First Name</th>
								<th scope="col">Surname</th>
								<th scope="col">Email</th>
								<th scope="col">Room ID</th>
								<th scope="col">Check in date</th>
								<th scope="col">Check out date</th>
								<th scope="col">Stay Duration</th>
							</tr>
						</thead>
						<tbody>
							{this.props.results.map(obj => {
								return (
									<tr key={obj.id} onClick={this.selected}>
										<td>{obj.title}</td>
										<td>{obj.firstName}</td>
										<td>{obj.surname}</td>
										<td>{obj.email}</td>
										<td>{obj.roomId}</td>
										<td>{obj.checkInDate}</td>
										<td>{obj.checkOutDate}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : null}
			</>
		);
	}
}

export default SearchResults;
