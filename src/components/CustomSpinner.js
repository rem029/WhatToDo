import React, { useState, useEffect } from "react";
import "./CustomSpinner.css";

export default function CustomSpinner(props) {
  const [msgDisplay, setMsgDisplay] = useState("");

  useEffect(() => {
    setMsgDisplay("Please wait...");

    setTimeout(() => {
      setMsgDisplay("Retrieving from space...");
    }, 1000);

    setTimeout(() => {
      setMsgDisplay("Nearly there...");
    }, 1000);

    setTimeout(() => {
      setMsgDisplay("Hold on...");
    }, 1000);
  }, []);

  return (
    <div>
      <div className="spinner"></div>
      <h2 className="loading-msg">{msgDisplay}</h2>
    </div>
  );
}
