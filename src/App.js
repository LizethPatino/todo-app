import './App.css';
import React, { useState } from 'react';
import TodoTitle from './TodoTitle';
import TodoSearch from './TodoSearch';
import TodoListTask from './TodoListTask';


function App() {
  
  const listTasksUser = [
    { nameTask: 'Tarea 1', isCompleted: true },
    { nameTask: 'Tarea 2', isCompleted: true },
    { nameTask: 'Tarea 3', isCompleted: false },
    { nameTask: 'Tarea 4', isCompleted: false },
    { nameTask: 'Tarea 5', isCompleted: true },
  ];

  const [listTasks, setListTasks] = useState(listTasksUser);

  const [filteredTasks, setfilteredTasks] = useState(listTasksUser);
  
  const countTotalTasks = () => {
    return listTasks.length;
  }

  const countTotalTasksCompleted = () => {
     const completedTasks = listTasks.filter(task => task.isCompleted);
     return completedTasks.length;
  }

  const handleSearchResults = (tasks) =>{
    setfilteredTasks(tasks);
  }

  const handleCompleteTasks = (tasks) =>{
    setListTasks(tasks);
    setfilteredTasks(tasks);
  }

  return (
    <div className="App">
      <h1>Your Tasks</h1>
      <TodoTitle totalTasks={countTotalTasks()} completedTasks={countTotalTasksCompleted()}/>
      <TodoSearch listTasks={listTasks} onSearchResults={handleSearchResults}/>
      <TodoListTask listTasks={filteredTasks} onCompleteTasks={handleCompleteTasks}/> 
    </div>
  );
}

export default App;
