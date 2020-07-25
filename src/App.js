import React, { useState, useEffect } from "react";
import ListMain from "./components/ListMain.js";
import Header from "./components/Header.js";
import CustomSpinner from "./components/CustomSpinner.js";

import "./assests/css/fonts/fonts.css";
import "./styles.css";

export default function App() {
	const [tasksLists, setTasksLists] = useState();
	const [isLoaded, setIsLoaded] = useState(false);

	const API_URL =
		"https://protected-beyond-39550.herokuapp.com/api/tasklists/0/0";

	// const API_URL = "http://localhost:5000/api/tasklists/0/0";

	useEffect(() => {
		console.log("AN UPDATE OCCURED APP.JS");
		setIsLoaded(false);
		fetch(API_URL)
			.then((res) => res.json())
			.then(
				(result) => {
					setTasksLists(result);
					setIsLoaded(true);
				},
				(error) => {
					setTasksLists(error);
					setIsLoaded(true);
				}
			);
	}, []);

	isLoaded && console.log("DATA LOADED DISPLAYING TASKLIST:");
	isLoaded && console.log(tasksLists);

	return (
		<div>
			<Header title="WhatToDo" />
			{isLoaded ? (
				<ListMain taskList={tasksLists} API_URL={API_URL} />
			) : (
				<h1 className="loading-pos">
					<CustomSpinner />
				</h1>
			)}
		</div>
	);
}
