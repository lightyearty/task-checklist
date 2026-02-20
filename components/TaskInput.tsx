'use client';

import React, { useState, FormEvent } from 'react';

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                className="border rounded p-2 flex-grow"
            />
            <button type="submit" className="bg-blue-500 text-white rounded px-4">
                Add Task
            </button>
        </form>
    );
};

export default TaskInput;