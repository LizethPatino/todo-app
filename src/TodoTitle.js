function TodoTitle({totalTasks, completedTasks}) {
    return (
      <>
         <h2>Completed {completedTasks} to {totalTasks}</h2>
      </>
    );
  }
  
export default TodoTitle;