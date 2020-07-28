import React, { useState } from "react";

import "./ListNew.css";
import CustomCheckbox from "./CustomCheckbox.js";

export default function ListNew(props) {
  //Animations
  const [animContainer, setAnimContainer] = useState(
    "list-new-container-anim-show"
  );
  const [animList, setListAnim] = useState("list-new-anim-in");

  //Input control
  //..useState
  //............
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDescription] = useState("");
  const [taskIsTimeSet, setTaskIsTimeSet] = useState(false);
  const [taskTime, setTaskTime] = useState("");

  const closeWindowHandler = (e) => {
    if (taskTitle.length > 0) {
      //Animate
      setAnimContainer("list-new-container-anim-close");
      setListAnim("list-new-anim-out");

      //Give some time to show effect
      setTimeout((e) => {
        const newTask = {
          title: taskTitle,
          description: taskDesc,
          setTime: taskIsTimeSet,
          time: taskTime,
          isDone: false,
        };
        props.addNewTask(newTask);
        props.closeWindow();
      }, 800);
    } else {
      console.log("title is blank");
    }
  };

  return (
    <div className={"list-new-container " + animContainer}>
      <div className={"list-new " + animList}>
        <div className="list-new-btn-cancel-container">
          <button
            className="list-new-btn-cancel"
            onClick={(e) => {
              e.preventDefault();
              setAnimContainer("list-new-container-anim-close");
              setListAnim("list-new-anim-out");

              setTimeout(() => {
                props.closeWindow();
              }, 800);
            }}
          >
            X
          </button>
        </div>

        <h2 className="list-new-title">New Task</h2>
        <label>
          Title <span style={{ color: "#d63031" }}>*</span>
        </label>
        <input
          name="title"
          type="text"
          className="list-new-input"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
        />
        <span className="input-effect" />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description here"
          className="list-new-desc"
          value={taskDesc}
          maxLength={45}
          rows={2}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
        />
        <span className="desc-effect" />

        <label>Set Time</label>
        <CustomCheckbox
          id={"new" + props.newID}
          name="setTime"
          checked={taskIsTimeSet}
          onChange={(e) => {
            setTaskIsTimeSet(e.target.checked);
          }}
        />
        <input
          name="time"
          type="time"
          className="list-new-time"
          disabled={taskIsTimeSet ? false : true}
          value={taskIsTimeSet ? taskTime : ""}
          onChange={(e) => {
            setTaskTime(e.target.value);
          }}
        />

        <button
          className="list-new-btn-done"
          onClick={(e) => {
            e.preventDefault();
            closeWindowHandler(e);
          }}
        >
          DONE
        </button>
      </div>
    </div>
  );
}
