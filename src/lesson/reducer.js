import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggleShowText":
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

export default function Reducer() {
  const initState = { count: 0, showText: true };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      {state.count}{" "}
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText"});
        }}
      >
        Increment
      </button>
      <h1>{state.showText ? 'Show text' : null}</h1>
    </div>
  );
}
