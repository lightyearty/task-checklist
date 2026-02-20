'use client';

import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = (task: string) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-4 rounded-lg w-full max-w-md">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">Home Groceries</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}