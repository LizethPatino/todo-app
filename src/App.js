import './App.css';
import React, { useState } from 'react';
import TodoTitle from './TodoTitle';
import TodoSearch from './TodoSearch';
import TodoListTask from './TodoListTask';
import { TaskProvider } from './TaskContext';


function App() {

  return (
    <TaskProvider>
    <div className="App">
      <h1>Your Tasks</h1>
      <TodoTitle/>
      <TodoSearch/>
      <TodoListTask/> 
    </div>
    </TaskProvider>
  );
}

export default App;
