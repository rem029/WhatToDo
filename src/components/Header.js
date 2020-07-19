import React from "react";

import "../assests/css/fonts/fonts.css";
import "./Header.css";

export default function Header(props) {
  return <div className="header">{props.title}</div>;
}
