import './App.css';
import React from 'react';
import TodoTitle from './TodoTitle';
import TodoSearch from './TodoSearch';
import TodoListTask from './TodoListTask';
import { TaskProvider } from './TaskContext';
import TodoAddTask from './TodoAddTask';


function App() {

  return (
    <TaskProvider>
      <div className="App">
          <h1>Your Tasks</h1>
          <TodoTitle/>
          <TodoSearch/>
          <TodoListTask/> 
          <TodoAddTask/>
      </div>
    </TaskProvider>
  );
}

export default App;
