import React, { useState } from "react";

import "./CustomCheckbox.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function CustomCheckBox(props) {
  return (
    <div style={props.style} className={"checkbox-container"}>
      <input
        className={"checkbox " + props.className}
        name={props.name}
        type="checkbox"
        checked={props.checked}
        id={props.id}
        onChange={e => {
          props.onChange(e);
        }}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
