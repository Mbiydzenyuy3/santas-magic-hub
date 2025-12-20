"use client";

import { useState } from "react";
import OrnamentTask from "./OrnamentTask";
import { initialTasks, HolidayTask } from "@/lib/holidayTasks";
import RealSnowfall from "./Snow";

export default function HolidayTodo() {
  const [tasks, setTasks] = useState<HolidayTask[]>(initialTasks);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className='max-w-xl mx-auto text-center'>
      <div className='flex gap-2 mb-6'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add a holiday task...'
          className='flex-1 p-3 rounded-lg border border-gray-200 text-gray-200'
        />
        <button
          onClick={addTask}
          className='px-4 bg-green-800 text-white rounded-lg'
        >
          Add A Task
        </button>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        {tasks.map((task) => (
          <OrnamentTask
            key={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
