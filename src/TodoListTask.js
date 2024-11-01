function TodoListTask({ listTasks, onCompleteTasks }) {
  
  const handleCheckboxChange = (nameTask) => {
    onCompleteTasks(
      listTasks.map((task) =>
        task.nameTask === nameTask
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  return (
    <ul>
      {listTasks.map((task) => (
        <li key={task.nameTask}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => handleCheckboxChange(task.nameTask)}
          />
          {task.isCompleted ? <del>{task.nameTask}</del> : task.nameTask}
          <span> icono de cerrar</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoListTask;