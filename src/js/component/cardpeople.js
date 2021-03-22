import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function Cardpeople(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	const handleOnClick = e => {
		actions.addFavorites();
	};

	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://www.telokwento.com/wp-content/uploads/2020/04/starwaars.jpg"
					alt="Star Wars Image"
				/>
				<div className="card-body">
					<h5 className="card-title text-xl-left">Name: {props.name}</h5>
					<p className="card-text text-lg-left">Gender: {props.gender}</p>
					<p className="card-text text-lg-left">Hair Color: {props.hair_color}</p>
					<p className="card-text text-lg-left">Eyes Color: {props.eye_color}</p>
					<a href="#" className="btn btn-primary mr-5">
						Learn More!
					</a>
					<a href="#" className="btn btn-warning ml-3" onClick={e => handleOnClick(e)}>
						<i className="fas fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
}

Cardpeople.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	img: PropTypes.string
};
