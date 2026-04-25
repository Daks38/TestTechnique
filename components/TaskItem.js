"use client";

export default function TaskItem({ task, onToggle, onDelete }) {
  const isCompleted = task.status === "completed";

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg transition hover:border-gray-500">
      <button
        onClick={() => onToggle(task.id)}
        className="flex items-center gap-3 flex-1 text-left"
      >
        <span
          className={`h-5 w-5 rounded-full border flex items-center justify-center transition ${
            isCompleted
              ? "bg-green-500 border-green-500"
              : "border-gray-500"
          }`}
        >
          {isCompleted && <span className="text-xs text-white">✓</span>}
        </span>
        <span
          className={`transition ${
            isCompleted ? "line-through text-gray-500" : "text-gray-100"
          }`}
        >
          {task.text}
        </span>
      </button>

      <button
        onClick={() => onDelete(task.id)}
        className="ml-3 text-red-400 hover:text-red-500 transition text-sm"
      >
        Supprimer
      </button>
    </div>
  );
}
