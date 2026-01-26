# SECTION SUMMARY = USESTATE VS USEREDUCER

### useState

- ideal for single, independent pieces of state (numbers, string, single arrays, etc)
- logic to update state is placed directly in event handlers or efects, spread all over on multiple components
- state is updated by calling seState
- imperative state update
- easy to understand and implemet

### useRender

- ideal for multiaple related pieces of state and complex state (eg object with many values and nested objects or arrays)
- logic to update state lives in one central place, decoupled from components thr reducer
- state is updatedbyd dispatching an action to a reducer
- Desclaraive state updates: complex state trasitions are mapped to actions
- more dificulty to understand and implement
