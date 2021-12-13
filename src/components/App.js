import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [filter, setFilter] = useState("All");
  const [detailsInput, setDetails] = useState("");
  const [selectInput, setSelect] = useState("All");
  const [stateTasks, setTasks] = useState([...TASKS])

  function handleFilter(e) {
    setFilter(e.target.id)

  }

  function handleSelect(e) {
    setSelect(e.target.value)
  }

  function handleDetails(e) {
    setDetails(e.target.value)
  }

  function onTaskFormSubmit(e){
    e.preventDefault();
    const newTask = { text: detailsInput, category: selectInput}
    setTasks(stateTasks => [...stateTasks, newTask])    
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filter={filter} handleFilter={handleFilter} categories={CATEGORIES}/>
      <NewTaskForm 
        handleDetails={handleDetails}
        handleSelect={handleSelect}
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}/>
      <TaskList filter={filter} tasks={stateTasks}/>
    </div>
  );
}

export default App;
