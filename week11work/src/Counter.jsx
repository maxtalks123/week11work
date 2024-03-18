import { useReducer } from "react";

export function Counter() {
  function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        throw new Error(`unhandled action type: ${action.type}`);
    }
  }
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
