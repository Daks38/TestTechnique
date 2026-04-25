"use client";

import TaskInput from "../../components/TaskInput";
import TaskList from "../../components/TaskList";
import { useTasks } from "../../hooks/hooksTasks";

export default function HomePage() {
  const { tasks, addTask, toggleTask, deleteTask, filter, setFilter } =
    useTasks();

  const filters = [
    { label: "Toutes", value: "all" },
    { label: "En cours", value: "pending" },
    { label: "Terminées", value: "completed" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-400 border border-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Task Manager
          </h1>
        </header>

        <TaskInput onAdd={addTask} />

        <div className="flex items-center gap-2 mt-5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                filter === f.value
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </main>
  );
}
