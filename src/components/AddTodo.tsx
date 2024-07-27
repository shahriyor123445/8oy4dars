import React, { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded  bg-gray-700"
        placeholder="Add a new todo"
      />
      <button type="submit" className="ml-4 p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
