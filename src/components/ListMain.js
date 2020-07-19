import React, { useState } from "react";

import "../assests/css/fonts/fonts.css";
import "./ListMain.css";

import List from "./List";
import ListNew from "./ListNew";

export default function ListMain(props) {
  const [tasks, setTasks] = useState(props.taskList.tasks);

  const [isLoading, setIsLoading] = useState(false);
  const [addNew, setAddNew] = useState(false);
  //Add new task
  const CreateNewTask = task => {
    setIsLoading(true);
    let copyTasks = tasks;
    copyTasks.concat(task);

    setTasks(tasks.concat(task));
    props.syncListbyTLID(props.taskList.id, copyTasks);

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };
  //Update task
  const UpdateTask = taskUpdated => {
    setIsLoading(true);

    //Copy array to temporary
    let copyTasks = tasks;
    //Update temporary array
    copyTasks[taskUpdated.id] = taskUpdated;

    setTasks(copyTasks);
    props.syncListbyTLID(props.taskList.id, copyTasks);

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };
  //Delete task
  const DeleteTask = task => {
    setIsLoading(true);

    //Copy to array to temporary
    let copyTasks = tasks.filter(arr => arr.id !== task.id);

    setTasks(copyTasks);
    props.syncListbyTLID(props.taskList.id, copyTasks);

    setIsLoading(false);
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
      <div className={isLoading ? "list-all list-all-disabled" : "list-all"}>
        <div className="list-all-title">
          <h2 className="title">{props.taskList.title}</h2>
        </div>
        {tasks.map((task, index) => {
          return (
            <List
              id={task.id}
              key={task.id}
              task={task}
              deleteTask={DeleteTask}
              updateTask={UpdateTask}
              testFunc={props.tempFunc}
              delay={index * 50}
            />
          );
        })}
        <div className="list-all-add-task">
          <button
            onClick={e => {
              e.preventDefault();
              setAddNew(true);
            }}
          >
            + ADD TASK
          </button>
        </div>
      </div>
    </div>
  );
}
