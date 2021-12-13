import React from "react";

function CategoryFilter({filter, handleFilter, categories}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button key={category} className={filter === category ? "selected" : null} id={category} onClick={handleFilter}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
