# HANDLING LOADING ERROR AND READY STATUS

sending type to reducer so wecan displaying conditionally

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        question: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    default:
      throw new Error("Action unknown");
  }
}
```

```jsx
<Main>
  {status === "loading" && <Loader />}
  {status === "error" && <Error />}
  {status === "ready" && (
    <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
  )}
  {status === "active" && <Questions />}
</Main>
```

[Next: Staring new quiz](./07-staring-new-quiz.md)
