import { atom } from "recoil";

const AuthPagesCoverState = atom({
  key: "AuthPagesCoverState",
  default: 1,
});

const TodoItem = atom({
  key: "TodoItem",
  default: "",
});

const TodoItemsList = atom<string[]>({
  key: "TodoItemsList",
  default: [],
});

export { AuthPagesCoverState, TodoItem, TodoItemsList };
