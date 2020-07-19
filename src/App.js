import React, { useState, useEffect } from "react";
import ListMain from "./components/ListMain.js";
import Header from "./components/Header.js";

import "./assests/css/fonts/fonts.css";
import "./styles.css";

import taskDB from "./temp/taskDB.js";

export default function App() {
  const [userDB, setUserDB] = useState(taskDB);

  //UPDATED TASKS BY TASKLIST ID MANAGED HERE
  const SyncTasksbyTLID = (taskListID, tasksUpdated) => {
    let copyUserDB = userDB;
    copyUserDB[0].tasklists[taskListID].tasks = tasksUpdated;
    setUserDB(copyUserDB);
  };

  return (
    <div>
      <Header title="WhatToDo" />
      <ListMain
        taskList={userDB[0].tasklists[0]}
        syncListbyTLID={SyncTasksbyTLID}
      />
    </div>
  );
}
