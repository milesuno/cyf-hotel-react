import React, { Component } from "react";
import Heading from "./components/heading/Heading";
import TouristInfoCards from "./components/tourist-info-cards/TouristInfoCards";
import Bookings from "./components/bookings/Bookings";
import Restaurant from "./components/restaurant/Restaurant";
import Footer from "./components/footer/Footer";
import "./App.css";

class App extends Component {
	state = {
		touristInfo: [
			{
				id: 1,
				name: "Glasgow",
				img:
					"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?w968h681",
				url: "peoplemakeglasgow.com"
			},
			{
				id: 2,
				name: "Manchester",
				img:
					"https://www.visitbritain.com/sites/default/files/styles/consumer_campaigns_hero_mobile/public/paragraphs_bundles/hero/manchester_town_hall_albert_square_cropped.jpg?itok=l9lSkiKd",
				url: "visitmanchester.com"
			},
			{
				id: 3,
				name: "London",
				img:
					"https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg",
				url: "visitlondon.com"
			}
		],
		address: [
			"123 Fake Street, London, E1 4UD",
			"hello@fakehotel.com",
			"0123 456789"
		]
	};

	render() {
		const { touristInfo, address } = this.state;
		return (
			<div className="App">
				<Heading />
				<TouristInfoCards touristInfo={touristInfo} />
				<Bookings />
				<Restaurant />
				<Footer address={address} />
			</div>
		);
	}
}

export default App;
