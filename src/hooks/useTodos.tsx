
import { useReducer } from "react";
 interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type ActionType =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number };

const todosReducer = (state: Todo[], action: ActionType): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const useTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const addTodo = (text: string) => dispatch({ type: "ADD_TODO", text });
  const toggleTodo = (id: number) => dispatch({ type: "TOGGLE_TODO", id });
  const removeTodo = (id: number) => dispatch({ type: "REMOVE_TODO", id });

  return { todos, addTodo, toggleTodo, removeTodo };
};

export default useTodos;
