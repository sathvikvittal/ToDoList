import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(val)

    setVal("")
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo..."
        className="todo-input"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
