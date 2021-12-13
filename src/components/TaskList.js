import React from "react";
import Task from "./Task"


function TaskList({filter, tasks}) {

  // const filteredTasks = tasks.filter(task => {
  //   if (filter === "All") {
  //     return true;
  //   } else {
  //     return task.category === filter
  //   }
  // })

  let i=-1;

  const renderTasks =  tasks.map(task => {
    ++i
    return <Task key={i} text={task.text} category={task.category}/>
  });

  return (
    <div className="tasks">
     {renderTasks}
    </div>
  );
}

export default TaskList;
