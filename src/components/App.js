import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS)
  
  function handleFilter(e) {
    setFilter(e.target.id)

  }

  function handleAddTask(newTask){
    setTasks([...tasks, newTask])    
  }

  const visibleTasks = tasks.filter(task => category === "All" || task.category === category)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        setCategory={setCategory} 
        selectedCategory={category} 
        categories={CATEGORIES}/>
      <NewTaskForm 
        onTaskFormSubmit={handleAddTask}
        categories={CATEGORIES}/>
      <TaskList category={category} tasks={visibleTasks}/>
    </div>
  );
}

export default App;
