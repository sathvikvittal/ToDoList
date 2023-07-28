import React, { useState } from "react";

export const EditTodoForm = ({editTodo,task}) => {
  const [val, setVal] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(val,task.id)

    setVal("")
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Updated task here..."
        className="todo-input"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
