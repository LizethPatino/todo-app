import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function TodoListTask() {
  const { state, dispatch } = useContext(TaskContext);

  const handleCheckboxChange = (nameTask) => {
    dispatch({ type: 'TOGGLE_TASK', payload: nameTask });
  };

  const handleRemoveTask = (nameTask) => {
    dispatch({ type: 'DELETE_TASK', payload: nameTask });
  }

  const tasksToDisplay = state.filteredTasks.length > 0 ? state.filteredTasks : state.tasks;

  return (
    <ul>
      {tasksToDisplay.map(task => (
        <li key={task.nameTask}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => handleCheckboxChange(task.nameTask)}
          />
          {task.isCompleted ? <del>{task.nameTask}</del> : task.nameTask}
          <button onClick={() => handleRemoveTask(task.nameTask)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoListTask;
