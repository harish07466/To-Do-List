import { useState, useEffect } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  // Load from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Save automatically whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const CompletedTodos = todos.filter((todo) => todo.done).length;
  const TotalTodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer CompletedTodos={CompletedTodos} TotalTodos={TotalTodos} />
    </div>
  );
}
