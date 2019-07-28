import React from "react";
import { Todo, Goal } from "../types";

type ListProps = {
  items: Array<Todo | Goal>;
  remove: (item: any) => void;
  toggle?: (item: any) => void;
};

export function List(props: ListProps) {
  return (
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.id}>
            <span
              onClick={() => {
                if (props.toggle) {
                  props.toggle(item);
                }
              }}
              style={{ textDecoration: item.complete ? "line-through" : "" }}
            >
              {item.name}
            </span>
            <button onClick={() => props.remove(item)}>X</button>
          </li>
        );
      })}
    </ul>
  );
}
