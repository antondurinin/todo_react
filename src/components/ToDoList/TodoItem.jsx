import { ButtonDelete, ButtonStartStop } from "./JoinButton";

export function TodoItem(params) {
  return (
    <li>
      <div>
        <ButtonStartStop />
        <ButtonDelete /> {params.name} {params.estimateMin} min
      </div>
    </li>
  );
}

// CRUD Create Read Update Delete
