import React from 'react';

const Task = ({ task, onRemove }) => {
  return (
    <div className="task1">
      <span>{task}</span>
      <button  onClick={onRemove}>Odstranit</button>
    </div>
  );
};

export default Task;
