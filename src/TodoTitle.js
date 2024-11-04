import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function TodoTitle() {
  const { state } = useContext(TaskContext);
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter(task => task.isCompleted).length;
    return (
      <>
         <h3 className='font-bold text-center'>Completed {completedTasks} to {totalTasks}</h3>
      </>
    );
  }
  
export default TodoTitle;