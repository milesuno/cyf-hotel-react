import React, { Component } from "react";
import Search from "../search/Search.js";
import SearchResults from "../search-results/SearchResults.js";
import "./Bookings.css";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "../../data/fakeBookings.json";
import { type } from "os";

class Bookings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fakeBookings: "",
			results: ""
		};
	}

	//Filter fakeBookings then pass the data to SearchResults

	search = searchVal => {
		console.info("TO DO!", searchVal);

		let results = this.state.fakeBookings.filter(obj => {
			return obj.firstName === searchVal || obj.surname === searchVal || obj.roomId == searchVal;
		});
    console.log('results in search', results)
		this.setState({ results });
	};

	componentDidMount() {
		fetch("https://cyf-react.glitch.me")
			.then(res => res.json())
			.then(data => this.setState({ fakeBookings: data }))
			.catch(err => err);
	}

	// getResult = () => {

	// }

	render() {
		console.log("Bookings State fakeBookings", this.state.fakeBookings);

		console.log("Bookings State Results", this.state.results);
		const { searchVal, fakeBookings } = this.state;
		return (
			<div className="App-content">
				<div className="container">
					<Search search={this.search} />
					<SearchResults results={this.state.results} />
				</div>
			</div>
		);
	}
}

export default Bookings;
