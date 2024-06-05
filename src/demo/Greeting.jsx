import { useState } from "react";
import { HatedMeal, LovelyMeal } from "./Lovely";

function calculateCount12New(count) {
  return count === 1 ? 2 : 1;
}

function Greeting() {
  const something = false;
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState([
    { name: "Do the dishes!", estimateMin: 15 },
    { name: "Do the laundry!", estimateMin: 45 },
  ]);

  if (something) {
    return null;
  }

  const handleClick = (clickEvent) => {
    console.log("🚀 ~ handleClick ~ clickEvent:", clickEvent);
    setCount(count + 1);
  };
  //   const handleClick = () => setCount((count) => (count === 1 ? 2 : 1));
  return (
    <>
      <div>
        <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
        <div>
          <button
            // onClick={handleClick}
            // onClick={() => setCount(calculateCount12New(count))}
            // onClick={() => setCount((prev) => setCount12New(prev))} // callback fn form
            onClick={() => {
              const nextCount = calculateCount12New(count);
              setCount(nextCount);
            }} // callback fn form
          >
            I hate:{" "}
            <HatedMeal
              count={count}
              emoji={"🤣"}
              //   {...{ count: 1, emoji: "bla" }}
            />
            ! I love: <LovelyMeal count={count} />!
            <MyComponent setCount={setCount} />
          </button>
        </div>
        {todos.map((todo) => (
          <TodoItem name={todo.name} estimateMin={todo.estimateMin} />
        ))}
      </div>
    </>
  );
}

export default Greeting;

function TodoItem({ name, estimateMin }) {
  return (
    <div>
      <button>poop</button>
      {name}: {estimateMin} minutes
    </div>
  );
}

// "hook" in react
// 1. starts with "use"
// 2. can only call it before the return statement
// 3. cannot call it conditionally (inside if)

function MyComponent({ setCount }) {
  //   setCount((prevCount) => prevCount - 1);
  return null;
}
