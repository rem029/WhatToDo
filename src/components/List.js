import React, { useState, useEffect } from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomCheckBox from "./CustomCheckbox.js";

import "../assests/css/fonts/fonts.css";
import "./List.css";

export default function List(props) {
  const [isEdit, setIsEdit] = useState(true);

  const [taskTitle, setTaskTitle] = useState(props.task.title);
  const [taskDesc, setTaskDesc] = useState(props.task.description);
  const [taskTime, setTaskTime] = useState(props.task.time);
  const [taskDone, setTaskDone] = useState(props.task.isDone);

  const [showComponent, setShowComponent] = useState(false);
  const [listEffect, setListEffect] = useState("list-add");
  const [doneEffect, setDoneEffect] = useState(
    taskDone ? "list-bg-done-show" : ""
  );

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, props.delay);
  });

  

  //****UPDATES ON TASKS HERE
  const UpdateTaskHandler = e => {
    //SETUP UPDATED TASK
    let taskUpdate = {
      id: props.task.id,
      title: taskTitle,
      description: taskDesc,
      setTime: taskTime.length > 0 ? true : false,
      time: taskTime,
      isDone: e.target.checked
    };

    //SEND TO MAIN FOR UPDATE
    props.updateTask(taskUpdate);
  };

  //****DELETION ON TASKS HERE
  const DeleteTaskHandler = task => {
    props.deleteTask(props.task);
  };

  return (
    <div>
      {showComponent && (
        <div className={"list " + listEffect}>
          <div className={"list-bg-done " + doneEffect} />
          <div className="list-col-1">
            <CustomCheckBox
              id={"cb" + props.task.id}
              checked={taskDone}
              onChange={e => {
                setTaskDone(e.target.checked);

                if (e.target.checked) {
                  setDoneEffect("list-bg-done-show");
                } else {
                  setDoneEffect("list-bg-done-close");
                }

                UpdateTaskHandler(e);
              }}
            />
          </div>
          <div className="list-col-2">
            <input
              className={
                doneEffect
                  ? "list-col-2-input" /* Add effects here if DONE */
                  : "list-col-2-input"
              }
              placeholder="Edit Title"
              type="text"
              id={"txt" + props.id}
              disabled={isEdit}
              value={taskTitle}
              onChange={e => {
                setTaskTitle(e.target.value);
              }}
            />
            <span className="input-effect" />
            <input
              type="time"
              className="list-col-2-time"
              value={taskTime}
              disabled={isEdit}
              onChange={e => {
                setTaskTime(e.target.value);
                console.log(taskTime);
              }}
            />
            <textarea
              disabled={isEdit}
              className="list-col-2-desc"
              value={taskDesc}
              placeholder="Short description here..."
              maxLength={45}
              onChange={e => {
                setTaskDesc(e.target.value);
              }}
            />
            <span className="description-effect" />
          </div>

          <div className="list-col-3">
            <button
              className={isEdit ? "btn btn-edit" : "btn btn-done"}
              onClick={e => {
                e.preventDefault();
                //If in Edit Mode and pressed DONE
                if (!isEdit) {
                  UpdateTaskHandler(e);
                }

                setIsEdit(!isEdit);
              }}
            >
              <FontAwesomeIcon className="btn-icon" icon={faEdit} />
              <span className="btn-text">{isEdit ? "EDIT" : "DONE"}</span>
            </button>
            <button
              className="btn btn-delete"
              onClick={e => {
                e.preventDefault();
                setListEffect("list-delete");
                setTimeout(() => {
                  DeleteTaskHandler(props.task);
                }, 200);
              }}
            >
              <FontAwesomeIcon className="btn-icon" icon={faTrash} />
              <span className="btn-text">DELETE</span>
            </button>
          </div>
        </div>
      )}

      {/* <div className="list-bottom-border"> </div> */}
    </div>
  );
}
