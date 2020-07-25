import React from "react";

import "../assests/css/fonts/fonts.css";
import "./Header.css";

export default function Header(props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
			<p>Made by rem029</p>
		</div>
	);
}
