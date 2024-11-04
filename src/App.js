import "./App.css";
import React from "react";
import TodoTitle from "./TodoTitle";
import TodoSearch from "./TodoSearch";
import TodoListTask from "./TodoListTask";
import { TaskProvider } from "./TaskContext";
import TodoAddTask from "./TodoAddTask";

function App() {
  return (
    <TaskProvider>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center">Your Tasks</h1>
        <div className="mb-6">
          <TodoTitle />
        </div>
        <div className="mb-6">
          <TodoSearch />
        </div>
        <div className="mb-6">
          <TodoListTask />
        </div>
      </div>

      <div>
        <TodoAddTask />
      </div>
    </TaskProvider>
  );
}

export default App;
