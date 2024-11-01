import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function TodoListTask() {
  const { state, dispatch } = useContext(TaskContext);

  const handleCheckboxChange = (nameTask) => {
    // Despachar la acción para alternar la tarea
    dispatch({ type: 'TOGGLE_TASK', payload: nameTask });
  };

  // Usa filteredTasks si hay tareas filtradas, de lo contrario usa todas las tareas
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
          <span> icono de cerrar</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoListTask;
