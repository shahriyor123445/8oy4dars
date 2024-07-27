import React from "react";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div className="flex items-center p-4">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
        className="mr-2"
      />
      <span className={`flex-grow ${completed ? "line-through" : ""}`}>
        {text}
      </span>
      <button
        onClick={() => removeTodo(id)}
        className="ml-4 p-2 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
