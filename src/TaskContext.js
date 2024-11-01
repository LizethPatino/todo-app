import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const initialState = {
  tasks: [
    { nameTask: 'Sacar a mi perrito al baño', isCompleted: true },
    { nameTask: 'Tender Cama', isCompleted: true },
    { nameTask: 'Vestirme', isCompleted: false },
    { nameTask: 'Hacer dibujo', isCompleted: false },
    { nameTask: 'Hacer ejercicio', isCompleted: true },
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

      // Si hay tareas filtradas, también actualiza filteredTasks
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
      case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.nameTask !== action.payload),
        filteredTasks: state.filteredTasks.filter(task => task.nameTask !== action.payload),
      };  
    case 'RESET_FILTER':
      return {
        ...state,
        filteredTasks: [], // Resetea el filtro
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
