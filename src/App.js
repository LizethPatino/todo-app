import "./App.css";
import React, { useState } from "react";
import TodoTitle from "./components/TodoTitle";
import TodoSearch from "./components/TodoSearch";
import TodoListTask from "./components/TodoListTask";
import { TaskProvider } from "./context/TaskContext";
import TodoModal from "./components/TodoModal";
import TodoAddTask from "./components/TodoAddTask";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <TaskProvider>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md p-10">
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
        <button className="absolute bottom-4 right-4" onClick={toggleModal}>
          <PlusCircleIcon className="w-14 h-14 text-violet-500 hover:text-violet-700" />
        </button>
      </div>
      <TodoModal isOpen={isModalOpen} toggleModal={toggleModal}>
        <TodoAddTask />
      </TodoModal>
    </TaskProvider>
  );
}

export default App;
