# USEREDUCER

**Parameters**

- reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
- optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).

```jsx
function reducer(state, action) {
  console.log(state, action);
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
}

const [count, dispatch] = useReducer(reducer, 0);

const dec = function () {
  dispatch({ type: "dec" });
};
```

[Next: Managing realted pieces of state](./02-managing-realted-pieces-of-state.md)
