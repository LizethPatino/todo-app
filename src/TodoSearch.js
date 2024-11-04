import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

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
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={handleSearch}
        className="pl-10 pr-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
  );
}

export default TodoSearch;
