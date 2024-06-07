import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <center><h1>Jeevat@KASHI Student's </h1><h1>To-Do List App</h1><hr></hr></center>
      <h3>What is To-Do List?</h3>
      <p>The main purpose of a to do list is to provide yourself with a list of your priorities in order to ensure that you don't forget anything and are able to effectively plan out your tasks so that they are all accomplished.</p>
      <h3>Benefits of the app</h3>
      <ul>
        <li>Increases productivity</li>
        <li>Improves memory</li>
        <li>Reduces stress</li>
        <li>Allows to make some personal time</li>
       <li> Sets deadlines for each goal.</li>
        </ul>
      <h3>How does in work?</h3>
     <ol> <li>Users give input as tasks</li>
     <li>JavaScript adds the task to the list</li>
     <li>Users can mark the task as completed by clicking on it.</li>
     <li>Users can delete tasks by clicking on the delete button.</li>
     <li>JavaScript removes the task from the list</li> </ol>
     <p>DEVELOPED BY: Ira</p>
      <center><div className="input-container"><hr></hr>
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={handleTaskInput}
        />
        <button onClick={addTask}>Add a task to your list</button>
        <h2>Do not forget to do!</h2>
        <hr></hr>
      </div></center>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
    </div>
  );
}

export default App;
