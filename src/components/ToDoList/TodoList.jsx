import { INITIAL_TODOS } from "../../utils/constants";
import { loadTodoFromStorage } from "../../state";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

// function useTodos() {
//   const [todos, setTodos] = useState(() => loadTodoFromStorage());
//   return [todos, setTodos];
// }

function ToDoList() {
  const [todos, setTodos] = useState(() => loadTodoFromStorage());
  // const [todos, setTodos] = useTodos();
  return (
    <div>
      <h1>Todo list: </h1>
      <TodoTable todos={todos} />
    </div>
  );
}

function TodoTable({ todos }) {
  return (
    <>
      {!todos ? (
        <div>Loading...</div>
      ) : todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              name={todo.name}
              estimateMin={todo.estimateMin}
            />
          ))}
        </ul>
      ) : (
        <div>The are no todo in the list!</div>
      )}
    </>
  );
}

export default ToDoList;
