import React, { useState, useEffect } from "react";

import "../assests/css/fonts/fonts.css";
import "./ListMain.css";

import List from "./List";
import ListNew from "./ListNew";
import CustomSpinner from "./CustomSpinner";

export default function ListMain(props) {
  const [tasks, setTasks] = useState(props.taskList.tasks);
  const [isLoaded, setIsLoaded] = useState(true);
  const [addNew, setAddNew] = useState(false);

  const fetchURL =
    "https://protected-beyond-39550.herokuapp.com/api/tasklists/task/0/0";

  // const fetchURL = "http://localhost:5000/api/tasklists/task/0/0";

  //Add new task
  const CreateNewTask = (task) => {
    setIsLoaded(false);

    const fetchOption = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: task.title,
        description: task.description,
        setTime: task.setTime,
        time: task.time,
        isDone: task.isDone,
      }),
    };
    fetch(fetchURL, fetchOption)
      .then((res) => res.json())
      .then((result) => {
        setTasks(result.tasks);
      });
    setIsLoaded(true);
  };

  //Update task
  const UpdateTask = (taskUpdated) => {
    setIsLoaded(false);

    const fetchOption = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id: taskUpdated._id,
        title: taskUpdated.title,
        description: taskUpdated.description,
        setTime: taskUpdated.setTime,
        time: taskUpdated.time,
        isDone: taskUpdated.isDone,
      }),
    };
    fetch(fetchURL, fetchOption)
      .then((res) => res.json())
      .then((result) => {
        setTasks(result.tasks);
      });

    setIsLoaded(true);
  };
  //Delete task
  const DeleteTask = (task) => {
    setIsLoaded(false);
    const fetchOption = {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id: task._id,
      }),
    };
    fetch(fetchURL, fetchOption)
      .then((res) => res.json())
      .then((result) => {
        setTasks(result.tasks);
      });
    setIsLoaded(true);
  };

  const CloseAddNew = () => {
    setAddNew(false);
  };

  return (
    <div>
      {addNew && (
        <ListNew
          addNewTask={CreateNewTask}
          closeWindow={CloseAddNew}
          newID={tasks.length + 1}
        />
      )}
      <div className={isLoaded ? "list-all" : "list-all list-all-disabled"}>
        {isLoaded ? (
          <div>
            <div className="list-all-title">
              <h2 className="title">{props.taskList.title}</h2>
            </div>
            {tasks.map((task, index) => {
              return (
                <List
                  id={task._id}
                  key={task._id}
                  task={task}
                  deleteTask={DeleteTask}
                  updateTask={UpdateTask}
                  testFunc={props.tempFunc}
                />
              );
            })}
            <div className="list-all-add-task">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddNew(true);
                }}
              >
                + ADD TASK
              </button>
            </div>
          </div>
        ) : (
          <h2 className="list-all-loading-pos">
            <CustomSpinner />
          </h2>
        )}
      </div>
    </div>
  );
}
