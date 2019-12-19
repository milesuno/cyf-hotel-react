import React, { Component } from "react";
import Search from "../search/Search.js";
import SearchResults from "../search-results/SearchResults.js";
import "./Bookings.css";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "../../data/fakeBookings.json";

class Bookings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchVal: "",
      fakeBookings: FakeBookings,
      results: FakeBookings.filter(obj => {
							return obj.firstName === this.searchVal; // || obj.roomId === 1;
						})
		};
	}

	//Filter fakeBookings then pass the data to SearchResults

	search = searchVal => {
		console.info("TO DO!", searchVal);
		this.setState({ searchVal });
  };
  

	render() {
		console.log("Bookings State", this.state.results);
		const { searchVal, fakeBookings } = this.state;
		return (
			<div className="App-content">
				<div className="container">
					<Search search={this.search} />
					<SearchResults />
					{/* <SearchResults results={FakeBookings} /> */}
				</div>
			</div>
		);
	}
}

export default Bookings;
