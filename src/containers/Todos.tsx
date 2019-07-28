import React from "react";
import { List } from "../components/List";
import { TodoActions } from "../redux/actions";
import { Todo } from "../types";
import API from "../api";
import { useStore } from "react-redux";

type TodosProp = {
  api: API;
  todos: Todo[];
};

export default function Todos(props: TodosProp) {
  let inputElement = {} as HTMLInputElement;
  const store = useStore();

  const addItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const name = inputElement.value;
    if (name === "") {
      return;
    }
    store.dispatch(
      // @ts-ignore
      TodoActions.handleSaveTodo(name, props.api, () => {
        inputElement.value = "";
      })
    );
  };

  const removeItem = (item: Todo) => {
    store.dispatch(
      // @ts-ignore
      TodoActions.handleDeleteTodo(item, props.api)
    );
  };

  const toggleItem = (item: Todo) => {
    store.dispatch(
      // @ts-ignore
      TodoActions.handleToggleTodo(item, props.api)
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add Todo"
        ref={input => (inputElement = input!)}
      />
      <button onClick={addItem}>Add Todo</button>

      <List items={props.todos} remove={removeItem} toggle={toggleItem} />
    </div>
  );
}
