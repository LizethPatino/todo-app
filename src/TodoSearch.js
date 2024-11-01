import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

function TodoSearch() {
  const { state, dispatch } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      dispatch({ type: 'RESET_FILTER' });
    } else {
      const filteredTasks = state.tasks.filter(task =>
        task.nameTask.toLowerCase().includes(value.toLowerCase())
      );
      dispatch({ type: 'FILTER_TASKS', payload: filteredTasks });
    }
  };

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder='Search'
      onChange={handleSearch}
    />
  );
}

export default TodoSearch;
