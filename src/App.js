import React, { useState } from 'react';
import Task from './ukol';
import TaskForm from './ukol1';
import './css.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm onAdd={addTask} />
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onRemove={() => removeTask(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
