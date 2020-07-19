const taskDB = [
  {
    user: {
      id: 0,
      name: "Lawrence",
      password: "Lawrence"
    },
    tasklists: [
      {
        id: 0,
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

export default taskDB;
