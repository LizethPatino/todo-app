import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function TodoTitle() {
  const { state } = useContext(TaskContext);
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter(task => task.isCompleted).length;
    return (
      <>
         <h2>Completed {completedTasks} to {totalTasks}</h2>
      </>
    );
  }
  
export default TodoTitle;