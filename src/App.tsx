import React from "react";
import useTodos from "./hooks/useTodos";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.css";

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-3xl bg-customBg p-6 rounded-lg shadow-md">
        <AddTodo addTodo={addTodo} />
        <h2 className="text-xl font-semibold my-4 text-white">
          Tasks to do - {incompleteTodos.length}
        </h2>
        <TodoList
          todos={incompleteTodos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold my-4 text-white">
            Done - {completedTodos.length}
          </h2>
          <TodoList
            todos={completedTodos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
