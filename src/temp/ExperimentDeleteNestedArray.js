//ARRAY SETUP

let taskDB = [
  {
    user: {
      id: 0,
      name: "Lawrence",
      password: "Lawrence"
    },
    tasklist: [
      {
        title: "Day 1",
        tasks: [
          {
            id: 0,
            title: "Wake Up",
            description: "",
            setTime: true,
            time: new Date().getHours() + ":" + new Date().getMinutes(),
            isDone: false
          },
          {
            id: 1,
            title: "Design",
            description: "Lorem isposum Lorem isposum Lorem isposum ",
            setTime: false,
            time: new Date().getHours() + ":" + new Date().getMinutes(),
            isDone: true
          },
          {
            id: 2,
            title: "Develop",
            description:
              "Lorem isposum Lorem isposum Lorem isposum Lorem isposum ",
            setTime: false,
            time: new Date().getHours() + ":" + new Date().getMinutes(),
            isDone: true
          },
          {
            id: 3,
            title: "Repeat",
            description: "",
            setTime: true,
            time: new Date().getHours() + ":" + new Date().getMinutes(),
            isDone: false
          }
        ]
      }
    ]
  }
];

console.log("***taskDB***");
console.log(taskDB);
console.log("***tasklist***");
console.log(taskDB[0].tasklist[0]);

//STEP 1
//ARRAY TASK TO BE DELETED

let deleteTask = {
  id: 3,
  title: "Repeat",
  description: "",
  setTime: true,
  time: new Date().getHours() + ":" + new Date().getMinutes(),
  isDone: false
};

console.log("***deleteTask***");
console.log(deleteTask);

//STEP 2
//COPY INNER ARRAY TO TEMPORARY
let tmpTasks = taskDB[0].tasklist[0].tasks;

console.log("***deleteTask AFTER DELETING TASKS***");

//STEP 3
//DELETE INNER ARRAY TO TEMPORARY
tmpTasks = tmpTasks.filter(arr => arr.id !== deleteTask.id);

//STEP FINAL
//COPY TEMP ARRAY TO MAIN ARRAY
taskDB[0].tasklist[0].tasks = tmpTasks;

console.log("***NEW taskDB***");
console.log(taskDB);
console.log("***NEW tasklist***");
console.log(taskDB[0].tasklist[0]);
