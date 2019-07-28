import React from "react";
import { List } from "../components/List";
import { Goal } from "../types";
import { GoalActions } from "./../redux/actions/";
import API from "../api";
import { useStore } from "react-redux";

type GoalsProps = {
  api: API;
  goals: Goal[];
};

export default function Goals(props: GoalsProps) {
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
      GoalActions.handleAddGoal(name, props.api, () => {
        inputElement.value = "";
      })
    );
  };

  const removeItem = (item: Goal) => {
    store.dispatch(
      // @ts-ignore
      GoalActions.handleRemoveGoal(item, props.api)
    );
  };

  return (
    <div>
      <h1>Goals List</h1>
      <input
        type="text"
        placeholder="Add Todo"
        ref={input => (inputElement = input!)}
      />
      <button onClick={addItem}>Add Todo</button>
      <List items={props.goals} remove={removeItem} />
    </div>
  );
}
