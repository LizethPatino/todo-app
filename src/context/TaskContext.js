import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const initialState = {
  tasks: [
    { nameTask: 'Take my dog out to the bathroom', isCompleted: true },
    { nameTask: 'Make the bed', isCompleted: true },
    { nameTask: 'Get dressed', isCompleted: false },
    { nameTask: 'Draw', isCompleted: false },
    { nameTask: 'Exercise', isCompleted: true },
  ],
  filteredTasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TASK':
      const updatedTasks = state.tasks.map(task =>
        task.nameTask === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
      const updatedFilteredTasks = state.filteredTasks.length > 0
        ? updatedTasks.filter(task =>
            state.filteredTasks.some(filteredTask => filteredTask.nameTask === task.nameTask)
          )
        : [];
      return {
        ...state,
        tasks: updatedTasks,
        filteredTasks: updatedFilteredTasks.length > 0 ? updatedFilteredTasks : [],
      };
    case 'FILTER_TASKS':
      return {
        ...state,
        filteredTasks: action.payload,
      };
      case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { nameTask: action.payload, isCompleted: false }],
      };
      case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.nameTask !== action.payload),
        filteredTasks: state.filteredTasks.filter(task => task.nameTask !== action.payload),
      };  
    case 'RESET_FILTER':
      return {
        ...state,
        filteredTasks: [],
      };
    default:
      return state;
  }
};


export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
