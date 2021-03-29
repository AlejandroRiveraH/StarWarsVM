import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Cardplanetdetails(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div>
			<div className="card text-center border-0 mt-5" style={{ width: "1040px" }}>
				<div className="row no-gutters">
					<div className="col-md-6">
						<img
							src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2019/11/jedy_kashyyyk.jpg?resize=768%2C432&ssl=1"
							width="500"
							height="300"
							alt="Star Wars Planet Image"
						/>
					</div>
					<div className="col-md-6">
						<div className="card-body">
							<h5 className="card-title">{props.name}</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
			<table className="table mt-3">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Climate</th>
						<th scope="col">Population</th>
						<th scope="col">Orbital Period</th>
						<th scope="col">Rotation Period</th>
						<th scope="col">Diameter</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.name}</td>
						<td>{props.climate}</td>
						<td>{props.population}</td>
						<td>{props.orbital_period}</td>
						<td>{props.rotation_period}</td>
						<td>{props.diameter}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

Cardplanetdetails.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	population: PropTypes.number,
	orbital_period: PropTypes.number,
	rotation_period: PropTypes.number,
	diameter: PropTypes.meter,
	img: PropTypes.string,
	id: PropTypes.number
};
