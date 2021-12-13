import React from "react";

// handleDetails, handleSelect, onTaskFormSubmit, categories
function NewTaskForm(props) {
  return (
    <form className="new-task-form" onSubmit={props.onTaskFormSubmit} >
      <label>
        Details
        <input type="text" name="text" placeholder="Enter details here..." onChange={props.handleDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={props.handleSelect}>
          {props.categories.map(category => <option key={category}>{category}</option> )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
