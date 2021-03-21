import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "./card";

export const People = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
        <div className="d-flex justify-content-center mt-5">
			<h1>Characters</h1>
			{store.people !== undefined
				? store.people.map((item, index) => {
						return (
							<div key={index}>
								<Card
									image={item.img}
									name={item.name}
									gender={item.gender}
									hair_color={item.hair_color}
									eye_color={item.eye_color}
								/>
							</div>
						);
				  })
				: "loading..."}
		</div>
	);
};