import create from "zustand";

type Todo = {
  message: string;
  id: number;
};

type TodoListState = {
  todos: Todo[];
  topTodoId: number | "None";
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  changeTopTodo: (value: number | "None") => void;
};

export const useTodoListStore = create<TodoListState>((set) => ({
  todos: [],
  topTodoId: "None",
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  changeTopTodo: (value) => set((state) => ({ topTodoId: value })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
