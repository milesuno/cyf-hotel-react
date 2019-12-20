import React, { Component } from "react";
import "./TouristInfoCards.css";
class TouristInfoCards extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log("TouristInfoCard Prop", this.props);
		const { touristInfo } = this.props;
		return (
			<section className="tourist-info-card-wrapper container">
				{touristInfo.map(location => {
					const { id, name, img, url } = location;
					return (
						<div className="card" key={id}>
							<h4>{name}</h4>
							<img src={img} className="card-img-top" />
							<div className="card-body">
								<a href={url} className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					);
				})}
			</section>
		);
	}
}

export default TouristInfoCards;
