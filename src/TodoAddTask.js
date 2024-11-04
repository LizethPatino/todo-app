import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';
import { PlusCircleIcon } from '@heroicons/react/24/outline'

function TodoAddTask() {
  const { dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button type="submit"><PlusCircleIcon className="size-6 text-emerald-500"/></button>
    </form>
  );
}

export default TodoAddTask;
