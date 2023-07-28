import React, { useState } from "react";

export const TodoForm = () => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val)
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo..."
        className="todo-input"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
};
