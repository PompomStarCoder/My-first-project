import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => toggleCompletion(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Press to Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
