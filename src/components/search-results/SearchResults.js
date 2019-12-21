import React, { Component } from "react";
import "./SearchResults.css";

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	selected = e => {
		if (e.target.parentNode.className === "") {
			return (e.target.parentNode.className = "table-active");
		} else {
			return (e.target.parentNode.className = "");
		}
	};

	render() {
		return (
			<>
				{this.props.results ? (
					<>
						<p>Results (Found: {this.props.results.length})</p>
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
										<tr
											key={obj.id}
											onClick={this.selected}
										>
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
					</>
				) : null}
			</>
		);
	}
}

export default SearchResults;
