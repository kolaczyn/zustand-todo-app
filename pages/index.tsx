import type { NextPage } from "next";

import Link from "next/link";
import { useRef } from "react";
import { useTodoListStore } from "../src/store/todoList";

const Todos = () => {
  const todos = useTodoListStore((state) => state.todos);
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.message}</li>
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
