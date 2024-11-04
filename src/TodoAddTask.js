import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

function TodoAddTask() {
  const { dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };

  return (
    <>
      <h2 className="text-lg text-center font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleAddTask}>
        <input
          className="py-2 px-4 border border-gray-300 rounded-md"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="new Task"
        />
        <button className="bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 font-bold rounded" type="submit">Create</button>
      </form>
    </>
  );
}

export default TodoAddTask;
