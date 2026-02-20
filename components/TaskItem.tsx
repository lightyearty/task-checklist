'use client';

import React from 'react';

interface TaskItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 p-2 border-b border-gray-300">
      <label className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <span className={`px-3 py-1 rounded bg-pink-400 text-white break-words ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-white hover:text-gray-200 self-start sm:self-auto"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;