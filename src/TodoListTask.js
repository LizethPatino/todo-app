import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { TrashIcon } from "@heroicons/react/24/outline";

function TodoListTask() {
  const { state, dispatch } = useContext(TaskContext);

  const handleCheckboxChange = (nameTask) => {
    dispatch({ type: "TOGGLE_TASK", payload: nameTask });
  };

  const handleRemoveTask = (nameTask) => {
    dispatch({ type: "DELETE_TASK", payload: nameTask });
  };

  const tasksToDisplay =
    state.filteredTasks.length > 0 ? state.filteredTasks : state.tasks;

  return (
    <ul>
      {tasksToDisplay.map((task) => (
        <li
          key={task.nameTask}
          className="flex justify-between items-center mb-2 border-b border-gray-300 pb-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleCheckboxChange(task.nameTask)}
              className="mr-2"
            />
            {task.isCompleted ? <del>{task.nameTask}</del> : task.nameTask}
          </div>
          <button onClick={() => handleRemoveTask(task.nameTask)}>
            <TrashIcon className="h-6 w-6 text-red-500" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoListTask;
