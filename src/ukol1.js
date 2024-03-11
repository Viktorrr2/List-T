import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="task-form">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Přidat</button>
    </div>
  );
};

export default TaskForm;
