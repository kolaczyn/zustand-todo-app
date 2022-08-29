import type { NextPage } from "next";

import Link from "next/link";
import { useRef } from "react";
import { useTodoListStore } from "../src/store/todoList";

const Todos = () => {
  const todos = useTodoListStore((state) => state.todos);
  const toggleTopTodo = useTodoListStore((state) => state.toggleTopTodo);
  const topTodoId = useTodoListStore((state) => state.topTodoId);
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.message}</span>
          <button onClick={() => toggleTopTodo(todo.id)}>clicky</button>
          {topTodoId === todo.id && <span>👈 Top todo</span>}
        </li>
      ))}
    </ol>
  );
};

const Home: NextPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useTodoListStore((state) => state.addTodo);
  const handleAddTodo = () => {
    addTodo({
      id: Math.random(),
      message: ref.current?.value ?? "[empty message]",
    });
  };
  return (
    <div>
      <Link href="/example">
        <a>Example</a>
      </Link>
      <Todos />
      <input ref={ref} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Home;
