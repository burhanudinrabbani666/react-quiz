# MANAGING RELATED PIECES OF STATE

this make not alot using useState. more clean.

```jsx
const initalState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };

    case "inc":
      return { ...state, count: state.count + state.step };

    case "setCount":
      return { ...state, count: action.payload };

    case "setStep":
      return { ...state, step: action.payload };

    case "reset":
      return initalState;

    default:
      throw new Error("Uknown action");
  }
}

// ----------------------------------------------------------------

const [state, dispatch] = useReducer(reducer, initalState);
const { count, step } = state;

// This mutates the date object.
const date = new Date("june 21 2027");
date.setDate(date.getDate() + count);

const dec = function () {
  dispatch({ type: "dec" });
};

const inc = function () {
  dispatch({ type: "inc" });
};

const defineCount = function (event) {
  dispatch({ type: "setCount", payload: Number(event.target.value) });
};

const defineStep = function (event) {
  dispatch({ type: "setStep", payload: Number(event.target.value) });
};

const reset = function () {
  dispatch({ type: "reset" });
};
```

[Next: Managing state with useReducer](./03-managing-state-with-usereducer.md)
