import { useState } from "react";

//<JoinButton name = "Stop"/>
export function ButtonStartStop(params) {
  const [started, setStarted] = useState(false);
  //   const [startStop, initStartStop] = useState(false)
  // if (params.name = "Start")
  function handleStartTimer() {
    // TODO
  }

  return (
    <button
      onClick={() => {
        setStarted(!started);
        handleStartTimer();
      }}
    >
      {started ? "Stop" : "Start"}
    </button>
  );
}

export function ButtonDelete(params) {
  function deleteTodo() {
    // TODO
  }

  return (
    <button
      onClick={() => {
        deleteTodo();
      }}
    >
      Delete
    </button>
  );
}
