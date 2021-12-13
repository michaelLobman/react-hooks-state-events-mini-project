import React from "react";
import Task from "./Task"


function TaskList({filter, tasks}) {

  const filteredTasks = tasks.filter(task => {
    if (filter === "All") {
      return true;
    } else {
      return task.category === filter
    }
  })

  debugger;

  let i=-1;

  return (
    <div className="tasks">
      {filteredTasks.map(task => {
        ++i
        return <Task key={i} text={task.text} category={task.category}/>
      })}
    </div>
  );
}

export default TaskList;
