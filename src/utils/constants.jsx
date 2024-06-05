import { v4 as uuidv4 } from "uuid";

export const INITIAL_TODOS = [
  {
    name: "TODO CRUD Create Read Update Delete",
    estimateMin: 60,
    id: uuidv4(),
  },
  { name: "Create =  add a new TODO", estimateMin: 60, id: uuidv4() },
  { name: "Read = show the todos 👍", estimateMin: 60, id: uuidv4() },
  {
    name: "Update = modify an existing Todo",
    estimateMin: 60,
    id: uuidv4(),
  },
  { name: "Delete = delete a tod", estimateMin: 60, id: uuidv4() },
  {
    name: "Bonus: filter todos using a search bar",
    estimateMin: 60,
    id: uuidv4(),
  },
];
