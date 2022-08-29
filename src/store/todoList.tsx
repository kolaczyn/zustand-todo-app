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
  setTopTodo: (value: number | "None") => void;
  toggleTopTodo: (value: number) => void;
};

export const useTodoListStore = create<TodoListState>((set) => ({
  todos: [],
  topTodoId: "None",
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  setTopTodo: (value) => set(() => ({ topTodoId: value })),
  toggleTopTodo: (value) =>
    set((state) => {
      if (state.topTodoId === "None") {
        return { topTodoId: value };
      }
      return {
        topTodoId: value === state.topTodoId ? "None" : value,
      };
    }),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
