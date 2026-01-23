# MANAGING STATE WITH USEREDUCER

## Why using useReducer

**STATE MANAGEMENT WITH useState IS NOT ENOUGH IN CERTAIN SITUATIONS**

1. When components have a lot of state variables and state updates, spread across many event handlers all over the component
2. When multiple state updates need to happen at the same time (as a reaction to the same event, like “starting a game”)
3. When updating one piece of state depends on one or multiple other pieces of state

IN ALL THESE SITUATIONS, useReducer CAN BE OF GREAT HELP.

- An alternative way of setting state, ideal for complex state and related pieces of state
- Stores related pieces of state in a state object
- useReducer needs reducer: function containing all logic to update state. Decouples state logic from component
- reducer: pure function (no side effects!) that takes current state and action, and returns the next state
- action: object that describes how to update state
- dispatch: function to trigger state updates, by “sending” actions from event handlers to the reducer

![usReducer analogy](/src/assets/useReducer-analogy.png)

[Next: The react quiz app](./04-the-react-quiz-app.md)
